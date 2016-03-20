$(function () {
	$("#tab1").bind("click",function(){
		if($(this).hasClass("active")){

		}else{
			$(this).addClass("active");
			$("#tab2").removeClass("active");
			$("#form1").show();
			$("#form2").hide();
		}
	});
	$("#tab2").bind("click",function(){
		if($(this).hasClass("active")){

		}else{
			$(this).addClass("active");
			$("#tab1").removeClass("active");
			$("#form2").show();
			$("#form1").hide();
		}
	});
	jQuery.validator.addMethod("validateUsername", function (value, element, params) {
		var username = /^(?![0-9])(?![A-Z])[\w]{6,20}$/;
		return this.optional(element) || (username.test(value));
	}, "用户名由6-20个小写英文字母、数字字符或下划线组成，不能以数字开头");
	jQuery.validator.addMethod("validatePassword", function (value, element, params) {
		var password = /^(?![a-zA-Z]+$)(?![0-9]+$)[a-zA-Z0-9-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]{6,20}$/;
		return this.optional(element) || (password.test(value));
	}, "6-20个英文字母和数字字符组成，可添加特殊字符");
	jQuery.validator.addMethod("validateMobile", function (value, element, params) {
		var length = value.length;
		return this.optional(element) || (length == 11 && /^1[3,5,7,8]\d{9}$/.test(value));
	}, "请正确填写您的手机号码");
	$('#signForm1').validate({
		debug:true,
		rules: {
			loginName: {
				required: true,
				validateUsername: [6, 20],
				remote: {
					url: "/signUp/checkLoginName",     //后台处理程序
					type: "post",               //数据发送方式
					dataType: "json",           //接受数据格式
					data: {                     //要传递的数据
						loginName: function () {
							return $("#loginName").val();
						}
					}
				}
			},
			password: {
				required: true,
				validatePassword: [6, 20]
			},
			confirm_user_pwd: {
				required: true,
				validatePassword: [6, 20],
				equalTo: '#password'
			},
			mobile: {
				required: true,
				validateMobile: [6, 20],
				remote: {
					url: "/signUp/checkMobile",     //后台处理程序
					type: "post",               //数据发送方式
					dataType: "json",           //接受数据格式
					data: {                     //要传递的数据
						mobile: function () {
							previousMoblile = $("#mobile").val();
							return $("#mobile").val();
						}
					}
				}
			},
			smsCode: {
				required: true,
				remote: {
					url: "/signUp/checkSmsCode",     //后台处理程序
					type: "post",               //数据发送方式
					dataType: "json",           //接受数据格式
					data: {//要传递的数据
						mobile:function(){
						  return $('#mobile').val();
						},
						smsCode: function () {
							return $("#smsCode").val();
						}
					}
				}
			},
			checkbox: {
				required: true
			}
		},
		messages: {
			loginName: {
				required: "请输入用户名！",
				validateUsername: "用户名由6-20个小写英文字母、数字字符或下划线组成，不能以数字开头",
				remote: "该用户名已被注册!"
			},
			password: {
				required: "请输入密码！",
				validatePassword: "6-20个英文字母和数字字符组成，可添加特殊字符"
			},
			confirm_user_pwd: {
				required: "请再次输入密码！",
				validatePassword: "6-20个英文字母和数字字符组成，可添加特殊字符",
				equalTo: "您输入的密码不一致"
			},
			mobile: {
				required: "请输入手机号！",
				validateMobile: "请正确填写您的手机号码",
				remote: "该手机号已被注册!"
			},
			smsCode: {
				required: "请输入短信验证码！",
				remote: "短信验证码错误，请重新输入!"
			},
			checkbox: {
				required: "请选择同意家哇云协议！"
			}
		},
		submitHandler: function(form) {
			$('#smBtn1').prop('disabled',true);
			$('#smBtn1').val('提交中...');
			$('#smBtn1').css('background','#ccc');
			form.submit();
		},
		errorPlacement: function (error, element) {
			error.appendTo(element.parent());
		}
	});
	$('#signForm2').validate({
		debug:true,
		rules: {
			linkman: {
				required: true
			},
			phonenum: {
				required: true
			},
			company: {
				required: true
			}
		},
		messages: {
			linkman: {
				required: "请输入联系人姓名！"
			},
			phonenum: {
				required: "请输入联系电话！"
			},
			company: {
				required: "请输入公司名称！"
			}
		},
		submitHandler: function(form) {
			$('#smBtn2').prop('disabled',true);
			$('#smBtn2').val('提交中...');
			$('#smBtn2').css('background','#ccc');
			form.submit();
		},
		errorPlacement: function (error, element) {
			error.appendTo(element.parent());
		}
	});
	var isTime = true;
	$("#getSmsCode").on("click", smsCodeClick);

	$("#mobile").change(function(){
		$("#smsCode").val("");
		clearPreviousValue();
	});
	function clearPreviousValue(){
		if($("#smsCode").data("previousValue")){
			$("#smsCode").data("previousValue").old = null;
		}
	};
	function smsCodeClick() {
		var mobileResult = $('#signForm1').validate().element($("#mobile"));
		if (mobileResult && isTime) {
			getCode($(this), 60);
			var mobile = $("#mobile").val();
			$.getJSON("/signUp/getSmsCode", {mobile: mobile});
		}
	}
	function getCode(a, n) {//a:DOM节点,n:倒数秒数
		isTime = false;
		a.text(n + "s");
		var times = setTimeout(changeTime, 1000);
		function changeTime() {
			if (n > 0) {
				n--;
				a.text(n + "s");
				a.css("background", "#ccc");
				times = setTimeout(changeTime, 1000);
			} else {
				clearTimeout(times);
				a.text("重新获取");
				a.css("background", "#55acef");
				isTime = true;
			}
		}
	}
});