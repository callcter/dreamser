var Maskbox = function(option){
  this.type = option.type;
  this.title = option.title?option.title:null;
  this.content = option.content;
  switch(this.type){
    case 'alert':
      this.alert(this.text);
      break;
    case 'confirm':
      this.confirm(this.text);
      break;
  }
}
Maskbox.prototype = {
  createBox: function(){
    var maskback = document.createElement('div');
    maskback.className = 'mask-back';
    maskback.setAttribute('id','maskBox');
    maskback.style.width = this.getWidth();
    maskback.style.height = this.getHeight();
    document.body.style.overflow = 'hidden';
    maskback.innerHTML = '<div class="mask-box">'+
      '<div class="mask-title">'+this.title+'</div>'+
      '<div class="mask-content">'+this.content+'</div>'+
      '<div class="mask-btns">'+
        '<button class="mask-btn">确认</button>'+
        '<button class="mask-btn">取消</button>'+
      '</div>'+
    '</div>';
  },
  alert: function(this.text){
    this.createBox
  },
  confirm: function(){

  },
  getWidth: function(){
    var winWidth = null;
    if (window.innerWidth){
      winWidth = window.innerWidth;
    }else if((document.body) && (document.body.clientWidth)){
      winWidth = document.body.clientWidth;
    }
    return winWidth;
  },
  getHeight: function(){
    var winHeight = null;
    if (window.innerHeight){
      winHeight = window.innerHeight;
    }else if((document.body) && (document.body.clientHeight)){
      winHeight = document.body.clientHeight;
    }
    return winHeight;
  }
}