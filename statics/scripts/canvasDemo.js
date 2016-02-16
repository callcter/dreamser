function main(){
    var drawing = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    var ballConfig = {
        x: 400,
        y: 300,
        color: "red",
        radius: 50,
        speedX: 1,
        speedY: 1
    };
    var ball = new Ball(ballConfig,context);
    
    var textConfig = {
        x: 400,
        y: 300,
        rotation: 0,
        color: "red",
        size: 20,
        speedX: 0,
        speedY: 0,
        rotate: 1,
        content: "我今天很高兴"
    }
    
    var text = new Text(textConfig,context);
    
    var stageConfig = {
        stageWidth: 800,
        stageHeight: 600
    };
    var stage = new Stage(stageConfig,context);
    
    stage.addChild("text",text);
    stage.play();

}
