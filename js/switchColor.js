/*衣服颜色切换*/
$(function(){
	$(".color_change ul li img").click(function(){           
		  var imgSrc = $(this).attr("src");  //小图路径
		  var i = imgSrc.lastIndexOf(".");  //小图的索引（位置）
		  var unit = imgSrc.substring(i);   //小图拓展名
		  imgSrc = imgSrc.substring(0,i);   //小图主名
		  var imgSrc_small = imgSrc + "_one_small"+ unit;    //蓝色小图
		  var imgSrc_big = imgSrc + "_one_big"+ unit;   //蓝色大图
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });   //大图路径
		  $("#thickImg").attr("href", imgSrc_big);   
		  var alt = $(this).attr("alt");
		  $(".color_change strong").text(alt);
		  var url = imgSrc+".html";
		  $(".pro_detail_left ul.imgList")
				.empty()
				.load(url);
	});
});