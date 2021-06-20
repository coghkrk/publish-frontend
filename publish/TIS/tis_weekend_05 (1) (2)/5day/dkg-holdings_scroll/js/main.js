Splitting();
new fullpage("#main",{
    navigation: true,
    navigationTooltips: ["Main","Business","Portfolio","Community"],
    showActiveTooltip: true,
    onLeave: function(origin, destination, direction){
        console.log(destination);
        if(destination.index===0) {
            happenTime.restart();
        } else if(destination.index===1) {
            businessTime.restart();
        } else if(destination.index===2) {
            portfolioTime.restart();
        } else if(destination.index===3) {
            communityTime.restart();
        }
        if(destination.isLast) {
            $(".btnTop").addClass("on");
            $("#fp-nav").addClass("on");
        } else {
            $(".btnTop").removeClass("on");
            $("#fp-nav").removeClass("on");
        }
	}
});


gsap.defaults({
    opacity:0,
    x:100,
    duration:1,
    ease:"power4",
})

var happenTime = gsap.timeline();
happenTime.from("#happen .titleBox h2 .char",{
    stagger:0.05
})
.from("#happen .titleBox p .char",{
    stagger:0.05
});

var businessTime = gsap.timeline();
businessTime.from("#business .titleBox h2 .char",{
    stagger:0.05
})
.from("#business .titleBox p .char",{
    stagger:0.05
})
.from("#business li",{
    stagger:0.05
});

var portfolioTime = gsap.timeline();
portfolioTime.from("#portfolio .titleBox h2 .char",{
    stagger:0.05
})
.from("#portfolio .titleBox p .char",{
    stagger:0.05
})
.from("#portfolio li",{
    stagger:0.05
});


var communityTime = gsap.timeline();
communityTime.from("#community .titleBox h2 .char",{
    stagger:0.05
})
.from("#community .titleBox p .char",{
    stagger:0.05
})
.from("#community li",{
    stagger:0.05
});

$(".btnTop").on("click",function(){
    fullpage_api.moveSectionUp();
    console.log("dfdsfds");
    return false;
});