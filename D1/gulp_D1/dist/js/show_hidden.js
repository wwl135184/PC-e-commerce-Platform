$(function(){
	var first = $.cookie("goods") ? true : false;
	if(!first){
		$(".hidden_cart").css("display", "block");
		$(".show_cart").css("display", "none");
	}else{
		var cookieStr = $.cookie("goods");
		var arr = cookieStr.split(":");
		$(".show_cart").css("display", "block");
		$(".hidden_cart").css("display", "none");
		var html = "";
		for(var i = 0; i < arr.length; i += 5){
			html += '<div class = "cart_shopping"><div class = "pic"><img src=' + arr[i + 1] + '></div><p class = "desc"><a href="detailpage.html">' + arr[i] + '</a></p><span class = "price">￥<i class = "i1">' + arr[i + 2] + '</i>&nbsp;X&nbsp;<i class = "i2">' + arr[i + 3] + '</i></span></div>';
		}
		$(".show_cart").html(html);
		Sum();
	}
	function Sum(){
		var sum = 0;
		var total = 0;
		var Length = $(".show_cart").find(".cart_shopping").length;
		for(var j = 0; j < Length; j++){
			sum += Number($(".show_cart .cart_shopping .i2").eq(j).html());
			total += Number($(".show_cart .cart_shopping .i2").eq(j).html()) * Number($(".show_cart .cart_shopping .i1").eq(j).html());
		}
		$(".shoppingCart_num").html(sum);
		$(".Num").html(sum);
		$(".pricei").html(total);
	}
})