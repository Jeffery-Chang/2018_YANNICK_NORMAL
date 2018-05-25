(function(){
    var indexCtrl = {
        isAnimate: false,
        init(){
            this.menuSet();
            this.transIn();

            $(window).on('scroll', () => {
                this.scroll();
            }).on('load', () => {
                // window.tl.play();
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
        }
    }
    indexCtrl.init();
})();