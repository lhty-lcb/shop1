"use strict";window.onload=function(){window.history.replaceState(null,null,window.location.href);var t=new Swiper(".swiper-container",{loop:!0,autoplay:2e3,speed:1e3,autoplayDisableOnInteraction:!1,pagination:".pagination",paginationClickable:!0,onSlideChangeStart:function(e){var t=document.getElementById("pic");n(e.activeLoopIndex,getStyle(t,"backgroundColor"))}});$(".arrow-left").on("click",function(e){e.preventDefault(),t.swipePrev()}),$(".arrow-right").on("click",function(e){e.preventDefault(),t.swipeNext()});var n=function(e,t){var n=document.createElement("img"),c=document.createElement("canvas");n.src="../images/pic/pic-"+(e+1)+".png",c.width=n.width,c.height=n.height,c.style.display="none";var i=c.getContext("2d");i.drawImage(n,0,0,c.width,c.height);for(var l=i.getImageData(0,0,n.width,n.height).data,o=[0,0,0,0],a=0;a<l.length;a++){o[a%4]+=l[a]}for(a=0;a<o.length;a++)o[a]=parseInt(o[a]/(l.length/4));var s,r,d,u=document.getElementById("pic");s=u,r=o,clearInterval(s.t),s.t=setInterval(function(){var e,t,n=(t="backgroundColor",(e=s).currentStyle?e.currentStyle[t]:getComputedStyle(e,!1)[t]);n=n.slice(4,this.length-1).split(", ");for(var c=[0,0,0],i=0;i<n.length;i++)c[i]=(r[i]-n[i])/80,c[i]=0<c[i]?Math.ceil(c[i]):Math.floor(c[i]);s.style.backgroundColor="rgb("+(c[0]+parseInt(n[0]))+","+(c[1]+parseInt(n[1]))+","+(c[2]+parseInt(n[2]))+")";for(var l=!0,i=0;i<3;i++)if(n[i]!=r[i]){l=!1;break}l&&(clearInterval(s.t),d&&d())},8)};$(".search").on("keyup",function(){$(".search-list").css("display","block");var e=$(".search").eq(0).val(),t="lcb"+Math.random().toString().slice(2)+(new Date).getTime();$.ajax({url:"https://ds.suning.com/ds/his/new/-"+e+"-0-1_0-"+t+".jsonp?",dataType:"jsonp",jsonpCallback:t,success:function(e){var n=$(".search-list");n.empty(),$.each(e.words,function(e,t){null!=t.keyword&&n.append("<li>"+t.keyword+"</li>")}),$(".search-list li").click(function(){$(".search").eq(0).val($(this).text()),$(".search-list").css("display","none")})}})}),$(".car").mouseenter(function(){$(".nav-car").slideDown("fast")}),$(".car").mouseleave(function(){$(".nav-car").slideUp("fast")}),$(".btn-warning").click(function(){$(".nav-car").css("display","none");var e=(document.documentElement.clientHeight-380)/2,t=(document.documentElement.clientWidth-352)/2;$(".login").css({display:"block",left:t,top:e}),$(".shadow").css("display","block")}),$(window).resize(function(){var e=(document.documentElement.clientHeight-380)/2,t=(document.documentElement.clientWidth-352)/2;$(".login").css({left:t,top:e}),$(".register").css({left:t,top:e})}),$(".cancel").click(function(){$(".login").css("display","none"),$(".shadow").css("display","none"),$(".register").css("display","none")}),$(".re").click(function(){var e=(document.documentElement.clientHeight-380)/2,t=(document.documentElement.clientWidth-352)/2;$(".login").css("display","none"),$(".register").css("display","block"),$(".register").css({left:t,top:e}),$(".shadow").css("display","block")}),$(".lg").click(function(){var e=(document.documentElement.clientHeight-380)/2,t=(document.documentElement.clientWidth-352)/2;$(".login").css("display","block"),$(".register").css("display","none"),$(".login").css({left:t,top:e}),$(".shadow").css("display","block")}),$(".nav-login").click(function(){$(".lg").trigger("click")}),$(".nav-register").click(function(){$(".re").trigger("click")}),$("img").click(function(){location.href="./message.html"})};