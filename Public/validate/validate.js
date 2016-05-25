var Validate = function(option){
  this.param = option.param;
  this.type = option.type;
  this.success = option.success;
  this.error = option.error;

  switch(this.type){
    case 'integer':
      this.integer(this.param);
      break;
    case 'float':
      this.float(this.param);
      break;
    case 'phonenumber':
      this.phonenumber(this.param);
      break;
  }
}

Validate.prototype = {
  integer: function(param){
  	var reg = /^(\d*)$/;
  	if(reg.test(param)){
  	  this.success();
  	}else{
  	  this.error();
  	}
  },
  float: function(param){
    var reg = /^/d+/./d+$/;
    if(reg.test(param)){
      this.success();
    }else{
      this.error();
    }
  },
  phonenumber: function(param){
  	var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    if(reg.test(param)){
      this.success();
    }else{
      this.error();
    }
  }
}