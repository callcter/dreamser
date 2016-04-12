function index(){
    howManyDays();
    MDQuery();
    // MEQuery();
    menu();
}

function calender(){
    var now = new Date();
    var style = "both";
    yearList(style);
    monthList(style);
    date(now,style);
    monthPage(style);
    today();
    menu();
}

function howManyDays(){
    var now = new Date();
    var date = new Date("2014/02/13");
    var diff = now.diff(date);
    var daysDiv = document.getElementById("loveDays");
    daysDiv.innerHTML = Math.floor(diff);
}

function MDQuery(){
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    var data = new Object();
    data.date = year+"-"+month+"-"+day;
    data.uid = 5201314;
    $.ajax({
        url: "/Lovenote/MDQuery",
        data: JSON.stringify(data),
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json',
        success: function(result){
            console.log(result);
            if(result=="[]"){
                var mD = document.getElementById("mD");
                mD.innerHTML = "今天会是美好的一天";
            }else{
                var memorialDayDiv = document.getElementById("memorialDay");
                memorialDayDiv.innerHTML = result.date;
            }
        },
        error: function(err){
            console.log(err);
        }
    });
    return date;
}

function MEQuery(){
    var uid = 5201314;
    var offset = 0;
    var limit = 10;
    var url = "../../models/MemorialEventQuery.php?uid="+uid+"&offset="+offset+"&limit="+limit;
    $.get(url,function(result){
        var timeline = document.getElementById("timeline");
        if(result=="[]"){
            timeline.innerHTML = "你的时间线还是空的，快去添加吧";
        }else{
            var obj = eval("("+result+")");
            for(var i=0;i<obj.length;i++){
                var li = document.createElement("li");
                var line = document.createElement("div");
                if(i%2==0){
                    line.className = "lineRight";
                }else{
                    line.className = "lineLeft";
                }
                var position = document.createElement("div");
                position.className = "position";
                position.innerHTML = obj[i].position;
                line.appendChild(position);
                var date = document.createElement("div");
                date.className = "date";
                date.innerHTML = obj[i].date;
                line.appendChild(date);
                var cover = document.createElement("div");
                cover.className = "cover";
                var imgUrlArray = obj[i].imgUrls.split(";");
                var img = document.createElement("img");
                img.setAttribute("src",imgUrlArray[1]);
                cover.appendChild(img);
                line.appendChild(cover);
                li.appendChild(line);
                timeline.appendChild(li);
            }
        }
    });
}

function MDCreate(){
    var data = new Object();
    data.uid = 5201314;
    data.date = document.getElementById("date").value;
    data.event = document.getElementById("event").value;
    var dataJson = JSON.stringify(data);
    $.ajax({
        url: "../../models/MemorialDayCreate.php",
        method: "POST",
        data: dataJson,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function(result){
            if(result==1){
                alert("创建成功！");
                window.location.href = "../love/index.html";
            }
        },
        error: function(){
            console.log("wrong");
        }
    });
}

function MECreate(){
    var data = new Object();
    data.uid = 5201314;
    data.eventContent = document.getElementById("eventContent").value;
    data.imgUrls = imageUrls;
    data.date = document.getElementById("date").value;
    data.position = document.getElementById("position").value;
    var dataJson = JSON.stringify(data);
    $.ajax({
        url: "../../models/MemorialEventCreate.php",
        method: "POST",
        data: dataJson,
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function(result){
            if(result==1){
                alert("添加成功！");
//                添加成功后跳转到首页
                window.location.href = "../love/index.html";
            }
        },
        error: function(){
            console.log("wrong");
        }
    });
}

var imageUrls = "";

function previewImage(file){
    //图片预览
    var upload = document.getElementById("upload");
    var image = new Image();
    image.onload = function(){
        var canvas = document.createElement("canvas");
        if(image.width>50){
            image.width = 50;
            image.height *= 50/image.width;
        }
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,canvas.width,canvas.height);
        canvas.width = 50;
        canvas.height = 50;
        ctx.drawImage(image,0,0,50,50);
        upload.parentNode.insertBefore(canvas,upload);
    }
    var reader = new FileReader();
    reader.onload = function(e){
        image.src = e.target.result;

        //图片AJAX上传,并记录到图片序列中
        var imageObj = new Object();
        var picture = e.target.result;
        var strArray = picture.split(",");

        var h1Arr = strArray[0].split("/");
        var h2Arr = h1Arr[1].split(";");

        imageObj.header = h2Arr[0];
        imageObj.pic = strArray[1];
        var imgJson = JSON.stringify(imageObj);

        $.ajax({
            url: "../models/imageAdd.php",
            method: "POST",
            async: false,
            data: imgJson,
            contentType: false,
            processData: false,
            success: function(imgUrl){
                imageUrls += ";"+imgUrl;
                alert("ok");
            },
            error: function(){
                alert("图片上传失败");
            }
        });
    }
    reader.readAsDataURL(file.files[0]);
}