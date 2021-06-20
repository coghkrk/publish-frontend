$("#header .btnAll").on("click",function(){
    // if( !$("#header").hasClass("on")  ) {
    //     $("#header").addClass("on");
    // } else {
    //     $("#header").removeClass("on");
    // }
    $("#header").toggleClass("on");
    $("#gnb .list > li .depth02").stop().delay(250).slideUp(250);
    //메서드 체이닝 method chaining
});
//생각하는 능력
$("#gnb .list > li .depth01").on("click",function(){
    $(this).next(".depth02").stop().slideToggle(250);
    $(this).parent().siblings().find(".depth02").stop().slideUp(250);
    return false;
});