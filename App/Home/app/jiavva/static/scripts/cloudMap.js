function routeMap(){
    document.getElementById("map").style.height = window.innerHeight -90+"px";
    var chart = echarts.init(document.getElementById("map"));
    chart.setOption(routeMapOption);
}

function serviceMap(){
    document.getElementById("map").style.height = window.innerHeight -90+"px";
    var chart = echarts.init(document.getElementById("map"));
    chart.setOption(serviceMapOption);
}

function orderMap(){
    document.getElementById("map").style.height = window.innerHeight -90+"px";
    var chart = echarts.init(document.getElementById("map"));
    chart.setOption(orderMapOption);
}

function dataForm(){
    var chart1 = echarts.init(document.getElementById("map1"));
    chart1.setOption(dataFormOption1);
    var chart2 = echarts.init(document.getElementById("map2"));
    chart2.setOption(dataFormOption2);
    var chart3 = echarts.init(document.getElementById("map3"));
    chart3.setOption(dataFormOption3);
    var chart4 = echarts.init(document.getElementById("map4"));
    chart4.setOption(dataFormOption4);
}

var toolTipText = [
    {name:'北京',lineNum:112,countyNum:16},
    {name:'上海',lineNum:85,countyNum:17},
    {name:'天津',lineNum:65,countyNum:16},
    {name:'重庆',lineNum:170,countyNum:38},
    {name:'黑龙江',lineNum:625,countyNum:125},
    {name:'吉林',lineNum:280,countyNum:60},
    {name:'辽宁',lineNum:495,countyNum:100},
    {name:'内蒙古',lineNum:125,countyNum:98},
    {name:'河北',lineNum:245,countyNum:173},
    {name:'新疆',lineNum:103,countyNum:98},
    {name:'甘肃',lineNum:425,countyNum:89},
    {name:'青海',lineNum:54,countyNum:39},
    {name:'陕西',lineNum:120,countyNum:108},
    {name:'宁夏',lineNum:50,countyNum:22},
    {name:'河南',lineNum:735,countyNum:159},
    {name:'山东',lineNum:625,countyNum:140},
    {name:'山西',lineNum:590,countyNum:119},
    {name:'安徽',lineNum:515,countyNum:105},
    {name:'湖北',lineNum:320,countyNum:103},
    {name:'湖南',lineNum:615,countyNum:123},
    {name:'江苏',lineNum:515,countyNum:104},
    {name:'四川',lineNum:640,countyNum:181},
    {name:'贵州',lineNum:110,countyNum:89},
    {name:'云南',lineNum:485,countyNum:129},
    {name:'广西',lineNum:405,countyNum:109},
    {name:'西藏',lineNum:5,countyNum:1},
    {name:'浙江',lineNum:270,countyNum:90},
    {name:'江西',lineNum:480,countyNum:99},
    {name:'广东',lineNum:295,countyNum:124},
    {name:'福建',lineNum:310,countyNum:84},
    {name:'海南',lineNum:105,countyNum:21}
];
var geoCoordMap1 = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '兰州': [103.5901, 36.3043],
    '北京': [116.4551, 40.2539],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '哈尔滨': [127.9688, 45.368],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '成都': [103.9526, 30.7617],
    '拉萨': [91.1865, 30.1465],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '武汉': [114.3896, 30.6628],
    '沈阳': [123.1238, 42.1216],
    '济南': [117.1582, 36.8701],
    '海口': [110.3893, 19.8516],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '苏州': [120.6519, 31.3989],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '重庆': [107.7539, 30.1904],
    '银川': [106.3586, 38.1775],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '青岛': [120.4651, 36.3373],
    '齐齐哈尔': [123.97,47.33],
    '呼伦贝尔': [119.77, 49.22],
    '郑州': [113.42,34.44],
    '南康': [114.7676,25.6659]
};
var dataLine1 = [
    [{name:'青岛'}, {name:'北京',value:110}],
    [{name:'青岛'}, {name:'上海',value:79}],
    [{name:'青岛'}, {name:'天津',value:60}],
    [{name:'青岛'}, {name:'重庆',value:169}],
    [{name:'青岛'}, {name:'哈尔滨',value:620}],
    [{name:'青岛'}, {name:'长春',value:270}],
    [{name:'青岛'}, {name:'沈阳',value:488}],
    [{name:'青岛'}, {name:'呼和浩特',value:118}],
    [{name:'青岛'}, {name:'石家庄',value:241}],
    [{name:'青岛'}, {name:'乌鲁木齐',value:97}],
    [{name:'青岛'}, {name:'兰州',value:417}],
    [{name:'青岛'}, {name:'西宁',value:48}],
    [{name:'青岛'}, {name:'西安',value:115}],
    [{name:'青岛'}, {name:'银川',value:46}],
    [{name:'青岛'}, {name:'郑州',value:726}],
    [{name:'青岛'}, {name:'济南',value:621}],
    [{name:'青岛'}, {name:'太原',value:587}],
    [{name:'青岛'}, {name:'合肥',value:508}],
    [{name:'青岛'}, {name:'武汉',value:310}],
    [{name:'青岛'}, {name:'长沙',value:609}],
    [{name:'青岛'}, {name:'南京',value:512}],
    [{name:'青岛'}, {name:'成都',value:633}],
    [{name:'青岛'}, {name:'贵阳',value:105}],
    [{name:'青岛'}, {name:'昆明',value:477}],
    [{name:'青岛'}, {name:'南宁',value:398}],
    [{name:'青岛'}, {name:'拉萨',value:3}],
    [{name:'青岛'}, {name:'杭州',value:265}],
    [{name:'青岛'}, {name:'南昌',value:476}],
    [{name:'青岛'}, {name:'广州',value:288}],
    [{name:'青岛'}, {name:'福州',value:307}],
    [{name:'青岛'}, {name:'海口',value:102}]
];
var dataPoint1 = [
    {name:'北京',value:112},
     {name:'北京',value:110},
     {name:'上海',value:79},
     {name:'天津',value:60},
     {name:'重庆',value:169},
     {name:'哈尔滨',value:620},
     {name:'长春',value:270},
     {name:'沈阳',value:488},
     {name:'呼和浩特',value:118},
     {name:'石家庄',value:241},
    {name:'乌鲁木齐',value:97},
     {name:'兰州',value:417},
    {name:'西宁',value:48},
     {name:'西安',value:115},
    {name:'银川',value:46},
     {name:'郑州',value:726},
    {name:'济南',value:621},
    {name:'太原',value:587},
    {name:'合肥',value:508},
     {name:'武汉',value:310},
   {name:'长沙',value:609},
    {name:'南京',value:512},
    {name:'成都',value:633},
     {name:'贵阳',value:105},
    {name:'昆明',value:477},
     {name:'南宁',value:398},
    {name:'拉萨',value:3},
     {name:'杭州',value:265},
     {name:'南昌',value:476},
    {name:'广州',value:288},
    {name:'福州',value:307},
     {name:'海口',value:102}
];
var dataLine2 = [
    [{name:'佛山'}, {name:'北京',value:109}],
    [{name:'佛山'}, {name:'上海',value:81}],
    [{name:'佛山'}, {name:'天津',value:62}],
    [{name:'佛山'}, {name:'重庆',value:160}],
    [{name:'佛山'}, {name:'哈尔滨',value:619}],
    [{name:'佛山'}, {name:'长春',value:265}],
    [{name:'佛山'}, {name:'沈阳',value:486}],
    [{name:'佛山'}, {name:'呼和浩特',value:120}],
    [{name:'佛山'}, {name:'石家庄',value:242}],
    [{name:'佛山'}, {name:'乌鲁木齐',value:97}],
    [{name:'佛山'}, {name:'兰州',value:419}],
    [{name:'佛山'}, {name:'西宁',value:55}],
    [{name:'佛山'}, {name:'西安',value:112}],
    [{name:'佛山'}, {name:'银川',value:44}],
    [{name:'佛山'}, {name:'郑州',value:731}],
    [{name:'佛山'}, {name:'济南',value:610}],
    [{name:'佛山'}, {name:'太原',value:578}],
    [{name:'佛山'}, {name:'合肥',value:534}],
    [{name:'佛山'}, {name:'武汉',value:313}],
    [{name:'佛山'}, {name:'长沙',value:605}],
    [{name:'佛山'}, {name:'南京',value:541}],
    [{name:'佛山'}, {name:'成都',value:633}],
    [{name:'佛山'}, {name:'贵阳',value:103}],
    [{name:'佛山'}, {name:'昆明',value:474}],
    [{name:'佛山'}, {name:'南宁',value:411}],
    [{name:'佛山'}, {name:'拉萨',value:1}],
    [{name:'佛山'}, {name:'杭州',value:280}],
    [{name:'佛山'}, {name:'南昌',value:480}],
    [{name:'佛山'}, {name:'广州',value:295}],
    [{name:'佛山'}, {name:'福州',value:301}],
    [{name:'佛山'}, {name:'海口',value:104}]
];
var dataPoint2 = [
 {name:'北京',value:109},
 {name:'上海',value:81},
 {name:'天津',value:62},
 {name:'重庆',value:160},
 {name:'哈尔滨',value:619},
 {name:'长春',value:265},
 {name:'沈阳',value:486},
 {name:'呼和浩特',value:120},
 {name:'石家庄',value:242},
 {name:'乌鲁木齐',value:97},
 {name:'兰州',value:419},
 {name:'西宁',value:55},
 {name:'西安',value:112},
 {name:'银川',value:44},
 {name:'郑州',value:731},
 {name:'济南',value:610},
 {name:'太原',value:578},
 {name:'合肥',value:534},
 {name:'武汉',value:313},
 {name:'长沙',value:605},
 {name:'南京',value:541},
 {name:'成都',value:633},
 {name:'贵阳',value:103},
 {name:'昆明',value:474},
 {name:'南宁',value:411},
 {name:'拉萨',value:1},
 {name:'杭州',value:280},
 {name:'南昌',value:480},
 {name:'广州',value:295},
   {name:'福州',value:301},
   {name:'海口',value:104}
];
var dataLine3 = [
    [{name:'北京'}, {name:'上海',value:76}],
    [{name:'北京'}, {name:'天津',value:61}],
    [{name:'北京'}, {name:'重庆',value:160}],
    [{name:'北京'}, {name:'哈尔滨',value:610}],
    [{name:'北京'}, {name:'长春',value:265}],
    [{name:'北京'}, {name:'沈阳',value:492}],
    [{name:'北京'}, {name:'呼和浩特',value:105}],
    [{name:'北京'}, {name:'石家庄',value:212}],
    [{name:'北京'}, {name:'乌鲁木齐',value:99}],
    [{name:'北京'}, {name:'兰州',value:423}],
    [{name:'北京'}, {name:'西宁',value:52}],
    [{name:'北京'}, {name:'西安',value:110}],
    [{name:'北京'}, {name:'银川',value:44}],
    [{name:'北京'}, {name:'郑州',value:715}],
    [{name:'北京'}, {name:'济南',value:605}],
    [{name:'北京'}, {name:'太原',value:585}],
    [{name:'北京'}, {name:'合肥',value:516}],
    [{name:'北京'}, {name:'武汉',value:325}],
    [{name:'北京'}, {name:'长沙',value:644}],
    [{name:'北京'}, {name:'南京',value:512}],
    [{name:'北京'}, {name:'成都',value:633}],
    [{name:'北京'}, {name:'贵阳',value:105}],
    [{name:'北京'}, {name:'昆明',value:482}],
    [{name:'北京'}, {name:'南宁',value:398}],
    [{name:'北京'}, {name:'拉萨',value:2}],
    [{name:'北京'}, {name:'杭州',value:260}],
    [{name:'北京'}, {name:'南昌',value:470}],
    [{name:'北京'}, {name:'广州',value:285}],
    [{name:'北京'}, {name:'福州',value:300}],
    [{name:'北京'}, {name:'海口',value:98}]
];
var dataPoint3 = [
 {name:'上海',value:76},
     {name:'天津',value:61},
     {name:'重庆',value:160},
     {name:'哈尔滨',value:610},
     {name:'长春',value:265},
     {name:'沈阳',value:492},
     {name:'呼和浩特',value:105},
     {name:'石家庄',value:212},
     {name:'乌鲁木齐',value:99},
     {name:'兰州',value:423},
     {name:'西宁',value:52},
     {name:'西安',value:110},
     {name:'银川',value:44},
     {name:'郑州',value:715},
     {name:'济南',value:605},
     {name:'太原',value:585},
     {name:'合肥',value:516},
     {name:'武汉',value:325},
     {name:'长沙',value:644},
     {name:'南京',value:512},
     {name:'成都',value:633},
     {name:'贵阳',value:105},
     {name:'昆明',value:482},
     {name:'南宁',value:398},
     {name:'拉萨',value:2},
     {name:'杭州',value:260},
     {name:'南昌',value:470},
     {name:'广州',value:285},
     {name:'福州',value:300},
     {name:'海口',value:98}
	];
