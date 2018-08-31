$(function(){
	var $elecolor="";
	hoveryellow('#top .top .top-left a');
	hoveryellow('.top .top-middle a');
	hoveryellow('.top .top-right .top-right1,.top-right6');
	hoveryellow(".top-right .top-right2 a");
	$(".top-right .top-right2").mouseover(function(){
		$(this).css("background","#fff");
		$(".top-right .top-right2 ul").css("display","block");
		$(".top-right .top-right2 ul li a").mouseover(function(){
			$(this).css("border-bottom","1px solid #fd7b25");
		})
		$(".top-right .top-right2 ul li a").mouseout(function(){
			$(this).css("border-bottom",0);
		})
	})
	$(".top-right .top-right2").mouseout(function(){
		$(this).css("background","");
		$(".top-right .top-right2 ul").css("display","none");
		
	})
	hoveryellow(".top-right .top-right3 a");
	$(".top-right .top-right3").mouseover(function(){
		$(this).css("background","#fff");
		$(".top-right .top-right3 ul").css("display","block");
		$(".top-right .top-right3 ul li a").mouseover(function(){
			$(this).css("border-bottom","1px solid #fd7b25");
		})
		$(".top-right .top-right3 ul li a").mouseout(function(){
			$(this).css("border-bottom",0);
		})
	})
	$(".top-right .top-right3").mouseout(function(){
		$(this).css("background","");
		$(".top-right .top-right3 ul").css("display","none");
		
	})
	hoveryellow(".top-right .top-right5 a");
	$(".logo-t-r input").focus(function(){
		$(this).val("");
	})
	hoveryellow(".form3 a");
	$(".con-r li").mouseover(function(){
		$(this).css("background","#6D9D03");
	})
	$(".con-r li").mouseout(function(){
		$(this).css("background",0);
	})
	
	
	var bool_a=true;
	var timer=null;
	
	$(".ul").on({
		"mouseover":function(){
			$(this).css("border","1px solid #90c31f");
			$(this).children().eq(4).css("display","block");
			$(this).children().eq(2).css("display","none");
			oUlShow();
			return false;
		},
		"mouseout":function(){
			$(this).css("border",0);
			$(this).children().eq(4).css("display","none");
			$(this).children().eq(2).css("display","block");
			oUlHide();
			return false;
		}
	},".ul1")
	hoveryellow(".box-l2 a");
	
	$(".con-l").mouseover(oUlShow);
	$(".con-l").mouseout(oUlHide);
	
	function oUlShow(){
		bool_a=false;
		$(".ul").css("display","block");
		timer=null;
	}
	function oUlHide(){
		timer=setTimeout(function(){
			if(bool_a){
				$(".ul").css("display","none");
			}
		},300);
		bool_a=true;
	}
	
	var off=false;
	$(".content-l1-a").click(function(){
		if(off){
			$(this).children(".cont").css("display","none");
			$(".content-l1-a i").css("background","url(dist/images/tubiao.png) no-repeat left -786px")
		}else{
			$(this).children(".cont").css("display","block");
			$(".content-l1-a i").css("background","url(dist/images/tubiao.png) no-repeat left -757px")
		}
		off=!off;		
	})
	hoveryellow(".content-l1-a a")
	hoveryellow(".cont1");
	hoveryellow(".cont1 h4")
	hoveryellow(".content-r1-a1 div p");
	hoveryellow(".content-r3-a2 a");
	
	
	var off1=false;
	$(".content-r3-b1 p").click(function(){
		if(off1){
			$(this).children("b").html("精简选项");
			$(".content-r3-a").css("height","212px");
		}else{
			$(this).children("b").html("更多选项");
			$(".content-r3-a").css("height","60px");
			$(".content-r3-a").css("overflow","hidden");
		}
		off1=!off1;
	})
	
	$(".content-r4-b1b").click(function(){
		$(location).attr("href","boshilun1.html")
	})
	
	
	$(".content-r4-b1").mouseover(function(){
		$(this).children(".content-r4-b1b").css("display","block");
	})
	$(".content-r4-b1").mouseout(function(){
		$(this).children(".content-r4-b1b").css("display","none");
	})
	
	$("#right").children("a").eq(0).mouseover(function(){
		$("#right").children("a").eq(0).css("background","url(dist/images/tubiao.png) no-repeat -364px -597px")
		$("#right").children("a").eq(0).children("img").css("display","block")
	})
	$("#right").children("a").eq(0).mouseout(function(){
		$("#right").children("a").eq(0).css("background","url(dist/images/tubiao.png) no-repeat -309px -597px")
		$("#right").children("a").eq(0).children("img").css("display","none")
	})
	
	
	$("#right").children("a").eq(1).mouseover(function(){
		$("#right").children("a").eq(1).css("background","url(dist/images/tubiao.png) no-repeat -364px -475px")
	})
	$("#right").children("a").eq(1).mouseout(function(){
		$("#right").children("a").eq(1).css("background","url(dist/images/tubiao.png) no-repeat -309px -475px")
	})
	
	$("#right").children("a").eq(2).mouseover(function(){
		$("#right").children("a").eq(2).css("background","url(dist/images/tubiao.png) no-repeat -364px -536px")
	})
	$("#right").children("a").eq(2).mouseout(function(){
		$("#right").children("a").eq(2).css("background","url(dist/images/tubiao.png) no-repeat -309px -536px")
	})
	
	$("#right").children("a").eq(3).mouseover(function(){
		$("#right").children("a").eq(3).css("background","url(dist/images/tubiao.png) no-repeat -364px -658px")
	})
	$("#right").children("a").eq(3).click(function(){
		$(location).attr("href","gouwuche.html");
	})
	
	
	
	
	
	$("#right").children("a").eq(3).mouseout(function(){
		$("#right").children("a").eq(3).css("background","url(dist/images/tubiao.png) no-repeat -309px -658px")
	})
	
	$("#right").children("a").eq(4).mouseover(function(){
		$("#right").children("a").eq(4).css("background","url(dist/images/tubiao.png) no-repeat -364px -719px")
	})
	$("#right").children("a").eq(4).mouseout(function(){
		$("#right").children("a").eq(4).css("background","url(dist/images/tubiao.png) no-repeat -309px -719px")
	})
	

	$("#right").children("a").eq(4).click(function(){
		$("html,body").animate({scrollTop:0},"normal")
	})
	
	function hoveryellow(ele){
		$(ele).mouseover(function(){
			$elecolor=$(ele).css("color");
			$(this).css("color","#fd7b25");
			async:false;
		})
		$(ele).mouseout(function(){
			$(this).css("color",$elecolor);
		})
	}
	
	
})





