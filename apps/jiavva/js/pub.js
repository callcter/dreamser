
$(function(){
	$(document).on('keyup','.inpserbtn',function(){
		var val = $(this).val();
		if(val != ''){
			$(this).siblings('i').show();
			$('.inpbox').css({'border-color':'#ddd'});
		}else{
			$(this).siblings('i').hide();
		}
	})

	$('.delvals').on('click',function(){
		$(this).hide();
		$(this).siblings('input').val('');
		
	})
})