var Carousel = function(elem,images,config){
	this.images = images;
	this.elem = elem;
	this.count = this.images.length;
	this.index = 0;
	this.speed = config.speed;
	this.btn = config.btn;       //是否显示左右切换按钮
	this.dir = config.dir;       //是否显示索引
	this.frame = 32;
	this.frameSpeed = 1000;
}
Carousel.prototype = {
	constructor: Carousel,
	init: function(){
		var _this = this;
		var div = document.createElement('div');
		div.className = 'carousel';
		var pic = document.createElement('img');
		pic.setAttribute('src',this.images[0].src);
		if(this.btn){
			var prev = document.createElement('div');
			prev.className = 'prev';
			div.appendChild(prev);
			var next = document.createElement('div');
			next.className = 'next';
			div.appendChild(next);
			addEvent(div,'mouseover',function(){
				prev.style.display = 'block';
				next.style.display = 'block';
			});
			addEvent(div,'mouseout',function(){
				prev.style.display = 'none';
				next.style.display = 'none';
			});
			addEvent(prev,'click',function(){
				_this.prev(pic);
			});
			addEvent(next,'click',function(){
				_this.next(pic);
			});
		}
		if(this.dir){
			var ul = document.createElement('ul');
			ul.className = 'index';
			for(var i=0;i<this.count;i++){
				var li = document.createElement('li');
				if(i==0){
					li.className = 'active';
				}
				ul.appendChild(li);
			}
			ul.style.marginLeft = -Math.ceil(this.count*15/2)+'px';
			div.appendChild(ul);
			var lis = ul.getElementsByTagName('li');
			for(var i=0;i<this.count;i++){
				lis[i].index = i;
				addEvent(lis[i],'click',function(){
					_this.indexClick(pic,this.index);
				});
			}
		}
		div.appendChild(pic);
		this.elem.appendChild(div);
		this.runC(pic);
	},
	prev: function(pic){
		this.index--;
		if(this.index==-1){
			this.index = this.count-1;
		}
		pic.setAttribute('src',this.images[this.index].src);
		this.active(pic.parentNode);
	},
	next: function(pic){
		this.index++;
		if(this.index==this.count){
			this.index = 0;
		}
		pic.setAttribute('src',this.images[this.index].src);
		this.active(pic.parentNode);
	},
	indexClick: function(pic,index){
		this.index = index;
		pic.setAttribute('src',this.images[this.index].src);
		this.active(pic.parentNode);
	},
	active: function(div){
		var lists = div.getElementsByTagName('li');
		for(var i=0;i<this.count;i++){
			lists[i].className = '';
		}
		lists[this.index].className = 'active';
	},
	runC: function(pic){
		var _this = this;
		var timer = setInterval(function(){
			_this.index++;
			if(_this.index==_this.count){
				_this.index = 0;
			}
			pic.setAttribute('src',_this.images[_this.index].src);
			_this.active(pic.parentNode);
		},_this.speed);
	},
	animate: function(ele,attr,target){
		var _this = this;
		var from = ele.getAttribute(attr);
		var step = (from-target)/this.frame;
		var num = 0;
		var timer = setInterval(function(){
			from += step;
			num++;
			ele.setAttribute(attr,from);
			if(num==_this.frame){
				clearInterval(timer);
			}
		},_this.frameSpeed/frame);
	}
}