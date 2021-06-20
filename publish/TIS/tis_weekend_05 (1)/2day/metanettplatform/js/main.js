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


