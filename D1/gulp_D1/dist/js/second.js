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
	//网页main_details数据
	$.ajax({
		url: "json/second_synthesize.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				var html = "";
				html += '<div class="umbrella"><div class="umbrella_pic"><a href="detailpage.html"><img src=' + data[i].img + '></a></div><span class="umbrella_price1">￥<i class = "i">' + data[i].price1 + '</i></span><s class="umbrella_price2">￥' + data[i].price2 + '</s><span class="quick"><img src="second_images/listsf.jpg"/></span><div class="unbrella_text"><span class="span1"><a href="detailpage.html">' + data[i].unbrella_text1 + '</a></span><span class="span2">' + data[i].unbrella_text2 + '</span></div><span class="comment"><a href="detailpage.html">' + data[i].comment + '</a></span><div class="incart"><a class = "a_j"><img src="detailpage_images/j_a.png"></a><span><input type="text" id = "incart_num" value="1" /></span><a class = "j_a"><img src="detailpage_images/a_j.png"></a><span class="addCart"><a ><img src="second_images/addCart.jpg"/></a></span></div></div>';
				$(".main_details .synthesize li").eq(i).html(html);
				html = "";
			}
			cart();
		}
	})
	$.ajax({
		url: "json/second_salesvolume.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				var html = "";
				html += '<div class="umbrella"><div class="umbrella_pic"><a href="detailpage.html"><img src=' + data[i].img + '></a></div><span class="umbrella_price1">' + data[i].price1 + '</span><s class="umbrella_price2">' + data[i].price2 + '</s><span class="quick"><img src="second_images/listsf.jpg"/></span><div class="unbrella_text"><span class="span1"><a href="detailpage.html">' + data[i].unbrella_text1 + '</a></span><span class="span2">' + data[i].unbrella_text2 + '</span></div><span class="comment"><a href="detailpage.html">' + data[i].comment + '</a></span><div class="incart"><a class = "a_j"><img src="detailpage_images/j_a.png"></a><span><input type="text" id = "incart_num" value="1" /></span><a class = "j_a"><img src="detailpage_images/a_j.png"></a><span class="addCart"><a><img src="second_images/addCart.jpg"/></a></span></div></div>';
				$(".main_details .salesvolume li").eq(i).html(html);
				html = "";
			}
		}
	})
	$.ajax({
		url: "json/second_newProduct.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				var html = "";
				html += '<div class="umbrella"><div class="umbrella_pic"><a href="detailpage.html"><img src=' + data[i].img + '></a></div><span class="umbrella_price1">' + data[i].price1 + '</span><s class="umbrella_price2">' + data[i].price2 + '</s><span class="quick"><img src="second_images/listsf.jpg"/></span><div class="unbrella_text"><span class="span1"><a href="detailpage.html">' + data[i].unbrella_text1 + '</a></span><span class="span2">' + data[i].unbrella_text2 + '</span></div><span class="comment"><a href="detailpage.html">' + data[i].comment + '</a></span><div class="incart"><a class = "a_j"><img src="detailpage_images/j_a.png"></a><span><input type="text" id = "incart_num" value="1" /></span><a class = "j_a"><img src="detailpage_images/a_j.png"></a><span class="addCart"><a ><img src="second_images/addCart.jpg"/></a></span></div></div>';
				$(".main_details .newProduct li").eq(i).html(html);
				html = "";
			}
		}
	})
	$.ajax({
		url: "json/second_cost.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				var html = "";
				html += '<div class="umbrella"><div class="umbrella_pic"><a href="detailpage.html"><img src=' + data[i].img + '></a></div><span class="umbrella_price1">' + data[i].price1 + '</span><s class="umbrella_price2">' + data[i].price2 + '</s><span class="quick"><img src="second_images/listsf.jpg"/></span><div class="unbrella_text"><span class="span1"><a href="detailpage.html">' + data[i].unbrella_text1 + '</a></span><span class="span2">' + data[i].unbrella_text2 + '</span></div><span class="comment"><a href="detailpage.html">' + data[i].comment + '</a></span><div class="incart"><a class = "a_j"><img src="detailpage_images/j_a.png"></a><span><input type="text" id = "incart_num" value="1" /></span><a class = "j_a"><img src="detailpage_images/a_j.png"></a><span class="addCart"><a ><img src="second_images/addCart.jpg"/></a></span></div></div>';
				$(".main_details .cost li").eq(i).html(html);
				html = "";
			}
		}
	})
	//网页main_details切换
	$(".main_guide").find("li").click(function(){
		$(".main_guide").find("li").attr("class", "");
		$(".main_details").find("ul").css("display", "none");
		$(this).attr("class", "deffient");
		$(".main_details").find("ul").eq($(this).index()).css("display", "block");
	})
	//网页购物车cookie
	function cart(){
		var arr1 = [];
		var j = 1;
		var Length = $(".synthesize").children().length;
		for(var i = 0; i < Length; i++){
			arr1[i] = j;
		}
		$(".a_j").click(function(){
			var Index = $(this).parent().parent().parent().index();
			if(arr1[Index] == 1){
				arr1[Index] = 1;
			}else{
				arr1[Index]--;
			}
			$(".synthesize li").eq(Index).find("#incart_num").val(arr1[Index]);
		})
		$(".j_a").click(function(){
			var Index = $(this).parent().parent().parent().index();
			arr1[Index]++;
			$(".synthesize li").eq(Index).find("#incart_num").val(arr1[Index]);
		})
		$(".addCart").click(function(){
			success();
			var aLis = $(this).parent().parent().parent();
			var pic = aLis.find(".umbrella_pic img").attr("src");
			var desc = aLis.find(".span1 a").html();
			var num = aLis.find("#incart_num").val();
			var price = aLis.find(".i").html();
			var color = "紫色";
			var first = $.cookie("goods") ? true : false;
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
				/*alert($.cookie("goods"));*/
			}
		})
	}
	//显示加入购物车成功。
	function success(){
		$(".add_success").css("display", "block");
		$(".add_success input").click(function(){
			$(".add_success").css("display", "none");
		})
	}
})