var dataLine4 = [
    [{name:'上海'}, {name:'北京',value:112}],
    [{name:'上海'}, {name:'天津',value:65}],
    [{name:'上海'}, {name:'重庆',value:170}],
    [{name:'上海'}, {name:'哈尔滨',value:625}],
    [{name:'上海'}, {name:'长春',value:280}],
    [{name:'上海'}, {name:'沈阳',value:495}],
    [{name:'上海'}, {name:'呼和浩特',value:125}],
    [{name:'上海'}, {name:'石家庄',value:245}],
    [{name:'上海'}, {name:'乌鲁木齐',value:103}],
    [{name:'上海'}, {name:'兰州',value:425}],
    [{name:'上海'}, {name:'西宁',value:54}],
    [{name:'上海'}, {name:'西安',value:120}],
    [{name:'上海'}, {name:'银川',value:50}],
    [{name:'上海'}, {name:'郑州',value:735}],
    [{name:'上海'}, {name:'济南',value:625}],
    [{name:'上海'}, {name:'太原',value:590}],
    [{name:'上海'}, {name:'合肥',value:515}],
    [{name:'上海'}, {name:'武汉',value:320}],
    [{name:'上海'}, {name:'长沙',value:615}],
    [{name:'上海'}, {name:'南京',value:515}],
    [{name:'上海'}, {name:'成都',value:640}],
    [{name:'上海'}, {name:'贵阳',value:110}],
    [{name:'上海'}, {name:'昆明',value:485}],
    [{name:'上海'}, {name:'南宁',value:405}],
    [{name:'上海'}, {name:'拉萨',value:5}],
    [{name:'上海'}, {name:'杭州',value:270}],
    [{name:'上海'}, {name:'南昌',value:480}],
    [{name:'上海'}, {name:'广州',value:295}],
    [{name:'上海'}, {name:'福州',value:310}],
    [{name:'上海'}, {name:'海口',value:105}]
];
var dataPoint4 = [
    {name:'北京',value:112},
    {name:'天津',value:65},
    {name:'重庆',value:170},
    {name:'哈尔滨',value:625},
    {name:'长春',value:280},
    {name:'沈阳',value:495},
    {name:'呼和浩特',value:125},
    {name:'石家庄',value:245},
    {name:'乌鲁木齐',value:90},
    {name:'兰州',value:425},
    {name:'西宁',value:30},
    {name:'西安',value:120},
    {name:'银川',value:50},
    {name:'郑州',value:735},
    {name:'济南',value:625},
    {name:'太原',value:590},
    {name:'合肥',value:515},
    {name:'武汉',value:320},
    {name:'长沙',value:615},
    {name:'南京',value:515},
    {name:'成都',value:640},
    {name:'贵阳',value:110},
    {name:'昆明',value:485},
    {name:'南宁',value:405},
    {name:'拉萨',value:5},
    {name:'杭州',value:270},
    {name:'南昌',value:480},
    {name:'广州',value:295},
    {name:'福州',value:310},
    {name:'海口',value:105}
];
var dataLine5 = [
    [{name:'东莞'}, {name:'北京',value:112}],
    [{name:'东莞'}, {name:'上海',value:85}],
    [{name:'东莞'}, {name:'天津',value:65}],
    [{name:'东莞'}, {name:'重庆',value:170}],
    [{name:'东莞'}, {name:'哈尔滨',value:625}],
    [{name:'东莞'}, {name:'长春',value:280}],
    [{name:'东莞'}, {name:'沈阳',value:491}],
    [{name:'东莞'}, {name:'呼和浩特',value:121}],
    [{name:'东莞'}, {name:'石家庄',value:245}],
    [{name:'东莞'}, {name:'乌鲁木齐',value:111}],
    [{name:'东莞'}, {name:'兰州',value:421}],
    [{name:'东莞'}, {name:'西宁',value:54}],
    [{name:'东莞'}, {name:'西安',value:120}],
    [{name:'东莞'}, {name:'银川',value:44}],
    [{name:'东莞'}, {name:'郑州',value:735}],
    [{name:'东莞'}, {name:'济南',value:625}],
    [{name:'东莞'}, {name:'太原',value:590}],
    [{name:'东莞'}, {name:'合肥',value:515}],
    [{name:'东莞'}, {name:'武汉',value:320}],
    [{name:'东莞'}, {name:'长沙',value:615}],
    [{name:'东莞'}, {name:'南京',value:515}],
    [{name:'东莞'}, {name:'成都',value:640}],
    [{name:'东莞'}, {name:'贵阳',value:110}],
    [{name:'东莞'}, {name:'昆明',value:485}],
    [{name:'东莞'}, {name:'南宁',value:405}],
    [{name:'东莞'}, {name:'拉萨',value:4}],
    [{name:'东莞'}, {name:'杭州',value:270}],
    [{name:'东莞'}, {name:'南昌',value:480}],
    [{name:'东莞'}, {name:'广州',value:295}],
    [{name:'东莞'}, {name:'福州',value:310}],
    [{name:'东莞'}, {name:'海口',value:99}]
];
var dataPoint5 = [
    {name:'北京',value:112},
    {name:'上海',value:85},
    {name:'天津',value:65},
    {name:'重庆',value:170},
    {name:'哈尔滨',value:621},
    {name:'长春',value:280},
    {name:'沈阳',value:495},
    {name:'呼和浩特',value:111},
    {name:'石家庄',value:245},
    {name:'乌鲁木齐',value:111},
    {name:'兰州',value:425},
    {name:'西宁',value:30},
    {name:'西安',value:120},
    {name:'银川',value:44},
    {name:'郑州',value:735},
    {name:'济南',value:625},
    {name:'太原',value:590},
    {name:'合肥',value:515},
    {name:'武汉',value:320},
    {name:'长沙',value:615},
    {name:'南京',value:515},
    {name:'成都',value:640},
    {name:'贵阳',value:110},
    {name:'昆明',value:485},
    {name:'南宁',value:405},
    {name:'拉萨',value:4},
    {name:'杭州',value:270},
    {name:'南昌',value:480},
    {name:'广州',value:295},
    {name:'福州',value:310},
    {name:'海口',value:101}
];
var dataLine6 = [
    [{name:'南康'}, {name:'北京',value:112}],
    [{name:'南康'}, {name:'上海',value:85}],
    [{name:'南康'}, {name:'天津',value:65}],
    [{name:'南康'}, {name:'重庆',value:170}],
    [{name:'南康'}, {name:'哈尔滨',value:625}],
    [{name:'南康'}, {name:'长春',value:280}],
    [{name:'南康'}, {name:'沈阳',value:495}],
    [{name:'南康'}, {name:'呼和浩特',value:125}],
    [{name:'南康'}, {name:'石家庄',value:245}],
    [{name:'南康'}, {name:'乌鲁木齐',value:103}],
    [{name:'南康'}, {name:'兰州',value:405}],
    [{name:'南康'}, {name:'西宁',value:35}],
    [{name:'南康'}, {name:'西安',value:110}],
    [{name:'南康'}, {name:'银川',value:50}],
    [{name:'南康'}, {name:'郑州',value:735}],
    [{name:'南康'}, {name:'济南',value:625}],
    [{name:'南康'}, {name:'太原',value:590}],
    [{name:'南康'}, {name:'合肥',value:515}],
    [{name:'南康'}, {name:'武汉',value:320}],
    [{name:'南康'}, {name:'长沙',value:615}],
    [{name:'南康'}, {name:'南京',value:515}],
    [{name:'南康'}, {name:'成都',value:640}],
    [{name:'南康'}, {name:'贵阳',value:110}],
    [{name:'南康'}, {name:'昆明',value:485}],
    [{name:'南康'}, {name:'南宁',value:405}],
    [{name:'南康'}, {name:'拉萨',value:5}],
    [{name:'南康'}, {name:'杭州',value:270}],
    [{name:'南康'}, {name:'南昌',value:480}],
    [{name:'南康'}, {name:'广州',value:295}],
    [{name:'南康'}, {name:'福州',value:310}],
    [{name:'南康'}, {name:'海口',value:105}]
];
var dataPoint6 = [
    {name:'北京',value:112},
    {name:'上海',value:85},
    {name:'天津',value:65},
    {name:'重庆',value:170},
    {name:'哈尔滨',value:625},
    {name:'长春',value:280},
    {name:'沈阳',value:495},
    {name:'呼和浩特',value:125},
    {name:'石家庄',value:245},
    {name:'乌鲁木齐',value:90},
    {name:'兰州',value:405},
    {name:'西宁',value:35},
    {name:'西安',value:110},
    {name:'银川',value:50},
    {name:'郑州',value:735},
    {name:'济南',value:625},
    {name:'太原',value:590},
    {name:'合肥',value:515},
    {name:'武汉',value:320},
    {name:'长沙',value:615},
    {name:'南京',value:515},
    {name:'成都',value:640},
    {name:'贵阳',value:110},
    {name:'昆明',value:485},
    {name:'南宁',value:405},
    {name:'拉萨',value:5},
    {name:'杭州',value:270},
    {name:'南昌',value:480},
    {name:'广州',value:295},
    {name:'福州',value:310},
    {name:'海口',value:105}
];
var dataLine7 = [
    [{name:'成都'}, {name:'北京',value:102}],
    [{name:'成都'}, {name:'上海',value:75}],
    [{name:'成都'}, {name:'天津',value:59}],
    [{name:'成都'}, {name:'重庆',value:160}],
    [{name:'成都'}, {name:'哈尔滨',value:615}],
    [{name:'成都'}, {name:'长春',value:270}],
    [{name:'成都'}, {name:'沈阳',value:485}],
    [{name:'成都'}, {name:'呼和浩特',value:125}],
    [{name:'成都'}, {name:'石家庄',value:245}],
    [{name:'成都'}, {name:'乌鲁木齐',value:103}],
    [{name:'成都'}, {name:'兰州',value:425}],
    [{name:'成都'}, {name:'西宁',value:54}],
    [{name:'成都'}, {name:'西安',value:120}],
    [{name:'成都'}, {name:'银川',value:50}],
    [{name:'成都'}, {name:'郑州',value:735}],
    [{name:'成都'}, {name:'济南',value:625}],
    [{name:'成都'}, {name:'太原',value:590}],
    [{name:'成都'}, {name:'合肥',value:515}],
    [{name:'成都'}, {name:'武汉',value:320}],
    [{name:'成都'}, {name:'长沙',value:615}],
    [{name:'成都'}, {name:'南京',value:515}],
    [{name:'成都'}, {name:'贵阳',value:110}],
    [{name:'成都'}, {name:'昆明',value:485}],
    [{name:'成都'}, {name:'南宁',value:405}],
    [{name:'成都'}, {name:'拉萨',value:3}],
    [{name:'成都'}, {name:'杭州',value:270}],
    [{name:'成都'}, {name:'南昌',value:480}],
    [{name:'成都'}, {name:'广州',value:295}],
    [{name:'成都'}, {name:'福州',value:310}],
    [{name:'成都'}, {name:'海口',value:105}]
];
var dataPoint7 = [
    {name:'北京',value:102},
    {name:'上海',value:75},
    {name:'天津',value:55},
    {name:'重庆',value:160},
    {name:'哈尔滨',value:615},
    {name:'长春',value:270},
    {name:'沈阳',value:485},

    {name:'呼和浩特',value:125},
    {name:'石家庄',value:245},
    {name:'乌鲁木齐',value:90},
    {name:'兰州',value:425},
    {name:'西宁',value:30},
    {name:'西安',value:120},
    {name:'银川',value:50},
    {name:'郑州',value:735},
    {name:'济南',value:625},
    {name:'太原',value:590},
    {name:'合肥',value:515},
    {name:'武汉',value:320},
    {name:'长沙',value:615},
    {name:'南京',value:515},
    {name:'贵阳',value:110},
    {name:'昆明',value:485},
    {name:'南宁',value:405},
    {name:'拉萨',value:3},
    {name:'杭州',value:270},
    {name:'南昌',value:480},
    {name:'广州',value:295},
    {name:'福州',value:310},
    {name:'海口',value:105}
];
var dataLine8 = [
    [{name:'廊坊'}, {name:'北京',value:108}],
    [{name:'廊坊'}, {name:'上海',value:81}],
    [{name:'廊坊'}, {name:'天津',value:61}],
    [{name:'廊坊'}, {name:'重庆',value:166}],
    [{name:'廊坊'}, {name:'哈尔滨',value:621}],
    [{name:'廊坊'}, {name:'长春',value:276}],
    [{name:'廊坊'}, {name:'沈阳',value:491}],
    [{name:'廊坊'}, {name:'呼和浩特',value:121}],
    [{name:'廊坊'}, {name:'石家庄',value:241}],
    [{name:'廊坊'}, {name:'乌鲁木齐',value:99}],
    [{name:'廊坊'}, {name:'兰州',value:421}],
    [{name:'廊坊'}, {name:'西宁',value:49}],
    [{name:'廊坊'}, {name:'西安',value:116}],
    [{name:'廊坊'}, {name:'银川',value:46}],
    [{name:'廊坊'}, {name:'郑州',value:731}],
    [{name:'廊坊'}, {name:'济南',value:621}],
    [{name:'廊坊'}, {name:'太原',value:586}],
    [{name:'廊坊'}, {name:'合肥',value:511}],
    [{name:'廊坊'}, {name:'武汉',value:316}],
    [{name:'廊坊'}, {name:'长沙',value:615}],
    [{name:'廊坊'}, {name:'南京',value:511}],
    [{name:'廊坊'}, {name:'成都',value:636}],
    [{name:'廊坊'}, {name:'贵阳',value:106}],
    [{name:'廊坊'}, {name:'昆明',value:481}],
    [{name:'廊坊'}, {name:'南宁',value:401}],
    [{name:'廊坊'}, {name:'拉萨',value:1}],
    [{name:'廊坊'}, {name:'杭州',value:266}],
    [{name:'廊坊'}, {name:'南昌',value:476}],
    [{name:'廊坊'}, {name:'广州',value:291}],
    [{name:'廊坊'}, {name:'福州',value:306}],
    [{name:'廊坊'}, {name:'海口',value:101}]
];
var dataPoint8 = [
    {name:'北京',value:108},
    {name:'上海',value:81},
    {name:'天津',value:61},
    {name:'重庆',value:166},
    {name:'哈尔滨',value:621},
    {name:'长春',value:276},
    {name:'沈阳',value:491},
    {name:'呼和浩特',value:121},
    {name:'石家庄',value:241},
    {name:'乌鲁木齐',value:86},
    {name:'兰州',value:421},
    {name:'西宁',value:26},
    {name:'西安',value:116},
    {name:'银川',value:46},
    {name:'郑州',value:731},
    {name:'济南',value:621},
    {name:'太原',value:586},
    {name:'合肥',value:511},
    {name:'武汉',value:316},
    {name:'长沙',value:611},
    {name:'南京',value:511},
    {name:'成都',value:636},
    {name:'贵阳',value:106},
    {name:'昆明',value:481},
    {name:'南宁',value:401},
    {name:'拉萨',value:1},
    {name:'杭州',value:266},
    {name:'南昌',value:476},
    {name:'广州',value:291},
    {name:'福州',value:306},
    {name:'海口',value:101}
];
var dataLine9 = [
    [{name:'苏州'}, {name:'北京',value:102}],
    [{name:'苏州'}, {name:'上海',value:82}],
    [{name:'苏州'}, {name:'天津',value:65}],
    [{name:'苏州'}, {name:'重庆',value:170}],
    [{name:'苏州'}, {name:'哈尔滨',value:625}],
    [{name:'苏州'}, {name:'长春',value:280}],
    [{name:'苏州'}, {name:'沈阳',value:495}],
    [{name:'苏州'}, {name:'呼和浩特',value:125}],
    [{name:'苏州'}, {name:'石家庄',value:245}],
    [{name:'苏州'}, {name:'乌鲁木齐',value:103}],
    [{name:'苏州'}, {name:'兰州',value:425}],
    [{name:'苏州'}, {name:'西宁',value:54}],
    [{name:'苏州'}, {name:'西安',value:120}],
    [{name:'苏州'}, {name:'银川',value:50}],
    [{name:'苏州'}, {name:'郑州',value:735}],
    [{name:'苏州'}, {name:'济南',value:625}],
    [{name:'苏州'}, {name:'太原',value:590}],
    [{name:'苏州'}, {name:'合肥',value:515}],
    [{name:'苏州'}, {name:'武汉',value:320}],
    [{name:'苏州'}, {name:'长沙',value:615}],
    [{name:'苏州'}, {name:'南京',value:515}],
    [{name:'苏州'}, {name:'成都',value:640}],
    [{name:'苏州'}, {name:'贵阳',value:110}],
    [{name:'苏州'}, {name:'昆明',value:485}],
    [{name:'苏州'}, {name:'南宁',value:405}],
    [{name:'苏州'}, {name:'拉萨',value:1}],
    [{name:'苏州'}, {name:'杭州',value:270}],
    [{name:'苏州'}, {name:'南昌',value:480}],
    [{name:'苏州'}, {name:'广州',value:295}],
    [{name:'苏州'}, {name:'福州',value:310}],
    [{name:'苏州'}, {name:'海口',value:102}]
];
var dataPoint9 = [
    {name:'北京',value:102},
    {name:'上海',value:82},
    {name:'天津',value:62},
    {name:'重庆',value:170},
    {name:'哈尔滨',value:625},
    {name:'长春',value:280},
    {name:'沈阳',value:495},
    {name:'呼和浩特',value:125},
    {name:'石家庄',value:245},
    {name:'乌鲁木齐',value:90},
    {name:'兰州',value:425},
    {name:'西宁',value:30},
    {name:'西安',value:120},
    {name:'银川',value:50},
    {name:'郑州',value:735},
    {name:'济南',value:625},
    {name:'太原',value:590},
    {name:'合肥',value:515},
    {name:'武汉',value:320},
    {name:'长沙',value:615},
    {name:'南京',value:515},
    {name:'成都',value:640},
    {name:'贵阳',value:110},
    {name:'昆明',value:485},
    {name:'南宁',value:405},
    {name:'拉萨',value:1},
    {name:'杭州',value:270},
    {name:'南昌',value:480},
    {name:'广州',value:295},
    {name:'福州',value:310},
    {name:'海口',value:102}
];
var routeMapOption = {
    backgroundColor: '#0d1215',
    color: ['#009933', '#00ffcc', '#3300ff','#333300','#660000','#cccc00','#ff3300','#cc33ff','#99ff00'],
    title: {
        text: '全国物流干线云图',
        x: 'left',
        subtext: '覆盖全国343个城市，总主要干线数目13895条',
        textStyle: {
            color: '#fff',
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 20,
            color: '#ddd'
        }
    },
    tooltip: {
        show: true,
        zlevel: 1,
        trigger: 'item',
        formatter: function(params,ticket,callback){
            for(var i=0;i<toolTipText.length;i++){
                if(toolTipText[i].name==params[1]){
                    break;
                }
            }
            return toolTipText[i].name+"<br>覆盖县区："+toolTipText[i].countyNum+"<br>主要干线数："+toolTipText[i].lineNum;
        },
        backgroundColor: "rgba(0,0,0,0.7)",
        borderColor: "#333",
        borderRadius: 3,
        padding: [5,10,5,10],
        textStyle: {
            color: "#fff",
            fontSize: 15
        }
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y: "bottom",
        data: ['青岛','佛山','北京','上海','东莞','南康','成都','廊坊','苏州'],
        selectedMode: 'single',
        selected: {
            '佛山': false,
            '北京': false,
            '上海': false,
            '东莞': false,
            '南康': false,
            '成都': false,
            '廊坊': false,
            '苏州': false
        },
        textStyle: {
            color: '#fff'
        }
    },
    dataRange: {
        min: 0,
        max: 650,
        splitNumber: 0,
        calculable: false,
        selectedMode: false,
        color: ['red', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [
        {
            name: '全国',
            type: 'map',
            roam: false,
            hoverable: false, //悬浮区高亮
            mapType: 'china',
            itemStyle: {
                normal: {
                    borderColor: '#6495ed',
                    borderWidth: 1,
                    areaStyle: {
                        color: '#0d1215'
                    }
                }
            },
            data: [],
            geoCoord: geoCoordMap1
        },
        {
            name: '青岛',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: dataLine1
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 300
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
//                    emphasis: {
//                        label: {
//                            position: 'top',
//                            formatter: function(val){
//                                return "地区："+val.name+"<br>干线数："+val.value;
//                            }
//                        }
//                    }
                },
                data: dataPoint1
            }
        },
        {
            name: '佛山',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: dataLine2
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 300
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
//                    emphasis: {
//                        label: {
//                            position: 'top',
//                            formatter: function(val){
//                                return "地区："+val.name+"<br>干线数："+val.value;
//                            }
//                        }
//                    }
                },
                data: dataPoint2
            }
        },
        {
            name: '北京',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: dataLine3
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 300
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
//                    emphasis: {
//                        label: {
//                            position: 'top',
//                            formatter: function(val){
//                                return "地区："+val.name+"<br>干线数："+val.value;
//                            }
//                        }
//                    }
                },
                data: dataPoint3
            }
        },
        {
            name: '上海',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: dataLine4
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 300
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
//                    emphasis: {
//                        label: {
//                            position: 'top',
//                            formatter: function(val){
//                                return "地区："+val.name+"<br>干线数："+val.value;
//                            }
//                        }
//                    }
                },
                data: dataPoint4
            }
        },
        {
            name: '东莞',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: dataLine5
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 300
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
//                    emphasis: {
//                        label: {
//                            position: 'top',
//                            formatter: function(val){
//                                return "地区："+val.name+"<br>干线数："+val.value;
//                            }
//                        }
//                    }
                },
                data: dataPoint5
            }
        },
        {
            name: '南康',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: dataLine6
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 300
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
//                    emphasis: {
//                        label: {
//                            position: 'top',
//                            formatter: function(val){
//                                return "地区："+val.name+"<br>干线数："+val.value;
//                            }
//                        }
//                    }
                },
                data: dataPoint6
            }
        },
        {
            name: '成都',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: dataLine7
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 300
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
//                    emphasis: {
//                        label: {
//                            position: 'top',
//                            formatter: function(val){
//                                return "地区："+val.name+"<br>干线数："+val.value;
//                            }
//                        }
//                    }
                },
                data: dataPoint7
            }
        },
        {
            name: '廊坊',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: dataLine8
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 300
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
//                    emphasis: {
//                        label: {
//                            position: 'top',
//                            formatter: function(val){
//                                return "地区："+val.name+"<br>干线数："+val.value;
//                            }
//                        }
//                    }
                },
                data: dataPoint8
            }
        },
        {
            name: '苏州',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: dataLine9
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function (v) {
                    return 10 + v / 300
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
//                    emphasis: {
//                        label: {
//                            position: 'top',
//                            formatter: function(val){
//                                return "地区："+val.name+"<br>干线数："+val.value;
//                            }
//                        }
//                    }
                },
                data: dataPoint9
            }
        }
    ]
};
var geoCoordMap2 = {
    '安庆':[117.0701,30.5488],
    '蚌埠':[117.3964,32.9418],
    '亳州':[115.7883,33.8510],
    '池州':[117.496833,30.67098],
    "海门":[121.15,31.89],
    "鄂尔多斯":[109.781327,39.608266],
    "招远":[120.38,37.35],
    "舟山":[122.207216,29.985295],
    "齐齐哈尔":[123.97,47.33],
    "盐城":[120.13,33.38],
    "赤峰":[118.87,42.28],
    "青岛":[120.33,36.07],
    "乳山":[121.52,36.89],
    "金昌":[102.188043,38.520089],
    "泉州":[118.58,24.93],
    "莱西":[120.53,36.86],
    "日照":[119.46,35.42],
    "胶南":[119.97,35.88],
    "南通":[121.05,32.08],
    "拉萨":[91.11,29.97],
    "云浮":[112.02,22.93],
    "梅州":[116.1,24.55],
    "文登":[122.05,37.2],
    "上海":[121.48,31.22],
    "攀枝花":[101.718637,26.582347],
    "威海":[122.1,37.5],
    "承德":[117.93,40.97],
    "厦门":[118.1,24.46],
    "汕尾":[115.375279,22.786211],
    "潮州":[116.63,23.68],
    "丹东":[124.37,40.13],
    "太仓":[121.1,31.45],
    "曲靖":[103.79,25.51],
    "烟台":[121.39,37.52],
    "福州":[119.3,26.08],
    "瓦房店":[121.979603,39.627114],
    "即墨":[120.45,36.38],
    "抚顺":[123.97,41.97],
    "玉溪":[102.52,24.35],
    "张家口":[114.87,40.82],
    "阳泉":[113.57,37.85],
    "莱州":[119.942327,37.177017],
    "湖州":[120.1,30.86],
    "汕头":[116.69,23.39],
    "昆山":[120.95,31.39],
    "宁波":[121.56,29.86],
    "湛江":[110.359377,21.270708],
    "揭阳":[116.35,23.55],
    "荣成":[122.41,37.16],
    "连云港":[119.16,34.59],
    "葫芦岛":[120.836932,40.711052],
    "常熟":[120.74,31.64],
    "东莞":[113.75,23.04],
    "河源":[114.68,23.73],
    "淮安":[119.15,33.5],
    "泰州":[119.9,32.49],
    "南宁":[108.33,22.84],
    "营口":[122.18,40.65],
    "惠州":[114.4,23.09],
    "江阴":[120.26,31.91],
    "蓬莱":[120.75,37.8],
    "韶关":[113.62,24.84],
    "嘉峪关":[98.289152,39.77313],
    "广州":[113.23,23.16],
    "延安":[109.47,36.6],
    "太原":[112.53,37.87],
    "清远":[113.01,23.7],
    "中山":[113.38,22.52],
    "昆明":[102.73,25.04],
    "寿光":[118.73,36.86],
    "盘锦":[122.070714,41.119997],
    "长治":[113.08,36.18],
    "深圳":[114.07,22.62],
    "珠海":[113.52,22.3],
    "宿迁":[118.3,33.96],
    "咸阳":[108.72,34.36],
    "铜川":[109.11,35.09],
    "平度":[119.97,36.77],
    "佛山":[113.11,23.05],
    "海口":[110.35,20.02],
    "江门":[113.06,22.61],
    "章丘":[117.53,36.72],
    "肇庆":[112.44,23.05],
    "大连":[121.62,38.92],
    "临汾":[111.5,36.08],
    "吴江":[120.63,31.16],
    "石嘴山":[106.39,39.04],
    "沈阳":[123.38,41.8],
    "苏州":[120.62,31.32],
    "茂名":[110.88,21.68],
    "嘉兴":[120.76,30.77],
    "长春":[125.35,43.88],
    "胶州":[120.03336,36.264622],
    "银川":[106.27,38.47],
    "张家港":[120.555821,31.875428],
    "三门峡":[111.19,34.76],
    "锦州":[121.15,41.13],
    "南昌":[115.89,28.68],
    "柳州":[109.4,24.33],
    "三亚":[109.511909,18.252847],
    "自贡":[104.778442,29.33903],
    "吉林":[126.57,43.87],
    "阳江":[111.95,21.85],
    "泸州":[105.39,28.91],
    "西宁":[101.74,36.56],
    "宜宾":[104.56,29.77],
    "呼和浩特":[111.65,40.82],
    "成都":[104.06,30.67],
    "大同":[113.3,40.12],
    "镇江":[119.44,32.2],
    "桂林":[110.28,25.29],
    "张家界":[110.479191,29.117096],
    "宜兴":[119.82,31.36],
    "北海":[109.12,21.49],
    "西安":[108.95,34.27],
    "金坛":[119.56,31.74],
    "东营":[118.49,37.46],
    "牡丹江":[129.58,44.6],
    "遵义":[106.9,27.7],
    "绍兴":[120.58,30.01],
    "扬州":[119.42,32.39],
    "常州":[119.95,31.79],
    "潍坊":[119.1,36.62],
    "重庆":[106.54,29.59],
    "台州":[121.420757,28.656386],
    "南京":[118.78,32.04],
    "滨州":[118.03,37.36],
    "贵阳":[106.71,26.57],
    "无锡":[120.29,31.59],
    "本溪":[123.73,41.3],
    "克拉玛依":[84.77,45.59],
    "渭南":[109.5,34.52],
    "马鞍山":[118.48,31.56],
    "宝鸡":[107.15,34.38],
    "焦作":[113.21,35.24],
    "句容":[119.16,31.95],
    "北京":[116.46,39.92],
    "徐州":[117.2,34.26],
    "衡水":[115.72,37.72],
    "包头":[110,40.58],
    "绵阳":[104.73,31.48],
    "乌鲁木齐":[87.68,43.77],
    "枣庄":[117.57,34.86],
    "杭州":[120.19,30.26],
    "淄博":[118.05,36.78],
    "鞍山":[122.85,41.12],
    "溧阳":[119.48,31.43],
    "库尔勒":[86.06,41.68],
    "安阳":[114.35,36.1],
    "开封":[114.35,34.79],
    "济南":[117,36.65],
    "德阳":[104.37,31.13],
    "温州":[120.65,28.01],
    "九江":[115.97,29.71],
    "邯郸":[114.47,36.6],
    "临安":[119.72,30.23],
    "兰州":[103.73,36.03],
    "沧州":[116.83,38.33],
    "临沂":[118.35,35.05],
    "南充":[106.110698,30.837793],
    "天津":[117.2,39.13],
    "富阳":[119.95,30.07],
    "泰安":[117.13,36.18],
    "诸暨":[120.23,29.71],
    "郑州":[113.65,34.76],
    "哈尔滨":[126.63,45.75],
    "聊城":[115.97,36.45],
    "芜湖":[118.38,31.33],
    "唐山":[118.02,39.63],
    "平顶山":[113.29,33.75],
    "邢台":[114.48,37.05],
    "德州":[116.29,37.45],
    "济宁":[116.59,35.38],
    "荆州":[112.239741,30.335165],
    "宜昌":[111.3,30.7],
    "义乌":[120.06,29.32],
    "丽水":[119.92,28.45],
    "洛阳":[112.44,34.7],
    "秦皇岛":[119.57,39.95],
    "株洲":[113.16,27.83],
    "石家庄":[114.48,38.03],
    "莱芜":[117.67,36.19],
    "常德":[111.69,29.05],
    "保定":[115.48,38.85],
    "湘潭":[112.91,27.87],
    "金华":[119.64,29.12],
    "岳阳":[113.09,29.37],
    "长沙":[113,28.21],
    "衢州":[118.88,28.97],
    "廊坊":[116.7,39.53],
    "菏泽":[115.480656,35.23375],
    "合肥":[117.27,31.86],
    "武汉":[114.31,30.52],
    "大庆":[125.03,46.58],
    '滁州':[118.3168076576,32.3018020549],
'阜阳':[115.8149456506,32.8896437071],
'淮北':[116.7849677407,33.9539432420],
'淮南':[117.0121778645,32.6365542218],
'黄山':[118.1704482453,30.1279790828],
'六安':[116.5232450781,31.7349000372],
'宿州':[116.9638928232,33.6461013043],
'铜陵':[117.8123354820,30.9448126764],
'宣城':[118.7586729248,30.9406689685],
'龙岩':[117.0171943446,25.0749909324],
'南平':[118.1778175347,26.6415738794],
'宁德':[119.5482064731,26.6656539085],
'莆田':[119.077731,25.44845],
'三明':[117.642194,26.270835],
'漳州':[117.676205,24.517065],
'白银':[104.1377016197,36.5447797525],
'定西':[104.626638,35.586056],
'甘南藏族自治州':[102.917442,34.992211],
'酒泉':[98.508415,39.741474],
'临夏回族自治州':[103.215249,35.598514],
'陇南':[104.934573,33.39448],
'陇南市':[104.9216563673,33.4010229679],
'平凉':[106.688911,35.55011],
'庆阳':[107.644227,35.726801],
'天水':[116.257648,39.910558],
'武威':[102.640147,37.933172],
'张掖':[100.459892,38.93932],
'清远':[113.040773,23.698469],
'韶关':[113.594461,24.80296],
'百色':[106.631821,23.901512],
'北海':[116.396208,39.936164],
'崇左':[107.357322,22.415455],
'防城港':[108.351791,21.617398],
'贵港':[109.613708,23.103373],
'河池':[108.069948,24.699521],
'贺州':[111.552594,24.411054],
'来宾':[109.231817,23.741166],
'钦州':[108.638798,21.97335],
'梧州':[111.305472,23.485395],
'玉林':[116.480904,39.889818],
'安顺':[105.92827,26.228595],
'毕节':[105.300492,27.302612],
'毕节地区':[105.3267732232,27.4026637868],
'六盘水':[104.852087,26.591866],
'黔东南':[107.985353,26.583992],
'黔南':[107.523205,26.264536],
'黔西':[104.900558,25.095148],
'铜仁地区':[109.196161,27.726271],
'鹤壁':[114.29777,35.755426],
'漯河':[114.046061,33.576279],
'南阳':[116.78299,39.800922],
'濮阳':[115.026627,35.753298],
'商丘':[115.641886,34.438589],
'新乡':[113.91269,35.307258],
'信阳':[114.085491,32.128582],
'许昌':[113.835312,34.02674],
'周口':[114.654102,33.623741],
'驻马店':[114.049154,32.983158],
'鹤岗':[130.292472,47.338666],
'黑河':[116.462908,40.720364],
'鸡西':[130.941767,45.32154],
'佳木斯':[130.284735,46.81378],
'七台河':[131.019048,45.775005],
'双鸭山':[131.171402,46.655102],
'绥化':[126.989095,46.646064],
'伊春':[128.8405506842,47.7274131347],
'鄂州':[114.895594,30.384439],
'恩施':[109.4881949180,30.2721475779],
'黄冈':[114.906618,30.446109],
'黄石':[115.050683,30.216127],
'荆门':[112.21733,31.042611],
'潜江':[112.768768,30.343116],
'神农架林区':[110.487231,31.595768],
'十堰':[110.801229,32.636994], 
'随州':[113.379358,31.717858],
'天门':[116.629204,40.392782],
'仙桃':[113.387448,30.293966],
'咸宁':[114.300061,29.880657],
'襄阳':[112.250093,32.229169],
'孝感':[113.935734,30.927955],
'郴州':[113.037704,25.782264],
'衡阳':[112.583819,26.898164],
'怀化':[109.986959,27.557483],
'娄底':[111.996396,27.741073],
'邵阳':[111.461525,27.236811],
'湘西':[109.745746,28.317951],
'益阳':[112.366547,28.588088],
'永州':[111.614648,26.435972],
'白城':[122.840777,45.621086],
'白山':[126.435798,41.945859],
'辽源':[125.133686,42.923303],
'四平':[124.391382,43.175525],
'松原':[124.832995,45.136049],
'通化':[125.94265,41.736397],
'延边朝鲜族自治州':[129.485902,42.896414],
'抚州':[116.360919,27.954545],
'赣州':[114.9347459903,25.8310819056],
'吉安':[114.992039,27.113848],
'景德镇':[116.43483,39.911581],
'萍乡':[113.859917,27.639544],
'上饶':[117.955464,28.457623],
'新余':[114.947117,27.822322],
'宜春':[114.400039,27.81113],
'鹰潭':[117.03545,28.24131],
'朝阳':[116.521695,39.958953],
'阜新':[121.660822,42.01925],
'辽阳':[123.172451,41.273339],
'铁岭':[123.85485,42.299757],
'阿拉善盟':[105.695683,38.843075],
'巴彦淖尔':[107.423807,40.76918],
'呼伦贝尔':[119.760822,49.201636],
'通辽':[122.260363,43.633756],
'乌海':[106.831999,39.683177],
'乌兰察布':[113.112846,41.022363],
'锡林郭勒盟':[116.02734,43.939705],
'兴安盟':[122.048167,46.083757],
'固原':[106.285268,36.021523],
'吴忠':[106.1987957143,37.9975611374],
'中卫':[105.196754,37.521124],
'果洛藏族自治州':[100.223723,34.480485],
'海北藏族自治州':[100.879802,36.960654],
'海东地区':[102.085207,36.51761],
'海南藏族自治州':[100.624066,36.284364],
'海西蒙古族藏族自治州':[97.342625,37.373799],
'黄南藏族自治州':[102.0076,35.522852],
'玉树藏族自治州':[97.013316,33.00624],
'晋城':[112.867333,35.499834],
'晋中':[112.738514,37.693362],
'吕梁':[111.143157,37.527316],
'朔州':[112.479928,39.337672],
'忻州':[112.727939,38.461031],
'运城':[111.006854,35.038859],
'安康':[109.038045,32.70437],
'汉中':[116.236053,39.900255],
'商洛':[109.934208,33.873907],
'榆林':[116.714368,40.219264],
'阿坝藏族羌族自治州':[102.228565,31.905763],
'巴中':[106.757916,31.869189],
'达州':[107.494973,31.214199],
'甘孜藏族自治州':[101.969232,30.055144],
'广安':[106.6332127973,30.4559516042],
'广元':[105.819687,32.44104],
'乐山':[103.760824,29.600958],
'凉山彝族自治州':[102.259591,27.892393],
'眉山':[103.84143,30.061115],
'内江':[105.073056,29.599462],
'遂宁':[105.564888,30.557491],
'雅安':[103.009356,29.999716],
'资阳':[104.6279566346,30.1286587499],
'阿克苏':[81.156013,40.349444],
'阿克苏地区':[80.269846,41.171731],
'阿拉尔':[81.291737,40.61568],
'阿勒泰':[88.1324314525,47.8270180370],
'阿勒泰地区':[88.137915,47.839744],
'巴音郭楞蒙古自治州':[86.121688,41.771362],
'博尔塔拉蒙古自治州':[82.052436,44.913651],
'昌吉回族自治州':[87.296038,44.007058],
'哈密':[93.5146794887,42.8269476632],
'和田':[79.9014036803,36.5724551322],
'和田地区':[79.930239,37.116774],
'喀什':[75.9938033475,39.4676966572],
'喀什地区':[75.992973,39.470627],
'克孜勒苏柯尔克孜自治州':[76.137564,39.750346],
'石河子':[86.041865,44.308259],
'塔城':[82.987006,467346.7514583141],
'图木舒克':[79.198155,39.889223],
'吐鲁番':[89.266025,42.678925],
'吐鲁番地区':[89.181595,42.96047],
'伊犁哈萨克自治州':[81.297854,43.922248],
'保山':[99.177996,25.120489],
'楚雄':[101.5276793723,25.0449325880],
'大理':[100.2676354299,25.6065028445],
'德宏':[98.5848570082,24.4323287185],
'迪庆':[99.713682,27.83102],
'红河':[103.384065,23.367718],
'丽江':[100.2271274911,26.8563964987],
'临沧':[100.092613,23.887806],
'怒江':[98.859932,25.860677],
'普洱':[100.980058,22.788778],
'普洱市':[100.980058,22.788778],
'文山':[104.2150458886,23.3984813740],
'西双版纳':[100.803038,22.009433],
'昭通':[103.725021,27.340633]
};
var banshiData = [
    {name: "蚌埠", value: 3},
    {name: "亳州", value: 3},
    {name: "池州", value: 3},
    {name: "滁州", value: 3},
    {name: "阜阳", value: 3},
    {name: "淮南", value: 8},
    {name: "黄山", value: 3},
    {name: "六安", value: 2},
    {name: "马鞍山", value: 3},
    {name: "铜陵", value: 4},
    {name: "宿州", value: 2},
    {name: "芜湖", value: 2},
    {name: "宣城", value: 4},
    {name: "北京", value: 12},
    {name: "福州", value: 8},
    {name: "龙岩", value: 4},
    {name: "南平", value: 7},
    {name: "泉州", value: 3},
    {name: "三明", value: 3},
    {name: "厦门", value: 3},
    {name: "漳州", value: 3},
    {name: "酒泉", value: 3},
    {name: "兰州", value: 5},
    {name: "陇南", value: 3},
    {name: "平凉", value: 3},
    {name: "庆阳", value: 3},
    {name: "天水", value: 3},
    {name: "武威", value: 4},
    {name: "张掖", value: 3},
    {name: "潮州", value: 3},
    {name: "佛山", value: 3},
    {name: "广州", value: 5},
    {name: "河源", value: 3},
    {name: "惠州", value: 3},
    {name: "江门", value: 3},
    {name: "梅州", value: 3},
    {name: "清远", value: 3},
    {name: "汕头", value: 3},
    {name: "汕尾", value: 3},
    {name: "韶关", value: 2},
    {name: "深圳", value: 3},
    {name: "东莞", value: 3},
    {name: "湛江", value: 3},
    {name: "肇庆", value: 3},
    {name: "珠海", value: 3},
    {name: "北海", value: 2},
    {name: "贵港", value: 1},
    {name: "桂林", value: 2},
    {name: "河池", value: 2},
    {name: "贺州", value: 3},
    {name: "柳州", value: 4},
    {name: "来宾", value: 3},
    {name: "南宁", value: 2},
    {name: "钦州", value: 5},
    {name: "梧州", value: 3},
    {name: "玉林", value: 3},
    {name: "安顺", value: 3},
    {name: "贵阳", value: 3},
    {name: "黔南", value: 3},
    {name: "遵义", value: 3},
    {name: "海口", value: 3},
    {name: "三亚", value: 3},
    {name: "保定", value: 3},
    {name: "沧州", value: 3},
    {name: "承德", value: 3},
    {name: "邯郸", value: 4},
    {name: "衡水", value: 3},
    {name: "廊坊", value: 3},
    {name: "秦皇岛", value: 3},
    {name: "石家庄", value: 5},
    {name: "唐山", value: 3},
    {name: "邢台", value: 3},
    {name: "张家口", value: 3},
    {name: "焦作", value: 3},
    {name: "开封", value: 3},
    {name: "洛阳", value: 3},
    {name: "南阳", value: 2},
    {name: "商丘", value: 3},
    {name: "新乡", value: 3},
    {name: "信阳", value: 3},
    {name: "许昌", value: 2},
    {name: "郑州", value: 2},
    {name: "周口", value: 3},
    {name: "驻马店", value: 1},
    {name: "大庆", value: 5},
    {name: "哈尔滨", value: 8},
    {name: "鹤岗", value: 3},
    {name: "黑河", value: 2},
    {name: "鸡西", value: 1},
    {name: "双鸭山", value: 2},
    {name: "绥化", value: 3},
    {name: "伊春", value: 3},
    {name: "鄂州", value: 3},
    {name: "恩施", value: 3},
    {name: "黄冈", value: 3},
    {name: "黄石", value: 3},
    {name: "荆门", value: 3},
    {name: "荆州", value: 3},
    {name: "潜江", value: 3},
    {name: "十堰", value: 5},
    {name: "武汉", value: 3},
    {name: "仙桃", value: 3},
    {name: "咸宁", value: 3},
    {name: "襄阳", value: 3},
    {name: "孝感", value: 4},
    {name: "宜昌", value: 3},
    {name: "长沙", value: 3},
    {name: "常德", value: 3},
    {name: "怀化", value: 3},
    {name: "湘西", value: 3},
    {name: "益阳", value: 3},
    {name: "永州", value: 3},
    {name: "岳阳", value: 3},
    {name: "张家界", value: 3},
    {name: "株洲", value: 2},
    {name: "白城", value: 3},
    {name: "白山", value: 3},
    {name: "长春", value: 3},
    {name: "吉林", value: 3},
    {name: "松原", value: 2},
    {name: "通化", value: 3},
    {name: "淮安", value: 4},
    {name: "连云港", value: 3},
    {name: "南京", value: 7},
    {name: "南通", value: 2},
    {name: "苏州", value: 2},
    {name: "宿迁", value: 2},
    {name: "泰州", value: 3},
    {name: "无锡", value: 8},
    {name: "徐州", value: 7},
    {name: "盐城", value: 2},
    {name: "扬州", value: 3},
    {name: "镇江", value: 3},
    {name: "吉安", value: 3},
    {name: "景德镇", value: 3},
    {name: "九江", value: 3},
    {name: "南昌", value: 3},
    {name: "萍乡", value: 3},
    {name: "上饶", value: 3},
    {name: "新余", value: 5},
    {name: "宜春", value: 3},
    {name: "鹰潭", value: 3},
    {name: "鞍山", value: 3},
    {name: "本溪", value: 3},
    {name: "朝阳", value: 3},
    {name: "大连", value: 3},
    {name: "丹东", value: 4},
    {name: "抚顺", value: 3},
    {name: "阜新", value: 3},
    {name: "葫芦岛", value: 3},
    {name: "锦州", value: 5},
    {name: "辽阳", value: 3},
    {name: "盘锦", value: 3},
    {name: "沈阳", value: 3},
    {name: "铁岭", value: 3},
    {name: "营口", value: 3},
    {name: "赤峰", value: 3},
    {name: "鄂尔多斯", value: 2},
    {name: "通辽", value: 3},
    {name: "乌海", value: 3},
    {name: "固原", value: 2},
    {name: "石嘴山", value: 3},
    {name: "吴忠", value: 2},
    {name: "银川", value: 3},
    {name: "中卫", value: 2},
    {name: "西宁", value: 3},
    {name: "玉树藏族自治州", value: 3},
    {name: "滨州", value: 3},
    {name: "德州", value: 3},
    {name: "东营", value: 3},
    {name: "菏泽", value: 3},
    {name: "济南", value: 3},
    {name: "济宁", value: 3},
    {name: "莱芜", value: 3},
    {name: "聊城", value: 3},
    {name: "临沂", value: 3},
    {name: "青岛", value: 13},
    {name: "日照", value: 3},
    {name: "泰安", value: 3},
    {name: "威海", value: 3},
    {name: "潍坊", value: 3},
    {name: "烟台", value: 3},
    {name: "枣庄", value: 3},
    {name: "淄博", value: 3},
    {name: "长治", value: 3},
    {name: "大同", value: 3},
    {name: "晋城", value: 3},
    {name: "晋中", value: 3},
    {name: "临汾", value: 3},
    {name: "吕梁", value: 3},
    {name: "朔州", value: 3},
    {name: "太原", value: 3},
    {name: "忻州", value: 3},
    {name: "阳泉", value: 3},
    {name: "运城", value: 3},
    {name: "安康", value: 3},
    {name: "宝鸡", value: 3},
    {name: "汉中", value: 3},
    {name: "商洛", value: 3},
    {name: "铜川", value: 3},
    {name: "渭南", value: 3},
    {name: "西安", value: 3},
    {name: "咸阳", value: 3},
    {name: "延安", value: 3},
    {name: "榆林", value: 3},
    {name: "上海", value: 3},
    {name: "巴中", value: 3},
    {name: "成都", value: 3},
    {name: "达州", value: 3},
    {name: "德阳", value: 3},
    {name: "广安", value: 3},
    {name: "广元", value: 3},
    {name: "乐山", value: 3},
    {name: "泸州", value: 3},
    {name: "眉山", value: 3},
    {name: "绵阳", value: 3},
    {name: "内江", value: 3},
    {name: "南充", value: 3},
    {name: "攀枝花", value: 3},
    {name: "遂宁", value: 3},
    {name: "雅安", value: 3},
    {name: "宜宾", value: 3},
    {name: "资阳", value: 3},
    {name: "自贡", value: 3},
    {name: "天津", value: 3},
    {name: "拉萨", value: 3},
    {name: "阿克苏", value: 3},
    {name: "昌吉回族自治州", value: 2},
    {name: "哈密", value: 2},
    {name: "喀什", value: 2},
    {name: "喀什地区", value: 2},
    {name: "克拉玛依", value: 2},
    {name: "乌鲁木齐", value: 8},
    {name: "保山", value: 2},
    {name: "楚雄", value: 2},
    {name: "大理", value: 3},
    {name: "德宏", value: 2},
    {name: "迪庆", value: 2},
    {name: "红河", value: 2},
    {name: "昆明", value: 8},
    {name: "丽江", value: 2},
    {name: "临沧", value: 2},
    {name: "怒江", value: 2},
    {name: "普洱", value: 2},
    {name: "普洱市", value: 2},
    {name: "曲靖", value: 2},
    {name: "文山", value: 2},
    {name: "西双版纳", value: 2},
    {name: "玉溪", value: 2},
    {name: "昭通", value: 2},
    {name: "杭州", value: 2},
    {name: "湖州", value: 2},
    {name: "嘉兴", value: 2},
    {name: "金华", value: 2},
    {name: "丽水", value: 2},
    {name: "宁波", value: 2},
    {name: "衢州", value: 2},
    {name: "绍兴", value: 2},
    {name: "台州", value: 2},
    {name: "温州", value: 3},
    {name: "舟山", value: 2},
    {name: "重庆", value: 2}
];
var ruantiData = [
    {name: "安庆", value: 2},
    {name: "蚌埠", value: 3},
    {name: "亳州", value: 3},
    {name: "池州", value: 3},
    {name: "滁州", value: 3},
    {name: "阜阳", value: 3},
    {name: "合肥", value: 3},
    {name: "淮北", value: 9},
    {name: "淮南", value: 8},
    {name: "黄山", value: 8},
    {name: "六安", value: 8},
    {name: "马鞍山", value: 8},
    {name: "铜陵", value: 8},
    {name: "宿州", value: 8},
    {name: "芜湖", value: 8},
    {name: "宣城", value: 8},
    {name: "北京", value: 8},
    {name: "福州", value: 8},
    {name: "龙岩", value: 8},
    {name: "南平", value: 7},
    {name: "宁德", value: 8},
    {name: "莆田", value: 3},
    {name: "泉州", value: 3},
    {name: "三明", value: 3},
    {name: "厦门", value: 3},
    {name: "漳州", value: 3},
    {name: "白银", value: 3},
    {name: "定西", value: 3},
    {name: "甘南藏族自治州", value: 3},
    {name: "嘉峪关", value: 3},
    {name: "酒泉", value: 3},
    {name: "兰州", value: 5},
    {name: "临夏回族自治州", value: 3},
    {name: "陇南", value: 3},
    {name: "陇南市", value: 3},
    {name: "平凉", value: 3},
    {name: "庆阳", value: 3},
    {name: "天水", value: 3},
    {name: "武威", value: 4},
    {name: "张掖", value: 3},
    {name: "潮州", value: 3},
    {name: "佛山", value: 3},
    {name: "广州", value: 5},
    {name: "河源", value: 3},
    {name: "惠州", value: 3},
    {name: "江门", value: 3},
    {name: "揭阳", value: 3},
    {name: "茂名", value: 3},
    {name: "梅州", value: 3},
    {name: "清远", value: 3},
    {name: "汕头", value: 3},
    {name: "汕尾", value: 3},
    {name: "韶关", value: 2},
    {name: "深圳", value: 3},
    {name: "东莞", value: 3},
    {name: "阳江", value: 3},
    {name: "云浮", value: 3},
    {name: "湛江", value: 3},
    {name: "肇庆", value: 3},
    {name: "中山", value: 9},
    {name: "珠海", value: 8},
    {name: "百色", value: 8},
    {name: "北海", value: 8},
    {name: "崇左", value: 8},
    {name: "防城港", value: 8},
    {name: "贵港", value: 8},
    {name: "桂林", value: 8},
    {name: "河池", value: 8},
    {name: "贺州", value: 8},
    {name: "柳州", value: 8},
    {name: "来宾", value: 8},
    {name: "南宁", value: 7},
    {name: "钦州", value: 8},
    {name: "梧州", value: 3},
    {name: "玉林", value: 3},
    {name: "安顺", value: 3},
    {name: "毕节", value: 3},
    {name: "毕节地区", value: 3},
    {name: "贵阳", value: 3},
    {name: "六盘水", value: 3},
    {name: "黔东南", value: 3},
    {name: "黔南", value: 3},
    {name: "黔西南", value: 3},
    {name: "铜仁地区", value: 5},
    {name: "遵义", value: 3},
    {name: "海口", value: 3},
    {name: "三亚", value: 3},
    {name: "保定", value: 3},
    {name: "沧州", value: 3},
    {name: "承德", value: 3},
    {name: "邯郸", value: 4},
    {name: "衡水", value: 3},
    {name: "廊坊", value: 3},
    {name: "秦皇岛", value: 3},
    {name: "石家庄", value: 5},
    {name: "唐山", value: 3},
    {name: "邢台", value: 3},
    {name: "张家口", value: 3},
    {name: "安阳", value: 3},
    {name: "鹤壁", value: 3},
    {name: "焦作", value: 3},
    {name: "开封", value: 3},
    {name: "洛阳", value: 3},
    {name: "漯河", value: 3},
    {name: "南阳", value: 2},
    {name: "平顶山", value: 3},
    {name: "濮阳", value: 3},
    {name: "三门峡", value: 3},
    {name: "商丘", value: 3},
    {name: "新乡", value: 3},
    {name: "信阳", value: 3},
    {name: "许昌", value: 9},
    {name: "郑州", value: 8},
    {name: "周口", value: 8},
    {name: "驻马店", value: 8},
    {name: "大庆", value: 8},
    {name: "哈尔滨", value: 8},
    {name: "鹤岗", value: 8},
    {name: "黑河", value: 8},
    {name: "鸡西", value: 8},
    {name: "佳木斯", value: 8},
    {name: "牡丹江", value: 8},
    {name: "七台河", value: 8},
    {name: "齐齐哈尔", value: 7},
    {name: "双鸭山", value: 8},
    {name: "绥化", value: 3},
    {name: "伊春", value: 3},
    {name: "鄂州", value: 3},
    {name: "恩施", value: 3},
    {name: "黄冈", value: 3},
    {name: "黄石", value: 3},
    {name: "荆门", value: 3},
    {name: "荆州", value: 3},
    {name: "潜江", value: 3},
    {name: "十堰", value: 5},
    {name: "随州", value: 3},
    {name: "天门", value: 3},
    {name: "武汉", value: 3},
    {name: "仙桃", value: 3},
    {name: "咸宁", value: 3},
    {name: "襄阳", value: 3},
    {name: "孝感", value: 4},
    {name: "宜昌", value: 3},
    {name: "长沙", value: 3},
    {name: "常德", value: 3},
    {name: "郴州", value: 5},
    {name: "衡阳", value: 3},
    {name: "怀化", value: 3},
    {name: "娄底", value: 3},
    {name: "邵阳", value: 3},
    {name: "湘潭", value: 3},
    {name: "湘西", value: 3},
    {name: "益阳", value: 3},
    {name: "永州", value: 3},
    {name: "岳阳", value: 3},
    {name: "张家界", value: 3},
    {name: "株洲", value: 2},
    {name: "白城", value: 3},
    {name: "白山", value: 3},
    {name: "长春", value: 3},
    {name: "吉林", value: 3},
    {name: "辽源", value: 3},
    {name: "四平", value: 3},
    {name: "松原", value: 9},
    {name: "通化", value: 8},
    {name: "常州", value: 8},
    {name: "淮安", value: 8},
    {name: "南京", value: 8},
    {name: "南通", value: 8},
    {name: "苏州", value: 8},
    {name: "宿迁", value: 8},
    {name: "泰州", value: 8},
    {name: "无锡", value: 8},
    {name: "徐州", value: 7},
    {name: "盐城", value: 8},
    {name: "扬州", value: 3},
    {name: "镇江", value: 3},
    {name: "抚州", value: 3},
    {name: "赣州", value: 3},
    {name: "吉安", value: 3},
    {name: "景德镇", value: 3},
    {name: "九江", value: 3},
    {name: "南昌", value: 3},
    {name: "萍乡", value: 3},
    {name: "上饶", value: 3},
    {name: "新余", value: 5},
    {name: "宜春", value: 3},
    {name: "鹰潭", value: 3},
    {name: "鞍山", value: 3},
    {name: "本溪", value: 3},
    {name: "朝阳", value: 3},
    {name: "大连", value: 3},
    {name: "丹东", value: 4},
    {name: "抚顺", value: 3},
    {name: "阜新", value: 3},
    {name: "葫芦岛", value: 3},
    {name: "锦州", value: 5},
    {name: "辽阳", value: 3},
    {name: "盘锦", value: 3},
    {name: "沈阳", value: 3},
    {name: "铁岭", value: 3},
    {name: "营口", value: 3},
    {name: "阿拉善盟", value: 3},
    {name: "巴彦淖尔", value: 3},
    {name: "包头", value: 3},
    {name: "赤峰", value: 3},
    {name: "鄂尔多斯", value: 2},
    {name: "呼和浩特", value: 3},
    {name: "呼伦贝尔", value: 3},
    {name: "通辽", value: 3},
    {name: "乌海", value: 3},
    {name: "乌兰察布", value: 3},
    {name: "锡林郭勒盟", value: 3},
    {name: "吴忠", value: 8},
    {name: "中卫", value: 8},
    {name: "海南藏族自治州", value: 8},
    {name: "海西蒙古族藏族自治州", value: 8},
    {name: "黄南藏族自治州", value: 3},
    {name: "西宁", value: 3},
    {name: "玉树藏族自治州", value: 3},
    {name: "滨州", value: 3},
    {name: "德州", value: 3},
    {name: "东营", value: 3},
    {name: "菏泽", value: 3},
    {name: "济南", value: 3},
    {name: "济宁", value: 3},
    {name: "莱芜", value: 3},
    {name: "聊城", value: 3},
    {name: "临沂", value: 3},
    {name: "青岛", value: 3},
    {name: "日照", value: 3},
    {name: "泰安", value: 3},
    {name: "威海", value: 3},
    {name: "潍坊", value: 3},
    {name: "烟台", value: 3},
    {name: "枣庄", value: 3},
    {name: "淄博", value: 3},
    {name: "长治", value: 3},
    {name: "大同", value: 3},
    {name: "晋城", value: 3},
    {name: "晋中", value: 3},
    {name: "临汾", value: 3},
    {name: "吕梁", value: 3},
    {name: "朔州", value: 3},
    {name: "太原", value: 3},
    {name: "忻州", value: 3},
    {name: "阳泉", value: 3},
    {name: "运城", value: 3},
    {name: "安康", value: 3},
    {name: "宝鸡", value: 3},
    {name: "汉中", value: 3},
    {name: "商洛", value: 3},
    {name: "铜川", value: 3},
    {name: "渭南", value: 3},
    {name: "西安", value: 3},
    {name: "咸阳", value: 3},
    {name: "延安", value: 3},
    {name: "榆林", value: 3},
    {name: "上海", value: 3},
    {name: "阿坝藏族羌族自治州", value: 3},
    {name: "巴中", value: 3},
    {name: "成都", value: 3},
    {name: "达州", value: 3},
    {name: "德阳", value: 3},
    {name: "甘孜藏族自治州", value: 3},
    {name: "广安", value: 3},
    {name: "广元", value: 3},
    {name: "乐山", value: 3},
    {name: "凉山彝族自治州", value: 3},
    {name: "泸州", value: 3},
    {name: "眉山", value: 3},
    {name: "绵阳", value: 3},
    {name: "内江", value: 3},
    {name: "南充", value: 3},
    {name: "攀枝花", value: 3},
    {name: "遂宁", value: 3},
    {name: "雅安", value: 3},
    {name: "宜宾", value: 3},
    {name: "资阳", value: 3},
    {name: "自贡", value: 3},
    {name: "天津", value: 3},
    {name: "拉萨", value: 3},
    {name: "阿克苏", value: 3},
    {name: "阿拉尔", value: 2},
    {name: "阿勒泰", value: 2},
    {name: "阿勒泰地区", value: 5},
    {name: "巴音郭楞蒙古自治州", value: 2},
    {name: "博尔塔拉蒙古自治州", value: 2},
    {name: "昌吉回族自治州", value: 2},
    {name: "哈密", value: 2},
    {name: "和田", value: 2},
    {name: "喀什", value: 2},
    {name: "克拉玛依", value: 2},
    {name: "克孜勒苏柯尔克孜自治州", value: 2},
    {name: "石河子", value: 2},
    {name: "乌鲁木齐", value: 8},
    {name: "保山", value: 8},
    {name: "楚雄", value: 8},
    {name: "大理", value: 8},
    {name: "迪庆", value: 8},
    {name: "红河", value: 7},
    {name: "昆明", value: 8},
    {name: "丽江", value: 2},
    {name: "临沧", value: 2},
    {name: "怒江", value: 2},
    {name: "普洱", value: 2},
    {name: "普洱市", value: 2},
    {name: "曲靖", value: 2},
    {name: "文山", value: 2},
    {name: "西双版纳", value: 2},
    {name: "玉溪", value: 2},
    {name: "昭通", value: 2},
    {name: "杭州", value: 2},
    {name: "湖州", value: 2},
    {name: "嘉兴", value: 2},
    {name: "金华", value: 2},
    {name: "丽水", value: 2},
    {name: "宁波", value: 2},
    {name: "衢州", value: 2},
    {name: "绍兴", value: 2},
    {name: "台州", value: 2},
    {name: "温州", value: 3},
    {name: "舟山", value: 2},
    {name: "重庆", value: 2}
];
var shimuData = [
    {name: "安庆", value: 2},
    {name: "蚌埠", value: 3},
    {name: "亳州", value: 3},
    {name: "池州", value: 3},
    {name: "滁州", value: 3},
    {name: "阜阳", value: 3},
    {name: "合肥", value: 3},
    {name: "淮北", value: 9},
    {name: "淮南", value: 8},
    {name: "黄山", value: 8},
    {name: "六安", value: 8},
    {name: "马鞍山", value: 8},
    {name: "铜陵", value: 8},
    {name: "宿州", value: 8},
    {name: "芜湖", value: 8},
    {name: "宣城", value: 8},
    {name: "北京", value: 8},
    {name: "福州", value: 8},
    {name: "龙岩", value: 8},
    {name: "南平", value: 7},
    {name: "宁德", value: 8},
    {name: "莆田", value: 3},
    {name: "泉州", value: 3},
    {name: "三明", value: 3},
    {name: "厦门", value: 3},
    {name: "漳州", value: 3},
    {name: "白银", value: 3},
    {name: "定西", value: 3},
    {name: "甘南藏族自治州", value: 3},
    {name: "嘉峪关", value: 3},
    {name: "酒泉", value: 3},
    {name: "兰州", value: 5},
    {name: "临夏回族自治州", value: 3},
    {name: "陇南", value: 3},
    {name: "陇南市", value: 3},
    {name: "平凉", value: 3},
    {name: "庆阳", value: 3},
    {name: "天水", value: 3},
    {name: "武威", value: 4},
    {name: "张掖", value: 3},
    {name: "潮州", value: 3},
    {name: "佛山", value: 3},
    {name: "广州", value: 5},
    {name: "河源", value: 3},
    {name: "惠州", value: 3},
    {name: "江门", value: 3},
    {name: "揭阳", value: 3},
    {name: "茂名", value: 3},
    {name: "梅州", value: 3},
    {name: "清远", value: 3},
    {name: "汕头", value: 3},
    {name: "汕尾", value: 3},
    {name: "韶关", value: 2},
    {name: "深圳", value: 3},
    {name: "东莞", value: 3},
    {name: "阳江", value: 3},
    {name: "云浮", value: 3},
    {name: "湛江", value: 3},
    {name: "肇庆", value: 3},
    {name: "中山", value: 9},
    {name: "珠海", value: 8},
    {name: "百色", value: 8},
    {name: "北海", value: 8},
    {name: "崇左", value: 8},
    {name: "防城港", value: 8},
    {name: "贵港", value: 8},
    {name: "桂林", value: 8},
    {name: "河池", value: 8},
    {name: "贺州", value: 8},
    {name: "柳州", value: 8},
    {name: "来宾", value: 8},
    {name: "南宁", value: 7},
    {name: "钦州", value: 8},
    {name: "梧州", value: 3},
    {name: "玉林", value: 3},
    {name: "安顺", value: 3},
    {name: "毕节", value: 3},
    {name: "毕节地区", value: 3},
    {name: "贵阳", value: 3},
    {name: "六盘水", value: 3},
    {name: "黔东南", value: 3},
    {name: "黔南", value: 3},
    {name: "黔西南", value: 3},
    {name: "铜仁地区", value: 5},
    {name: "遵义", value: 3},
    {name: "海口", value: 3},
    {name: "三亚", value: 3},
    {name: "保定", value: 3},
    {name: "沧州", value: 3},
    {name: "承德", value: 3},
    {name: "邯郸", value: 4},
    {name: "衡水", value: 3},
    {name: "廊坊", value: 3},
    {name: "秦皇岛", value: 3},
    {name: "石家庄", value: 5},
    {name: "唐山", value: 3},
    {name: "邢台", value: 3},
    {name: "张家口", value: 3},
    {name: "安阳", value: 3},
    {name: "鹤壁", value: 3},
    {name: "焦作", value: 3},
    {name: "开封", value: 3},
    {name: "洛阳", value: 3},
    {name: "漯河", value: 3},
    {name: "南阳", value: 2},
    {name: "平顶山", value: 3},
    {name: "濮阳", value: 3},
    {name: "三门峡", value: 3},
    {name: "商丘", value: 3},
    {name: "新乡", value: 3},
    {name: "信阳", value: 3},
    {name: "许昌", value: 9},
    {name: "郑州", value: 8},
    {name: "周口", value: 8},
    {name: "驻马店", value: 8},
    {name: "大庆", value: 8},
    {name: "哈尔滨", value: 8},
    {name: "鹤岗", value: 8},
    {name: "黑河", value: 8},
    {name: "鸡西", value: 8},
    {name: "佳木斯", value: 8},
    {name: "牡丹江", value: 8},
    {name: "七台河", value: 8},
    {name: "齐齐哈尔", value: 7},
    {name: "双鸭山", value: 8},
    {name: "绥化", value: 3},
    {name: "伊春", value: 3},
    {name: "鄂州", value: 3},
    {name: "恩施", value: 3},
    {name: "黄冈", value: 3},
    {name: "黄石", value: 3},
    {name: "荆门", value: 3},
    {name: "荆州", value: 3},
    {name: "潜江", value: 3},
    {name: "神农架林区", value: 3},
    {name: "十堰", value: 5},
    {name: "随州", value: 3},
    {name: "天门", value: 3},
    {name: "武汉", value: 3},
    {name: "仙桃", value: 3},
    {name: "咸宁", value: 3},
    {name: "襄阳", value: 3},
    {name: "孝感", value: 4},
    {name: "宜昌", value: 3},
    {name: "长沙", value: 3},
    {name: "常德", value: 3},
    {name: "郴州", value: 5},
    {name: "衡阳", value: 3},
    {name: "怀化", value: 3},
    {name: "娄底", value: 3},
    {name: "邵阳", value: 3},
    {name: "湘潭", value: 3},
    {name: "湘西", value: 3},
    {name: "益阳", value: 3},
    {name: "永州", value: 3},
    {name: "岳阳", value: 3},
    {name: "张家界", value: 3},
    {name: "株洲", value: 2},
    {name: "白城", value: 3},
    {name: "白山", value: 3},
    {name: "长春", value: 3},
    {name: "吉林", value: 3},
    {name: "辽源", value: 3},
    {name: "四平", value: 3},
    {name: "松原", value: 9},
    {name: "通化", value: 8},
    {name: "延边朝鲜族自治州", value: 8},
    {name: "常州", value: 8},
    {name: "淮安", value: 8},
    {name: "连云港", value: 8},
    {name: "南京", value: 8},
    {name: "南通", value: 8},
    {name: "苏州", value: 8},
    {name: "宿迁", value: 8},
    {name: "泰州", value: 8},
    {name: "无锡", value: 8},
    {name: "徐州", value: 7},
    {name: "盐城", value: 8},
    {name: "扬州", value: 3},
    {name: "镇江", value: 3},
    {name: "抚州", value: 3},
    {name: "赣州", value: 3},
    {name: "吉安", value: 3},
    {name: "景德镇", value: 3},
    {name: "九江", value: 3},
    {name: "南昌", value: 3},
    {name: "萍乡", value: 3},
    {name: "上饶", value: 3},
    {name: "新余", value: 5},
    {name: "宜春", value: 3},
    {name: "鹰潭", value: 3},
    {name: "鞍山", value: 3},
    {name: "本溪", value: 3},
    {name: "朝阳", value: 3},
    {name: "大连", value: 3},
    {name: "丹东", value: 4},
    {name: "抚顺", value: 3},
    {name: "阜新", value: 3},
    {name: "葫芦岛", value: 3},
    {name: "锦州", value: 5},
    {name: "辽阳", value: 3},
    {name: "盘锦", value: 3},
    {name: "沈阳", value: 3},
    {name: "铁岭", value: 3},
    {name: "营口", value: 3},
    {name: "阿拉善盟", value: 3},
    {name: "巴彦淖尔", value: 3},
    {name: "包头", value: 3},
    {name: "赤峰", value: 3},
    {name: "鄂尔多斯", value: 2},
    {name: "呼和浩特", value: 3},
    {name: "呼伦贝尔", value: 3},
    {name: "通辽", value: 3},
    {name: "乌海", value: 3},
    {name: "乌兰察布", value: 3},
    {name: "锡林郭勒盟", value: 3},
    {name: "兴安盟", value: 9},
    {name: "固原", value: 8},
    {name: "石嘴山", value: 8},
    {name: "吴忠", value: 8},
    {name: "银川", value: 8},
    {name: "中卫", value: 8},
    {name: "果洛藏族自治州", value: 8},
    {name: "海北藏族自治州", value: 8},
    {name: "海东地区", value: 8},
    {name: "海南藏族自治州", value: 8},
    {name: "海西蒙古族藏族自治州", value: 8},
    {name: "黄南藏族自治州", value: 3},
    {name: "西宁", value: 3},
    {name: "玉树藏族自治州", value: 3},
    {name: "滨州", value: 3},
    {name: "德州", value: 3},
    {name: "东营", value: 3},
    {name: "菏泽", value: 3},
    {name: "济南", value: 3},
    {name: "济宁", value: 3},
    {name: "莱芜", value: 3},
    {name: "聊城", value: 3},
    {name: "临沂", value: 3},
    {name: "青岛", value: 3},
    {name: "日照", value: 3},
    {name: "泰安", value: 3},
    {name: "威海", value: 3},
    {name: "潍坊", value: 3},
    {name: "烟台", value: 3},
    {name: "枣庄", value: 3},
    {name: "淄博", value: 3},
    {name: "长治", value: 3},
    {name: "大同", value: 3},
    {name: "晋城", value: 3},
    {name: "晋中", value: 3},
    {name: "临汾", value: 3},
    {name: "吕梁", value: 3},
    {name: "朔州", value: 3},
    {name: "太原", value: 3},
    {name: "忻州", value: 3},
    {name: "阳泉", value: 3},
    {name: "运城", value: 3},
    {name: "安康", value: 3},
    {name: "宝鸡", value: 3},
    {name: "汉中", value: 3},
    {name: "商洛", value: 3},
    {name: "铜川", value: 3},
    {name: "渭南", value: 3},
    {name: "西安", value: 3},
    {name: "咸阳", value: 3},
    {name: "延安", value: 3},
    {name: "榆林", value: 3},
    {name: "上海", value: 3},
    {name: "阿坝藏族羌族自治州", value: 3},
    {name: "巴中", value: 3},
    {name: "成都", value: 3},
    {name: "达州", value: 3},
    {name: "德阳", value: 3},
    {name: "甘孜藏族自治州", value: 3},
    {name: "广安", value: 3},
    {name: "广元", value: 3},
    {name: "乐山", value: 3},
    {name: "凉山彝族自治州", value: 3},
    {name: "泸州", value: 3},
    {name: "眉山", value: 3},
    {name: "绵阳", value: 3},
    {name: "内江", value: 3},
    {name: "南充", value: 3},
    {name: "攀枝花", value: 3},
    {name: "遂宁", value: 3},
    {name: "雅安", value: 3},
    {name: "宜宾", value: 3},
    {name: "资阳", value: 3},
    {name: "自贡", value: 3},
    {name: "天津", value: 3},    {name: "拉萨", value: 3},
    {name: "阿克苏", value: 3},
    {name: "阿拉尔", value: 2},
    {name: "阿勒泰", value: 2},
    {name: "阿勒泰地区", value: 5},
    {name: "巴音郭楞蒙古自治州", value: 2},
    {name: "博尔塔拉蒙古自治州", value: 2},
    {name: "昌吉回族自治州", value: 2},
    {name: "哈密", value: 2},
    {name: "和田", value: 2},
    {name: "喀什", value: 2},
    {name: "克拉玛依", value: 2},
    {name: "克孜勒苏柯尔克孜自治州", value: 2},
    {name: "石河子", value: 2},
    {name: "乌鲁木齐", value: 8},
    {name: "保山", value: 8},
    {name: "楚雄", value: 8},
    {name: "大理", value: 8},
    {name: "迪庆", value: 8},
    {name: "红河", value: 7},
    {name: "昆明", value: 8},
    {name: "丽江", value: 2},
    {name: "临沧", value: 2},
    {name: "怒江", value: 2},
    {name: "普洱", value: 2},
    {name: "普洱市", value: 2},
    {name: "曲靖", value: 2},
    {name: "文山", value: 2},
    {name: "西双版纳", value: 2},
    {name: "玉溪", value: 2},
    {name: "昭通", value: 2},
    {name: "杭州", value: 2},
    {name: "湖州", value: 2},
    {name: "嘉兴", value: 2},
    {name: "金华", value: 2},
    {name: "丽水", value: 2},
    {name: "宁波", value: 2},
    {name: "衢州", value: 2},
    {name: "绍兴", value: 2},
    {name: "台州", value: 2},
    {name: "温州", value: 3},
    {name: "舟山", value: 2},
    {name: "重庆", value: 2}
];
serviceMapOption = {
    backgroundColor: '#0d1215',
    color: ['#0066FF','#00CC33','#FFFF33'],
    title : {
        text: '全国送装服务云图',
        x: 'left',
        subtext: '服务能力覆盖全国2777个区县',
        textStyle: {
            color: '#fff',
            fontSize: 30
        },
        subtextStyle: {
            fontSize: 20,
            color: '#ddd'
        }
    },
//    tooltip: {
//        show: true,
//        zlevel: 1,
//        trigger: 'item',
//        formatter: function(params,ticket,callback){
//            for(var i=0;i<toolTipText.length;i++){
//                if(toolTipText[i].name==params[1]){
//                    break;
//                }
//            }
//            return toolTipText[i].name+"<br>干线数："+toolTipText[i].lineNum;
//        },
//        backgroundColor: "rgba(0,0,0,0.7)",
//        borderColor: "#333",
//        borderRadius: 3,
//        padding: [5,10,5,10],
//        textStyle: {
//            color: "#ddd",
//            fontSize: 15
//        }
//    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'bottom',
        data:['板式','软体','实木'],
        selectedMode: 'single',
        selected: {
            '软体': false,
            '实木': false
        },
        textStyle: {
            color: '#fff'
        }
    },
    dataRange: {
        min: 0,
        max: 8,
        splitNumber: 0,
        calculable: false,
        selectedMode: false,
        color: ['red', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        }
    },
    series : [
        {
            name: '板式',
            type: 'map',
            mapType: 'china',
            hoverable: false,
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: '#6495ed',
                    borderWidth: 1,
                    areaStyle: {
                        color: '#0d1215'
                    }
                }
            },
            data : [],
            markPoint : {
                symbol: "circle",
                symbolSize: 5,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
                    emphasis: {
                        borderColor: '#1e90ff',
                        borderWidth: 0,
                        label: {
                            show: true,
                            formatter: function(val){
                                return val.name+"："+val.value;
                            },
                            textStyle: {
                                fontSize: 15
                            }
                        }
                    }
                },
                data : banshiData
            },
            geoCoord: geoCoordMap2
        },
        {
            name: '软体',
            type: 'map',
            mapType: 'china',
            hoverable: false,
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: '#6495ed',
                    borderWidth: 1,
                    areaStyle: {
                        color: '#0d1215'
                    }
                }
            },
            data : [],
            markPoint : {
                symbol: "circle",
                symbolSize: 5,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
                    emphasis: {
                        borderColor: '#1e90ff',
                        borderWidth: 0,
                        label: {
                            show: true,
                            formatter: function(val){
                                return val.name+"："+val.value;
                            },
                            textStyle: {
                                fontSize: 15
                            }
                        }
                    }
                },
                data : ruantiData
            }
        },
        {
            name: '实木',
            type: 'map',
            mapType: 'china',
            hoverable: false,
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: '#6495ed',
                    borderWidth: 1,
                    areaStyle: {
                        color: '#1b1b1b'
                    }
                }
            },
            data : [],
            markPoint : {
                symbol: "circle",
                symbolSize: 5,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        }
                    },
                    emphasis: {
                        borderColor: '#1e90ff',
                        borderWidth: 0,
                        label: {
                            show: true,
                            formatter: function(val){
                                return val.name+"："+val.value;
                            },
                            textStyle: {
                                fontSize: 15
                            }
                        }
                    }
                },
                data : shimuData
            }
        },
        {
            name: '板式',
            type: 'map',
            mapType: 'china',
            data:[],
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 + v/100
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    }
                },
                data : [
//                    {name: "玉溪", value: 31},
//                    {name: "张家口", value: 31},
//                    {name: "阳泉", value: 31},
//                    {name: "莱州", value: 32},
//                    {name: "湖州", value: 32},
//                    {name: "汕头", value: 32}
                ]
            }
        },
        {
            name: '软体',
            type: 'map',
            mapType: 'china',
            data:[],
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 + v/100
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    }
                },
                data : [
//                    {name: "鞍山", value: 86},
//                    {name: "溧阳", value: 86},
//                    {name: "库尔勒", value: 86},
//                    {name: "安阳", value: 90},
//                    {name: "开封", value: 90},
//                    {name: "济南", value: 92}
                ]
            }
        },
        {
            name: '实木',
            type: 'map',
            mapType: 'china',
            data:[],
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 + v/100
                },
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    },
                    emphasis: {
                        borderColor: '#1e90ff',
                        borderWidth: 0,
                        label: {
                            show: true,
                            formatter: function(val){
                                return val.name+"："+val.value;
                            },
                            textStyle: {
                                fontSize: 15
                            }
                        }
                    }
                },
                data : [
//                    {name: "廊坊", value: 193},
//                    {name: "菏泽", value: 194},
//                    {name: "合肥", value: 229},
//                    {name: "武汉", value: 273},
//                    {name: "大庆", value: 279}
                ]
            }
        }
    ]
};

