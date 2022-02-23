(function ($) {
    "use strict";

    var dsc = {
        
        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        /* ============================================================ */
        /* Mobile Menu Intigration
        /* ============================================================ */
        mobile_menu: function() {
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.hamburger, .close-menu', '.mobile-menu');		
        },

        /* ============================================================ */
        /* Banner Slider
        /* ============================================================ */
        heroslider: function() {
            var heroslider = $('.hero-slider');
            heroslider.owlCarousel({
                items: 1,
                loop: 1,
                dots: 1,
                nav: !1,
                autoplay: !1,
                autoplaySpeed: 800,
                autoplayTimeout: 10000,
            });
        },
        
        /* ============================================================ */
        /* News Slider
        /* ============================================================ */
        blogslider: function() {
            var blogslider = $('.blog-slider');
            blogslider.owlCarousel({
                loop: 1,
                dots: 1,
                nav: !1,
                margin: 30,
                center: true,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 10000,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    1000:{
                        items:3,
                    },
                    1200: {
                        items: 4,
                    }
                }
            });
        },

        /* ============================================================ */
        /* Sticky Menu
        /* ============================================================ */
        sticky_menu: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    fixed_top.addClass("is-sticky");
                } else {
                    fixed_top.removeClass("is-sticky");
                }
            });
        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
                var $this = $(this);
    
                if( $this.hasClass("pt-separate-bg-element") ){
                    $this.append('<div class="pt-background">');
    
                    // Background Color    
                    if( $("[data-bg-color]") ){
                        $this.find(".pt-background").css("background-color", $this.attr("data-bg-color") );
                    }
    
                    // Background Image
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.find(".pt-background").append('<div class="pt-background-image">');
                        $this.find(".pt-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("opacity", $this.attr("data-bg-image-opacity") );
    
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
    
                    // Parallax effect    
                    if( $this.attr("data-bg-parallax") !== undefined ){
                        $this.find(".pt-background-image").addClass("pt-parallax-element");
                    }
                }
                else {
    
                    if(  $this.attr("data-bg-color") !== undefined ){                        
                        $this.css("background-color", $this.attr("data-bg-color") );
                        if( $this.hasClass("btn") ) {
                            $this.css("border-color", $this.attr("data-bg-color"));
                        }
                    }
    
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                        $this.css("background-size", $this.attr("data-bg-size") );
                        $this.css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.css("background-position", $this.attr("data-bg-position") );
                        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
                }
            });
        },

        initializ: function() {
			dsc.preloader();
			dsc.sticky_menu();
			dsc.mobile_menu();
			dsc.heroslider();
			dsc.blogslider();
			dsc.background_image();
		}

    };
    $(function() {
		dsc.initializ();
	});


})(jQuery);