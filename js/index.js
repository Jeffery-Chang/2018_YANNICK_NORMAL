(function(){
    var indexCtrl = {
        isAnimate: false,
        init(){
            if(this.chkIE() <= 10){
                location.href = 'index_ie.html';
                return;
            }
            
            this.menuSet();
            this.transIn();

            $(window).on('scroll', () => {
                this.scroll();
            }).scroll();
        },
        transIn(){
            window.tl = new TimelineMax({ repeat: -1, paused: true });
            var step1 = new TweenMax.fromTo('footer .mrt-cart img', 5, {
                x: 20,
                ease: Expo.easeIn,
            },{
                x: 3000,
                ease: Expo.easeIn,
            });
            var step2 = function(time){
                return new TweenMax.to('footer .mrt-cart img', 2, { });
            }
            var step3 = new TweenMax.fromTo('footer .mrt-cart img', 1, {
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
            $('header li').click(function(e){
                e.preventDefault();
                var index = $(this).index();
                var headerHeight = $('header').outerHeight(true);
                var distance = 0;
                var adj_dis = ($this.chkMobile()) ? 20 : headerHeight * 1.5;

                if(index == 0){
                    distance = $('section.card h2').offset().top - adj_dis;
                }else if(index == 1){
                    distance = $('section.product h2').offset().top - adj_dis;
                }else if(index == 2){
                    distance = $('section.ytmInfo h2').offset().top - adj_dis;
                }else if(index == 3){
                    distance = $('section.feature h2').offset().top - adj_dis;
                }

                if(isMobile.phone || isMobile.tablet) $('.wrap a.menu-btn').click();
                $this.scrollPage(distance);
            });

            // MOBILE
            $('.wrap a.menu-btn').click(function(e){
                e.preventDefault();
                $(this).toggleClass('open-btn');
                $('header').toggleClass('open-header');
            });

            // BIRD
            $('.wrap .btn-go').click(function(e){

            });

            // VIDEO PLAY
            $('a.por').click(function(e){
                e.preventDefault();

                // 暫不開放
                return;

                var videoID = $(this).data('video');
                $this.videoOpen(videoID);
            });

            // VIDEO CLOSE
            $('.lightbox .close-btn').click(function(e){
                e.preventDefault();
                $(this).parent().fadeOut('fast', function(){
                    $(this).parent().find('.embed-container').empty();
                });
            });
        },
        videoOpen(id){
            var content = $('.lightbox');
            content.find('.embed-container').append('<iframe frameborder="0" allowfullscreen="1" src="https://www.youtube.com/embed/'+ id +'?rel=0&amp;controls=0?ecver=2&autoplay=1&mute=1"></iframe>');
            content.fadeIn('fast');
        },
        scroll(){
            var kv_position = $('section.kv').innerHeight();
            var trans_position = $('.location .mrt-line').offset().top;

            // MENU FIXED
            if(!this.chkMobile()){
                if($(window).scrollTop() >= kv_position){
                    $('header').addClass('scrolled');
                }else{
                    $('header').removeClass('scrolled');
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
        chkIE(){
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
        },
    }
    indexCtrl.init();
})();