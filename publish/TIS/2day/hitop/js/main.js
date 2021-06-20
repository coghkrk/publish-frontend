$("#gnb .list > li").on("mouseenter", function () {
    $(this).find(".depth02").stop().slideDown(250);
});
$("#gnb .list > li").on("mouseleave", function () {
    $(this).find(".depth02").stop().slideUp(250);
});


var jang = {
    height: 182,
    weight: 90,
    iq: 100,
    eyeSight: {
        left: 1.0,
        right: 0.7
    }
}
console.log(jang.eyeSight.right);
var kim = {
    height: 185,
    weight: 75,
    iq: 75,
    eyeSight: 1.5
}

var lee = {
    height: 170,
    weight: 50,
    iq: 175,
    eyeSight: 1.2
}

var height = 182;
var weight = 90;
var iq = 100;
var eyeSight = 1.0;

var kimSangWanHeight = 185;
var kimSangWanWeight = 75;
var kimSangWanIq = 75;
var kimSangWanEyeSight = 75;


var kimSangWanHeight = 185;
var kimSangWanWeight = 75;
var kimSangWanIq = 75;
var kimSangWanEyeSight = 75;

var mainOption = {
    speed: 1000,
    loop: true,
    effect: "slide",
    navigation: {
        nextEl: "#mainVisual .btnNext",
        prevEl: "#mainVisual .btnPrev"
    },
    pagination: {
        el: "#mainVisual .pagination .btns",
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
    //direction:"vertical"
}


//생성자 함수

var mainVisualSlider = new Swiper("#mainVisual .mask", {
    speed: 1000,
    loop: true,
    effect: "slide",
    navigation: {
        nextEl: "#mainVisual .btnNext",
        prevEl: "#mainVisual .btnPrev"
    },
    pagination: {
        el: "#mainVisual .pagination .btns",
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
    //direction:"vertical"
});

//~btnPause클릭했을때
$("#mainVisual .pagination .auto .btnPause").on("click", function () {
    $(this).hide();
    $(this).siblings(".btnAuto").show();
    mainVisualSlider.autoplay.stop();
});
$("#mainVisual .pagination .auto .btnAuto").on("click", function () {
    $(this).hide();
    $(this).siblings(".btnPause").show();
    mainVisualSlider.autoplay.start();
    mainVisualSlider.slideNext();
});


$(window).on("scroll", function () {
    //console.log( $(window).scrollTop() );
    var st = $(window).scrollTop();
    if (st > 0) {
        $("#header").addClass("scroll");
    } else {
        $("#header").removeClass("scroll");
    }
});