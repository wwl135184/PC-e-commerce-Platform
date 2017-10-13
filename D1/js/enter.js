$(function(){
	$("#username").focus(function(){
		$(".hint").css("display", "block");
		$(".hint p").html("请输入用户名/Email/手机号");
	})
	$("#username").blur(function(){
		$(".hint").css("display", "none");
	})
	$("#PW").focus(function(){
		$(".hint1").css("display", "block");
		$(".hint1 p").html("请填写长度为6~14字符的密码，字母区分大小写");
	})
	$("#PW").blur(function(){
		$(".hint1").css("display", "none");
	})
	$("#importCode").focus(function(){
		$(".hint2").css("display", "block");
		$(".hint2 p").html("请输入验证码");
	})
	$("#importCode").blur(function(){
		$(".hint2").css("display", "none");
	})
	var oShow = document.getElementById("showCode");
	oShow.value  = authCode(4);
	$(".exchange").click(function(){
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
})