var Carousel = function(elem,images,config){
	this.images = images;
	this.elem = elem;
	this.count = this.images.length;
	this.index = 0;
	this.speed = config.speed;
	this.btn = config.btn;       //是否显示左右切换按钮
	this.dir = config.dir;       //是否显示索引
	this.frame = 32;
	this.frameSpeed = config.frameSpeed;
	this.pattern = config.pattern;
}
Carousel.prototype = {
	constructor: Carousel,
	init: function(){
		var _this = this;
		var div = document.createElement('div');
		div.className = 'carousel';
		this.elem.appendChild(div);

		switch(_this.pattern){
			case 0: //无动画
				var pic = document.createElement('img');
				pic.setAttribute('src',this.images[0].src);
				div.appendChild(pic);
				break;
			case 1: //左右方向
				var carousel_list = document.createElement('ul');
				carousel_list.setAttribute('id','carousel_list');
				carousel_list.className = 'carousel-list';
				carousel_list.style.width = div.offsetWidth*_this.count+'px';
				for(var i=0;i<_this.count;i++){
					var li = document.createElement('li');
					li.className = 'p1';
					li.style.width = div.offsetWidth+'px';
					var pic = document.createElement('img');
					pic.setAttribute('src',this.images[i].src);
					li.appendChild(pic);
					carousel_list.appendChild(li);
				}
				div.appendChild(carousel_list);
				break;
			case 2: //上下方向
				var carousel_list = document.createElement('ul');
				carousel_list.setAttribute('id','carousel_list');
				carousel_list.className = 'carousel-list';
				for(var i=0;i<_this.count;i++){
					var li = document.createElement('li');
					li.className = 'p2';
					var pic = document.createElement('img');
					pic.setAttribute('src',this.images[i].src);
					li.appendChild(pic);
					carousel_list.appendChild(li);
				}
				div.appendChild(carousel_list);
				break;
			case 3: //渐隐渐显
				var carousel_list = document.createElement('ul');
				carousel_list.setAttribute('id','carousel_list');
				carousel_list.className = 'carousel-list';
				for(var i=0;i<_this.count;i++){
					var li = document.createElement('li');
					li.className = 'p3';
					if(i==0){
						li.style.opacity = 1;
						li.style.position = 'relative';
					}
					var pic = document.createElement('img');
					pic.setAttribute('src',this.images[i].src);
					li.appendChild(pic);
					carousel_list.appendChild(li);
				}
				div.appendChild(carousel_list);
				break;
		}

		if(this.btn){
			var prev = document.createElement('div');
			prev.className = 'prev';
			prev.style.opacity = 0;
			div.appendChild(prev);
			var next = document.createElement('div');
			next.className = 'next';
			next.style.opacity = 0;
			div.appendChild(next);
			addEvent(div,'mouseover',function(){
				_this.animate(prev,'opacity',0.7,function(){});
				_this.animate(next,'opacity',0.7,function(){});
			});
			addEvent(div,'mouseout',function(){
				_this.animate(prev,'opacity',0,function(){});
				_this.animate(next,'opacity',0,function(){});
			});
			addEvent(prev,'click',function(){
				_this.prev(div);
			});
			addEvent(next,'click',function(){
				_this.next(div);
			});
		}
		if(this.dir){
			var ul = document.createElement('ul');
			ul.className = 'index';
			ul.setAttribute('id','carousel_index');
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
					_this.indexClick(div,this.index);
				});
			}
		}
		this.runC(div);
	},
	prev: function(con){
		this.index--;
		if(this.index==-1){
			this.index = this.count-1;
		}
		this.switchPic(con);
	},
	next: function(con){
		this.index++;
		if(this.index==this.count){
			this.index = 0;
		}
		this.switchPic(con);
	},
	indexClick: function(con,index){
		this.index = index;
		this.switchPic(con);
	},
	active: function(div){
		var lists = document.getElementById('carousel_index').getElementsByTagName('li');
		for(var i=0;i<this.count;i++){
			lists[i].className = '';
		}
		lists[this.index].className = 'active';
	},
	runC: function(con){
		var _this = this;
		var timer = setInterval(function(){
			_this.index++;
			if(_this.index==_this.count){
				_this.index = 0;
			}
			_this.switchPic(con);
		},_this.speed);
		addEvent(this.elem,'mouseover',function(){
			clearInterval(timer);
		});
		addEvent(this.elem,'mouseout',function(){
			var timer = setInterval(function(){
				_this.index++;
				if(_this.index==_this.count){
					_this.index = 0;
				}
				_this.switchPic(con);
			},_this.speed);
		});
	},
	switchPic: function(con){
		switch(this.pattern){
			case 0:
				con.getElementsByTagName('img')[0].setAttribute('src',this.images[this.index].src);
				break;
			case 1:
				var lis = document.getElementById('carousel_list');
				var divW = lis.parentNode.offsetWidth;
				this.animate(lis,'left',-divW*this.index,function(){});
				break;
			case 2:
				var lis = document.getElementById('carousel_list');

				break;
			case 3:
				var lis = document.getElementById('carousel_list').getElementsByTagName('li');
				lis[this.index].style.position = 'relative';
				this.animate(lis[this.index],'opacity',1,function(){});
				for(var i=0;i<this.count;i++){
					if(lis[i].style.opacity==1){
						lis[i].style.position = 'absolute';
						this.animate(lis[i],'opacity',0,function(){});
					}
				}
				break;
		}
		if(this.dir==true){
			this.active(con);
		}
	},
	animate: function(ele,attr,target,callback){
		var _this = this;
		var from = parseInt(getStyle(ele,attr));
		var step = (target-from)/this.frame;
		var num = 0;
		var timer = setInterval(function(){
			from += step;
			num++;
			if(attr=='left'||attr=='height'||attr=='top'){
				ele.style[attr] = from+'px';
			}else{
				ele.style[attr] = from;
			}
			if(num==_this.frame){
				clearInterval(timer);
				callback();
			}
		},_this.frameSpeed/_this.frame);
	}
}