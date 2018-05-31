(function(){
    window.sr = ScrollReveal({
        duration: 500,
        distance: '50px',
        easing: 'ease',
        opacity: 0,
        scale: 1
    });
    var indexCtrl = {
        isAnimate: false,
        init(){
            /*if(this.chkIE() <= 10){
                location.href = 'index_ie.html';
                return;
            }*/

            this.menuSet();
            this.transIn();
            this.initPage();

            $(window).on('scroll', () => {
                this.scroll();
            }).on('resize', () => {
                this.resize()
            }).on('load', () => {
                this.initKV();
            }).scroll().resize();
        },
        initKV(){
            /* sr版
            var title = $('.kv h1, .kv .ytm-logo li');
            var MRT = $('.kv .mrt img');
            var machine = $('.kv .machine-kv img');
            var family = $('.kv .mom img, .kv .dad img');
            var gate = $('.kv .gateBox .gate');
            var couple = $('.kv .couple-kv img');
            // 大標
            sr.reveal(title, {
                origin: 'top',
                distance: '50px',
                delay: 500
            }, 200);
            // kc捷運
            sr.reveal(MRT, {
                origin: 'left',
                distance: '200px',
                easing: 'cubic-bezier(0.175, 0.885, 0.530, 1.110)',
                duration: 450,
                delay: 700
            });
            // 主機器
            sr.reveal(machine, {
                origin: 'bottom',
                scale: .5,
                distance: '50px',
                easing: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
                duration: 400,
                delay: 900
            });
            // 一家人
            sr.reveal(family, {
                origin: 'right',
                distance: '200px',
                duration: 750,
                delay: 1000
            }, 750);
            // 情侶
            sr.reveal(couple, {
                origin: 'right',
                distance: '200px',
                duration: 750,
                delay: 1100
            });
            // 閘口
            sr.reveal(gate, {
                origin: 'bottom',
                scale: .5,
                distance: '50px',
                easing: 'cubic-bezier(0.175, 0.885, 0.530, 1.110)',
                duration: 400,
                delay: 700
            });*/

            /* tm版 */
            var title = $('.yannick .kv h1 > span, .yannick .kv .ytm-logo li');
            var balloon = $('.yannick .kv .b1, .yannick .kv .b2, .yannick .kv .b3');
            var MRT = $('.yannick .kv .mrt');
            var machine = $('.yannick .kv .machine-kv');
            var family = $('.yannick .kv .mom, .yannick .kv .dad');
            var gate = $('.yannick .kv .gateBox .gate');
            var couple = $('.yannick .kv .couple-kv');
            TweenMax.staggerTo(title, .4, {
                y: 0,
                opacity: 1
            }, 0.2, () => {
            });
            if(!this.chkMobile()){
                TweenMax.to(MRT, .5, {
                    x: 0,
                    opacity: 1,
                    delay: .2,
                    ease: Back.easeOut
                });
                TweenMax.to(gate, .5, {
                    scaleY: 1,
                    y: 0,
                    opacity: 1,
                    delay: .2,
                    ease: Back.easeOut
                });
            }
            TweenMax.to(machine, .55, {
                scaleY: 1,
                y: 0,
                opacity: 1,
                delay: .5,
                ease: Back.easeOut,
                onComplete: () => {
                    if(!this.chkMobile()){
                        TweenMax.staggerTo(family, .6, {
                            x: 0,
                            opacity: 1
                        }, .5);
                    }else{
                        TweenMax.to(couple, .5, {
                            x: 0,
                            opacity: 1
                        });
                    }
                    TweenMax.staggerTo(balloon, .6, {
                        y: 0,
                        opacity: 1,
                        delay: .7,
                        ease: Power1.easeOut
                    }, .2);
                }
            });
        },
        initPage(){
            var video_part = '.yannick .video h2, .yannick .video .sub, .yannick .video .yannick .videoBox.por';
            var video_girl = '.yannick .video .girl';
            var video_bird = '.yannick .video .bird';
            var video_view = (!this.chkMobile()) ? .5 : .8;
            sr.reveal(video_part, {
                origin: 'top',
                opacity: 0,
                viewFactor: video_view,
            }, 300);
            if(!this.chkMobile()){
                sr.reveal(video_girl, {
                    duration: 600,
                    origin: 'left',
                    distance: '50px',
                    opacity: 0,
                    viewFactor: .5,
                    beforeReveal:  (domEl) => {
                        if($(domEl).is(":visible")) $(video_bird).addClass('active');
                    },
                });
            }

            var card_part = '.yannick .card h2, .yannick .card h3, .yannick .card .main, .yannick .card .btnBox';
            sr.reveal(card_part, {
                origin: 'top',
                opacity: 0,
                viewFactor: .5,
            }, 300);

            var pdt_part1 = '.yannick .product > h2, .yannick .product .main';
            var pdt_part2 = '.yannick .product .gift h2 > span, .yannick .product .giftInfo > p';
            var pdt_bag = (!this.chkMobile()) ? '.yannick .product .bag, .yannick .product .leaf1, .yannick .product .leaf2' : '.yannick .product .inner';
            var pdt_couple = '.yannick .product .couple';
            var pdt_bird = '.yannick .product .gift-bird';
            sr.reveal(pdt_part1, {
                origin: 'top',
                opacity: 0,
                viewFactor: .5,
            }, 300);
            sr.reveal(pdt_part2, {
                origin: 'top',
                opacity: 0,
                viewFactor: .5,
            }, 300);
            if(!this.chkMobile()){
                sr.reveal(pdt_bag, {
                    duration: 600,
                    origin: 'left',
                    distance: '50px',
                    opacity: 0,
                    viewFactor: .5,
                    delay: 500,
                });
                sr.reveal(pdt_couple, {
                    duration: 600,
                    origin: 'right',
                    distance: '50px',
                    opacity: 0,
                    viewFactor: .5,
                    delay: 500,
                });
            }else{
                sr.reveal(pdt_bag, {
                    duration: 600,
                    origin: 'top',
                    distance: '50px',
                    opacity: 0,
                    viewFactor: .5,
                    delay: 500,
                    afterReveal: (domEl) => {
                        if($(domEl).hasClass('show')) $(pdt_bird).addClass('active');
                    },
                });
            }

            var ytm_part = '.yannick .ytmInfo h2, .yannick .ytmInfo .main';
            var ytm_phone = '.yannick .ytmInfo .deco';
            sr.reveal(ytm_part, {
                origin: 'top',
                opacity: 0,
                viewFactor: .5,
            }, 300);
            sr.reveal(ytm_phone, {
                origin: (!this.chkMobile()) ? 'bottom' : 'top',
                opacity: 0,
                viewFactor: .5,
                delay: 400,
            });

            var feature_part = '.yannick .feature h2, .yannick .feature ul';
            sr.reveal(feature_part, {
                origin: 'top',
                opacity: 0,
                viewFactor: .5,
            }, 300);

            var location_part = '.yannick .location h2, .yannick .location .btn';
            var location_info = '.yannick .location .mrt-line li';
            sr.reveal(location_part, {
                origin: 'top',
                opacity: 0,
                viewFactor: .5
            });
            sr.reveal(location_info, {
                origin: 'left',
                opacity: 0,
                viewFactor: .5,
                beforeReveal: (domEl) => {
                    if($(domEl).hasClass('show') && !this.chkMobile()) $('.yannick .location .machineBox').addClass('active');
                },
            }, 250);
        },
        transIn(){
            window.tl = new TimelineMax({ repeat: -1, paused: true });
            var step1 = new TweenMax.fromTo('.yannick footer .mrt-cart img', 5, {
                x: 20,
                ease: Expo.easeIn,
            },{
                x: 3000,
                ease: Expo.easeIn,
            });
            var step2 = function(time){
                return new TweenMax.to('.yannick footer .mrt-cart img', 2, { });
            }
            var step3 = new TweenMax.fromTo('.yannick footer .mrt-cart img', 1, {
                x: -250,
                ease: Back.easeOut.config(1)
            },{
                x: 20,
                ease: Back.easeOut.config(1)
            });
            window.tl.add(step3);
            window.tl.add(step2(.5));
            window.tl.add(step1);
            window.tl.add(step2(1));
        },
        menuSet(){
            var  $this = this;

            // PC
            $('.yannick header li').click(function(e){
                e.preventDefault();
                var index = $(this).index();
                var headerHeight = $('.yannick header').outerHeight(true);
                var distance = 0;
                var adj_dis = ($this.chkMobile()) ? 20 : headerHeight * 1.5;

                if(index == 0){
                    distance = $('.yannick section.card h2').offset().top - adj_dis;
                }else if(index == 1){
                    distance = $('.yannick section.product h2').offset().top - adj_dis;
                }else if(index == 2){
                    distance = $('.yannick section.ytmInfo h2').offset().top - adj_dis;
                }else if(index == 3){
                    distance = $('.yannick section.feature h2').offset().top - adj_dis;
                }

                if(isMobile.phone || isMobile.tablet) $('.yannick .wrap a.menu-btn').click();
                $this.scrollPage(distance);
            });

            // MOBILE
            $('.yannick .wrap a.menu-btn').click(function(e){
                e.preventDefault();
                $(this).toggleClass('open-btn');
                $('.yannick header').toggleClass('open-header');
            });

            // BIRD
            $('.yannick .wrap .btn-go').click(function(e){

            });

            // VIDEO PLAY
            $('.yannick a.por').click(function(e){
                e.preventDefault();

                var videoID = $(this).data('video');
                $this.popupOpen(videoID);
            });

            // MRT MAP
            $('.yannick .location a.btn').click(function(e){
                e.preventDefault();
                $this.popupOpen();
            });

            // POPUP CLOSE
            $('.yannick .lightbox').click(function(e){
                e.preventDefault();
                $(this).fadeOut('fast', function(){
                    $(this).find('.embed-container').empty();
                    $(this).find('img').remove();
                });
            });
            // IMG PREVENT CLICK
            /*$('.lightbox .map_img').click(function(e){
                e.preventDefault();
                e.stopPropagation();
            });*/
            
            // VIDEO CLOSE
            $('.yannick .lightbox .close-btn').click(function(e){
                e.preventDefault();
                $(this).parent().fadeOut('fast', function(){
                    $(this).parent().find('.embed-container').empty();
                    $(this).parent().find('img').remove();
                });
            });
        },
        popupOpen(id){
            var content = $('.yannick .lightbox');

            if(id != undefined){
                content.find('.embed-container').append('<iframe frameborder="0" allow="autoplay" allowfullscreen="1" src="https://www.youtube.com/embed/'+ id +'?rel=0&amp;controls=0?ecver=2&autoplay=1"></iframe>');
                content.find('.embed-container, .close-btn').show();
                content.find('img').remove();
            }else{
                content.find('.embed-container, .close-btn').hide();
                content.find('.embed-container').empty();
                content.find('.container').append('<img class="map_img" src="https://fs1.shop123.com.tw/400189/upload/harddisc/4001890_file_622595638142018053056.jpg" alt="">');
            }

            content.fadeIn('fast');
        },
        resize(){
            if(this.chkMobile()){
                $('.yannick header').removeClass('scrolled');
            }else{
                $('.yannick .wrap a.menu-btn').removeClass('open-btn');
                $('.yannick header').removeClass('open-header');
            }
        },
        scroll(){
            var kv_position = $('.yannick section.kv').innerHeight() + $('.yannick section.kv').offset().top;
            var trans_position = $('.yannick .location .mrt-line').offset().top;

            // MENU FIXED
            if(!this.chkMobile()){
                if($(window).scrollTop() >= kv_position){
                    $('.yannick header').addClass('scrolled');
                }else{
                    $('.yannick header').removeClass('scrolled');
                };

                // MENU IN
                if($(window).scrollTop() > 0 && !$('.yannick .menu_header').hasClass('active')){
                    $('.yannick .menu_header').addClass('active');
                };
            }

            // TRANS PLAY
            if(!this.isAnimate && $(window).scrollTop() >= trans_position){
                window.tl.play();
                this.isAnimate = true;
            }
        },
        scrollPage(pos){
            var final = pos || 0;
            $('html, body').stop().animate({ scrollTop: final }, 500);
        },
        chkMobile(){
            var mobile_fg = false;
            if(isMobile.phone || isMobile.tablet || $(window).width() <= 767) mobile_fg = true;
            return mobile_fg;
        },
        /*chkIE(){
            var userAgent = navigator.userAgent;
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; // 判斷是否IE<11瀏覽器
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判斷是否IE的Edge瀏覽器
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
            if(isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if(fIEVersion == 7) {
                    return 7;
                }else if(fIEVersion == 8) {
                    return 8;
                }else if(fIEVersion == 9) {
                    return 9;
                }else if(fIEVersion == 10) {
                    return 10;
                }else{
                    return 6; //IE版本 <= 7
                }   
            }else if(isEdge) {
                return 12; // edge
            }else if(isIE11) {
                return 11; // IE11  
            }else{
                return 13; // 不是ie瀏覽器
            }
        },*/
    }
    indexCtrl.init();
})();