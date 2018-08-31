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
	
	
	$(".form3 p").click(function(){
		$(location).attr("href","zhuce.html")
	})
	
	$(".form1 h2").eq(0).click(function(){
		$(this).css("color","#90C221");
		$(".form1 h2").eq(1).css("color","#666");
		$(".form2b").css("display","block");
		$(".form2a").css("display","none");
	})
	$(".form1 h2").eq(1).click(function(){
		$(this).css("color","#90C221");
		$(".form1 h2").eq(0).css("color","#666");
		$(".form2b").css("display","none");
		$(".form2a").css("display","block");
	})
	
	
	var off1=false;
	$(".li1-c i").eq(0).click(function(){
		if(off1){
			$(this).css("background","url(dist/images/allbgs.png) no-repeat 0 -432px")
		}else{
			
			$(this).css("background","url(dist/images/allbgs.png) no-repeat -13px -432px")
		}
		off1=!off1;
	})
	
	var off2=false;
	$(".li1-c i").eq(1).click(function(){
		if(off2){
			$(this).css("background","url(dist/images/allbgs.png) no-repeat 0 -432px")
		}else{
			
			$(this).css("background","url(dist/images/allbgs.png) no-repeat -13px -432px")
		}
		off2=!off2;
	})
	
	
	var off4=false;
	var off5=false;
	$(".li1-d input").click(function(){	
		var $yonghu1=$(this).parent(".li1-d").siblings(".li1-a").children("input").val();
		var $mima1=$(this).parent(".li1-d").siblings(".li1-b").children("input").val();
		if($yonghu1==JSON.parse($.cookie("yonghu")).name){
			off4=true;
			if(off4==true&&$mima1==JSON.parse($.cookie("yonghu")).mima){
				off5=true;
			}else{
				$(".li-e").css("display","block");
				$(".li-e").html("密码不正确");
				off5=false;
			}
		}else{
			$(".li-e").css("display","block");
			$(".li-e").html("用户名不存在");
			off4=false;
		}
		if(off4 && off5){
			$(location).attr("href","index.html");
		}	
	})
	console.log($.cookie("yonghu"));
	
	
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




