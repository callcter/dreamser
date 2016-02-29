(function($, doc) {
  $.init();
  $.ready(function() {
    //普通示例
    var userPicker = new $.PopPicker();
    userPicker.setData([{
      value: '440600',
      text: '佛山'
    }, {
      value: '110000',
      text: '北京'
    }, {
      value: '310000',
      text: '上海'
    }, {
      value: '441900',
      text: '东莞'
    }, {
      value: '360782',
      text: '南康'
    }, {
      value: '510100',
      text: '成都'
    }, {
      value: '131000',
      text: '廊坊'
    }, {
      value: '320500',
      text: '苏州'
    }, {
      value: '370200',
      text: '青岛'
    }]);
    var showUserPickerButton = doc.getElementById('sfadrbtn');
    var userResult = doc.getElementById('sfadr');
    showUserPickerButton.addEventListener('tap', function(event) {
      cityPicker.hide();
      cityPicker3.hide();
      userPicker.show(function(items) {
        userResult.innerText = items[0]['text'];
        userResult.setAttribute('val',items[0].value);
        //返回 false 可以阻止选择框的关闭
        //return false;
      });
    }, false);

    // var cityPicker = new $.PopPicker({
    //   layer: 2
    // });
   
    // var showCityPickerButton = doc.getElementById('mdadrbtn');
    // var cityResult = doc.getElementById('mdadr');
    // showCityPickerButton.addEventListener('tap', function(event) {
    //   $.getJSON('/jeesite/wx/bijia/category', function(data){
    //       cityPicker.setData(data);
    //   })
    //   cityPicker3.hide();
    //   userPicker.hide();
    //   cityPicker.show(function(items) {
    //     cityResult.innerText = items[0].text + "-" + items[1].text;
    //   	cityResult.setAttribute('dataid',items[1].value);
    //   });
    // }, false);

    var cityPicker3 = new $.PopPicker({
		layer: 3
	});
	cityPicker3.setData(cityData3);
	var showCityPickerButton = doc.getElementById('mdadrbtn3');
	var cityResult3 = doc.getElementById('mdadr3');
	showCityPickerButton.addEventListener('tap', function(event) {
      userPicker.hide();
      cityPicker.hide();
		cityPicker3.show(function(items) {
			cityResult3.innerText =  (items[0] || {}).text + "-" + (items[1] || {}).text + "-" + (items[2] || {}).text;
      cityResult3.setAttribute('val',(items[0] || {}).value + "-" + (items[1] || {}).value + "-" + (items[2] || {}).value);
			//返回 false 可以阻止选择框的关闭
			//return false;
		});
	}, false);


  
  });
})(mui, document);