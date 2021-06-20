gsap.registerPlugin(InertiaPlugin);
var rotationSnap = 360/30;
var isActive=false;
Draggable.create(".nav", {
    type: "rotation", 
    inertia: true,
    minRotation:true,
    snap:function(endValue) { 
        return Math.round(endValue / rotationSnap) * rotationSnap;
    }
});
gsap.defaults({
    duration:1
});
var time = gsap.timeline({
    onComplete:function() {
        isActive=true;
    }
});
time.fromTo(".prev",{
    x:0,
    opacity:1,
    
},
{
    x:-200,
    opacity:0,
    ease:"power3.in"
})
.fromTo(".next",{
    x:200,
    opacity:0,
},
{
    x:0,
    opacity:1,
    ease:"power3.out"
})
$(".nav li").on("click",function(){
    if(isActive){
        time.restart();
        var nextImgSrc = $(this).find("img").attr("src");
        var prevImgSrc = $(".next").find("img").attr("src");
        $(".next img").attr({src:nextImgSrc});
        $(".prev img").attr({src:prevImgSrc});
        isActive=false;
    }
    return false;
});