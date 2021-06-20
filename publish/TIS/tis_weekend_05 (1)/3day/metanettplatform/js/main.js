/*
$("#gnb .list > li").on("mouseenter",function(){
    var h = $(this).find(".depth02").height();
    $("#header").addClass("hover");
    if(!$(this).hasClass("not")) {
        $("#header").height(h+100+50);
    } else {
        $("#header").height(h+100);
    }
});
*/

Splitting();

$("#gnb .list > li").on("mouseenter",function(){
    var h = $(this).find(".depth02").innerHeight();
    $("#header").addClass("hover");
    $("#header").height(h+100);
});
$("#gnb .list > li").on("mouseleave",function(){
    $("#header").removeClass("hover");
    $("#header").height(100);
});

new Swiper("#mainVisual",{
    speed:1000,
    loop:true,
    navigation:{
        nextEl:"#mainVisual .btnMainNext",
        prevEl:"#mainVisual .btnMainPrev",
    },
    pagination:{
        
    }
});

var mainTl = gsap.timeline();
mainTl.from("#logo",{scale:0,duration:1})
.from("#gnb .list > li",{opacity:0,x:100,stagger:0.1,clearProps:"all"})
.from(".btnAll",{opacity:0})
.from("#mainVisual .sloganBox .char",{
    x:100,
    opacity:0,
    ease:"back",
    duration:1,
    stagger:0.08
})
.from("#mainVisual .sloganBox a",{
    x:100,
    opacity:0,
    ease:"back",
    duration:0.8,
})


