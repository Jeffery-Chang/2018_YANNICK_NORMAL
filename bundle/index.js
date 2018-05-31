"use strict";!function(){window.sr=ScrollReveal({duration:500,distance:"50px",easing:"ease",opacity:0,scale:1}),{isAnimate:!1,init:function(){var n=this;this.menuSet(),this.transIn(),this.initPage(),$(window).on("scroll",function(){n.scroll()}).on("resize",function(){n.resize()}).on("load",function(){n.initKV()}).scroll().resize()},initKV:function(){var n=this,e=$(".yannick .kv h1 > span, .yannick .kv .ytm-logo li"),i=$(".yannick .kv .b1, .yannick .kv .b2, .yannick .kv .b3"),a=$(".yannick .kv .mrt"),t=$(".yannick .kv .machine-kv"),o=$(".yannick .kv .mom, .yannick .kv .dad"),c=$(".yannick .kv .gateBox .gate"),r=$(".yannick .kv .couple-kv");TweenMax.staggerTo(e,.4,{y:0,opacity:1},.2,function(){}),this.chkMobile()||(TweenMax.to(a,.5,{x:0,opacity:1,delay:.2,ease:Back.easeOut}),TweenMax.to(c,.5,{scaleY:1,y:0,opacity:1,delay:.2,ease:Back.easeOut})),TweenMax.to(t,.55,{scaleY:1,y:0,opacity:1,delay:.5,ease:Back.easeOut,onComplete:function(){n.chkMobile()?TweenMax.to(r,.5,{x:0,opacity:1}):TweenMax.staggerTo(o,.6,{x:0,opacity:1},.5),TweenMax.staggerTo(i,.6,{y:0,opacity:1,delay:.7,ease:Power1.easeOut},.2)}})},initPage:function(){var n=this,e=this.chkMobile()?.8:.5;sr.reveal(".yannick .video h2, .yannick .video .sub, .yannick .video .yannick .videoBox.por",{origin:"top",opacity:0,viewFactor:e},300),this.chkMobile()||sr.reveal(".yannick .video .girl",{duration:600,origin:"left",distance:"50px",opacity:0,viewFactor:.5,beforeReveal:function(n){$(n).is(":visible")&&$(".yannick .video .bird").addClass("active")}});sr.reveal(".yannick .card h2, .yannick .card h3, .yannick .card .main, .yannick .card .btnBox",{origin:"top",opacity:0,viewFactor:.5},300);var i=this.chkMobile()?".yannick .product .inner":".yannick .product .bag, .yannick .product .leaf1, .yannick .product .leaf2";sr.reveal(".yannick .product > h2, .yannick .product .main",{origin:"top",opacity:0,viewFactor:.5},300),sr.reveal(".yannick .product .gift h2 > span, .yannick .product .giftInfo > p",{origin:"top",opacity:0,viewFactor:.5},300),this.chkMobile()?sr.reveal(i,{duration:600,origin:"top",distance:"50px",opacity:0,viewFactor:.5,delay:500,afterReveal:function(n){$(n).hasClass("show")&&$(".yannick .product .gift-bird").addClass("active")}}):(sr.reveal(i,{duration:600,origin:"left",distance:"50px",opacity:0,viewFactor:.5,delay:500}),sr.reveal(".yannick .product .couple",{duration:600,origin:"right",distance:"50px",opacity:0,viewFactor:.5,delay:500}));sr.reveal(".yannick .ytmInfo h2, .yannick .ytmInfo .main",{origin:"top",opacity:0,viewFactor:.5},300),sr.reveal(".yannick .ytmInfo .deco",{origin:this.chkMobile()?"top":"bottom",opacity:0,viewFactor:.5,delay:400});sr.reveal(".yannick .feature h2, .yannick .feature ul",{origin:"top",opacity:0,viewFactor:.5},300);sr.reveal(".yannick .location h2, .yannick .location .btn",{origin:"top",opacity:0,viewFactor:.5}),sr.reveal(".yannick .location .mrt-line li",{origin:"left",opacity:0,viewFactor:.5,beforeReveal:function(e){$(e).hasClass("show")&&!n.chkMobile()&&$(".yannick .location .machineBox").addClass("active")}},250)},transIn:function(){window.tl=new TimelineMax({repeat:-1,paused:!0});var n=new TweenMax.fromTo(".yannick footer .mrt-cart img",5,{x:20,ease:Expo.easeIn},{x:3e3,ease:Expo.easeIn}),e=function(){return new TweenMax.to(".yannick footer .mrt-cart img",2,{})},i=new TweenMax.fromTo(".yannick footer .mrt-cart img",1,{x:-250,ease:Back.easeOut.config(1)},{x:20,ease:Back.easeOut.config(1)});window.tl.add(i),window.tl.add(e()),window.tl.add(n),window.tl.add(e())},menuSet:function(){var n=this;$(".yannick header li").click(function(e){e.preventDefault();var i=$(this).index(),a=$(".yannick header").outerHeight(!0),t=0,o=n.chkMobile()?20:1.5*a;0==i?t=$(".yannick section.card h2").offset().top-o:1==i?t=$(".yannick section.product h2").offset().top-o:2==i?t=$(".yannick section.ytmInfo h2").offset().top-o:3==i&&(t=$(".yannick section.feature h2").offset().top-o),(isMobile.phone||isMobile.tablet)&&$(".yannick .wrap a.menu-btn").click(),n.scrollPage(t)}),$(".yannick .wrap a.menu-btn").click(function(n){n.preventDefault(),$(this).toggleClass("open-btn"),$(".yannick header").toggleClass("open-header")}),$(".yannick .wrap .btn-go").click(function(){}),$(".yannick a.por").click(function(e){e.preventDefault();var i=$(this).data("video");n.popupOpen(i)}),$(".yannick .location a.btn").click(function(e){e.preventDefault(),n.popupOpen()}),$(".yannick .lightbox").click(function(n){n.preventDefault(),$(this).fadeOut("fast",function(){$(this).find(".embed-container").empty(),$(this).find("img").remove()})}),$(".yannick .lightbox .close-btn").click(function(n){n.preventDefault(),$(this).parent().fadeOut("fast",function(){$(this).parent().find(".embed-container").empty(),$(this).parent().find("img").remove()})})},popupOpen:function(n){var e=$(".yannick .lightbox");void 0!=n?(e.find(".embed-container").append('<iframe frameborder="0" allow="autoplay" allowfullscreen="1" src="https://www.youtube.com/embed/'+n+'?rel=0&amp;controls=0?ecver=2&autoplay=1"></iframe>'),e.find(".embed-container, .close-btn").show(),e.find("img").remove()):(e.find(".embed-container, .close-btn").hide(),e.find(".embed-container").empty(),e.find(".container").append('<img class="map_img" src="https://fs1.shop123.com.tw/400189/upload/harddisc/4001890_file_622595638142018053056.jpg" alt="">')),e.fadeIn("fast")},resize:function(){this.chkMobile()?$(".yannick header").removeClass("scrolled"):($(".yannick .wrap a.menu-btn").removeClass("open-btn"),$(".yannick header").removeClass("open-header"))},scroll:function(){var n=$(".yannick section.kv").innerHeight()+$(".yannick section.kv").offset().top,e=$(".yannick .location .mrt-line").offset().top;this.chkMobile()||($(window).scrollTop()>=n?$(".yannick header").addClass("scrolled"):$(".yannick header").removeClass("scrolled"),$(window).scrollTop()>0&&!$(".yannick .menu_header").hasClass("active")&&$(".yannick .menu_header").addClass("active")),!this.isAnimate&&$(window).scrollTop()>=e&&(window.tl.play(),this.isAnimate=!0)},scrollPage:function(n){var e=n||0;$("html, body").stop().animate({scrollTop:e},500)},chkMobile:function(){var n=!1;return(isMobile.phone||isMobile.tablet||$(window).width()<=767)&&(n=!0),n}}.init()}();