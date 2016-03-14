$(function () {
    $('#chart_container').highcharts({
        chart: {
            type: 'areaspline',
            backgroundColor: '#fff'
        },
        credits: {//版权
            enabled: false
        },
        legend: {//图例
            enabled: false
        },
        title: {
            text: '速度(km/h)',
            align: 'left',
            style: {
                fontSize: '12px'
            }
        },
        xAxis: {
            title: {
                align: 'low',
                text: '里程(km)',
                x: -25,
                y: -20
            },
            type: 'datetime',
            minRange: 14 * 24 * 3600000, // fourteen days
            tickWidth: 0,     //刻度宽度设置为0，即不显示
            gridLineWidth: 0
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            title: 'null',
            lineWidth: 1,
            tickWidth: 1,
            tickPosition: 'inside',
            tickLength: 5
        },
        plotOptions: {
            areaspline: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 0
                },
                lineWidth: 0,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2006, 0, 1),
            data: [
                40, 45, 30, 20, 21, 5, 1, 30, 15, 3
            ]
        }]
    });
});

//计算两个经纬度坐标之间的距离(m为单位)
function toRad(d){
    return d * Math.PI / 180;
}
function getDisance(lat1, lng1, lat2, lng2) { //lat为纬度, lng为经度, 一定不要弄错
    var dis = 0;
    var radLat1 = toRad(lat1);
    var radLat2 = toRad(lat2);
    var deltaLat = radLat1 - radLat2;
    var deltaLng = toRad(lng1) - toRad(lng2);
    var dis = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat/2),2)+Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(deltaLng/2),2)));
    return dis * 6378137;
}
//时间戳转化为日期格式
function getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
}

function float2(num){
    num = Math.ceil(num*100)/100;
    return num;
}