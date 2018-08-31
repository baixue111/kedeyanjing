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
	
	$(".xihuan1 h3").click(function(){
		$(".xihuan1 h3").css("color","#333");
		$(this).css("color","#f60");
	})
	
	
	
	var goodstr=$.cookie("good") ? $.cookie("good") : "";
	if(goodstr==""){
		$(".kuang1").css("display","block");
	}else{
		$(".kuang1").css("display","none");
		$("#kuang").css("border",0);
		var goodobj=toobj(goodstr);
		function toobj(str){
			if(!str){
				return {};
			}
			return JSON.parse(str);
		}
		for(var id in goodobj){
			var shangpin=goodobj[id];
			var str=`<div class="kuang2">
					<div class="kuang2a">
						<nav>商品</nav>
						<h4>光度</h4>
						<h4>数量</h4>
						<h4>单价(元)</h4>
						<h4>小计(元)</h4>
						<h4>操作</h4>
					</div>
					<div class="kuang2b">
						<h3>可得自营</h3>
					</div>
					<div class="kuang22 clear-fix">
						<ul class="kuang2c" data-shangpin-id="${id}">
							<li class="kuang2c1"><img src=${shangpin.img} alt="" /></li>
							<li class="kuang2c2">${shangpin.name}</li>
							<li class="kuang2c3">${shangpin.guangdu}</li>
							<li class="kuang2c4">
								
								<input type="text" value=${shangpin.num} class="text1">
								
							</li>
							<li class="kuang2c5">${shangpin.price}</li>
							<li class="kuang2c6">${shangpin.price*shangpin.num}</li>
							<li class="kuang2c7">
								<p>加入收藏夹</p>
								<p>删除</p>
							</li>
						</ul>
					</div>
					
				</div>
			`;
			$("#kuang").append(str);
			
		}
		
		$(".kuang2c7 p").eq(1).click(function(){
			var id=$(this).parents(".kuang2c").remove().attr("data-shangpin-id");
			var goodstr=$.cookie("good") ? $.cookie("good") : "";
			var goodobj=toobj(goodstr);
			delete goodobj[id];
			$.cookie("good",JSON.stringify(goodobj),{expires:7,path:"/"});
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




