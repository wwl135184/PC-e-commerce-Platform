$(function(){
	$("#phone").focus(function(){
		$(".hint1 .p2").css("color", "");
		$(".hint1 .p2").html("请填写正确的手机号。便于您接收订单信息，取回密码等。");
		$(".phone .phone_no").css("display", "none");
	})
	$("#phone").blur(function(){
		if($("#phone").val() == ""){
			$(".hint1 .p2").css("color", "red");
			$(".hint1 .p2").html("手机号码不能为空，请输入");
			$(".phone .phone_no").css("display", "block");
		}else{
			var oPhone = document.getElementById("phone");
			var oValue = oPhone.value.replace(/ /g, "");
			if(/^1\d{10}$/.test(oValue)){
				$(".phone .phone_suc").css("display", "block");
				$(".hint1 .p2").html("");
				$(".phone .phone_no").css("display", "none");
			}else{
				$(".phone .phone_suc").css("display", "none");
				$(".phone .phone_no").css("display", "block");
				$(".hint1 .p2").html("请填写正确的手机号。便于您接收订单信息，取回密码等。");
			}
		}
	})
	var oShow = document.getElementById("showCode");
	oShow.value  = authCode(4);
	$("#refresh").click(function(){
		oShow.value  = authCode(4);
	})
	function authCode(n){
		var arr = [];
		for(var i = 0; i < n; i++){
			var num = parseInt(Math.random() * 100);
			if(num >= 0 && num < 10){
				arr.push(num);
			}else if(num >= 10 && num <= 35){
				arr.push(String.fromCharCode(num + 87));
			}else if(num >= 65 && num <= 90){
				arr.push(String.fromCharCode(num));
			}else{
				i--;
				continue;
			}
		}
		return arr.join("");
	}
	$("#importCode").focus(function(){
		$(".hint1 .p1").css("color", "");
		$(".hint1 .p1").html("请输入手机验证码");
	})
	$("#importCode").blur(function(){
		if($(this).val() == ""){
			$(".hint1 .p1").css("color", "red");
			$(".hint1 .p1").html("验证码不能为空！");
		}
	})
	$("#setPW").focus(function(){
		$(".hint3 p").html("密码长度为6~14位，支持数字、符号、字母、字母区分大小写");
		$(".hint3 p").css("color", "");
		$(".setPW_no").css("display", "none");
	})
	$("#setPW").blur(function(){
		if($("#setPW").val() == ""){
			$(".hint3 p").html("密码长度需为6~14位");
			$(".hint3 p").css("color", "red");
			$(".setPW_no").css("display", "block");
		}else{
			var oSetPW = document.getElementById("setPW");
			var oValue1 = oSetPW.value.replace(/ /g, "");
			if(/^\w{6,14}$/.test(oValue1)){
				$(".setPW_suc").css("display", "block");
				$(".setPW_no").css("display", "none");
				$(".hint3 p").html("");
			}else{
				$(".hint3 p").html("密码长度需为6~14位");
				$(".hint3 p").css("color", "red");
				$(".setPW_no").css("display", "block");
			}
		}
	})
	$("#affirmPW").focus(function(){
		$(".hint4 p").html("请再次输入您设置的密码");
		$(".hint4 p").css("color", "");
		$(".affirmPW_no").css("display", "none");
	})
	$("#affirmPW").blur(function(){
		if($("#affirmPW").val() == ""){
			$(".hint4 p").html("密码长度需为6~14位");
			$(".hint4 p").css("color", "red");
			$(".affirmPW_no").css("display", "block");
		}else{
			var oSetPW = document.getElementById("setPW");
			var oValue1 = oSetPW.value.replace(/ /g, "");
			var oAffirmPW = document.getElementById("affirmPW");
			var oValue2 = oAffirmPW.value.replace(/ /g, "");
			if(/^\w{6,14}$/.test(oValue2) && oValue1 == oValue2){
				$(".affirmPW_suc").css("display", "block");
				$(".affirmPW_no").css("display", "none");
				$(".hint4 p").html("");
			}else{
				$(".hint4 p").html("两次输入密码不一致！");
				$(".hint4 p").css("color", "red");
				$(".affirmPW_no").css("display", "block");
			}
		}
	})
})