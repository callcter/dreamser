var Ajax = function(config){
	this.url = config.url;
	this.data = config.data;
	this.type = config.type;
	this.xmlHttpRequest = null;
	this.success = config.success;
}

Ajax.prototype = {
	request: function(){
		if(window.ActiveXObject){
			xmlHttpRequest = new ActiveXObject('Miscrosoft.XMLHttp');
		}else if(window.XMLHttpRequest){
			xmlHttpRequest = new XMLHttpRequest();
		}
		if(null!=xmlHttpRequest){
			this.xmlHttpRequest(this.type,"AjaxServlet",true);
			this.xmlHttpRequest.onreadystatechange = this.callback();
			this.xmlHttpRequest.setRequestHeader("Content-type","application/json");
			this.xmlHttpRequest.send(this.data);
		}
	},
	callback: function(){
		if(this.xmlHttpRequest.readyState == 4){
			if(this.xmlHttpRequest.status == 200){
				var result = this.xmlHttpRequest.responseText;
				this.success(result);
			}
		}
	}
}