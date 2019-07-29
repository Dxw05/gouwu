$(function() {
	$(".jia").click(function() {
		var num = $(this).prev().val();
		var number = parseInt(num) + 1
		$(this).prev().val(number);
		xiaoji()
		zongjin()
		zongshu()
	})
	$(".jian").click(function() {
		var num = $(this).next().val();
		if (num - 1 != 0) {
			var number = parseInt(num) - 1
			$(this).next().val(number);
			xiaoji()
			zongjin()
			zongshu()
		} else {
			alert("不能再减了嗷")
		}
	})
	xiaoji()

	function xiaoji() {
		$(".hsdd3").each(function() {
			var danjia = $(this).children().children().next().next().next().html();
			var shuliang = $(this).children().find(".number").val();
			var xiaoji = parseFloat(danjia).toFixed(2) * parseFloat(shuliang).toFixed(2);
			xiaoji = xiaoji.toFixed(2)
			$(this).children().find(".money").html(xiaoji)
			zongjin()
			zongshu()
		})
	}
	zongjin()
	function zongjin() {
		var zongjia = 0;
		$(".money").each(function() {
			var mon = $(this).html();
			zongjia = parseInt(zongjia) + parseInt(mon)
			zongjia = zongjia.toFixed(2)
		})
		$("#zongji").html(zongjia)
	}
	zongshu()
	function zongshu() {
		var he = 0;
		$(".number").each(function() {
			var num = $(this).val();
			he = parseInt(num) + parseInt(he);
		})
		$("#shulang").html(he)
	}
	$(".del").click(function() {
		var flag = confirm("您确定删除吗？")
		if (flag) {
			$(this).parent().parent().parent().remove();
			zongshu()
			zongjin()
		}
	})
})
