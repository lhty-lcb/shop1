"use strict";window.onload=function(){var t=new Swiper(".swiper-container",{loop:!0,autoplay:2e3,speed:1e3,autoplayDisableOnInteraction:!1,pagination:".pagination",paginationClickable:!0,onSlideChangeStart:function(e){var t=document.getElementById("pic");n(e.activeLoopIndex,getStyle(t,"backgroundColor"))}});$(".arrow-left").on("click",function(e){e.preventDefault(),t.swipePrev()}),$(".arrow-right").on("click",function(e){e.preventDefault(),t.swipeNext()});var n=function(e,t){var n=document.createElement("img"),a=document.createElement("canvas");n.src="../images/pic/pic-"+(e+1)+".png",a.width=n.width,a.height=n.height,a.style.display="none";var r=a.getContext("2d");r.drawImage(n,0,0,a.width,a.height);for(var o=r.getImageData(0,0,n.width,n.height).data,i=[0,0,0,0],l=0;l<o.length;l++){i[l%4]+=o[l]}for(l=0;l<i.length;l++)i[l]=parseInt(i[l]/(o.length/4));var c,g,p,d=document.getElementById("pic");c=d,g=i,p=function(){console.log("颜色改变完了")},clearInterval(c.t),c.t=setInterval(function(){var e,t,n=(t="backgroundColor",(e=c).currentStyle?e.currentStyle[t]:getComputedStyle(e,!1)[t]);n=n.slice(4,this.length-1).split(", ");for(var a=[0,0,0],r=0;r<n.length;r++)a[r]=(g[r]-n[r])/80,a[r]=0<a[r]?Math.ceil(a[r]):Math.floor(a[r]);c.style.backgroundColor="rgb("+(a[0]+parseInt(n[0]))+","+(a[1]+parseInt(n[1]))+","+(a[2]+parseInt(n[2]))+")";for(var o=!0,r=0;r<3;r++)if(n[r]!=g[r]){o=!1;break}o&&(clearInterval(c.t),p&&p())},8)};$()};