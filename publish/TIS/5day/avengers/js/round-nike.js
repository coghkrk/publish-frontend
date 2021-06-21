gsap.registerPlugin(InertiaPlugin);
Draggable.create("#roundNavi", {
    type: "rotation",
    inertia: true,
    snap: function(endValue) {
        return Math.round(endValue / 12) * 12
    }
});
var mainMotion = gsap.timeline({});
mainMotion.fromTo(".prev", {
    x: 0,opacity: 1
}, {
    x: -200,opacity: 0, duration: 1,
    ease:"power3.in"
})
.fromTo(".next", {
    x: 200,opacity: 0
}, {
    x: 0,opacity: 1,duration: 1,
    ease:"power3.out"
})

var naviMotion = gsap.timeline();
naviMotion.from("#roundNavi li",{
    opacity:0,
    stagger:0.05
})
.to("#roundNavi",{
    left:-300
});

$("#roundNavi li").on("click", function() {
    if(!mainMotion.isActive()){
        var nextImgSrc = $(this).find("img").attr("src");
        var prevImgSrc= $(".next").find("img").attr("src");
        $(".next img").attr({
            src: nextImgSrc
        });
        $(".prev img").attr({
            src: prevImgSrc
        });
        mainMotion.restart();
    }
})