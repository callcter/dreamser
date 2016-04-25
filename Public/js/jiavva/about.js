window.onload = function(){
	$('.recruitment-box .tab').on('click',function(){
		if($(this).hasClass('active')){
			return;
		}else{
			var src = $('.active img').attr('src');
			var newSrc = src.substring(0,(src.length-5))+'.png';
			$('.active img').attr('src',newSrc);
			$('#recruitment'+($('.active').index()+1)).hide();
			$('.active').removeClass('active');
			$(this).addClass('active');
			var src1 = $('.active img').attr('src');
			var newSrc1 = src1.substring(0,(src1.length-4))+'1.png';
			$('.active img').attr('src',newSrc1);
			$('#recruitment'+($(this).index()+1)).show();
		}
	});
	if('ontouchstart' in document.documentElement){
		$('body').on('touchend',function(){
			$('.menu-list').hide();
		});
		$('.menu-btn').on('touchend',function(event){
			event.stopPropagation();
			$('.menu-list').toggle('fast');
		});
		$('.menu a').on('touchend',function(){
			var posi = $('#'+$(this).attr('class')).offset().top;
			$('body').animate({
				scrollTop: posi-80
			},1000);
		});
		$('.menu-list').on('touchend',function(event){
			event.stopPropagation();
		});
		$('.menu-list li').on('touchend',function(event){
	    	event.stopPropagation();
			var posi = $('#'+$(this).attr('class')).offset().top;
			$('body').animate({
				scrollTop: posi-40
			},1000);
			$('.menu-list').hide();
		});
		$('.joinus-btn').on('touchend',function(){
			$('.resume-box').show();
		});
		$('.resume-box .close').on('touchend',function(){
			$('.resume-box').hide();
		});
	}else{
		$('body').on('click',function(){
			$('.menu-list').hide();
		});
		$('.menu a').on('click',function(){
			var posi = $('#'+$(this).attr('class')).offset().top;
			$('body').animate({
				scrollTop: posi-80
			},1000);
		});
		$('.menu-list').on('click',function(event){
			event.stopPropagation();
		});
		$('.menu-list li').on('click',function(event){
	    	event.stopPropagation();
			var posi = $('#'+$(this).attr('class')).offset().top;
			$('body').animate({
				scrollTop: posi-40
			},1000);
			$('.menu-list').hide();
		});
		$('.joinus-btn').on('click',function(){
			$('.resume-box').show();
		});
		$('.resume-box .close').on('click',function(){
			$('.resume-box').hide();
		});
		$('.menu-btn').on('click',function(event){
			event.stopPropagation();
			$('.menu-list').toggle('fast');
		});
	}
}