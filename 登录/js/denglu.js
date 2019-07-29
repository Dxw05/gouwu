$(function(){
	$("form").submit(function(){
		var user = $("#user").val();
		var pwd = $("#pwd").val();
		$.ajax({
			"url":"json.html",
			"type":"get",
			"dataType":"json",
			"success":function(data){
				if(data[1].user!=user||data[1].pwd!=pwd){
					alert("账户名或密码错误");
				}else if(data[1].user==user&&data[1].pwd==pwd){
					alert("登录成功");
					window.location.href="../首页/shouye.html";
				}
			}
		});
		return false;
	})
})