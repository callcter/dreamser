window.onload = function(){
	$('.recruitment-box .tab').on('click',function(){
		if($(this).hasClass('active')){
			return;
		}else{
			var src = $('.active img').attr('src').split('.');
			var newSrc = src[0].substring(0,(src[0].length-1))+'.'+src[1];
			$('.active img').attr('src',newSrc);
			$('#recruitment'+($('.active').index()+1)).hide();
			$('.active').removeClass('active');
			$(this).addClass('active');
			var src1 = $('.active img').attr('src').split('.');
			var newSrc1 = src1[0]+'1.'+src1[1];
			$('.active img').attr('src',newSrc1);
			$('#recruitment'+($(this).index()+1)).show();
		}
	});
	$('.menu a').on('click',function(){
		var posi = $('#'+$(this).attr('class')).offset().top;
		$('body').animate({
			scrollTop: posi-80
		},1000);
	});
	$('.menu-list li').on('click',function(){
		var posi = $('#'+$(this).attr('class')).offset().top;
		$('body').animate({
			scrollTop: posi-40
		},1000);
	});
	$('.joinus-btn').on('click',function(){
		$('.resume-box').show();
	});
	$('.resume-box .close').on('click',function(){
		$('.resume-box').hide();
	});
	$('.menu-btn').on('click',function(){
		$('.menu-list').toggle('fast');
	});
}