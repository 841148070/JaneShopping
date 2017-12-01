
//点击改变主题颜色
$(function(){
	$('.change span').click(function(){
		var col=$(this).attr('title');
		$('nav li').hover(function(){
			$(this).css('background',col);
		},function(){
			$(this).css('background','transparent');
		})
		$('.col').css('background',col);
	})
})

//点击展开,收回
$(function(){
	$('.newstyle .left h3').click(function(){
		if($(this).next().css('display')=='none'){
			$(this).next().css('display','block')
			.prev().children('span').css({'transform':'rotate(-45deg)','top':'26px'})
		}else{
			$(this).next().css('display','none')
			.prev().children('span').css({'transform':'rotate(135deg)','top':'20px'})
		}
	})
})
//轮播
$(function(){
	$('.v_show ul').clone(true).appendTo('.v_show');
	
//	var liw=$('.v_show li').width()+30;
	var page=$('.v_show li').length;
	var num=1;
	$('.next').click(function(){
		if(num==(page/2)){
			$('.v_show').stop().animate({left:'30'-400*num},300)
				.animate({left:'30'},1);
			num=1;
		}else{
			$('.v_show').stop().animate({left:'30'-400*num},300);
			num+=1;
		}
	})
	$('.pre').click(function(){
		if(num==1){
			$('.v_show').stop().animate({left:'30'-400*3},1)
				.animate({left:'30'-400*2},300);
			num=page/2;
		}else{
			$('.v_show').stop().animate({left:'30'-400*(num-2)},300);
			num-=1;
		}
	})
})


//info 切换
$(function(){
	$('.info ul li').click(function(){
		var num=$(this).index()+1;
		$('.info ul li').removeClass('active').parent().siblings().removeClass('on');
		$(this).addClass('active');
		$('.info div:nth-of-type('+num+")").addClass('on');
		
	})
})
