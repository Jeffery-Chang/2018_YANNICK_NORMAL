"use strict";!function(){var e=parseInt($("section.kv").css("padding-top").replace("px","")),t=parseInt($("section.kv").css("margin-bottom").replace("px","")),o=!1;({init:function(){var e=this;this.menuSet(),this.transIn(),$(window).on("scroll",function(){isMobile.phone||isMobile.tablet||e.scroll()}).on("load",function(){window.tl.play()})},transIn:function(){window.tl=new TimelineMax({repeat:-1,paused:!0});var e=new TweenMax.fromTo("footer .mrt-cart img",5,{x:20,ease:Expo.easeIn},{x:3e3,ease:Expo.easeIn}),t=function(){return new TweenMax.to("footer .mrt-cart img",2,{})},o=new TweenMax.fromTo("footer .mrt-cart img",1,{x:-250,ease:Back.easeOut.config(1)},{x:20,ease:Back.easeOut.config(1)});window.tl.add(o),window.tl.add(t()),window.tl.add(e),window.tl.add(t())},menuSet:function(){var e=this;$("header li").click(function(t){t.preventDefault();var o=$(this).index(),n=0;0==o?n=$("section.card").offset().top-$("header").height():1==o?n=$("section.product").offset().top-$("header").height()/2:2==o?n=$("section.ytmInfo").offset().top-2*$("header").height():3==o&&(n=$("section.feature").offset().top-2*$("header").height()),(isMobile.phone||isMobile.tablet)&&$(".wrap a.menu-btn").click(),e.scrollPage(n)}),$(".wrap a.menu-btn").click(function(e){e.preventDefault(),$(this).toggleClass("open-btn"),$("header").toggleClass("open-header")})},scroll:function(){var n=$("header").height()+2*parseInt($("header").css("padding").replace("px","")),a=$("section.kv").height()+e+t;$("body, html").scrollTop()>=a?(o=!0,$("header").addClass("scrolled"),$("section.kv").css("marginBottom",t+n)):(o=!1,$("header").removeClass("scrolled"),$("section.kv").css("marginBottom",t)),console.log(o)},scrollPage:function(e){var t=e||0;$("html, body").stop().animate({scrollTop:t},500)}}).init()}();