function GuaGuaLe(idFront,idBack){
    this.eleFront = document.getElementById(idFront);
    this.eleBack = document.getElementById(idBack);
    this.frontCanvas = new Canvas2D(this.eleFront);
    this.backCanvas = new Canvas2D(this.eleBack);
    
    this.isStart = false;
}

GuaGuaLe.prototype = {
    constructor: GuaGuaLe,
    mergeAttr: function(desAttr){
        var defaultAttr = {
            frontFillColor: "silver",
            backFillColor: "gold",
            backFontColor: "red",
            backFontSize: 20,
            msg: "谢谢惠顾"
        };
        for(var p in desAttr){
            defaultAttr[p] = desAttr[p];
        }
        return defaultAttr;
    },
    init: function(desAttr){
        var attr = this.mergeAttr(desAttr);
        
        this.backCanvas.penColor(attr.backFillColor);
        this.backCanvas.fontSize(attr.backFontSize);
        this.backCanvas.drawRect({x:0,y:0},{x:this.backCanvas.width(),y:this.backCanvas.height()},true);
        this.backCanvas.penColor(attr.backFontColor);
        this.backCanvas.drawTextInCenter(attr.msg,true);
        
        this.frontCanvas.penColor(attr.frontFillColor);
        this.frontCanvas.drawRect({x:0,y:0},{x:this.frontCanvas.width(),y:this.frontCanvas.height()},true);
        
        var _this = this;
        
        this.eleFront.onmousedown = function(event){
            _this.mouseDown(event);
        }
        this.eleFront.onmousemove = function(event){
            _this.mouseMove(event);
        }
        this.eleFront.onmouseup = function(event){
            _this.mouseUp(event);
        }
    },
    mouseDown: function(event){
        this.isStart = true;
        this.startPoint = this.frontCanvas.getCanvasPoint(event.pageX,event.pageY);
    },
    mouseMove: function(event){
        if(!this.isStart) return;
        var p = this.frontCanvas.getCanvasPoint(event.pageX,event.pageY);
        this.frontCanvas.clearRect(p);
    },
    mouseUp: function(event){
        this.isStart = false;
    }
    
};