var orderMapOption = {
    title : {
        text: '地区订单分布云图',
        x:'left',
        textStyle: {
            color: '#fff',
            fontSize: 30
        }
    },
    tooltip : {
//        trigger: 'item'
        formatter: function(c){
            return c.name+"："+c.value+"%"
        }
    },
    legend: {
        orient: 'vertical',
        x:'right',
        y: 'bottom',
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single',
        data:['订单']
    },
    dataRange: {
        min: 0,
        max: 10,
        x: 'left',
        y: 'bottom',
        splitNumber: 0,
        textStyle: {
            color: '#fff'
        },
        calculable : false
    },
    series : [
        {
            name: '订单',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}}
            },
            data:[
                {name: '北京',value:Math.round(1183/12691*10000)/100},
                {name: '天津',value:Math.round(385/12691*10000)/100},
                {name: '上海',value:Math.round(882/12691*10000)/100},
                {name: '重庆',value:Math.round(224/12691*10000)/100},
                {name: '河北',value:Math.round(378/12691*10000)/100},
                {name: '河南',value:Math.round(364/12691*10000)/100},
                {name: '云南',value:Math.round(77/12691*10000)/100},
                {name: '辽宁',value:Math.round(350/12691*10000)/100},
                {name: '黑龙江',value:Math.round(140/12691*10000)/100},
                {name: '湖南',value:Math.round(364/12691*10000)/100},
                {name: '安徽',value:Math.round(315/12691*10000)/100},
                {name: '山东',value:Math.round(1799/12691*10000)/100},
                {name: '新疆',value:Math.round(56/12691*10000)/100},
                {name: '江苏',value:Math.round(1169/12691*10000)/100},
                {name: '浙江',value:Math.round(707/12691*10000)/100},
                {name: '江西',value:Math.round(175/12691*10000)/100},
                {name: '湖北',value:Math.round(420/12691*10000)/100},
                {name: '广西',value:Math.round(161/12691*10000)/100},
                {name: '甘肃',value:Math.round(91/12691*10000)/100},
                {name: '山西',value:Math.round(175/12691*10000)/100},
                {name: '内蒙古',value:Math.round(112/12691*10000)/100},
                {name: '陕西',value:Math.round(357/12691*10000)/100},
                {name: '吉林',value:Math.round(210/12691*10000)/100},
                {name: '福建',value:Math.round(399/12691*10000)/100},
                {name: '贵州',value:Math.round(91/12691*10000)/100},
                {name: '广东',value:Math.round(1575/12691*10000)/100},
                {name: '青海',value:Math.round(7/12691*10000)/100},
                {name: '西藏',value:Math.round(7/12691*10000)/100},
                {name: '四川',value:Math.round(385/12691*10000)/100},
                {name: '宁夏',value:Math.round(35/12691*10000)/100},
                {name: '海南',value:Math.round(98/12691*10000)/100}
            ]
        }
    ]
};
var dataFormOption1 = {
        color:['#2a7eaa', '#191d26', '#cb2c1e', '#511d19', '#f28409', '#805525', '#04b669','#217d55', '#fff'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['平均客单价','平均服务费','床垫品类客单价','床垫品类服务费','实木品类客单价','实木品类服务费','板式定制衣柜单价','板式定制类服务费'],
        textStyle: {color: '#fff'},
        selectedMode: false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        borderWidth: 0,
        containLabel: true
    },
    xAxis: [
            {
                axisLine: {lineStyle: {
                    color: '#313131'}},
                splitLine: {lineStyle:{
                    color: '#313131'
                }},
                type: 'category',
                data: ['2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03'],
                axisLabel: {textStyle: {fontSize: 18, color: '#999'}}
            }
        ],
        yAxis: [
            {
                axisLine: {lineStyle: {color: '#313131'}},
                splitLine: {show: false},
                type: 'value',
                axisLabel: {
                    textStyle: {fontSize: 18, color: '#999'}
                }
            },
            {
                axisLine: {lineStyle: {color: '#313131'}},
                splitLine: {show: false},
                type: 'value',
                axisLabel: {
                    textStyle: {fontSize: 18, color: '#999'},
                    formatter: '{value}%'
                }
            }
        ],
        yAxis: [
            {
                axisLine: {lineStyle: {color: '#313131'}},
                splitLine: {show: false},
                type: 'value',
                axisLabel: {
                    textStyle: {fontSize: 18, color: '#999'}
                }
            },
            {
                axisLine: {lineStyle: {color: '#313131'}},
                splitLine: {show: false},
                type: 'value',
                axisLabel: {
                    textStyle: {fontSize: 18, color: '#999'},
                    formatter: '{value}%'
                }
            }
        ],
    series : [
        
        {
            name:'平均服务费',
            type:'bar',
            stack: '平均',
            data:[444, 428, 410, 376, 369, 361]
        },
        {
            name:'平均客单价',
            type:'bar',
            stack: '平均',
            data:[2354, 2397, 2323, 2418, 2377, 2409]
        },
        {
            name:'床垫品类服务费',
            type:'bar',
            stack: '床垫品类',
            data:[538, 499, 438, 369.4, 379.4, 369.4]
        },
        {
            name:'床垫品类客单价',
            type:'bar',
            stack: '床垫品类',
            data:[2600, 2500, 2500, 2490, 2560, 2534]
        },
        {
            name:'实木品类服务费',
            type:'bar',
            stack: '实木品类',
            data:[538, 499, 438, 369.4, 379.4, 369.4]
        },
        {
            name:'实木品类客单价',
            type:'bar',
            stack: '实木品类',
            data:[2600, 2500, 2500, 2490, 2560, 2534]
        },
        {
            name:'板式定制类服务费',
            type:'bar',
            stack: '板式定制类',
            data:[570.2, 590.2, 567.2, 564.2, 557.2, 541.2]
        },
        {
            name:'板式定制衣柜单价',
            type:'bar',
            stack: '板式定制类',
            data:[3080, 3100, 3087, 3174, 3187, 3237]
        },
        {
            name: '服务费/客单价',
            type: 'line',
            yAxisIndex: 1,
            data: [18.86, 17.85, 17.64, 15.55, 15.55, 14.98]
        }
    ]
};
var dataFormOption2 = {
    color:['#fff', '#f28409', '#cb2c1e', '#2a7eaa'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['超时率', '货损率', '事件率', '投诉率'],
        selectedMode: false,
        textStyle: {
            color: '#fff'
        },
        x : '800',
        // left: 'left',
        // padding: [0, 500, 0 , 0],
        shadowColor: ['#fff', '#f28409', '#cb2c1e', '#2a7eaa']
    },
    grid: {
        left: '3',
        right: '4',
        bottom: '3',
        borderWidth: 0,

        containLabel: true
    },
    xAxis: [
        {
            axisLine: {lineStyle: {
                color: '#313131'}},
            splitLine: {lineStyle:{
                color: '#313131'
            }},
            type: 'category',
            data: ['2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03'],
            axisLabel: {textStyle: {fontSize: 18, color: '#999'}}
        }
    ],
    yAxis: [
        {
            axisLine: {lineStyle: {color: '#313131'}},
            splitLine: {show: false},
            scale: false,
            max: 35,
            type: 'value',
            axisLabel: {
                formatter: '{value}%',
                textStyle: {fontSize: 18, color: '#999'}
            }
        }
    ],
    series: [
        {
            name: '超时率',
            type: 'line',
            data: ['4.20', '4.00', '4.20', '4.00', '4.00', '3.00']
        },
        {
            name: '货损率',
            type: 'line',
            data: ['5.20', '5.00', '5.20', '5.00', '4.00', '4.00']
        },
        {
            name: '事件率',
            type: 'line',
            data: ['31.00', '30.00', '31.00', '28.00', '25.00', '24.00']
        },
        {
            name: '投诉率',
            type: 'line',
            data: ['4.30', '4.30', '4.20', '4.00', '3.00', '2.60']
        }

    ]
};
var dataFormOption3 = {
    color:['#fff', '#f28409', '#cb2c1e', '#2a7eaa'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['服务态度', '安装技能', '按约到达和履约', '货物质量和货实相符'],
        selectedMode: false,
        textStyle: {
            color: '#fff'
        },
        x : '600',
        // left: 'left',
        // padding: [0, 500, 0 , 0],
        shadowColor: ['#fff', '#f28409', '#cb2c1e', '#2a7eaa']
    },
    grid: {
        left: '3',
        right: '4',
        bottom: '3',
        borderWidth: 0,
        containLabel: true
    },
    xAxis: [
        {
            axisLine: {lineStyle: {
                color: '#313131'}},
            splitLine: {lineStyle:{
                color: '#313131'
            }},
            type: 'category',
            data: ['2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03'],
            axisLabel: {textStyle: {fontSize: 18, color: '#999'}}
        }
    ],
    yAxis: [
        {
            axisLine: {lineStyle: {color: '#313131'}},
            scale: false,
            min: 3.5,
            max: 5,
            splitLine: {show: false},
            type: 'value',
            axisLabel: {
                textStyle: {fontSize: 18, color: '#999'}
            }
        }
    ],
    series: [
        {
            name: '服务态度',
            type: 'line',
            data: ['4.4', '4.5', '4.3', '4.5', '4.6', '4.8']
        },
        {
            name: '安装技能',
            type: 'line',
            data: ['4.2', '4.3', '4.4', '4.4', '4.7', '4.7']
        },
        {
            name: '按约到达和履约',
            type: 'line',
            data: ['4.3', '4.3', '4.2', '4.2', '4.6', '4.6']
        },
        {
            name: '货物质量和货实相符',
            type: 'line',
            data: ['4.6', '4.6', '4.7', '4.8', '4.8', '4.7']
        }

    ]
};
var dataFormOption4 = {
    color:['#fff', '#f28409', '#cb2c1e', '#2a7eaa', '#04b669'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['物流效率和质量保障', '地面服务能力和态度', '服务时效和履约品质', '异常处理满意度', '平台使用体验'],
        selectedMode: false,
        textStyle: {
            color: '#fff'
        },
        x : '400',
        // left: 'left',
        // padding: [0, 500, 0 , 0],
    },
    grid: {
        left: '3',
        right: '4',
        bottom: '3',
        borderWidth: 0,
        containLabel: true
    },
    xAxis: [
        {
            axisLine: {lineStyle: {
                color: '#313131'}},
            splitLine: {lineStyle:{
                color: '#313131'
            }},
            type: 'category',
            data: ['2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03'],
            axisLabel: {textStyle: {fontSize: 18, color: '#999'}}
        }
    ],
    yAxis: [
        {
            axisLine: {lineStyle: {color: '#313131'}},
            splitLine: {show: false},
            scale: false,
            min: 3.5,
            max: 5,
            type: 'value',
            axisLabel: {
                textStyle: {fontSize: 18, color: '#999'}
            }
        }
    ],
    series: [
        {
            name: '物流效率和质量保障',
            type: 'line',
            data: ['4.2', '4.3', '4.3', '4.2', '4.6', '4.7']
        },
        {
            name: '地面服务能力和态度',
            type: 'line',
            data: ['4', '4', '4.1', '4.1', '4.2', '4.5']
        },
        {
            name: '服务时效和履约品质',
            type: 'line',
            data: ['4', '4.1', '4.1', '4.2', '4.6', '4.6']
        },
        {
            name: '异常处理满意度',
            type: 'line',
            data: ['4.4', '4.6', '4.7', '4.8', '4.8', '4.7']
        },
        {
            name: '平台使用体验',
            type: 'line',
            data: ['4', '4.1', '4', '4.2', '4.2', '4.4']
        }

    ]
};