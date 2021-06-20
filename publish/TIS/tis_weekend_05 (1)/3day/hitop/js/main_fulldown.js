var hArray = [];
//jQuery 의 배열 반복문   each
//height()  / innerHeight()  padding  / outerHeight()  padding+border   /  outerHeight(true) padding+border+margin; 
$("#gnb .list > li").each(function(){
    //console.log( $(this).find(".depth02").innerHeight() );
    hArray.push( $(this).find(".depth02").innerHeight() );
});
hArray.sort(function(a,b){
    return b - a;
});
var max = hArray[0];
$("#gnb .list > li .depth02").height(max);
$("#gnb .list > li").on("mouseenter",function(){
    $("#gnb").addClass("on");
    $("#gnb").css({height:max+90});
});
$("#gnb .list > li").on("mouseleave",function(){
    $("#gnb").removeClass("on");
    $("#gnb").css({height:90});
});
