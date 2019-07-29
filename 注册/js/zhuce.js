function checkuser(){
		var $user = $("#user").val();
		var $userid = $("#userid");
		var reguser = /^\w{4,12}$/;
		if($user==""){
			$userid.html("用户名不能为空");
			return false;
		}else if(reguser.test($user)==false){
			$userid.html("用户名只能由4-12位的字母数字下划线组成")
			return false;
		}
		$userid.html("");
		return true
}
function checkpwd(){
		var $pwd = $("#pwd").val();
		var $pwdid = $("#pwdid");
		var regpwd = /^\S{6,20}$/;
		if($pwd==""){
			$pwdid.html("密码不能为空");
			return false;
		}else if(regpwd.test($pwd)==false){
			$pwdid.html("密码必须为6-20位字符")
			return false;
		}
		$pwdid.html("");
		return true
}
function checkrepwd(){
	var $pwd = $("#pwd").val();
	var $repwd = $("#repwd").val();
	var $repwdid = $("#repwdid")
	if($pwd!=$repwd){
		$repwdid.html("两次密码不一致");
		return false;
	}
	$repwdid.html("")
	return true;
}
function checkyz(){
		var $yz = $("#yz").val();
		var $yzid = $("#yzid");
		if($yz==""){
			$yzid.html("验证码不能为空");
			return false;
		}else if($yz!="ad4f"){
			$yzid.html("验证码输入错误")
			return false;
		}
		$yzid.html("");
		return true
}
$(function(){
	$("#pwd").keyup(function(){
		var $pwd = $(this).val();
		var regpwd1 = /^[a-zA-Z]+$/;
		var regpwd2 = /^[0-9]+$/;
		var regpwd3 = /^[a-zA-Z0-9]+$/;
		var regpwd4=/^[a-zA-Z0-9._-]+$/
		if(regpwd1.test($pwd)==true||regpwd2.test($pwd)==true){
			$("#anquan span").removeClass("yes").addClass("no")
			$("#anquan span:first").addClass("yes")
		}else if(regpwd3.test($pwd)==true){
			$("#anquan span").removeClass("yes").addClass("no")
			$("#anquan span:first").next().removeClass("no").addClass("yes")
		}else if(regpwd4.test($pwd)==true){
			$("#anquan span").removeClass("yes").addClass("no");		
			$("#anquan span:first").next().next().removeClass("no").addClass("yes")
		}
		if($pwd==""){
			$("#anquan span").removeClass("yes").addClass("no")
		}
	})
	$("#pwd").blur(checkpwd);
	$("#user").blur(checkuser);
	$("#repwd").blur(checkrepwd);
	$("#yz").blur(checkyz);
	$("#myform").submit(function(){
		var flag = true;
		if(!checkuser) flag = false;
		if(!checkpwd) flag = false;
		if(!checkrepwd) flag = false;
		if(!checkyz) flag = false;
		return flag;
	})
})