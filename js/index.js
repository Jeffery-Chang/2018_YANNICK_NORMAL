(function(){
    var kv_padding = parseInt(($('section.kv').css('padding-top')).replace('px', ''));
    var kv_margin = parseInt(($('section.kv').css('margin-bottom')).replace('px', ''));
    var is_scroll = false;
    var indexCtrl = {
        init(){
            this.menuSet();
            this.transIn();

            $(window).on('scroll', () => {
                if(!isMobile.phone && !isMobile.tablet) this.scroll();
            }).on('load', () => {
                window.tl.play();
            });
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
                var distance = 0;
                if(index == 0){
                    distance = $('section.card').offset().top - $('header').height();
                }else if(index == 1){
                    distance = $('section.product').offset().top - $('header').height() / 2;
                }else if(index == 2){
                    distance = $('section.ytmInfo').offset().top - $('header').height() * 2;
                }else if(index == 3){
                    distance = $('section.feature').offset().top - $('header').height() * 2;
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
        },
        scroll(){
            var header_long = $('header').height() + parseInt(($('header').css('padding')).replace('px', '')) * 2;
            var postion = $('section.kv').height() + kv_padding + kv_margin;
            if($('body, html').scrollTop() >= postion){
                is_scroll = true;
                $('header').addClass('scrolled');
                $('section.kv').css('marginBottom', kv_margin + header_long);
            }else{
                is_scroll = false;
                $('header').removeClass('scrolled');
                $('section.kv').css('marginBottom', kv_margin);
            };
            console.log(is_scroll);
        },
        scrollPage(pos){
            var final = pos || 0;
            $('html, body').stop().animate({ scrollTop: final }, 500);
        },
    }
    indexCtrl.init();
})();