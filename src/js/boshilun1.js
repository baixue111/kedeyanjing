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
	
	
	//放大镜
	$(".shangpin-l3").mouseover(function(){
		$(".shangpin-mark").css("display","block");
		$(".shangpin-l2").css("display","block");
	})
	$(".shangpin-l3").mouseout(function(){
		$(".shangpin-mark").css("display","none");
		$(".shangpin-l2").css("display","none");
	})
	$(".shangpin-mark").mousemove(function(evt){
		var e=evt||window.event;
		var x=e.pageX-$(this).width()/2-$(".shangpin-l3").offset().left;
		var y=e.pageY-$(this).height()/2-$(".shangpin-l3").offset().top;
		var maxl=$(".shangpin-l3").width()-$(".shangpin-mark").width();
		var maxt=$(".shangpin-l3").height()-$(".shangpin-mark").height();
		if(x<=0){
			x=0
		}else if(x>=maxl){
			x=maxl;
		}
		if(y<=0){
			y=0
		}else if(y>=maxt){
			y=maxt;
		}
		$(".shangpin-mark").css({left:x,top:y});
		
		
		var bigimgl=-(x*$(".shangpin-l2").width()/$(".shangpin-mark").width())+"px";
		var bigimgt=-(y*$(".shangpin-l2").height()/$(".shangpin-mark").height())+"px";
		$(".shangpin-l2 img").css({left:bigimgl,top:bigimgt});
	})
	
	
	hoveryellow(".shangpin1a-a1 h5")
	var off=false;
	$(".pin1").click(function(){
		if(off){
			$(this).children(".pin2").slideUp("slow")
		}else{
			$(this).children(".pin2").slideDown("slow")
		}
		off=!off;
	})

	$(".pin2 li").click(function(){
		$(this).parent().siblings("input").val($(this).html());
		
	})
	
	
	$(".shangpin1b-a").click(function(){
		$(location).attr("href","gouwuche.html")
	})
	
	var off9=false;
	$(".shangpin1b-b").click(function(){
		if($(this).parent(".shangpin1b").siblings(".shangpin1a").find(".pin1").children("input").val()==""){
			$(".pin2").eq(0).css("display","block");
			off9=false;
		}else{
			off9=true;
			
		}
		
		if(off9){
			var id=$(this).parents("#shangpin1").siblings("#shangpin").find(".shangpin-m1").attr("date-shangpin-id");
			var price=$(this).parents("#shangpin1").siblings("#shangpin").find(".shangpin-m1").children("p").eq(0).children("span").html();
			var name=$(this).parents("#shangpin1").siblings("#shangpin").find(".shangpin-m").children("h3").html();
			var img=$(this).parents("#shangpin1").siblings("#shangpin").find(".shangpin-l3").children("img").attr("src");
			var guangdu=$(this).parent(".shangpin1b").siblings(".shangpin1a").find(".pin1").children("input").val();
			
			var goodstr=$.cookie("good") ? $.cookie("good") : "";
			var goodobj=toobj(goodstr);
			function toobj(str){
				if(!str){
					return {};
				}
				return JSON.parse(str);
			}
			
			
			if(id in goodobj){
				goodobj[id].num++;
			}else{
				goodobj[id]={
					"name":name,
					"price":price,
					"guangdu":guangdu,
					"img":img,
					"num":1
				}
			}
			
			$.cookie("good",JSON.stringify(goodobj),{expires:7,path:"/"});
			var $img=$(this).parents("#shangpin1").siblings("#shangpin").find(".shangpin-l3").children("img").clone().css({width:60,height:60});
		
			$img.fly({
	            start: {
	                left: $(".shangpin-l3 img").offset().left,
	                top: $(".shangpin-l3 img").offset().top
	            },
	            end: {
	                left: $("#right").children("a").eq(3).offset().left,
	                top: $("#right").children("a").eq(3).offset().top,
	                width: 0,
	                height: 0,
	            },
	            onEnd : function(){
	            	$img.remove();
	            }
	        });
		}

		

		
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
		$(location).attr("href","gouwuche.html")
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





