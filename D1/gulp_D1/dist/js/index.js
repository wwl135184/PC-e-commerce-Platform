$(function(){
	// 我的账户显示隐藏
	$(".myAccount").hover(function(){
		$(".level").css("display", "block");
		$(".level li a").hover(function(){
			$(this).css("color", "#f44236");
		},function(){
			$(this).css("color", "#222");
		})
	},function(){
		$(".level").css("display", "none");
	})
	// 手机忧尚显示隐藏
	$(".phone").hover(function(){
		$(".QRcode").css("display", "block");
	},function(){
		$(".QRcode").css("display", "none");
	})
	//网页banner的数据和动画
	$.ajax({
		url: "json/banner.json",
		type: "GET",
		success: function(data){
			var html = `<a href="www.baidu.com"><img src=""/></a>`
			$(".banner .banner_pic li").html(html);
			for(var i = 0; i < data.length; i++){
				$(".banner .banner_pic li a img").eq(i).attr("src", data[i].img);
			}
		}
	})
	var aBtns = $(".banner").find("ol").find("li");
	var aLi = $(".banner_pic").find('li');
	var iNow = 0;
	var timer = null;
	aBtns.hover(function(){
		clearInterval(timer);
		iNow = $(this).index();
		tab();
	},function(){
		timer = setInterval(timerInner,5000);
	})
	$(".banner").hover(function(){
		$(".left").css("display", "block");
		$(".right").css("display", "block");
		$(".left").click(function(){
			clearInterval(timer);
			iNow--;
			tab();
			if(iNow < 0){
				iNow = 4;
			}
		});
		$(".right").click(function(){
			clearInterval(timer);
			iNow++;
			if(iNow > 4){
				iNow = 0;
			}
			tab();
		})
	},function(){
		timer = setInterval(timerInner,5000);
		$(".left").css("display", "none");
		$(".right").css("display", "none");
	})
	function tab(){
		aLi.stop().animate({opacity:0},1000);
		aLi.eq(iNow).stop().animate({opacity:1},1000);
		if(iNow == 4){
			iNow = -1;
		}
		aBtns.attr("class", "");
		aBtns.eq(iNow).attr("class", "active");
	}
	function timerInner(){
		iNow++;
		tab();
		if(iNow == aBtns.size()){
			aBtns.eq(0).attr("class", "active");
		}
	}
	clearInterval(timer);
	timer = setInterval(timerInner,5000);
	//网页main数据和动画
	$.ajax({
		url: "json/main.json",
		type: "GET",
		success: function(data){
			var html = $(`<div class = "main_pic"><a href="second.html"><img src = ""/><h5></h5></a></div>`);
			$(".main ul li").html(html);
			for(var i = 0; i < data.length; i++){
				$(".main ul li div img").eq(i).attr("src", data[i].img);
				$(".main ul li div h5").eq(i).html(data[i].desc);
			}
		}
	})
	$(".main ul li").hover(function(){
		$(this).stop().animate({opacity:0.7},300);
	},
	function(){
		$(this).stop().animate({opacity:1},300);
	})
	//网页original的数据和动画
	$.ajax({
		url: "json/original.json",
		type: "GET",
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += '<div class = "ori_main"><img src='+ data[i].img +' /><div class = "masking"></div><div class = "ori_text"><h3 class = "h3"><a href="#">'+ data[i].desc +'</a></h3><p class = "p"><span><a href="#" class = "span1">' + data[i].member + '</a></span><span><a href="#" class = "span2">' + data[i].price + '</a></span></p></div></div>';
				$(".original ul li").eq(i).html(html);
				html = "";
			}
		}
	})
	$(".original ul li").hover(function(){
		$(this).find(".ori_text").stop().animate({bottom: 0},200);
		$(".h3 a").css("color", "#cd009f");
	},function(){
		$(this).find(".ori_text").stop().animate({bottom: -65},200);
		$(".h3 a").css("color", "#2c3e50");
	})
	//网页dowNav动画
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		// document.title =scrollTop;
		if(scrollTop < 455){
			$(".dowNav").css("position", "static");
			$(".dowNav a").attr("class","");
			$(".dowNav a").eq(0).attr("class","backTop");
		}else{
			if(scrollTop > 450){
				$("#back").click(function(){
				    $("body,html").stop().animate({scrollTop:0},2000);
				})
				$(".dowNav").css("position", "fixed");
				$(".dowNav").css("top", 0).css("left", 0).css("opacity", 0.8).css("z-index", 10);
				$(".dowNav a").attr("class","");
				$(".dowNav a").eq(1).attr("class","backTop");
			}
			if(scrollTop > 2000){
				$(".dowNav a").attr("class","");
				$(".dowNav a").eq(2).attr("class","backTop");
			}
			if(scrollTop > 4000){
				$(".dowNav a").attr("class","");
				$(".dowNav a").eq(3).attr("class","backTop");
			}
			if(scrollTop > 6100){
				$(".dowNav a").attr("class","");
				$(".dowNav a").eq(4).attr("class","backTop");
			}
			if(scrollTop > 7700){
				$(".dowNav a").attr("class","");
				$(".dowNav a").eq(5).attr("class","backTop");
			}
			if(scrollTop > 8800){
				$(".dowNav a").attr("class","");
				$(".dowNav a").eq(6).attr("class","backTop");
			}
		}
	}
	//网页sideBar动画和数据
	$.ajax({
		url: "json/sideBar.json",
		type: "GET",
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				for(var j = 0; j < data[i].length; j++){
					html += '<div class = "sideBarRight_pic"><img src=' + data[i][j].img + ' /><span><a href = "#">' + data[i][j].desc + '</a></span></div>';
				}
				$(".banner .sideBar .sideBarNav li .sideBarRight").eq(i).html(html);
				html = "";
			}
		}
	})
	$(".banner .sideBar .sideBarNav li").hover(function(){
		$(this).css("backgroundColor", "");
		$(this).css("backgroundColor", "#fff");
		$(".banner .sideBar .sideBarNav li .sideBarRight").css("display", "none");
		$(this).find(".sideBarRight").css("display", "block");
		$(this).find("a").css("color", "#222");
		$(this).find("p").css("color", "pink");
	},function(){
		$(this).find("a").css("color", "#fff");
		$(this).find("p").css("color", "");
		$(".sideBarRight").css("display", "none");
		$(this).css("backgroundColor", "");
	})
	//网页CartShow动画
	$(".shoppingCart").hover(function(){
		$(".CartShow").stop().animate({opacity:1},500);
	},function(){
		$(".CartShow").stop().animate({opacity:0});
	})
})
