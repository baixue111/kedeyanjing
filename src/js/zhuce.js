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
	
	
	
	var off1=false;
	var off4=false;
	$(".li6 i").click(function(){
		if(off1){
			$(this).css("background","url(dist/images/allbgs.png) no-repeat 0 -432px")
			off4=false;
		}else{
			
			$(this).css("background","url(dist/images/allbgs.png) no-repeat -13px -432px")
			off4=true;
		}
		off1=!off1;
	})
	
	
	var off=false;
	$(".li1 input").blur(function(){
		var re=/^1(3|5|7|8|4|6|9)[\d]{9}$/;
		if(!re.test($(".li1 input").val())){
			$(".li7").html("请输入正确的手机号");
			off=false;
		}else{
			$(".li7").html("");
			off=true;
		}
	})
	$(".li1 input").focus(function(){
		$(this).val("");
	})
	
	
	
	var off2=false;
	$(".li2 input").blur(function(){
		var re=/^8jd1$/;
		if(!re.test($(".li2 input").val())){
			$(".li7").html("请输入正确的验证码");
			off2=false;
		}else{
			$(".li7").html("");
			off2=true;
		}
	})
	$(".li2 input").focus(function(){
		$(this).val("");
	})
	
	
	
	var off3=false;
	$(".li4 input").blur(function(){
		var re=/^(?![\d]+$)(?![a-zA-Z]+$)(?![\W]+$)[\da-zA-Z_！@#\.]{6,12}$/;
		if(!re.test($(".li4 input").val())){
			$(".li7").html("至少两种（字母、数字、下划线、！@#.）6到15位");
			off3=false;
		}else{
			$(".li7").html("");
			off3=true;
		}
	})
	$(".li4 input").focus(function(){
		$(this).val("");
	})
	
	$(".li5 input").click(function(){
		if(off && off4 && off2 && off3){
			$(location).attr("href","denglu.html");
		}

		var name=$(this).parent(".li5").siblings(".li1").children("input").val();
		var mima=$(this).parent(".li5").siblings(".li4").children("input").val();
		
		
		$.cookie("yonghu",JSON.stringify({"name":name,"mima":mima}),{expires:7,path:'/'});
		
		
		
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




