// ===================================================================
//                    SWIPER CAROUSEL PLUGINS
// ===================================================================

import Swiper from 'swiper/bundle';
const swiper1 = new Swiper('.swiper1', {
    speed: 600,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
        dynamicBullets: true,
    }
});

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 25,
            slidesPerGroup: 2,
        },
        1920: {
            slidesPerView: 7,
            spaceBetween: 25,
            slidesPerGroup: 2,
        },
    }
});

const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    direction: 'vertical',
    spaceBetween: 30,
    mousewheel: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination3',
        clickable: true,
    },
});

const swiper6 = new Swiper('.swiper6', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    direction: 'vertical',
    spaceBetween: 30,
    mousewheel: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination6',
        clickable: true,
    },
});

const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    cssMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
    },
    pagination: {
        el: '.swiper-pagination4'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
    }
});

const swiper5 = new Swiper('.swiper5', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination5',
        type: 'progressbar',
        clickable: true,
    },
});

const swiper7 = new Swiper('.swiper7', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination7',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next7',
      prevEl: '.swiper-button-prev7',
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
    }
  });

// ===================================================================
//                     ACCORDIAN
// ===================================================================
import $ from "jquery";
import 'jquery-ui/ui/widgets/accordion';

  $( "#accordion" ).accordion({
    active: true,
    heightStyle: 'content'
  });

// ===================================================================
//                     BACK TO TOP
// ===================================================================

import anime from 'animejs/lib/anime.es.js';

const btnTop = document.getElementById('top');
const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

if(btnTop) {
    window.onscroll = () => {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTop.style.display = 'block';
        } else {
            btnTop.style.display = 'none';
        }
    };
}

if(btnTop) {
    btnTop.addEventListener('click', () => {
        anime({
            targets: scrollElement,
            scrollTop: 0,
            duration: 500,
            easing: 'easeInOutQuad',
        });
    });
}

// ===================================================================
//                     MOBILE NAV
// ===================================================================

$(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $('.overlay').toggleClass('overlay__panel');
    $(".mobile").animate({
        width: [ "toggle", "swing" ],
        opacity: "toggle",
    }, 300, function() {
        $(".mobile").toggleClass("js_mob__open");
    });
});

$(".overlay").on("click", function(e) {
    if(e.target == this) {
        $(".hamburger").removeClass("is-active");
        $(this).removeClass('overlay__panel');
        $(".mobile").removeClass("js_mob__open");
        $(".mobile").removeAttr('style');
    }
});

// ===================================================================
//                     ACCORDIAN
// ===================================================================

$(".qpk__menu").on("click", function() {
    $(this).toggleClass("active");
    $(this).next(".menu__panel").animate({
        height: 'toggle',
    }, 500, function() {
    });
});

// ===================================================================
//                     STICKY NAVIGATION
// ===================================================================

$(window).scroll(function() {
    if($(window).scrollTop() >= 200) {
        $(".is__sticky").addClass("js--is__sticky");
    } else {
        $(".is__sticky").removeClass("js--is__sticky");
    }
});

// ===================================================================
//                     VERTICLE TABS
// ===================================================================

var tabsLinks = $(".trm-vbtn");
var tabContent = $(".tabcontent");
$.each( tabsLinks, function() {

  var linksId= $(this).attr("id");
  $(this).on('click', function(e) {
    e.preventDefault();
    if(tabsLinks.hasClass("active")) {
      $(".trm-vbtn").removeClass("active");
      $(this).addClass("active");
    }
    $.each( tabContent, function() {
      var contentId= $(this).attr("id");
      if (linksId == contentId) {
        $(".tabcontent").removeClass("toggle");
        $(this).addClass("toggle");
      }
    });
  });
});

// ===================================================================
//                     SIGN IN / SIGN UP
// ===================================================================

var $btnSignIn= $('.switcher-signin');
var $btnSignUp= $('.switcher-signup');
var $loginPannel= $('.login-signin');
var $signupPannel= $('.login-signup');

$btnSignUp.on('click', function() {
    $signupPannel.addClass('js-toggle--sign');
    $loginPannel.addClass('js-Close-sign');
})

$btnSignIn.on('click', function() {
    $loginPannel.addClass('js-toggle--sign');
    $loginPannel.removeClass('js-Close-sign');
    $signupPannel.removeClass('js-toggle--sign');
})

$('.account-signup').on('click', function(e) {
    e.preventDefault();
    $loginPannel.addClass('js-toggle--sign');
    $loginPannel.removeClass('js-Close-sign');
    $signupPannel.removeClass('js-toggle--sign');
});

$('.account-signin').on('click', function(e) {
    e.preventDefault();
    $signupPannel.addClass('js-toggle--sign');
    $loginPannel.addClass('js-Close-sign');
});

$('.login-switcher').on('click', 'button', function(e) {
    e.preventDefault();
    $('.login-switcher button').removeClass("switcher--active");
    $(this).addClass('switcher--active');
});

$('.account-signin').on('click', function(e) {
    e.preventDefault();
    $('.switcher-signin').removeClass("switcher--active");
    $('.switcher-signup').addClass('switcher--active');
})
$('.account-signup').on('click', function(e) {
    e.preventDefault();
    $('.switcher-signin').addClass("switcher--active");
    $('.switcher-signup').removeClass('switcher--active');
});

// ===================================================================
//                     VIDEO PLUGINS
// ===================================================================
import 'jquery-ui/ui/widgets/accordion';
import "lity/dist/lity";
