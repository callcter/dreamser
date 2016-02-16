var center = new google.maps.LatLng(35.496456, 112.097167);
var sPoint = null,ePoint = null;
var infowindow = new google.maps.InfoWindow();
var markers = new Array();
var directionsService = new google.maps.DirectionsService();
var directionsDisplay;
var elevator = new google.maps.ElevationService();
var map;

function initialize(){
    var coor = new google.maps.LatLng(35.496456, 112.097167);
    var mapOptions  = {
        center: center,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    
    var rendererOptions = {
        draggable : true,
        map : map
    };
    
    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    directionsDisplay.setMap(map);
    
    var menu = new MenuControl(map);
    menu.sender = map;
    google.maps.event.addListener(map, "rightclick", function (e) {
        if (menu.isEnable) {
            menu.coordinate = {
                point: e.pixel,
                latlng: e.latLng
            };
            menu.container.style.left = e.pixel.x + "px";
            menu.container.style.top = e.pixel.y + "px";
            menu.show("map");
        }
    });
    menuItems(menu);
}

function menuItems(menu){
    
    menu.addItem(new MenuItem({
        text: "设置此处为起点",
        groupName: "map",
        handler: function(e){
            sPoint = new google.maps.Marker({
                position: e.latlng,
                icon: "start_icon.png",
                map: map,
                draggle: false
            });
            if(sPoint&&ePoint) {drawRoute(sPoint,ePoint);}
        }
    }));
    
    menu.addItem(new MenuItem({
        text: "设置此处为终点",
        groupName: "map",
        handler: function(e){
            ePoint = new google.maps.Marker({
                position: e.latlng,
                icon: "end_icon.png",
                map: map,
                draggle: false
            });
            if(sPoint&&ePoint) {drawRoute(sPoint,ePoint);}
        }
    }));

    menu.addItem(new MenuItem({
        text: "清除所有标记",
        groupName: "map",
        handler: function (coor) {
            if (markers) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
                markers.length = 0;
            }
        }
    }));

    menu.addItem(new MenuItem({
        text: "获取海拔高度",
        groupName: "map",
        handler: function (coor) {
            elevator = new google.maps.ElevationService();
            getElevationP(coor);
        }
    }));
}


//-------------------------在起点与终点之间画路线图--------------------------
function drawRoute(p1,p2) {
    var request = {
        origin : p1.position,
        destination : p2.position,
        travelMode : google.maps.TravelMode.WALKING
    };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
            var locations = result.routes[0].overview_path;
            getElevation(locations);
            p1.setMap(null);
            p2.setMap(null);
        } else if (status == google.maps.DirectionsStatus.ZERO_RESULTS) {
            alert('导航失败');
        }
    });
}

//---------------------根据坐标位置请求得到当地海拔高度-------------------------------
function getElevation(loca) {
    var positionalRequest = {
        'locations': loca
    }
    elevator.getElevationForLocations(positionalRequest, function (results, status) {
        if (status == google.maps.ElevationStatus.OK) {
            if (results[0]) {
                var ele = [0,Math.ceil(results[0].elevation*100)/100];
                var eles = [];
                eles.push(ele);
                var distance;
                var sumD = 0;
                for(var i=0;i<results.length-1;i++){
                    distance = getDistance(loca[i].k,loca[i].D,loca[i+1].k,loca[i+1].D)
                    sumD += distance;
                    ele = [Math.ceil(sumD/1000*100)/100,Math.ceil(results[i+1].elevation*100)/100];
                    eles.push(ele);
                }
                loadChart(eles);                
            } else {
                alert("未查找到此处海拔高度");
            }
        } else {
            alert("服务失败：" + status);
        }
    });
}

//通过evelationService获得latLng的海拔
function getElevationP(coor) {
    var locations = [];
    locations.push(coor.latlng);
    var positionalRequest = {
        'locations': locations
    }
    elevator.getElevationForLocations(positionalRequest, function (results, status) {
        if (status == google.maps.ElevationStatus.OK) {
            if (results[0]) {
                infowindow.setContent("此处海拔高度为：" + Math.ceil(results[0].elevation * 100) / 100 + "米");
                infowindow.setPosition(coor.latlng);
                infowindow.open(map);
            } else {
                alert("未查找到此处海拔高度");
            }
        } else {
            alert("服务失败：" + status);
        }
    });
}

//-----------------计算两个经纬度坐标之间的距离(m为单位)----------------------------
function toRad(d){
    return d * Math.PI / 180;
}
function getDistance(lat1, lng1, lat2, lng2) { //lat为纬度, lng为经度, 一定不要弄错
    var dis = 0;
    var radLat1 = toRad(lat1);
    var radLat2 = toRad(lat2);
    var deltaLat = radLat1 - radLat2;
    var deltaLng = toRad(lng1) - toRad(lng2);
    var dis = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat/2),2)+Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(deltaLng/2),2)));
    return dis * 6378137;
}

//------------------------制作路程中的海拔分布图------------------------------
function loadChart(axis){
var options = {
    chart: {
        zoomType: 'xy',
        renderTo:'chart_container'
    },
    title: {
        text: '路程中海拔分布'
    },
    xAxis: {
        labels: {
            formatter: function () {
                return this.value+'km';
            }
        }
    },
    yAxis: [{
        labels: {
            format: '{value}m',
            style: {
                color: '#89A54E'
            }
        },
        title: {
            text: '海拔',
            style: {
                color: '#89A54E'
            }
        }
    }],
    legend: {
        enabled: false
    },
    plotOptions: {
        spline: {
            lineWidth: 1.5,
            fillOpacity: 0.1,
            marker: {
                enabled: false,
                status: {
                    hover: {
                        enabled: true,
                        radius: 2
                    }
                }
            },
            shadow: false
        }
    },
    tooltip: {
        shared: true
    },
    series: [{
        name: '海拔',
        color: '#89A54E',
        type: 'spline',
        data: axis,
        tooltip: {
            valueSuffix: 'm'
        }
    }]
}
    var chart = new Highcharts.Chart(options);
}