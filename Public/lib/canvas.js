function Canvas2D(canvas){
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var pageOffset = {left:canvas.offsetLeft,top:canvas.offsetTop};
    context.font = "20px Arial";
    this.drawRect = function(start,end,isFill){
        var w = end.x-start.x;
        var h = end.y-start.y;
        if(isFill){
            context.fillRect(start.x,start.y,w,h);
        }else{
            context.strokeRect(start.x,start.y,w,h);
        }
    }
//    根据文本，得到文本在画布中左上角的坐标
    this.caculateTextPosition = function(text){
        var metrics = context.measureText(text);
        var textWidth = metrics.width;
        var textHeight = parseInt(context.font);
        return {
            x: width/2 - textWidth/2,
            y: height/2 - textHeight/2
        };
    }
    this.width = function(){
        return width;
    }
    this.height = function(){
        return height;
    }
    this.pageOffset = function(){
        return pageOffset;
    }
    window.onresize = function(){
        pageOffset = {left:canvas.offsetLeft,top:canvas.offsetTop};
    }
//    将坐标转化为画布中的坐标
    this.getCanvasPoint = function(pageX,pageY){
        return {
            x: pageX-pageOffset.left,
            y: pageY-pageOffset.top
        }
    }
//    擦出鼠标或手指划过的区域（刮奖）
    this.clearRect = function(start){
        context.clearRect(start.x,start.y,10,10);
        return this;
    }
//    绘制文字
    this.drawText = function(text,x,y,fill){
        if(fill){
            context.fillText(text,x,y);
        }else{
            context.strokeText(text,x,y);
        }
    }
//    绘制文本到中间
    this.drawTextInCenter = function(text,fill){
        var point = this.caculateTextPosition(text);
        if(fill){
            context.fillText(text,point.x,point.y);
        }else{
            context.strokeText(text.point.x,point.y);
        }
    }
//    设置画笔宽度
    this.penWidth = function(newWidth){
        if(arguments.length){
            context.lineWidth = newWidth;
            return this;
        }
        return context.lineWidth;
    }
//    设置画笔颜色
    this.penColor = function(newColor){
        if(arguments.length){
            context.strokeStyle = newColor;
            context.fillStyle = newColor;
            return this;
        }
        return context.strokeStyle;
    }
    this.fontSize = function(fontSize){
        if(arguments.length){
            context.font = fontSize + "px Arial";
            return this;
        }
        return context.fontSize;
    }
}