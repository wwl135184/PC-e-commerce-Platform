$(function(){
	//加入购物车
	var first = $.cookie("goods") ? true : false;
	if(!first){
		$(".notCart").css("display", "block");
		$(".haveCart").css("display", "none");
	}else{
		var cookieStr = $.cookie("goods");
		var arr = cookieStr.split(":");
		$(".haveCart").css("display", "block");
		$(".notCart").css("display", "none");
		var html = "";
		for(var i = 0; i < arr.length; i += 5){
			html += '<div class = "shopping_synthesize"><div class = "pic"><img src=' + arr[i + 1] + '></div><div class = "desc"><p>' + arr[i] + '</p><a class = "deleteShopping">删除</a>&nbsp;&nbsp;<a>加入收藏</a></div><div class = "color"><span>' + arr[i + 4] + '</span></div><div class = "VIPprice"><span>￥' + arr[i + 2] + '</span></div><div class = "closingCost"><span>￥' + arr[i + 2] + '</span></div><div class = "num"><a class = "j_a"><img src="shoppingCart_images/j_a.gif"/></a><input type="text" value =' + arr[i + 3] + ' id = "num"/><a class = "a_j"><img src="shoppingCart_images/a_j.gif"/></a></div><div class = "subtotal"><span>￥<i class = "total">' + Number(arr[i + 2] * arr[i + 3]) + '</i></span></div></div>';
		}
		$(".shopping_details").html(html);
		Delete();
		count();
		Sum();
	}
	//删除商品
	function Delete(){
		$(".deleteShopping").click(function(){
			var cookieStr = $.cookie("goods");
			// alert(cookieStr);
			var goodsArr = cookieStr.split(":");
			var Desc = $(this).parent().parent().find(".desc p").html();
			for(var i = 0; i < goodsArr.length;){
				if(goodsArr[i] == Desc){
					goodsArr.splice(i,5);
					cookieStr = goodsArr.join(":");
					break;
				}
				i += 5;
			}
			location.reload();
			$.cookie("goods", cookieStr, {
				expires: 7,
				path: "/"
			});
			// alert($.cookie("goods"));
			$(this).parent().parent().remove();
			var isYes = $(".shopping_details").html();
			if(isYes == ""){
				$(".notCart").css("display", "block");
				$(".haveCart").css("display", "none");
			}
			Sum();
		})
	}
	//增加减少商品数量
	function count(){
		$(".j_a").click(function(){
			var num = $(this).parent().parent().find("#num").val();
			var Desc = $(this).parent().parent().find(".desc p").html();
			if(num == 1){
				num = 1;
				var cookieStr = $.cookie("goods");
				var goodArr = cookieStr.split(":");
				for(var i = 0; i < goodArr.length;){
					if(goodArr[i] == Desc){
						goodArr[i + 3] = 1;
						cookieStr = goodArr.join(":");
						break;
					}
					i += 5;
				}
			}else{
				num--;
				var cookieStr = $.cookie("goods");
				var goodArr = cookieStr.split(":");
				for(var i = 0; i < goodArr.length;){
					if(goodArr[i] == Desc){
						goodArr[i + 3] = Number(goodArr[i + 3]) - 1;
						cookieStr = goodArr.join(":");
						break;
					}
					i += 5;
				}
			}
			$.cookie("goods", cookieStr, {
				expires: 7,
				path: "/"
			});
			$(this).parent().parent().find("#num").val(num);
			location.reload();
			Sum();
		})
		$(".a_j").click(function(){
			var num = $(this).parent().parent().find("#num").val();
			var Desc = $(this).parent().parent().find(".desc p").html();
			num++;
			var cookieStr = $.cookie("goods");
			var goodArr = cookieStr.split(":");
			for(var i = 0; i < goodArr.length;){
				if(goodArr[i] == Desc){
					goodArr[i + 3] = Number(goodArr[i + 3]) + 1;
					cookieStr = goodArr.join(":");
					break;
				}
				i += 5;
			}
			$.cookie("goods", cookieStr, {
				expires: 7,
				path: "/"
			});
			$(this).parent().parent().find("#num").val(num);
			location.reload();
			Sum();
		})
	}
	//计算价格
	function Sum(){
		var sum = 0;
		var total = 0;
		var Length = $(".shopping_details").find(".shopping_synthesize").length;
		for(var j = 0; j < Length; j++){
			sum += Number($(".shopping_synthesize #num").eq(j).val());
			total += Number($(".total").eq(j).html());
		}
		$(".statistics_num").html(sum);
		$(".statistics_price").html(total);
	}
	//网页清空购物车
	$(".empty").click(function(){
		$(".notCart").css("display", "block");
		$(".haveCart").css("display", "none");
		var cookieStr = $.cookie("goods");
		cookieStr = "";
		$.cookie("goods", cookieStr, {
			expires: 7,
			path: "/"
		});
		success();
	})
	//显示清空购物车成功。
	function success(){
		$(".add_success").css("display", "block");
		$(".add_success input").click(function(){
			$(".add_success").css("display", "none");
		})
	}
})