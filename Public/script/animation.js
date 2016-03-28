var Text = function(config,context){
    this.x = config.x;
    this.y = config.y;
    this.rotation = config.rotation;
    this.color = config.color;
    this.size = config.size;
    this.speedX = config.speedX;
    this.speedY = config.speedY;
    this.rotate = (Math.PI/180)*config.rotate;
    this.content = config.content;
    this.context = context;
}
Text.prototype.move = function(){
    this.x += this.speedX;
    this.y += this.speedY;
//    this.rotation += this.rotate;
}
Text.prototype.draw = function(){
    var context = this.context;
    context.fillStyle = this.color;
    context.font = this.size + "px";
    context.fillText(this.content,this.x,this.y);
    context.rotate(this.rotate);
    this.move;
}
//圆形的定义
var Ball = function(config,context){
    this.x = config.x;
    this.y = config.y;
    this.color = config.color;
    this.radius = config.radius;
    this.speedX = config.speedX;
    this.speedY = config.speedY;
    this.context = context;
};
Ball.prototype.move = function(){
    this.x += this.speedX;
    this.y += this.speedY;
};
Ball.prototype.draw = function(){
    var context = this.context;
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
    context.fill();
    this.move();
};

//舞台类的定义
var Stage = function(config,context){
    this.stageWidth = config.stageWidth;
    this.stageHeight = config.stageHeight;
    this.playFlag = false;
    this.childs = {};
    this.context = context;
};
Stage.prototype = {
    constructor: Stage,
    addChild: function(name,elem){
        this.childs[name] = elem;
    },
    removeChild: function(name){
        delete this.childs[name];
    },
    render: function(){
        this.context.clearRect(0,0,this.stageWidth,this.stageHeight);
        var childs = this.childs;
        for(var i in childs){
            childs[i].draw();
        }
        if(this.playFlag){
            requestAnimationFrame((function(thisReplace){
                return function(){
                    thisReplace.render();
                };
            })(this));
        }
    },
    play: function(){
        if(!this.playFlag){
            this.playFlag = true;
            this.render();
        }
    },
    stop: function(){
        if(this.playFlag){
            this.playFlag = false;
        }
    }
};

if(!window.requestAnimationFrame){
    window.requestAnimationFrame = (function(){
        return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oResquestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback,element){
            window.setTimeout(callback,1000/60);
        };
    })();
}