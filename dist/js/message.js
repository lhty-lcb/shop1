"use strict";$(function(){var e,i=!1;(e=getCookie(document.cookie,"username"))&&(i=!0,$(".nav-register").css("display","none"),$(".nav-login").text("欢迎您，"+e).css("width","160"),$(".btn.btn-warning").text("点击进入我的购物车").attr("href","./shop.html"));var t=document.createElement("div");t.className="shadow",$(t).css("height","1686"),$("body").append(t),$(".car").mouseenter(function(){$(".nav-car").slideDown("fast")}),$(".car").mouseleave(function(){$(".nav-car").slideUp("fast")}),$(".btn-warning").click(function(){if(i)location.href="./shop.html";else{$(".nav-car").css("display","none");var e=(document.documentElement.clientHeight-380)/2,t=(document.documentElement.clientWidth-352)/2;$(".login").css({display:"block",left:t,top:e}),$(".shadow").css("display","block")}}),$(window).resize(function(){var e=(document.documentElement.clientHeight-380)/2,t=(document.documentElement.clientWidth-352)/2;$(".login").css({left:t,top:e}),$(".register").css({left:t,top:e})}),$(".cancel").click(function(){$(".login").css("display","none"),$(".shadow").css("display","none"),$(".register").css("display","none")}),$(".re").click(function(){var e=(document.documentElement.clientHeight-380)/2,t=(document.documentElement.clientWidth-352)/2;$(".login").css("display","none"),$(".register").css("display","block"),$(".register").css({left:t,top:e}),$(".shadow").css("display","block")}),$(".lg").click(function(){var e=(document.documentElement.clientHeight-380)/2,t=(document.documentElement.clientWidth-352)/2;$(".login").css("display","block"),$(".register").css("display","none"),$(".login").css({left:t,top:e}),$(".shadow").css("display","block")}),$(".nav-login").click(function(){i||$(".lg").trigger("click")}),$(".nav-register").click(function(){$(".re").trigger("click")}),$(".big-img-box").hover(function(){$(".move-span").css("display","block"),$(".show-img-box").css("display","block"),$(this).mousemove(function(e){var t=e.pageX-$(this).offset().left,i=e.pageY-$(this).offset().top;(t-=$(".move-span").width()/2)<0&&(t=0),(i-=$(".move-span").height()/2)<0&&(i=0),i>$(this).height()-$(".move-span").height()&&(i=$(this).height()-$(".move-span").height()),t>$(this).width()-$(".move-span").width()&&(t=$(this).width()-$(".move-span").width()),$(".move-span").css({left:t,top:i}),$(".show-img").css({left:-2*t,top:-2*i})})},function(){$(".move-span").css("display","none"),$(".show-img-box").css("display","none")}),$(".small-img ul li").mouseenter(function(){var e="../images/info/"+($(this).index()+1)+"-1.jpg";$(".big-img").attr("src",e),$(".show-img img").attr("src",e),$(this).css("border","2px solid #f60").siblings().css("border","none")});var o="",l="",a=0;$(".guige li").click(function(){if($(this).hasClass("select"))$(this).removeClass("select"),o="",$(".num").html("37.80<i>¥</i>");else{$(this).addClass("select").siblings().removeClass("select"),o=$(this).children().eq(1).text();var e=(l=$(this).children().eq(0).attr("src")).match(/\d+/);switch(l=l.replace(/\d/,e[0]+"-1"),a=$(this).index(),$(this).index()){case 0:$(".num").html("37.80<i>¥</i>");break;case 1:$(".num").html("47.80<i>¥</i>");break;case 2:$(".num").html("57.10<i>¥</i>");break;case 3:$(".num").html("67.80<i>¥</i>")}}}),$(".less").click(function(){0!=$(".produceNum").val()&&$(".produceNum").val($(".produceNum").val()-1)}),$(".more").click(function(){""==$(".produceNum").val()?$(".produceNum").val(1):$(".produceNum").val(parseInt($(".produceNum").val())+1)}),$(".add-car").click(function(){if(""!=o){var e=$(".info-message").children().eq(0).text(),t=parseFloat($(".num").text()).toFixed(2),i=$(".produceNum").val(),s="?id="+a+"&name="+e+"&price="+t+"&guige="+o+"&img="+l+"&num="+i;$.ajax({url:"http://localhost/shop7.4/shop1/dist/interface/addwq.php"+s,dataType:"jsonp",success:function(e){clearTimeout($(".tip").attr("timer"));var t=(document.documentElement.clientHeight-$(".tip").height())/2,i=(document.documentElement.clientWidth-$(".tip").width())/2;$(".tip").css({left:i,top:t}).fadeIn(),1==e.code?$(".tip").addClass("addsuccess").removeClass("addfail").text("添加成功"):$(".tip").addClass("addfail").removeClass("addsuccess").text("添加失败"),$(".tip").attr("timer",setTimeout(function(){$(".tip").fadeOut()},1e3))}})}else{clearTimeout($(".tip").attr("timer")),$(".tip").slideDown().addClass("addfail").text("请先选择一个规格");var n=(document.documentElement.clientHeight-57)/2,c=(document.documentElement.clientWidth-$(".tip").outerWidth())/2;$(".tip").css({left:c,top:n}),$(".tip").attr("timer",setTimeout(function(){$(".tip").fadeOut()},1e3))}})});