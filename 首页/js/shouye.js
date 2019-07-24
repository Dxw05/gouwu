$(function(){
	$(".xiala>li:first").hover(function(){
		$(".lahide").show();
	},function(){
		$(".lahide").hide();
	})
	$(".lahide li").hover(function(){
		$(this).addClass("lali_show")
	},function(){
		$(this).removeClass("lali_show")
	})
	
	var time=setInterval(img,2000);
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
	$(".lunbo").hover(function(){
		clearInterval(time);
	},function(){
		time=setInterval(img,2000);
	})
	$(".lbnum li").click(function(){
		index = $(this).index();
		 $(".lb li").hide();
		$(".lbnum li").removeClass("lbnum_yes").addClass("lbnum_no");
		$(".lb li:eq("+index+")").show();
		$(".lbnum li:eq("+index+")").removeClass("lbnum_no").addClass("lbnum_yes");
	})
})