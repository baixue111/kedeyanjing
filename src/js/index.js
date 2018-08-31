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
	
	$(".ul").on({
		"mouseover":function(){
			$(this).css("border","1px solid #90c31f");
			$(this).children().eq(4).css("display","block");
			$(this).children().eq(2).css("display","none");
			return false;
		},
		"mouseout":function(){
			$(this).css("border",0);
			$(this).children().eq(4).css("display","none");
			$(this).children().eq(2).css("display","block");
			return false;
		}
	},".ul1")
	hoveryellow(".box-l2 a");
	
	$(".banner-mark1").mouseover(function(){
		$(".ban-mark1").animate({opacity:1},"slow");
		$(".ban-mark2").animate({opacity:1},"slow");
	})
	$(".banner-mark1").mouseout(function(){
		$(".ban-mark1").animate({opacity:0},"slow");
		$(".ban-mark2").animate({opacity:0},"slow")
	})
	var $index=0;
	var $timer=null;
	lunbo();
	auto();
	$(".ban-mark1").click(function(){
		$index--;
		if($index==-1){
			$index==$(".banner-mark1 a img").length-1;
		}
		lunbo();
	})
	$(".ban-mark2").click(function(){
		$index++;
		if($index>=$(".banner-mark1 a img").length){
			$index=0;
		}
		lunbo();
	})
	$('.b-mark').on({
		'mouseenter' : function(){
			$index=$(this).index();
			lunbo();
		}
	},'a')
	
	function lunbo(){
		$(".banner-mark1 a img").css("opacity",0);
		$(".b-mark a").css("background","#333");
		$(".banner-mark1 a img").eq($index).animate({opacity:1},"normal");
		$(".b-mark a").eq($index).css("background","#90C221");
		if($index==0){
			$("#banner").css("background","#4696d3")
		}else if($index==1){
			$("#banner").css("background","#fdc3bf")
		}else if($index==2){
			$("#banner").css("background","#fff0f0")
		}else if($index==3){
			$("#banner").css("background","#0c102d")
		}else if($index==4){
			$("#banner").css("background","#caedff")
		}else if($index==5){
			$("#banner").css("background","#c5d7ed")
		}else if($index==6){
			$("#banner").css("background","#e3d0b2")
		}
	}
	function auto(){
		$timer=setInterval(function(){
			$index++;
			if($index==$(".banner-mark1 a img").length){
				$index=0;
			}
			lunbo();
		},5000)
	}
	
	
	$(".rmss-l1 a").mouseover(function(){
		$(this).css('background',"#6D9D03");
		$(this).css("color","#fff");
	})
	$(".rmss-l1 a").mouseout(function(){
		$(this).css('background',"#fff");
		$(this).css("color","#666");
	})
	
	$(".rmss-m a img").mouseover(function(){
		$(this).animate({opacity:0.5},"normal")
	})
	$(".rmss-m a img").mouseout(function(){
		$(this).animate({opacity:1},"normal")
	})
	
	
	$(".rmss-r h2").mouseover(function(){
		$(this).css("background","#fff");	
	})
	$(".rmss-r h2").mouseout(function(){
		$(this).css("background","#f4f4f4");
	})
	hoveryellow($(".rmss-r h2"));
	
	$(".rmss-r h2:eq(0)").css("background","#fff");
	
	$(".rmss-r h2:eq(0)").mouseover(function(){
		$(".rmss-r .rmss-r1:eq(1)").css("display","none");
		$(".rmss-r .rmss-r1:eq(0)").css("display","block");
	})
	$(".rmss-r h2:eq(1)").mouseover(function(){
		$(".rmss-r .rmss-r1:eq(0)").css("display","none");
		$(".rmss-r .rmss-r1:eq(1)").css("display","block");
	})
	
	
	$(".miaosha1").css("background","url(dist/images/icon3.gif) no-repeat 0 0")
	
	$(".miaosha1").mouseover(function(){
		$(this).css("background","url(dist/images/icon3.gif) no-repeat 0 0");
		$(".miaosha-r1").css("display","block");
		$(".miaosha2").css("background","url(dist/images/icon3.gif) no-repeat 0 -90px");
		$(".miaosha-r2").css("display","none");
	})
	$(".miaosha2").mouseover(function(){
		$(this).css("background","url(dist/images/icon3.gif) no-repeat 0 -275px");
		$(".miaosha-r2").css("display","block");
		$(".miaosha1").css("background","url(dist/images/icon3.gif) no-repeat 0 -182px");
		$(".miaosha-r1").css("display","none");
	})
	
	yidong(".miaosha-r1a img")
	
	hoveryellow(".ul-top2 a")
	hoveryellow(".ul-top3 a")
	hoveryellow(".ul-top4 a")
	
	
	
	
	
	yilou(".yilou:eq(0)")
	yilou(".yilou:eq(1)")
	yilou(".yilou:eq(2)")
	function yilou(ele){	
		$(ele).find(".div-l1-b").children("li").eq(0).mouseover(function(){
			console.log($(ele))
			$(ele).find(".div-l1-a").animate({left:0})
			$(this).css("background","#90C221");
			$(ele).find(".div-l1-b").children("li").eq(1).css("background","#666");
		})
		$(ele).find(".div-l1-b").children("li").eq(1).mouseover(function(){
			$(ele).find(".div-l1-b").children("li").eq(0).css("background","#666");
			$(ele).find(".div-l1-a").animate({left:"-210px"})
			$(this).css("background","#90C221");
		})
	}
	yilou1(".yilou:eq(0)")
	yilou1(".yilou:eq(1)")
	yilou1(".yilou:eq(2)")
	function yilou1(ele){	
		$(ele).find(".div-r1-b").children("li").eq(0).mouseover(function(){
			console.log($(ele))
			$(ele).find(".div-r1-a").animate({left:0})
			$(this).css("background","#90C221");
			$(ele).find(".div-r1-b").children("li").eq(1).css("background","#666");
		})
		$(ele).find(".div-r1-b").children("li").eq(1).mouseover(function(){
			$(ele).find(".div-r1-b").children("li").eq(0).css("background","#666");
			$(ele).find(".div-r1-a").animate({left:"-490px"})
			$(this).css("background","#90C221");
		})
	}
	
	yilou2(".wulou1-l")
	function yilou2(ele){
		$(ele).find(".wulou1-l-b").children("li").eq(0).mouseover(function(){
			console.log($(ele))
			$(ele).find(".wulou1-l-a").animate({left:0})
			$(this).css("background","#90C221");
			$(ele).find(".wulou1-l-b").children("li").eq(1).css("background","#666");
		})
		$(ele).find(".wulou1-l-b").children("li").eq(1).mouseover(function(){
			$(ele).find(".wulou1-l-b").children("li").eq(0).css("background","#666");
			$(ele).find(".wulou1-l-a").animate({left:"-710px"})
			$(this).css("background","#90C221");
		})
	}
	
	
	
	lunbo2(".div-l1-b");
	lunbo2(".div-r1-b");
	lunbo2(".wulou1-l-b")
	function lunbo2(ele){
		setInterval(function(){
			setTimeout(function(){
				$(ele).prev().animate({left:-$(ele).prev().children("li").width()},1000)
				$(ele).children("li").eq(1).css("background","#90C221");
				$(ele).children("li").eq(0).css("background","#666");
			},5000)
			setTimeout(function(){
				$(ele).prev().animate({left:0},1000)
				$(ele).children("li").eq(0).css("background","#90C221");
				$(ele).children("li").eq(1).css("background","#666");
			},10000)
			async:false;
		},10000)
	}
	hoveryellow(".div-l2-a li a div p");
	hoveryellow(".div-r1 a"); 
	yidong(".div-r1 a img")

	
	hoveryellow(".silou2-a a p");
	yidong(".silou2-a a img");
	hoveryellow(".wulou2-a a p")
	yidong(".wulou2-a a img")
	
	$(".wlmd1").on({
		"mouseover":function(){
			$(this).css("background","#90C221")
			$(this).css("color","#fff")
		},
		"mouseout":function(){
			$(this).css("background","#fff")
			$(this).css("color","#666")
		}
	},"li")
	
	hoveryellow(".wlmd1 div a");
	
	$(".wlmd3-l").children("li").eq(0).mouseover(function(){
		$(this).css("background","url(dist/images/left_bg_all.png) no-repeat 0 0 ")
		$(".wlmd3-l").children("li").eq(1).css("background","url(dist/images/left_bg_all.png) no-repeat 0 -136px")
	})
	$(".wlmd3-l").children("li").eq(1).mouseover(function(){
		console.log($(this))
		$(this).css("background","url(dist/images/left_bg_all.png) no-repeat 0 -408px ")
		$(".wlmd3-l").children("li").eq(0).css("background","url(dist/images/left_bg_all.png) no-repeat 0 -272px")
	})
	
	$(".pingjia1").children("h3").eq(0).mouseover(function(){
		$(this).css("background","#90C221");
		$(this).css("color","#fff");
		$(".pingjia1").children("h3").eq(1).css("background","#fff")
		$(".pingjia1").children("h3").eq(1).css("color","#333")
		$(".pingjia1").children("ul").eq(1).css("display","block")
		$(".pingjia1").children("ul").eq(0).css("display","none")
	})
	$(".pingjia1").children("h3").eq(1).mouseover(function(){
		$(this).css("background","#90C221");
		$(this).css("color","#fff");
		$(".pingjia1").children("h3").eq(0).css("background","#fff")
		$(".pingjia1").children("h3").eq(0).css("color","#333")
		$(".pingjia1").children("ul").eq(0).css("display","block")
		$(".pingjia1").children("ul").eq(1).css("display","none")
	})
	
	$(".pingjia3-a").children("a").eq(0).mouseover(function(){
		$(this).css("background","url(dist/images/gzbtg.jpg) no-repeat -149px -50px")
		$(".pingjia3-a").children("a").eq(1).css("background","url(dist/images/gzbtg.jpg) no-repeat 0 -50px")
		$(".pingjia3-a div").children("img").eq(0).css("display","block")
		$(".pingjia3-a div").children("img").eq(1).css("display","none")
	})
	
	
	$(".pingjia3-a").children("a").eq(1).mouseover(function(){
		$(this).css("background","url(dist/images/gzbtg.jpg) no-repeat 0px 0px")
		$(".pingjia3-a").children("a").eq(0).css("background","url(dist/images/gzbtg.jpg) no-repeat -149px 0")
		$(".pingjia3-a div").children("img").eq(1).css("display","block")
		$(".pingjia3-a div").children("img").eq(0).css("display","none")
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
	$("#right").children("a").eq(3).mouseout(function(){
		$("#right").children("a").eq(3).css("background","url(dist/images/tubiao.png) no-repeat -309px -658px")
	})
	
	$("#right").children("a").eq(3).click(function(){
		$(location).attr("href","gouwuche.html");
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

	
	$("#left").children("a").eq(0).mouseover(function(){
		$("#left").children("a").eq(0).css("background","url(dist/images/tubiao.png) no-repeat -30px -414px")
	})
	$("#left").children("a").eq(0).mouseout(function(){
		$("#left").children("a").eq(0).css("background","url(dist/images/tubiao.png) no-repeat -70px -414px")
	})
	
	
	$("#left").children("a").eq(1).mouseover(function(){
		$("#left").children("a").eq(1).css("background","url(dist/images/tubiao.png) no-repeat -30px -454px")
	})
	$("#left").children("a").eq(1).mouseout(function(){
		$("#left").children("a").eq(1).css("background","url(dist/images/tubiao.png) no-repeat -70px -454px")
	})
	$("#left").children("a").eq(2).mouseover(function(){
		$("#left").children("a").eq(2).css("background","url(dist/images/tubiao.png) no-repeat -30px -494px")
	})
	$("#left").children("a").eq(2).mouseout(function(){
		$("#left").children("a").eq(2).css("background","url(dist/images/tubiao.png) no-repeat -70px -494px")
	})
	$("#left").children("a").eq(3).mouseover(function(){
		$("#left").children("a").eq(3).css("background","url(dist/images/tubiao.png) no-repeat -30px -534px")
	})
	$("#left").children("a").eq(3).mouseout(function(){
		$("#left").children("a").eq(3).css("background","url(dist/images/tubiao.png) no-repeat -70px -534px")
	})
	
	

	$("#left").children("a").eq(0).click(function(){
		$("html,body").animate({scrollTop:$(".yilou").eq(0).offset().top},"normal")
	})
	$("#left").children("a").eq(1).click(function(){
		$("html,body").animate({scrollTop:$(".yilou").eq(1).offset().top},"normal")
	})
	$("#left").children("a").eq(2).click(function(){
		$("html,body").animate({scrollTop:$(".yilou").eq(2).offset().top},"normal")
	})
	$("#left").children("a").eq(3).click(function(){
		$("html,body").animate({scrollTop:$("#silou").offset().top},"normal")
	})
	
	
	
	var $index2=0;
	$(".silou1-l-b").on({
		'mouseover' : function(){
			$index2=$(this).index();
			lunbo3();
		}
	},"li")
	
	function lunbo3(){		
		$(".silou1-l-b li").css("background","#333");
		$(".silou1-l-a").animate({left:-$(".silou1-l-a li a img").width()*$index2},"normal");
		$(".silou1-l-b li").eq($index2).css("background","#90C221");
	}
	setInterval(function(){
		$index2++;
		if($index2==$(".silou1-l-a li").length){
			$index2=0;
		}
		lunbo3();
	},5000)
	
	
//	var $index4=100;
//	setInterval(function(){
//		$index4+=100;
//		$("#pingjia").children(".pingjia2").eq(0).children("ul").animate({top:$index4},"normal")
//		if($("#pingjia").children(".pingjia2").eq(0).children("ul").offset().top >= "7117px"){
//			$("#pingjia").children(".pingjia2").eq(0).children("ul").offset().top="7317px"
//		}
//		console.log($("#pingjia").children(".pingjia2").eq(0).children("ul").offset().top)
//
//	},5000)




	function yidong(ele){
		$(ele).mouseover(function(){
			$(this).animate({left:"-5px"});
		})
		$(ele).mouseout(function(){
			$(this).animate({left:"+5px"});
		})
	}
	
	
	
	
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


//$('.top').on({
//	'mouseover' : function(){
//		$(this)...
//	}
//},'.cl')










