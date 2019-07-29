$(function(){
	$(".xiala>li:first").hover(function(){
		$(".lahide").show();
	},function(){
		$(".lahide").hide();
	})
	$(".lahide>li").hover(function(){
		$(this).addClass("lali_show")
	},function(){
		$(this).removeClass("lali_show")
	})
	$(".d1u1 a").hover(function(){
		$(this).addClass("kk")
	},function(){
		$(this).removeClass("kk")
	})
	
	var time=setInterval(img,1500);
	var index = 0;
	function img(){
	    index++;
	    if(index==5){
			index=0;
	    }
	    $(".lb li").hide();
	    $(".lbnum li").removeClass("lbnum_yes").addClass("lbnum_no");
	    $(".lb li:eq("+index+")").show();
	    $(".lbnum li:eq("+index+")").removeClass("lbnum_no").addClass("lbnum_yes");
	}
	$(".lb li").hover(function(){
		clearInterval(time);
	},function(){
		time=setInterval(img,1500);
	})
	$(".lbnum li").click(function(){
		index = $(this).index();
		 $(".lb li").hide();
		$(".lbnum li").removeClass("lbnum_yes").addClass("lbnum_no");
		$(".lb li:eq("+index+")").show();
		$(".lbnum li:eq("+index+")").removeClass("lbnum_no").addClass("lbnum_yes");
	})
})