var uls = document.getElementsByTagName('ul');
var action = new Array();
var frame = new Array();
var copy = new Array();
var nowActionId = '';
var nowCover = null;
var nullFrame = ["000000000000","000000000000","000000000000","000000000000","000000000000","000000000000","000000000000","000000000000","000000000000","000000000000","000000000000","000000000000"];
var char = new String();
$(function(){
    saveFrame();
    saveFrame();
    saveFrame();
    saveFrame();
    page(0);
    getAction();
    $(".speed-slider").jRange({
        from: 1,
        to: 8,
        step: 1,
        scale: [1,8],
        format: '%s',
        width: 200,
        showLabels: true,
        showScale: true,
        isRange: false
    });
    $(".delay-slider").jRange({
        from: 0,
        to: 63,
        step: 1,
        scale: [0,63],
        format: '%s',
        width: 200,
        showLabels: true,
        showScale: true,
        isRange: false
    });
    $(".fadein-slider").jRange({
        from: 0,
        to: 7,
        step: 1,
        scale: [0,7],
        format: '%s',
        width: 200,
        showLabels: true,
        showScale: true,
        isRange: false
    });
    $(".fadeout-slider").jRange({
        from: 0,
        to: 7,
        step: 1,
        scale: [0,7],
        format: '%s',
        width: 200,
        showLabels: true,
        showScale: true,
        isRange: false
    });
    $(".extinguish-slider").jRange({
        from: 0,
        to: 7,
        step: 1,
        scale: [0,7],
        format: '%s',
        width: 200,
        showLabels: true,
        showScale: true,
        isRange: false
    });
//-----------------------------------------动画帧制作——基本操作定义------------------------------------
    var lis1 = uls[0].getElementsByTagName('li');
    var lis2 = uls[1].getElementsByTagName('li');
    var lis3 = uls[2].getElementsByTagName('li');
    var lis4 = uls[3].getElementsByTagName('li');
    var lis5 = uls[4].getElementsByTagName('li');
    var lis6 = uls[5].getElementsByTagName('li');
    var lis7 = uls[6].getElementsByTagName('li');
    var lis8 = uls[7].getElementsByTagName('li');
    var lis9 = uls[8].getElementsByTagName('li');
    var lis10 = uls[9].getElementsByTagName('li');
    var lis11 = uls[10].getElementsByTagName('li');
    var lis12 = uls[11].getElementsByTagName('li');
    var x = 0,y = 0;
//----------------------------------------拖动事件------------------------------------------------
    
	$("#light").mousedown(function(e){
        var flag1 = 0,flag2 = 0,flag3 = 0,flag4 = 0,flag5 = 0,flag6 = 0,flag7 = 0,flag8 = 0,flag9 = 0,flag10 = 0,flag11 = 0,flag12 = 0,flag13 = 0,flag14 = 0,flag15 = 0,flag16 = 0,flag17 = 0,flag18 = 0,flag19 = 0,flag20 = 0,flag21 = 0,flag22 = 0,flag23 = 0,flag24 = 0,flag25 = 0,flag26 = 0,flag27 = 0,flag28 = 0,flag29 = 0,flag30 = 0,flag31 = 0,flag32 = 0,flag33 = 0,flag34 = 0,flag35 = 0,flag36 = 0,flag37 = 0,flag38 = 0,flag39 = 0,flag40 = 0,flag41 = 0,flag42 = 0,flag43 = 0,flag44 = 0,flag45 = 0,flag46 = 0,flag47 = 0,flag48 = 0,flag49 = 0,flag50 = 0,flag51 = 0,flag52 = 0,flag53 = 0,flag54 = 0,flag55 = 0,flag56 = 0,flag57 = 0,flag58 = 0,flag59 = 0,flag60 = 0,flag61 = 0,flag62 = 0,flag63 = 0,flag64 = 0,flag65 = 0,flag66 = 0,flag67 = 0,flag68 = 0,flag69 = 0,flag70 = 0,flag71 = 0,flag72 = 0,flag73 = 0,flag74 = 0,flag75 = 0,flag76 = 0,flag77 = 0,flag78 = 0,flag79 = 0,flag80 = 0,flag81 = 0,flag82 = 0,flag83 = 0,flag84 = 0,flag85 = 0,flag86 = 0,flag87 = 0,flag88 = 0,flag89 = 0,flag90 = 0,flag91 = 0,flag92 = 0,flag93 = 0,flag94 = 0,flag95 = 0,flag96 = 0,flag97 = 0,flag98 = 0,flag99 = 0,flag100 = 0,flag101 = 0,flag102 = 0,flag103 = 0,flag104 = 0,flag105 = 0,flag106 = 0,flag107 = 0,flag108 = 0,flag109 = 0,flag110 = 0,flag111 = 0,flag112 = 0,flag113 = 0,flag114 = 0,flag115 = 0,flag116 = 0,flag117 = 0,flag118 = 0,flag119 = 0,flag120 = 0,flag121 = 0,flag122 = 0,flag123 = 0,flag124 = 0,flag125 = 0,flag126 = 0,flag127 = 0,flag128 = 0,flag129 = 0,flag130 = 0,flag131 = 0,flag132 = 0,flag133 = 0,flag134 = 0,flag135 = 0,flag136 = 0,flag137 = 0,flag138 = 0,flag139 = 0,flag140 = 0,flag141 = 0,flag142 = 0,flag143 = 0,flag144 = 0;
		$("#light").mousemove(function(e){
		    x = Math.ceil(e.offsetX/25);
		    y = Math.ceil(e.offsetY/25);
            switch(y){
                case 1:
                    switch(x){
                        case 1:
                            if(flag1==1){ break; }
                            if(lis1[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag1 = 1;
                        break;
                        case 2:
                            if(flag2==1){ break; }
                            if(lis1[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag2 = 1;
                        break;
                        case 3:
                            if(flag3==1){ break; }
                            if(lis1[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag3 = 1;
                        break;
                        case 4:
                            if(flag4==1){ break; }
                            if(lis1[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag4 = 1;
                        break;
                        case 5:
                            if(flag5==1){ break; }
                            if(lis1[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag5 = 1;
                        break;
                        case 6:
                            if(flag6==1){ break; }
                            if(lis1[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag6 = 1;
                        break;
                        case 7:
                            if(flag7==1){ break; }
                            if(lis1[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag7 = 1;
                        break;
                        case 8:
                            if(flag8==1){ break; }
                            if(lis1[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag8 = 1;
                        break;
                        case 9:
                            if(flag9==1){ break; }
                            if(lis1[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag9 = 1;
                        break;
                        case 10:
                            if(flag10==1){ break; }
                            if(lis1[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag10 = 1;
                        break;
                        case 11:
                            if(flag11==1){ break; }
                            if(lis1[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag11 = 1;
                        break;
                        case 12:
                            if(flag12==1){ break; }
                            if(lis1[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis1[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis1[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag12 = 1;
                        break;
                    }
                break;
                case 2:
                    switch(x){
                        case 1:
                            if(flag13==1){ break; }
                            if(lis2[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag13 = 1;
                        break;
                        case 2:
                            if(flag14==1){ break; }
                            if(lis2[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag14 = 1;
                        break;
                        case 3:
                            if(flag15==1){ break; }
                            if(lis2[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag15 = 1;
                        break;
                        case 4:
                            if(flag16==1){ break; }
                            if(lis2[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag16 = 1;
                        break;
                        case 5:
                            if(flag17==1){ break; }
                            if(lis2[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag17 = 1;
                        break;
                        case 6:
                            if(flag18==1){ break; }
                            if(lis2[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag18 = 1;
                        break;
                        case 7:
                            if(flag19==1){ break; }
                            if(lis2[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag19 = 1;
                        break;
                        case 8:
                            if(flag20==1){ break; }
                            if(lis2[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag20 = 1;
                        break;
                        case 9:
                            if(flag21==1){ break; }
                            if(lis2[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag21 = 1;
                        break;
                        case 10:
                            if(flag22==1){ break; }
                            if(lis2[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag22 = 1;
                        break;
                        case 11:
                            if(flag23==1){ break; }
                            if(lis2[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag23 = 1;
                        break;
                        case 12:
                            if(flag24==1){ break; }
                            if(lis2[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis2[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis2[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag24 = 1;
                        break;
                    }
                break;
                case 3:
                    switch(x){
                        case 1:
                            if(flag25==1){ break; }
                            if(lis3[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag25 = 1;
                        break;
                        case 2:
                            if(flag26==1){ break; }
                            if(lis3[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag26 = 1;
                        break;
                        case 3:
                            if(flag27==1){ break; }
                            if(lis3[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag27 = 1;
                        break;
                        case 4:
                            if(flag28==1){ break; }
                            if(lis3[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag28 = 1;
                        break;
                        case 5:
                            if(flag29==1){ break; }
                            if(lis3[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag29 = 1;
                        break;
                        case 6:
                            if(flag30==1){ break; }
                            if(lis3[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag30 = 1;
                        break;
                        case 7:
                            if(flag31==1){ break; }
                            if(lis3[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag31 = 1;
                        break;
                        case 8:
                            if(flag32==1){ break; }
                            if(lis3[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag32 = 1;
                        break;
                        case 9:
                            if(flag33==1){ break; }
                            if(lis3[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag33 = 1;
                        break;
                        case 10:
                            if(flag34==1){ break; }
                            if(lis3[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag34 = 1;
                        break;
                        case 11:
                            if(flag35==1){ break; }
                            if(lis3[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag35 = 1;
                        break;
                        case 12:
                            if(flag36==1){ break; }
                            if(lis3[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis3[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis3[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag36 = 1;
                        break;
                    }
                break;
                case 4:
                    switch(x){
                        case 1:
                            if(flag37==1){ break; }
                            if(lis4[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag37 = 1;
                        break;
                        case 2:
                            if(flag38==1){ break; }
                            if(lis4[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag38 = 1;
                        break;
                        case 3:
                            if(flag39==1){ break; }
                            if(lis4[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag39 = 1;
                        break;
                        case 4:
                            if(flag40==1){ break; }
                            if(lis4[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag40 = 1;
                        break;
                        case 5:
                            if(flag41==1){ break; }
                            if(lis4[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag41 = 1;
                        break;
                        case 6:
                            if(flag42==1){ break; }
                            if(lis4[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag42 = 1;
                        break;
                        case 7:
                            if(flag43==1){ break; }
                            if(lis4[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag43 = 1;
                        break;
                        case 8:
                            if(flag44==1){ break; }
                            if(lis4[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag44 = 1;
                        break;
                        case 9:
                            if(flag45==1){ break; }
                            if(lis4[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag45 = 1;
                        break;
                        case 10:
                            if(flag46==1){ break; }
                            if(lis4[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag46 = 1;
                        break;
                        case 11:
                            if(flag47==1){ break; }
                            if(lis4[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag47 = 1;
                        break;
                        case 12:
                            if(flag48==1){ break; }
                            if(lis4[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis4[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis4[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag48 = 1;
                        break;
                    }
                break;
                case 5:
                    switch(x){
                        case 1:
                            if(flag49==1){ break; }
                            if(lis5[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag49 = 1;
                        break;
                        case 2:
                            if(flag50==1){ break; }
                            if(lis5[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag50 = 1;
                        break;
                        case 3:
                            if(flag51==1){ break; }
                            if(lis5[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag51 = 1;
                        break;
                        case 4:
                            if(flag52==1){ break; }
                            if(lis5[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag52 = 1;
                        break;
                        case 5:
                            if(flag53==1){ break; }
                            if(lis5[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag53 = 1;
                        break;
                        case 6:
                            if(flag54==1){ break; }
                            if(lis5[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag54 = 1;
                        break;
                        case 7:
                            if(flag55==1){ break; }
                            if(lis5[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag55 = 1;
                        break;
                        case 8:
                            if(flag56==1){ break; }
                            if(lis5[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag56 = 1;
                        break;
                        case 9:
                            if(flag57==1){ break; }
                            if(lis5[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag57 = 1;
                        break;
                        case 10:
                            if(flag58==1){ break; }
                            if(lis5[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag58 = 1;
                        break;
                        case 11:
                            if(flag59==1){ break; }
                            if(lis5[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag59 = 1;
                        break;
                        case 12:
                            if(flag60==1){ break; }
                            if(lis5[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis5[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis5[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag60 = 1;
                        break;
                    }
                break;
                case 6:
                    switch(x){
                        case 1:
                            if(flag61==1){ break; }
                            if(lis6[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag61 = 1;
                        break;
                        case 2:
                            if(flag62==1){ break; }
                            if(lis6[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag62 = 1;
                        break;
                        case 3:
                            if(flag63==1){ break; }
                            if(lis6[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag63 = 1;
                        break;
                        case 4:
                            if(flag64==1){ break; }
                            if(lis6[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag64 = 1;
                        break;
                        case 5:
                            if(flag65==1){ break; }
                            if(lis6[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag65 = 1;
                        break;
                        case 6:
                            if(flag66==1){ break; }
                            if(lis6[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag66 = 1;
                        break;
                        case 7:
                            if(flag67==1){ break; }
                            if(lis6[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag67 = 1;
                        break;
                        case 8:
                            if(flag68==1){ break; }
                            if(lis6[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag68 = 1;
                        break;
                        case 9:
                            if(flag69==1){ break; }
                            if(lis6[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag69 = 1;
                        break;
                        case 10:
                            if(flag70==1){ break; }
                            if(lis6[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag70 = 1;
                        break;
                        case 11:
                            if(flag71==1){ break; }
                            if(lis6[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag71 = 1;
                        break;
                        case 12:
                            if(flag12==1){ break; }
                            if(lis6[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis6[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis6[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag12 = 1;
                        break;
                    }
                break;
                case 7:
                    switch(x){
                        case 1:
                            if(flag73==1){ break; }
                            if(lis7[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag73 = 1;
                        break;
                        case 2:
                            if(flag74==1){ break; }
                            if(lis7[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag74 = 1;
                        break;
                        case 3:
                            if(flag75==1){ break; }
                            if(lis7[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag75 = 1;
                        break;
                        case 4:
                            if(flag76==1){ break; }
                            if(lis7[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag76 = 1;
                        break;
                        case 5:
                            if(flag77==1){ break; }
                            if(lis7[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag77 = 1;
                        break;
                        case 6:
                            if(flag78==1){ break; }
                            if(lis7[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag78 = 1;
                        break;
                        case 7:
                            if(flag79==1){ break; }
                            if(lis7[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag79 = 1;
                        break;
                        case 8:
                            if(flag80==1){ break; }
                            if(lis7[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag80 = 1;
                        break;
                        case 9:
                            if(flag81==1){ break; }
                            if(lis7[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag81 = 1;
                        break;
                        case 10:
                            if(flag82==1){ break; }
                            if(lis7[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag82 = 1;
                        break;
                        case 11:
                            if(flag83==1){ break; }
                            if(lis7[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag83 = 1;
                        break;
                        case 12:
                            if(flag84==1){ break; }
                            if(lis7[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis7[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis7[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag84 = 1;
                        break;
                    }
                break;
                case 8:
                    switch(x){
                        case 1:
                            if(flag85==1){ break; }
                            if(lis8[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag85 = 1;
                        break;
                        case 2:
                            if(flag86==1){ break; }
                            if(lis8[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag86 = 1;
                        break;
                        case 3:
                            if(flag87==1){ break; }
                            if(lis8[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag87 = 1;
                        break;
                        case 4:
                            if(flag88==1){ break; }
                            if(lis8[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag88 = 1;
                        break;
                        case 5:
                            if(flag89==1){ break; }
                            if(lis8[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag89 = 1;
                        break;
                        case 6:
                            if(flag90==1){ break; }
                            if(lis8[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag90 = 1;
                        break;
                        case 7:
                            if(flag91==1){ break; }
                            if(lis8[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag91 = 1;
                        break;
                        case 8:
                            if(flag92==1){ break; }
                            if(lis8[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag92 = 1;
                        break;
                        case 9:
                            if(flag93==1){ break; }
                            if(lis8[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag93 = 1;
                        break;
                        case 10:
                            if(flag94==1){ break; }
                            if(lis8[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag94 = 1;
                        break;
                        case 11:
                            if(flag95==1){ break; }
                            if(lis8[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag95 = 1;
                        break;
                        case 12:
                            if(flag96==1){ break; }
                            if(lis8[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis8[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis8[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag96 = 1;
                        break;
                    }
                break;
                case 9:
                    switch(x){
                        case 1:
                            if(flag97==1){ break; }
                            if(lis9[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag97 = 1;
                        break;
                        case 2:
                            if(flag98==1){ break; }
                            if(lis9[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag98 = 1;
                        break;
                        case 3:
                            if(flag99==1){ break; }
                            if(lis9[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag99 = 1;
                        break;
                        case 4:
                            if(flag100==1){ break; }
                            if(lis9[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag100 = 1;
                        break;
                        case 5:
                            if(flag101==1){ break; }
                            if(lis9[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag101 = 1;
                        break;
                        case 6:
                            if(flag102==1){ break; }
                            if(lis9[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag102 = 1;
                        break;
                        case 7:
                            if(flag103==1){ break; }
                            if(lis9[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag103 = 1;
                        break;
                        case 8:
                            if(flag104==1){ break; }
                            if(lis9[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag104 = 1;
                        break;
                        case 9:
                            if(flag105==1){ break; }
                            if(lis9[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag105 = 1;
                        break;
                        case 10:
                            if(flag106==1){ break; }
                            if(lis9[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag106 = 1;
                        break;
                        case 11:
                            if(flag107==1){ break; }
                            if(lis9[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag107 = 1;
                        break;
                        case 12:
                            if(flag108==1){ break; }
                            if(lis9[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis9[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis9[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag108 = 1;
                        break;
                    }
                break;
                    case 10:
                    switch(x){
                        case 1:
                            if(flag109==1){ break; }
                            if(lis10[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag109 = 1;
                        break;
                        case 2:
                            if(flag110==1){ break; }
                            if(lis10[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag110 = 1;
                        break;
                        case 3:
                            if(flag111==1){ break; }
                            if(lis10[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag111 = 1;
                        break;
                        case 4:
                            if(flag112==1){ break; }
                            if(lis10[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag112 = 1;
                        break;
                        case 5:
                            if(flag113==1){ break; }
                            if(lis10[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag113 = 1;
                        break;
                        case 6:
                            if(flag114==1){ break; }
                            if(lis10[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag114 = 1;
                        break;
                        case 7:
                            if(flag115==1){ break; }
                            if(lis10[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag115 = 1;
                        break;
                        case 8:
                            if(flag116==1){ break; }
                            if(lis10[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag116 = 1;
                        break;
                        case 9:
                            if(flag117==1){ break; }
                            if(lis10[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag117 = 1;
                        break;
                        case 10:
                            if(flag118==1){ break; }
                            if(lis10[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag118 = 1;
                        break;
                        case 11:
                            if(flag119==1){ break; }
                            if(lis10[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag119 = 1;
                        break;
                        case 12:
                            if(flag120==1){ break; }
                            if(lis10[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis10[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis10[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag120 = 1;
                        break;
                    }
                break;
                case 11:
                    switch(x){
                        case 1:
                            if(flag121==1){ break; }
                            if(lis11[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag121 = 1;
                        break;
                        case 2:
                            if(flag122==1){ break; }
                            if(lis11[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag122 = 1;
                        break;
                        case 3:
                            if(flag123==1){ break; }
                            if(lis11[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag123 = 1;
                        break;
                        case 4:
                            if(flag124==1){ break; }
                            if(lis11[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag124 = 1;
                        break;
                        case 5:
                            if(flag125==1){ break; }
                            if(lis11[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag125 = 1;
                        break;
                        case 6:
                            if(flag126==1){ break; }
                            if(lis11[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag126 = 1;
                        break;
                        case 7:
                            if(flag127==1){ break; }
                            if(lis11[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag127 = 1;
                        break;
                        case 8:
                            if(flag128==1){ break; }
                            if(lis11[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag128 = 1;
                        break;
                        case 9:
                            if(flag129==1){ break; }
                            if(lis11[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag129 = 1;
                        break;
                        case 10:
                            if(flag130==1){ break; }
                            if(lis11[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag130 = 1;
                        break;
                        case 11:
                            if(flag131==1){ break; }
                            if(lis11[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag131 = 1;
                        break;
                        case 12:
                            if(flag132==1){ break; }
                            if(lis11[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis11[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis11[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag132 = 1;
                        break;
                    }
                break;
                case 12:
                    switch(x){
                        case 1:
                            if(flag133==1){ break; }
                            if(lis12[0].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[0].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[0].getElementsByTagName('img')[0].src = red;
                            }
                            flag133 = 1;
                        break;
                        case 2:
                            if(flag134==1){ break; }
                            if(lis12[1].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[1].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[1].getElementsByTagName('img')[0].src = red;
                            }
                            flag134 = 1;
                        break;
                        case 3:
                            if(flag135==1){ break; }
                            if(lis12[2].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[2].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[2].getElementsByTagName('img')[0].src = red;
                            }
                            flag135 = 1;
                        break;
                        case 4:
                            if(flag136==1){ break; }
                            if(lis12[3].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[3].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[3].getElementsByTagName('img')[0].src = red;
                            }
                            flag136 = 1;
                        break;
                        case 5:
                            if(flag137==1){ break; }
                            if(lis12[4].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[4].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[4].getElementsByTagName('img')[0].src = red;
                            }
                            flag137 = 1;
                        break;
                        case 6:
                            if(flag138==1){ break; }
                            if(lis12[5].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[5].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[5].getElementsByTagName('img')[0].src = red;
                            }
                            flag138 = 1;
                        break;
                        case 7:
                            if(flag139==1){ break; }
                            if(lis12[6].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[6].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[6].getElementsByTagName('img')[0].src = red;
                            }
                            flag139 = 1;
                        break;
                        case 8:
                            if(flag140==1){ break; }
                            if(lis12[7].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[7].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[7].getElementsByTagName('img')[0].src = red;
                            }
                            flag140 = 1;
                        break;
                        case 9:
                            if(flag141==1){ break; }
                            if(lis12[8].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[8].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[8].getElementsByTagName('img')[0].src = red;
                            }
                            flag141 = 1;
                        break;
                        case 10:
                            if(flag142==1){ break; }
                            if(lis12[9].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[9].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[9].getElementsByTagName('img')[0].src = red;
                            }
                            flag142 = 1;
                        break;
                        case 11:
                            if(flag143==1){ break; }
                            if(lis12[10].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[10].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[10].getElementsByTagName('img')[0].src = red;
                            }
                            flag143 = 1;
                        break;
                        case 12:
                            if(flag144==1){ break; }
                            if(lis12[11].getElementsByTagName('img')[0].src.match(urlRed)){
                                lis12[11].getElementsByTagName('img')[0].src = white;
                            }else{
                                lis12[11].getElementsByTagName('img')[0].src = red;
                            }
                            flag144 = 1;
                        break;
                    }
                break;
                
            }
		});
	});
    
    $("#light").mouseup(function(e){
        var flag1 = 0,flag2 = 0;
        $("#light").unbind("mousemove");
    });   
//------------------------------------------点击事件---------------------------------------------
    $("#light").click(function(e){
        var flag1 = 0,flag2 = 0,flag3 = 0,flag4 = 0,flag5 = 0,flag6 = 0,flag7 = 0,flag8 = 0,flag9 = 0,flag10 = 0,flag11 = 0,flag12 = 0,flag13 = 0,flag14 = 0,flag15 = 0,flag16 = 0,flag17 = 0,flag18 = 0,flag19 = 0,flag20 = 0,flag21 = 0,flag22 = 0,flag23 = 0,flag24 = 0,flag25 = 0,flag26 = 0,flag27 = 0,flag28 = 0,flag29 = 0,flag30 = 0,flag31 = 0,flag32 = 0,flag33 = 0,flag34 = 0,flag35 = 0,flag36 = 0,flag37 = 0,flag38 = 0,flag39 = 0,flag40 = 0,flag41 = 0,flag42 = 0,flag43 = 0,flag44 = 0,flag45 = 0,flag46 = 0,flag47 = 0,flag48 = 0,flag49 = 0,flag50 = 0,flag51 = 0,flag52 = 0,flag53 = 0,flag54 = 0,flag55 = 0,flag56 = 0,flag57 = 0,flag58 = 0,flag59 = 0,flag60 = 0,flag61 = 0,flag62 = 0,flag63 = 0,flag64 = 0,flag65 = 0,flag66 = 0,flag67 = 0,flag68 = 0,flag69 = 0,flag70 = 0,flag71 = 0,flag72 = 0,flag73 = 0,flag74 = 0,flag75 = 0,flag76 = 0,flag77 = 0,flag78 = 0,flag79 = 0,flag80 = 0,flag81 = 0,flag82 = 0,flag83 = 0,flag84 = 0,flag85 = 0,flag86 = 0,flag87 = 0,flag88 = 0,flag89 = 0,flag90 = 0,flag91 = 0,flag92 = 0,flag93 = 0,flag94 = 0,flag95 = 0,flag96 = 0,flag97 = 0,flag98 = 0,flag99 = 0,flag100 = 0,flag101 = 0,flag102 = 0,flag103 = 0,flag104 = 0,flag105 = 0,flag106 = 0,flag107 = 0,flag108 = 0,flag109 = 0,flag110 = 0,flag111 = 0,flag112 = 0,flag113 = 0,flag114 = 0,flag115 = 0,flag116 = 0,flag117 = 0,flag118 = 0,flag119 = 0,flag120 = 0,flag121 = 0,flag122 = 0,flag123 = 0,flag124 = 0,flag125 = 0,flag126 = 0,flag127 = 0,flag128 = 0,flag129 = 0,flag130 = 0,flag131 = 0,flag132 = 0,flag133 = 0,flag134 = 0,flag135 = 0,flag136 = 0,flag137 = 0,flag138 = 0,flag139 = 0,flag140 = 0,flag141 = 0,flag142 = 0,flag143 = 0,flag144 = 0;
        x = Math.ceil(e.offsetX/25);
        y = Math.ceil(e.offsetY/25);
        switch(y){
            case 1:
                switch(x){
                    case 1:
                        if(flag1==1){ break; }
                        if(lis1[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag1 = 1;
                    break;
                    case 2:
                        if(flag2==1){ break; }
                        if(lis1[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag2 = 1;
                    break;
                    case 3:
                        if(flag3==1){ break; }
                        if(lis1[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag3 = 1;
                    break;
                    case 4:
                        if(flag4==1){ break; }
                        if(lis1[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag4 = 1;
                    break;
                    case 5:
                        if(flag5==1){ break; }
                        if(lis1[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag5 = 1;
                    break;
                    case 6:
                        if(flag6==1){ break; }
                        if(lis1[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag6 = 1;
                    break;
                    case 7:
                        if(flag7==1){ break; }
                        if(lis1[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag7 = 1;
                    break;
                    case 8:
                        if(flag8==1){ break; }
                        if(lis1[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag8 = 1;
                    break;
                    case 9:
                        if(flag9==1){ break; }
                        if(lis1[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag9 = 1;
                    break;
                    case 10:
                        if(flag10==1){ break; }
                        if(lis1[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag10 = 1;
                    break;
                    case 11:
                        if(flag11==1){ break; }
                        if(lis1[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag11 = 1;
                    break;
                    case 12:
                        if(flag12==1){ break; }
                        if(lis1[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis1[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis1[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag12 = 1;
                    break;
                }
            break;
            case 2:
                switch(x){
                    case 1:
                        if(flag13==1){ break; }
                        if(lis2[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag13 = 1;
                    break;
                    case 2:
                        if(flag14==1){ break; }
                        if(lis2[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag14 = 1;
                    break;
                    case 3:
                        if(flag15==1){ break; }
                        if(lis2[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag15 = 1;
                    break;
                    case 4:
                        if(flag16==1){ break; }
                        if(lis2[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag16 = 1;
                    break;
                    case 5:
                        if(flag17==1){ break; }
                        if(lis2[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag17 = 1;
                    break;
                    case 6:
                        if(flag18==1){ break; }
                        if(lis2[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag18 = 1;
                    break;
                    case 7:
                        if(flag19==1){ break; }
                        if(lis2[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag19 = 1;
                    break;
                    case 8:
                        if(flag20==1){ break; }
                        if(lis2[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag20 = 1;
                    break;
                    case 9:
                        if(flag21==1){ break; }
                        if(lis2[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag21 = 1;
                    break;
                    case 10:
                        if(flag22==1){ break; }
                        if(lis2[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag22 = 1;
                    break;
                    case 11:
                        if(flag23==1){ break; }
                        if(lis2[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag23 = 1;
                    break;
                    case 12:
                        if(flag24==1){ break; }
                        if(lis2[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis2[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis2[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag24 = 1;
                    break;
                }
            break;
            case 3:
                switch(x){
                    case 1:
                        if(flag25==1){ break; }
                        if(lis3[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag25 = 1;
                    break;
                    case 2:
                        if(flag26==1){ break; }
                        if(lis3[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag26 = 1;
                    break;
                    case 3:
                        if(flag27==1){ break; }
                        if(lis3[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag27 = 1;
                    break;
                    case 4:
                        if(flag28==1){ break; }
                        if(lis3[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag28 = 1;
                    break;
                    case 5:
                        if(flag29==1){ break; }
                        if(lis3[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag29 = 1;
                    break;
                    case 6:
                        if(flag30==1){ break; }
                        if(lis3[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag30 = 1;
                    break;
                    case 7:
                        if(flag31==1){ break; }
                        if(lis3[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag31 = 1;
                    break;
                    case 8:
                        if(flag32==1){ break; }
                        if(lis3[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag32 = 1;
                    break;
                    case 9:
                        if(flag33==1){ break; }
                        if(lis3[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag33 = 1;
                    break;
                    case 10:
                        if(flag34==1){ break; }
                        if(lis3[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag34 = 1;
                    break;
                    case 11:
                        if(flag35==1){ break; }
                        if(lis3[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag35 = 1;
                    break;
                    case 12:
                        if(flag36==1){ break; }
                        if(lis3[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis3[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis3[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag36 = 1;
                    break;
                }
            break;
            case 4:
                switch(x){
                    case 1:
                        if(flag37==1){ break; }
                        if(lis4[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag37 = 1;
                    break;
                    case 2:
                        if(flag38==1){ break; }
                        if(lis4[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag38 = 1;
                    break;
                    case 3:
                        if(flag39==1){ break; }
                        if(lis4[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag39 = 1;
                    break;
                    case 4:
                        if(flag40==1){ break; }
                        if(lis4[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag40 = 1;
                    break;
                    case 5:
                        if(flag41==1){ break; }
                        if(lis4[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag41 = 1;
                    break;
                    case 6:
                        if(flag42==1){ break; }
                        if(lis4[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag42 = 1;
                    break;
                    case 7:
                        if(flag43==1){ break; }
                        if(lis4[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag43 = 1;
                    break;
                    case 8:
                        if(flag44==1){ break; }
                        if(lis4[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag44 = 1;
                    break;
                    case 9:
                        if(flag45==1){ break; }
                        if(lis4[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag45 = 1;
                    break;
                    case 10:
                        if(flag46==1){ break; }
                        if(lis4[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag46 = 1;
                    break;
                    case 11:
                        if(flag47==1){ break; }
                        if(lis4[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag47 = 1;
                    break;
                    case 12:
                        if(flag48==1){ break; }
                        if(lis4[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis4[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis4[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag48 = 1;
                    break;
                }
            break;
            case 5:
                switch(x){
                    case 1:
                        if(flag49==1){ break; }
                        if(lis5[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag49 = 1;
                    break;
                    case 2:
                        if(flag50==1){ break; }
                        if(lis5[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag50 = 1;
                    break;
                    case 3:
                        if(flag51==1){ break; }
                        if(lis5[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag51 = 1;
                    break;
                    case 4:
                        if(flag52==1){ break; }
                        if(lis5[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag52 = 1;
                    break;
                    case 5:
                        if(flag53==1){ break; }
                        if(lis5[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag53 = 1;
                    break;
                    case 6:
                        if(flag54==1){ break; }
                        if(lis5[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag54 = 1;
                    break;
                    case 7:
                        if(flag55==1){ break; }
                        if(lis5[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag55 = 1;
                    break;
                    case 8:
                        if(flag56==1){ break; }
                        if(lis5[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag56 = 1;
                    break;
                    case 9:
                        if(flag57==1){ break; }
                        if(lis5[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag57 = 1;
                    break;
                    case 10:
                        if(flag58==1){ break; }
                        if(lis5[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag58 = 1;
                    break;
                    case 11:
                        if(flag59==1){ break; }
                        if(lis5[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag59 = 1;
                    break;
                    case 12:
                        if(flag60==1){ break; }
                        if(lis5[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis5[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis5[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag60 = 1;
                    break;
                }
            break;
            case 6:
                switch(x){
                    case 1:
                        if(flag61==1){ break; }
                        if(lis6[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag61 = 1;
                    break;
                    case 2:
                        if(flag62==1){ break; }
                        if(lis6[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag62 = 1;
                    break;
                    case 3:
                        if(flag63==1){ break; }
                        if(lis6[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag63 = 1;
                    break;
                    case 4:
                        if(flag64==1){ break; }
                        if(lis6[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag64 = 1;
                    break;
                    case 5:
                        if(flag65==1){ break; }
                        if(lis6[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag65 = 1;
                    break;
                    case 6:
                        if(flag66==1){ break; }
                        if(lis6[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag66 = 1;
                    break;
                    case 7:
                        if(flag67==1){ break; }
                        if(lis6[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag67 = 1;
                    break;
                    case 8:
                        if(flag68==1){ break; }
                        if(lis6[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag68 = 1;
                    break;
                    case 9:
                        if(flag69==1){ break; }
                        if(lis6[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag69 = 1;
                    break;
                    case 10:
                        if(flag70==1){ break; }
                        if(lis6[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag70 = 1;
                    break;
                    case 11:
                        if(flag71==1){ break; }
                        if(lis6[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag71 = 1;
                    break;
                    case 12:
                        if(flag12==1){ break; }
                        if(lis6[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis6[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis6[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag12 = 1;
                    break;
                }
            break;
            case 7:
                switch(x){
                    case 1:
                        if(flag73==1){ break; }
                        if(lis7[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag73 = 1;
                    break;
                    case 2:
                        if(flag74==1){ break; }
                        if(lis7[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag74 = 1;
                    break;
                    case 3:
                        if(flag75==1){ break; }
                        if(lis7[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag75 = 1;
                    break;
                    case 4:
                        if(flag76==1){ break; }
                        if(lis7[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag76 = 1;
                    break;
                    case 5:
                        if(flag77==1){ break; }
                        if(lis7[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag77 = 1;
                    break;
                    case 6:
                        if(flag78==1){ break; }
                        if(lis7[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag78 = 1;
                    break;
                    case 7:
                        if(flag79==1){ break; }
                        if(lis7[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag79 = 1;
                    break;
                    case 8:
                        if(flag80==1){ break; }
                        if(lis7[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag80 = 1;
                    break;
                    case 9:
                        if(flag81==1){ break; }
                        if(lis7[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag81 = 1;
                    break;
                    case 10:
                        if(flag82==1){ break; }
                        if(lis7[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag82 = 1;
                    break;
                    case 11:
                        if(flag83==1){ break; }
                        if(lis7[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag83 = 1;
                    break;
                    case 12:
                        if(flag84==1){ break; }
                        if(lis7[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis7[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis7[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag84 = 1;
                    break;
                }
            break;
            case 8:
                switch(x){
                    case 1:
                        if(flag85==1){ break; }
                        if(lis8[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag85 = 1;
                    break;
                    case 2:
                        if(flag86==1){ break; }
                        if(lis8[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag86 = 1;
                    break;
                    case 3:
                        if(flag87==1){ break; }
                        if(lis8[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag87 = 1;
                    break;
                    case 4:
                        if(flag88==1){ break; }
                        if(lis8[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag88 = 1;
                    break;
                    case 5:
                        if(flag89==1){ break; }
                        if(lis8[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag89 = 1;
                    break;
                    case 6:
                        if(flag90==1){ break; }
                        if(lis8[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag90 = 1;
                    break;
                    case 7:
                        if(flag91==1){ break; }
                        if(lis8[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag91 = 1;
                    break;
                    case 8:
                        if(flag92==1){ break; }
                        if(lis8[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag92 = 1;
                    break;
                    case 9:
                        if(flag93==1){ break; }
                        if(lis8[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag93 = 1;
                    break;
                    case 10:
                        if(flag94==1){ break; }
                        if(lis8[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag94 = 1;
                    break;
                    case 11:
                        if(flag95==1){ break; }
                        if(lis8[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag95 = 1;
                    break;
                    case 12:
                        if(flag96==1){ break; }
                        if(lis8[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis8[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis8[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag96 = 1;
                    break;
                }
            break;
            case 9:
                switch(x){
                    case 1:
                        if(flag97==1){ break; }
                        if(lis9[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag97 = 1;
                    break;
                    case 2:
                        if(flag98==1){ break; }
                        if(lis9[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag98 = 1;
                    break;
                    case 3:
                        if(flag99==1){ break; }
                        if(lis9[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag99 = 1;
                    break;
                    case 4:
                        if(flag100==1){ break; }
                        if(lis9[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag100 = 1;
                    break;
                    case 5:
                        if(flag101==1){ break; }
                        if(lis9[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag101 = 1;
                    break;
                    case 6:
                        if(flag102==1){ break; }
                        if(lis9[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag102 = 1;
                    break;
                    case 7:
                        if(flag103==1){ break; }
                        if(lis9[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag103 = 1;
                    break;
                    case 8:
                        if(flag104==1){ break; }
                        if(lis9[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag104 = 1;
                    break;
                    case 9:
                        if(flag105==1){ break; }
                        if(lis9[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag105 = 1;
                    break;
                    case 10:
                        if(flag106==1){ break; }
                        if(lis9[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag106 = 1;
                    break;
                    case 11:
                        if(flag107==1){ break; }
                        if(lis9[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag107 = 1;
                    break;
                    case 12:
                        if(flag108==1){ break; }
                        if(lis9[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis9[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis9[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag108 = 1;
                    break;
                }
            break;
                case 10:
                switch(x){
                    case 1:
                        if(flag109==1){ break; }
                        if(lis10[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag109 = 1;
                    break;
                    case 2:
                        if(flag110==1){ break; }
                        if(lis10[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag110 = 1;
                    break;
                    case 3:
                        if(flag111==1){ break; }
                        if(lis10[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag111 = 1;
                    break;
                    case 4:
                        if(flag112==1){ break; }
                        if(lis10[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag112 = 1;
                    break;
                    case 5:
                        if(flag113==1){ break; }
                        if(lis10[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag113 = 1;
                    break;
                    case 6:
                        if(flag114==1){ break; }
                        if(lis10[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag114 = 1;
                    break;
                    case 7:
                        if(flag115==1){ break; }
                        if(lis10[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag115 = 1;
                    break;
                    case 8:
                        if(flag116==1){ break; }
                        if(lis10[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag116 = 1;
                    break;
                    case 9:
                        if(flag117==1){ break; }
                        if(lis10[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag117 = 1;
                    break;
                    case 10:
                        if(flag118==1){ break; }
                        if(lis10[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag118 = 1;
                    break;
                    case 11:
                        if(flag119==1){ break; }
                        if(lis10[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag119 = 1;
                    break;
                    case 12:
                        if(flag120==1){ break; }
                        if(lis10[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis10[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis10[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag120 = 1;
                    break;
                }
            break;
            case 11:
                switch(x){
                    case 1:
                        if(flag121==1){ break; }
                        if(lis11[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag121 = 1;
                    break;
                    case 2:
                        if(flag122==1){ break; }
                        if(lis11[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag122 = 1;
                    break;
                    case 3:
                        if(flag123==1){ break; }
                        if(lis11[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag123 = 1;
                    break;
                    case 4:
                        if(flag124==1){ break; }
                        if(lis11[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag124 = 1;
                    break;
                    case 5:
                        if(flag125==1){ break; }
                        if(lis11[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag125 = 1;
                    break;
                    case 6:
                        if(flag126==1){ break; }
                        if(lis11[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag126 = 1;
                    break;
                    case 7:
                        if(flag127==1){ break; }
                        if(lis11[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag127 = 1;
                    break;
                    case 8:
                        if(flag128==1){ break; }
                        if(lis11[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag128 = 1;
                    break;
                    case 9:
                        if(flag129==1){ break; }
                        if(lis11[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag129 = 1;
                    break;
                    case 10:
                        if(flag130==1){ break; }
                        if(lis11[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag130 = 1;
                    break;
                    case 11:
                        if(flag131==1){ break; }
                        if(lis11[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag131 = 1;
                    break;
                    case 12:
                        if(flag132==1){ break; }
                        if(lis11[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis11[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis11[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag132 = 1;
                    break;
                }
            break;
            case 12:
                switch(x){
                    case 1:
                        if(flag133==1){ break; }
                        if(lis12[0].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[0].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[0].getElementsByTagName('img')[0].src = red;
                        }
                        flag133 = 1;
                    break;
                    case 2:
                        if(flag134==1){ break; }
                        if(lis12[1].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[1].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[1].getElementsByTagName('img')[0].src = red;
                        }
                        flag134 = 1;
                    break;
                    case 3:
                        if(flag135==1){ break; }
                        if(lis12[2].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[2].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[2].getElementsByTagName('img')[0].src = red;
                        }
                        flag135 = 1;
                    break;
                    case 4:
                        if(flag136==1){ break; }
                        if(lis12[3].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[3].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[3].getElementsByTagName('img')[0].src = red;
                        }
                        flag136 = 1;
                    break;
                    case 5:
                        if(flag137==1){ break; }
                        if(lis12[4].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[4].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[4].getElementsByTagName('img')[0].src = red;
                        }
                        flag137 = 1;
                    break;
                    case 6:
                        if(flag138==1){ break; }
                        if(lis12[5].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[5].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[5].getElementsByTagName('img')[0].src = red;
                        }
                        flag138 = 1;
                    break;
                    case 7:
                        if(flag139==1){ break; }
                        if(lis12[6].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[6].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[6].getElementsByTagName('img')[0].src = red;
                        }
                        flag139 = 1;
                    break;
                    case 8:
                        if(flag140==1){ break; }
                        if(lis12[7].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[7].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[7].getElementsByTagName('img')[0].src = red;
                        }
                        flag140 = 1;
                    break;
                    case 9:
                        if(flag141==1){ break; }
                        if(lis12[8].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[8].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[8].getElementsByTagName('img')[0].src = red;
                        }
                        flag141 = 1;
                    break;
                    case 10:
                        if(flag142==1){ break; }
                        if(lis12[9].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[9].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[9].getElementsByTagName('img')[0].src = red;
                        }
                        flag142 = 1;
                    break;
                    case 11:
                        if(flag143==1){ break; }
                        if(lis12[10].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[10].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[10].getElementsByTagName('img')[0].src = red;
                        }
                        flag143 = 1;
                    break;
                    case 12:
                        if(flag144==1){ break; }
                        if(lis12[11].getElementsByTagName('img')[0].src.match(urlRed)){
                            lis12[11].getElementsByTagName('img')[0].src = white;
                        }else{
                            lis12[11].getElementsByTagName('img')[0].src = red;
                        }
                        flag144 = 1;
                    break;
                }
            break;
        }
    });
});
//-------------------------------------------动画制作——帧操作定义---------------------------------

//新建动画
function newAction(){
    action.length = 0;
    clearDrawback();
}

//创建新的一帧
function newFrame(){
    frame.length = 0;
    clearDrawback();
}
//保存
function saveFrame(){
    if(action.length>=52){
        alert('动画最大长度为52帧');
        return;
    }
    inputDrawback();
    action.push(frame);
    page(action.length-1);
}
//保存到当前帧ok
function updateFrame(){
    inputDrawback();
    var now = document.getElementsByClassName('active');
    action[now[0].innerHTML-1] = frame;
}
//删除帧ok
function delFrame(){
    if(confirm('是否要删除本帧？')){
        if(action.length==1){
            clearDrawback();
            updateFrame();
            return;
        }
        var now = document.getElementsByClassName('active');
        action.splice(now[0].innerHTML-1,1);
        if(now[0].innerHTML=='1'){
            page(now[0].innerHTML-1);
        }else{
            page(now[0].innerHTML-2);
        }
        outputDrawback(action[now[0].innerHTML-1]);
    }else{
        return;
    }
}
//复制帧ok
function copyFrame(){
    inputDrawback();
    copy = frame;
}
//粘贴并保存帧ok
function pasteFrame(){
    outputDrawback(copy);
    updateFrame();
}
//在前面插入空白帧ok
function preNewFrame(){
    var now = document.getElementsByClassName('active');
    action.splice(now[0].innerHTML-1,0,nullFrame);
    page(now[0].innerHTML-1);
    outputDrawback(nullFrame);
}
//在后面插入空白帧ok
function nextNewFrame(){
    var now = document.getElementsByClassName('active');
    action.splice(now[0].innerHTML,0,nullFrame);
    page(now[0].innerHTML);
    outputDrawback(nullFrame);
}
//分页ok
function page(which){
    var num = action.length;
    var page = document.getElementById("page");
    var spans = page.getElementsByTagName("span");
    page.innerHTML = '';
    for(var i=0;i<num;i++){
        var span = document.createElement("span");
        span.addEventListener('click',function(){
            updateFrame();
            for(var j=0;j<num;j++){
                spans[j].className = 'noactive';
            }
            this.className = 'active';
            outputDrawback(action[this.innerHTML-1]);
        });
        var node = document.createTextNode(i+1);
        span.appendChild(node);
        page.appendChild(span);
    }
    for(var k=0;k<num;k++){
        spans[k].className = 'noactive';
    }
    spans[which].className = 'active';
    page.style.display = "block";
}
//清空画板ok
function clearDrawback(){
    for(var i=0;i<12;i++){
        var lis = uls[i].getElementsByTagName("li");
        for(var j=0;j<12;j++){
            lis[j].getElementsByTagName("img")[0].src = white;
        }
    }
}
//铺满画板ok
function fullDrawback(){
    for(var i=0;i<12;i++){
        var lis = uls[i].getElementsByTagName("li");
        for(var j=0;j<12;j++){
            lis[j].getElementsByTagName("img")[0].src = red;
        }
    }
}
//反转画板颜色ok
function reverseDrawback(){
    for(var i=0;i<12;i++){
        var lis = uls[i].getElementsByTagName("li");
        for(var j=0;j<12;j++){
            if(lis[j].getElementsByTagName("img")[0].src.match(urlRed)){
                lis[j].getElementsByTagName("img")[0].src = white;
            }else{
                lis[j].getElementsByTagName("img")[0].src = red;
            }
        }
    }
}
//上移ok
function moveUp(){
    inputDrawback();
    var first = frame.shift();
    frame.push(first);
    outputDrawback(frame);
}
//下移ok
function moveDown(){
    inputDrawback();
    var last = frame.pop();
    frame.unshift(last);
    outputDrawback(frame);
}
//左移ok
function moveLeft(){
    inputDrawback();
    for(var i=0;i<12;i++){
        var a = frame[i].substring(0,1);
        var b = frame[i].substring(1,12);
        frame[i] = b + a;
    }
    outputDrawback(frame);
}
//右移ok
function moveRight(){
    inputDrawback();
    for(var i=0;i<12;i++){
        var a = frame[i].substring(0,11);
        var b = frame[i].substring(11,12);
        frame[i] = b + a;
    }
    outputDrawback(frame);
}
//读入当前面板ok
function inputDrawback(){
    frame = [];
    for(var i=0;i<12;i++){
        var lis = uls[i].getElementsByTagName("li");
        char = '';
        for(var j=0;j<12;j++){
            if(lis[j].getElementsByTagName("img")[0].src.match(urlRed)){
                char += '1';
            }else{
                char += '0';
            }
        }
        frame.push(char);
    }
}
//渲染当前面板ok
function outputDrawback(f){
    for(var i=0;i<12;i++){
        var chars = f[i].split("");
        var lis = uls[i].getElementsByTagName("li");
        for(var j=0;j<12;j++){
            if(chars[j]=="1"){
                lis[j].getElementsByTagName("img")[0].src = red;
            }else{
                lis[j].getElementsByTagName("img")[0].src = white;
            }
        }
    }
}
function playDrawback(f){
    for(var i=0;i<12;i++){
        var chars = f[i].split("");
        var lis = uls[i].getElementsByTagName("li");
        for(var j=0;j<12;j++){
            if(chars[j]=="1"){
                lis[j].getElementsByTagName("img")[0].src = red;
            }else{
                lis[j].getElementsByTagName("img")[0].src = black;
            }
        }
    }
}

//---------------------------------------------动画播放--------------------------------------
var fNum = 0,playing=0;
var playAction;
//高级设置ok
function proffessional(){
    var pro = document.getElementById("pro");
    var sim = document.getElementById("sim");
    pro.style.display = 'block';
    sim.style.display = 'none';
}
//简单设置ok
function simple(){
    var pro = document.getElementById("pro");
    var sim = document.getElementById("sim");
    sim.style.display = 'block';
    pro.style.display = 'none';
}
//播放ok
function play(){
    var playBTN = document.getElementById('play');
    var lightModel = document.getElementById("model");
    if(playing==1){
        playBTN.innerHTML = '播放';
        clearInterval(playAction);
        outputDrawback(action[$('.active').text()-1]);
        var show = setTimeout(function(){
            lightModel.style.opacity = 1;
        },500);
        playing = 0;
        return;
    }
    playing = 1;
    playBTN.innerHTML = '暂停';
    lightModel.style.opacity = 0;
    
    //判断速度参数设置方式
    var delay = 0,fadein = 0,fadeout = 0,extinguish = 0;
    
    var pro = document.getElementById("pro");
    var sim = document.getElementById("sim");
    if(pro.style.display=='block'&&sim.style.display=='none'){
        if($(".delay-slider").val()==0){
            delay = 64*11;
        }else{
            delay = $(".delay-slider").val()*11;
        }
        fadein = Math.pow(2,$(".fadein-slider").val())*26;
        fadeout = Math.pow(2,$(".fadeout-slider").val())*26;
        extinguish = Math.pow(2,$(".extinguish-slider").val())*3.5;
    }else{
        var speed = parseInt($(".speed-slider").val());
        switch(speed){
            case 1:
                delay = 88,fadein = 26,fadeout = 26,extinguish = 3.5;
                break;
            case 2:
                delay = 176,fadein = 52,fadeout = 52,extinguish = 7;
                break;
            case 3:
                delay = 264,fadein = 104,fadeout = 104,extinguish = 14;
                break;
            case 4:
                delay = 352,fadein = 208,fadeout = 208,extinguish = 28;
                break;
            case 5:
                delay = 440,fadein = 416,fadeout = 416,extinguish = 56;
                break;
            case 6:
                delay = 528,fadein = 832,fadeout = 832,extinguish = 112;
                break;
            case 7:
                delay = 616,fadein = 1664,fadeout = 1664,extinguish = 224;
                break;
            case 8:
                delay = 704,fadein = 3328,fadeout = 3328,extinguish = 448;
                break;
        }
    }
    
    var page = document.getElementById("page");
    var spans = page.getElementsByTagName("span");
    playAction = setInterval(function(){
        
        playDrawback(action[fNum]);
        
        $('#model').animate({opacity:1},fadein);//淡入
        
        for(var i=0;i<spans.length;i++){
            spans[i].className = 'noactive';
        }
        spans[fNum].className = 'active';
        var delay = setTimeout(function(){
            $('#model').animate({opacity:0},fadeout);//淡出
        },delay);
        var ext = setTimeout(function(){
        },extinguish);
        fNum++;
        if(fNum == action.length){
            fNum = 0;
        }
    },delay+fadein+fadeout+extinguish);
}

//-------------------------------------------动画传输模块----------------------------------------
//保存动画ok
function saveActionJson(data){
    var access_token = document.getElementsByTagName('meta')['access-token'].getAttribute('content');
    $.ajax({
        type: 'POST',
        url: '/v1/animations?access_token='+access_token,
        dataType: 'json',
        data: data,
        contentType: 'application/json',
        success: function(res){
            var lightStr = byte2arr(base64decode(res.data));
            var actionRes = actReFormat(lightStr);//转化为action的结构
            getAction();
            alert('动画保存成功');
        }
    });
}
//获取动画
function getActionJson(method){
    var access_token = document.getElementsByTagName('meta')['access-token'].getAttribute('content');
    var uid = document.getElementsByTagName('meta')['uid'].getAttribute('content');
    switch(method){
        case 'owner_uid':
            var url = '/v1/animations?access_token='+access_token+'&owner_uid='+uid;
            break;
        case 'channel_num':
            var url = '/v1/animations?access_token='+access_token+'&channel_num='+uid;
            break;
    }
    $.ajax({
        type: 'GET',
        url: url,
        success: function(res){
            var directory = document.getElementById("directoryBox");
            for(var i=0;i<res.length;i++){
                var p = document.createElement("p");
                p.setAttribute('id',res[i].id);
                var node = document.createTextNode(res[i].title);
                p.appendChild(node);
                p.addEventListener('click',function(){
                    var id = this.getAttribute('id');
                    nowActionId = id;
                    getActionId(id,access_token);
                });
                directory.appendChild(p);
            }
        }
    });
}
function getActionId(id,access_token){
    $.ajax({
        type: 'GET',
        url: '/v1/animations/'+id+'?access_token='+access_token,
        success: function(res){
            
            //通过ID获取动画所有参数，然后显示到浏览器中
            var channel_num = document.getElementById('channel_num');//频道号
            var options = channel_num.getElementsByTagName('option');
            for(var i=0;i<options.length;i++){
                options[i].removeAttribute('selected');
            }
            switch(res.channel_num){
                case 1:
                    options[0].setAttribute('selected','selected');
                    break;
                case 2:
                    options[1].setAttribute('selected','selected');
                    break;
                case 3:
                    options[2].setAttribute('selected','selected');
                    break;
                case 4:
                    options[3].setAttribute('selected','selected');
                    break;
                case 5:
                    options[4].setAttribute('selected','selected');
                    break;
            }
            var title = document.getElementById('title');//标题
            title.setAttribute('value',res.title);
            var is_public = document.getElementById('is_public');//是否公开
            if(res.is_public==true){
                is_public.setAttribute('checked','checked');
            }else{
                is_public.removeAttribute('checked');
            }
            var play_times = document.getElementById('play_times');//播放次数
            play_times.setAttribute('value',res.play_times);
            
            var cover = document.getElementById("cover");//封面
            cover.innerHTML = '';
            var img = document.createElement('img');
            img.setAttribute('src',res.thumbnail);
            nowCover = res.thumbnail;
            cover.appendChild(img);
            
            action = [];
            action = actReFormat(byte2arr(base64decode(res.data)));
            outputDrawback(action[0]);
            page(0);
        }
    });
}
//删除动画
function delActionJson(animation_id){
    var access_token = document.getElementsByTagName('meta')['access-token'].getAttribute('content');
    $.ajax({
        type: 'DELETE',
        url: '/v1/animations/'+animation_id+'?access_token='+access_token,
        success: function(){
            alert('删除成功');
        }
    });
}
//更新动画
function updateActionJson(data,animation_id){
    var access_token = document.getElementsByTagName('meta')['access-token'].getAttribute('content');
    $.ajax({
        type: 'PATCH',
        url: '/v1/animations/'+animation_id+'?access_token='+access_token,
        dataType: 'json',
        data: data,
        contentType: 'application/json',
        success: function(res){
            console.log(res);
        }
    });
}
//定义上传动画的数据结构
var actionJson = {};
actionJson.delay = {};
actionJson.fadein = {};
actionJson.fadeout = {};
actionJson.extinguish = {};

//获取数据，整理为json串，传到数据库
function saveAction(){
    var delay = 0,fadein = 0,fadeout = 0,extinguish = 0;
    var delayN = 0,fadeinN = 0,fadeoutN = 0,extinguishN = 0;
    
    var pro = document.getElementById("pro");
    var sim = document.getElementById("sim");
    if(pro.style.display=='block'&&sim.style.display=='none'){
        if($(".delay-slider").val()==0){
            delay = 64*11;
            delayN = 64;
        }else{
            delay = $(".delay-slider").val()*11;
            delayN = parseInt($(".delay-slider").val());
        }
        fadein = Math.pow(2,$(".fadein-slider").val())*26;
        fadeinN = parseInt($(".fadein-slider").val());
        fadeout = Math.pow(2,$(".fadeout-slider").val())*26;
        fadeoutN = parseInt($(".fadeout-slider").val());
        extinguish = Math.ceil(Math.pow(2,$(".extinguish-slider").val())*3.5);
        extinguishN = parseInt($(".extinguish-slider").val());
    }else{
        var speed = parseInt($(".speed-slider").val());
        switch(speed){
            case 1:
                delay = 88,fadein = 26,fadeout = 26,extinguish = 4;
                delayN = 8,fadeinN = 0,fadeoutN = 0,extinguishN = 0;
                break;
            case 2:
                delay = 176,fadein = 52,fadeout = 52,extinguish = 7;
                delayN = 16,fadeinN = 1,fadeoutN = 1,extinguishN = 1;
                break;
            case 3:
                delay = 264,fadein = 104,fadeout = 104,extinguish = 14;
                delayN = 24,fadeinN = 2,fadeoutN = 2,extinguishN = 2;
                break;
            case 4:
                delay = 352,fadein = 208,fadeout = 208,extinguish = 28;
                delayN = 32,fadeinN = 3,fadeoutN = 3,extinguishN = 3;
                break;
            case 5:
                delay = 440,fadein = 416,fadeout = 416,extinguish = 56;
                delayN = 40,fadeinN = 4,fadeoutN = 4,extinguishN = 4;
                break;
            case 6:
                delay = 528,fadein = 832,fadeout = 832,extinguish = 112;
                delayN = 48,fadeinN = 5,fadeoutN = 5,extinguishN = 5;
                break;
            case 7:
                delay = 616,fadein = 1664,fadeout = 1664,extinguish = 224;
                delayN = 56,fadeinN = 6,fadeoutN = 6,extinguishN = 6;
                break;
            case 8:
                delay = 704,fadein = 3328,fadeout = 3328,extinguish = 448;
                delayN = 64,fadeinN = 7,fadeoutN = 7,extinguishN = 7;
                break;
        }
    }
    
    actionJson.channel_num = parseInt(document.animations.channel_num.value);//频道序号
    if(document.animations.title.value==''){
        alert('必须填写动画标题！');
        return;
    }
    actionJson.title = document.animations.title.value;//动画标题
    actionJson.is_public = document.animations.is_public.checked;//动画是否公开
    if(document.animations.play_times.value==''){
        alert('必须填写动画播放次数！');
        return;
    }
    actionJson.play_times = parseInt(document.animations.play_times.value);//动画播放次数
    actionJson.delay.fdt = delayN;
    actionJson.delay.time = delay;
    actionJson.fadein.fit = fadeinN;//动画淡入参数值
    actionJson.fadein.time = fadein;
    actionJson.fadeout.fot = fadeoutN;//动画淡出参数值
    actionJson.fadeout.time = fadeout;
    actionJson.extinguish.et = extinguishN;//动画熄灭参数值
    actionJson.extinguish.time = extinguish;
    actionJson.len = action.length;//动画帧长度
    if(action.length%4 != 0 || 3>action.length || action.length>52){//验证的动画长度
        alert('动画长度为4-52帧，且必须为4的倍数！');
        return;
    }
    if(nowCover==null){
        alert('动画需要封面！');
        return;
    }
    actionJson.thumbnail = nowCover;
    actionJson.data = actFormat(action);//动画点阵内容，base64编码后的结果
    var actJson = JSON.stringify(actionJson);
    saveActionJson(actJson);  
}
function getAction(){
    var direct = document.getElementById("directoryBox");
    direct.innerHTML = '';
    getActionJson('owner_uid');
}
function delAction(){
    delActionJson(nowActionId);
    getAction();
}
function updateAction(){
    
    var delay = 0,fadein = 0,fadeout = 0,extinguish = 0;
    var delayN = 0,fadeinN = 0,fadeoutN = 0,extinguishN = 0;
    
    var pro = document.getElementById("pro");
    var sim = document.getElementById("sim");
    if(pro.style.display=='block'&&sim.style.display=='none'){
        if($(".delay-slider").val()==0){
            delay = 64*11;
            delayN = 64;
        }else{
            delay = $(".delay-slider").val()*11;
            delayN = parseInt($(".delay-slider").val());
        }
        fadein = Math.pow(2,$(".fadein-slider").val())*26;
        fadeinN = parseInt($(".fadein-slider").val());
        fadeout = Math.pow(2,$(".fadeout-slider").val())*26;
        fadeoutN = parseInt($(".fadeout-slider").val());
        extinguish = Math.ceil(Math.pow(2,$(".extinguish-slider").val())*3.5);
        extinguishN = parseInt($(".extinguish-slider").val());
    }else{
        var speed = parseInt($(".speed-slider").val());
        switch(speed){
            case 1:
                delay = 88,fadein = 26,fadeout = 26,extinguish = 4;
                delayN = 8,fadeinN = 0,fadeoutN = 0,extinguishN = 0;
                break;
            case 2:
                delay = 176,fadein = 52,fadeout = 52,extinguish = 7;
                delayN = 16,fadeinN = 1,fadeoutN = 1,extinguishN = 1;
                break;
            case 3:
                delay = 264,fadein = 104,fadeout = 104,extinguish = 14;
                delayN = 24,fadeinN = 2,fadeoutN = 2,extinguishN = 2;
                break;
            case 4:
                delay = 352,fadein = 208,fadeout = 208,extinguish = 28;
                delayN = 32,fadeinN = 3,fadeoutN = 3,extinguishN = 3;
                break;
            case 5:
                delay = 440,fadein = 416,fadeout = 416,extinguish = 56;
                delayN = 40,fadeinN = 4,fadeoutN = 4,extinguishN = 4;
                break;
            case 6:
                delay = 528,fadein = 832,fadeout = 832,extinguish = 112;
                delayN = 48,fadeinN = 5,fadeoutN = 5,extinguishN = 5;
                break;
            case 7:
                delay = 616,fadein = 1664,fadeout = 1664,extinguish = 224;
                delayN = 56,fadeinN = 6,fadeoutN = 6,extinguishN = 6;
                break;
            case 8:
                delay = 704,fadein = 3328,fadeout = 3328,extinguish = 448;
                delayN = 64,fadeinN = 7,fadeoutN = 7,extinguishN = 7;
                break;
        }
    }
    
    actionJson.channel_num = parseInt(document.animations.channel_num.value);//频道序号
    actionJson.title = document.animations.title.value;//动画标题
    actionJson.is_public = document.animations.is_public.checked;//动画是否公开
    actionJson.play_times = parseInt(document.animations.play_times.value);//动画播放次数
    actionJson.delay.fdt = delayN;
    actionJson.delay.time = delay;
    actionJson.fadein.fit = fadeinN;//动画淡入参数值
    actionJson.fadein.time = fadein;
    actionJson.fadeout.fot = fadeoutN;//动画淡出参数值
    actionJson.fadeout.time = fadeout;
    actionJson.extinguish.et = extinguishN;//动画熄灭参数值
    actionJson.extinguish.time = extinguish;
    actionJson.len = action.length;//动画帧长度
    actionJson.thumbnail = nowCover;
    actionJson.data = actFormat(action);//动画点阵内容，base64编码后的结果
    var actJson = JSON.stringify(actionJson);
    updateActionJson(actJson,nowActionId);
}
//-------------------------------------------div截图-------------------------------

function doCover(){
    html2canvas($("#model"),{
        onrendered: function(canvas){
            nowCover = canvas.toDataURL();
            var cover = document.getElementById("cover");
            cover.innerHTML = '';
            cover.appendChild(convertCanvasToImage(canvas));
        }
    });
}

function convertCanvasToImage(canvas){
    var image = new Image();
    image.src = canvas.toDataURL("image/jpg");
    return image;
}

//------------------------------------------数据处理----------------------------------------
//动画10101十六进制串格式转化
function actFormat(data){
    var str = anticlockwise(data);
    var strReverse = '';//反序输出
    for(var i=0;i<str.length;i++){
        strReverse += str.charAt(str.length-i-1);//charAt()方法可返回指定位置的字符
    }
    var strA = new Array;//二进制转十六进制
    for(var i=0;i<strReverse.length;i+=4){
        strA.push(parseInt(strReverse.substring(i,i+4),2).toString(16));
    }
    var strB = strA.join('');
    var strC = new Array;
    for(var i=0;i<strB.length;i+=2){
        strC.push(strB.substring(i,i+2));
    }
    
    var strC_Array = new Array();
    for(var i=strC.length;i>0;i--){
        strC_Array.push(strC[i-1]);
    }
    
    var strD = new Array;
    for(var i=0;i<strC_Array.length/18;i++){
        for(var j=i*18;j<i*18+9;j++){
            strD.push(strC_Array[j]);
            strD.push(strC_Array[j+9]);
        }
    }
    var strE = base64encode(arr2str(strD));
    return strE;
}
//逆时针旋转90度
function anticlockwise(data){
    var newData = '';
    for(var i=0;i<data.length;i++){
        var A = new Array;
        for(var j=0;j<12;j++){
            A.push(data[i][j]);
        }
        var B = A.join('');
        var C = B.split('');
        var D = new Array();
        for(var j=0;j<12;j++){
            D[j] = new Array();
        }
        var n = 0;
        for(var k=0;k<12;k++){
            for(var l=0;l<12;l++){
                D[k][l] = C[n];
                n++;
            }
        }
        var E = new Array();
        for(var j=0;j<12;j++){
            E[j] = new Array();
        }
        for(var j=0;j<12;j++){
            for(var k=0;k<12;k++){
                E[j][k] = D[k][11-j];
            }
        }
        var F = new Array();
        for(var j=0;j<12;j++){
            F[j] = E[j].join('');
        }
        var G = F.join('');
        newData += G;
    }
    return newData;
}
//数据反处理
function actReFormat(data){
    var strA = new Array();
    for(var i=0;i<data.length/18;i++){
        for(var j=i*18;j<i*18+18;j+=2){
            strA.push(data[j]);
        }
        for(var j=i*18+1;j<i*18+18;j+=2){
            strA.push(data[j]);
        }
    }
    
    var strC_Array = new Array();
    for(var i=strA.length;i>0;i--){
        strC_Array.push(strA[i-1]);
    }
    
    var strB = strC_Array.join('');
    var strC = strB.split('');
    var strD = new Array();
    for(var i=0;i<strC.length;i++){
        var c = parseInt(strC[i],16).toString(2);
        while(c.length<4){
            c = '0' + c;
        }
        strD.push(c);
    }
    var str = strD.join('');
    var strReverse = '';//反序输出
    for(var i=0;i<str.length;i++){
        strReverse += str.charAt(str.length-i-1);//charAt()方法可返回指定位置的字符
    }
    var strE = new Array();
    var strF = new Array();
    for(var i=0;i<strReverse.length/144;i++){
        strF = [];
        for(var j=0;j<12;j++){
            strF.push(strReverse.substring(i*144+j*12,i*144+j*12+12));
        }
        strE.push(strF);
    }
    var strG = clockwise(strE);
    return strG;
}
//顺时针转90度
function clockwise(data){
    var newData = '';
    for(var i=0;i<data.length;i++){
        var A = new Array;
        for(var j=0;j<12;j++){
            A.push(data[i][j]);
        }
        var B = A.join('');
        var C = B.split('');
        var D = new Array();
        for(var j=0;j<12;j++){
            D[j] = new Array();
        }
        var n = 0;
        for(var k=0;k<12;k++){
            for(var l=0;l<12;l++){
                D[k][l] = C[n];
                n++;
            }
        }
        var E = new Array();
        for(var j=0;j<12;j++){
            E[j] = new Array();
        }
        for(var j=0;j<12;j++){
            for(var k=0;k<12;k++){
                E[j][k] = D[11-k][j];
            }
        }
        var F = new Array();
        for(var j=0;j<12;j++){
            F[j] = E[j].join('');
        }
        var G = F.join('');
        newData += G;
    }
    var H = new Array();
    var I = new Array();
    for(var i=0;i<newData.length/144;i++){
        H = [];
        for(var j=0;j<12;j++){
            H.push(newData.substring(i*144+j*12,i*144+j*12+12));
        }
        I.push(H);
    }
    return I;
}

//---------------------------------------base64的转化方法定义------------------------------
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;

    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;

    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
    /* c1 */
    do {
        c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while(i < len && c1 == -1);
    if(c1 == -1)
        break;

    /* c2 */
    do {
        c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while(i < len && c2 == -1);
    if(c2 == -1)
        break;

    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

    /* c3 */
    do {
        c3 = str.charCodeAt(i++) & 0xff;
        if(c3 == 61)
        return out;
        c3 = base64DecodeChars[c3];
    } while(i < len && c3 == -1);
    if(c3 == -1)
        break;

    out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

    /* c4 */
    do {
        c4 = str.charCodeAt(i++) & 0xff;
        if(c4 == 61)
        return out;
        c4 = base64DecodeChars[c4];
    } while(i < len && c4 == -1);
    if(c4 == -1)
        break;
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}

function arr2str(arr) {
    var ret,len,i;
    ret = "";
    len = arr.length;
    i=0;
    while(i < len) 
    {
       var v = parseInt(arr[i++], 16);
       ret = ret + String.fromCharCode(v);
    }
    return ret;
}

function byte2arr(str) {
    var out, i, len, c, h;

    out = [];
    len = str.length;
    i = 0;
    while(i < len) 
    {
        c = str.charCodeAt(i++);
        h = c.toString(16);
        if(h.length < 2)
            h = "0" + h;
        out.push(h);
    }
    return out;
}
