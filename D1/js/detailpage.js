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
	//网页CartShow动画
	$(".shoppingCart").hover(function(){
		$(".CartShow").stop().animate({opacity:1},500);
	},function(){
		$(".CartShow").stop().animate({opacity:0});
	})
	//mainC_right_main_text数据
	$.ajax({
		url: "json/mainC_right_pic.json",
		type: "GET",
		success: function(data){
			var html = "";
			for(var i = 0; i < data.length; i++){
				html += '<img src=' + data[i].img + '>';
			}
			$(".mainC_right_pic").html(html);
		}
	})
	
	//网页allClientEvaluate数据
	/*var html1 = "";
	for(var i = 0; i < 10; i++){
		html1 += '<div class="clientEvaluate"><div class="client_text"><div class="user"><div class="u-icon"><img src="detailpage_images/vipimg.jpg"/>/div><div class = "u-name"><span>***oZCbNwQNqX</span><br /><span>VIP会员</span></div></div><div class="i-item"><div class="o-topic"><div class = "o-topicT"><span>评分:</span><img src="detailpage_images/gds_star5.gif"/></div><div class = "data"><span>2017-10-09</span></div></div><div class = "text1"><span>还可以</span></div><div class = "text2"><p>D1优尚回复：尊敬的客户您好，感谢您对我们产品与服务的认可与评价,我们将用心做好每一个细节，给您满意的购物体验。</p></div></div></div><div class = "triangle"></div></div>';
	}
	$(".allclientEvaluate ul li").html(html1);*/
	//网页fourMain切换
	$(".mainC_right_nav").find("li").click(function(){
		$(".mainC_right_nav").find("li").attr("class", "");
		$(".fourMain").css("display", "none");
		$(this).attr("class", "active");
		$(".fourMain").eq($(this).index()).css("display", "block");
	})
	//网页backTop动画
	window.onscroll = function(){
		$(".backTop").click(function(){
			$("body,html").stop().animate({scrollTop:0},2000);
		})
	}
	//网页gs_pic放大镜
	$(".gs_pic").hover(function(){
		$(".masking").css("display", "block");
		$(".gs_picr").css("display", "block");
	},function(){
		$(".masking").css("display", "none");
		$(".gs_picr").css("display", "none");
	}).mousemove(function(ev){
		var left = ev.pageX - $(this).offset().left - $(".masking").width() / 2;
		if(left < 0){
			left = 0;
		}else if(left > $(".gs_pic").width() - $(".masking").width()){
			left = $(".gs_pic").width() - $(".masking").width();
		}
		$(".masking").css("left",left);

		var top = ev.pageY - $(this).offset().top - $(".masking").height() / 2;
		if(top < 0){
			top = 0;
		}else if(top > $(".gs_pic").height() - $(".masking").height()){
			top = $(".gs_pic").height() - $(".masking").height();
		}
		$(".masking").css("top",top);

		var proportionX = left / ($(".gs_pic").width() - $(".masking").width());
		var proportionY = top / ($(".gs_pic").height() - $(".masking").height());
		console.log(proportionX+':'+proportionY);

		$(".show_all img").css("left", - proportionX * ($(".show_all img").width() - $(".gs_picr").width())).css("top", - proportionY * ($(".show_all img").height() - $(".gs_picr").height()));
	})
	var arr1 = [{
		id: 1,
		img: "detailpage_images/gs_pic1.jpg"
	},{
		id: 2,
		img: "detailpage_images/gs_pic2.jpg"
	},{
		id: 3,
		img: "detailpage_images/gs_pic3.jpg"
	}]
	for(var i = 0; i < arr1.length; i++){
		$(".ul").find("li").click(function(){
			$(".gs_pic1 img").attr("src", arr1[$(this).index()].img);
			$(".show_all img").attr("src", arr1[$(this).index()].img);
		})
	}
	//网页购物车cookie
	var num = $(".buyNum #num").val();
	$(".j_a").click(function(){
		if(num == 1){
			num = 1;
		}else{
			num--;
		}
		$(".buyNum #num").val(num);
	})
	$(".a_j").click(function(){
		num++;
		$(".buyNum #num").val(num);
	})
	var pic = $(".gs_pic1 img").attr("src");
	var price = $(".pprice .priceR h1 i").html();
	var desc = $(".gs_right_title h1").html();
	var color = $(".specification .color span").html();
	var first = $.cookie("goods") ? true : false;
	$(".addCart").click(function(){
		success();
		if(!first){
			$.cookie("goods", desc + ":" + pic + ":" + price + ":" + num + ":" + color, {
				expires: 7,
				path: "/"
			});
		}else{
			var cookieStr = $.cookie("goods");
			var arr = cookieStr.split(":");
			var isYes = false;
			for(var i = 0; i < arr.length;){
				if(arr[i] == desc){
					arr[i + 3] = Number(arr[i + 3]) + Number(num);
					cookieStr = arr.join(":");
					isYes = true;
					break;
				}
				i += 5;
			}
			if(!isYes){
				cookieStr += ":" + desc + ":" + pic + ":" + price + ":" + num + ":" + color;
			}
			$.cookie("goods", cookieStr, {
				expires: 7,
				path: "/"
			});
		}
	})
	//显示加入购物车成功。
	function success(){
		$(".add_success").css("display", "block");
		$(".add_success input").click(function(){
			$(".add_success").css("display", "none");
			location.reload();
		})
	}
})
