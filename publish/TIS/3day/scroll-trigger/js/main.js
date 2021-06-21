Splitting();
gsap.registerPlugin(CSSRulePlugin);
gsap.defaults({
    duration:1,
    ease:"power4",
})
var time01 = gsap.timeline({
    scrollTrigger:{
        trigger:".section01",
        markers:true,
        start:"top top",
        end:"500%",
        scrub:1,
        pin:true
    }
});
time01.from(".section01 .txt01 .char",{
    x:100,
    opacity:0,
    stagger:0.1
})
.from( CSSRulePlugin.getRule(".tsa .section01 .txt01:after"),{
    cssRule:{scale:0,opacity:1},
    ease:"power2"
})
.from(".section01 .txt02 .char",{
    x:100,
    opacity:0,
    stagger:0.1
})
.from(".section01 .txt0301",{
    opacity:0,
    x:100,
})
.from(".section01 .txt0302",{
    opacity:0,
    x:-100,
})
.from(".section01 .txt0303",{
    opacity:0,
    x:100,
})
.from(".section01 .txt04 img",{
    opacity:0,
    scale:0,
});

gsap.from(".section01 .iconScroll img",{
    opacity:1,
    y:-20,
    ease:"power3.in",
    repeat:-1,
    yoyo:true,
    duration:0.4
});

var time02 = gsap.timeline({
    scrollTrigger:{
        trigger:".section02",
        start:"top top",
        end:"500%",
        markers:true,
        scrub:true,
        pin:true
    }
});
time02.from(".section02 .title .char",{
    opacity:0,
    x:100,
    stagger:0.1
})
.from(".section02 .title",{
    backgroundColor:"transparent"
})
.from(".section02 .mainTxt01",{
    opacity:0,
    x:100,
})
.from(".section02 .mainTxt02",{
    opacity:0,
    x:-100,
})
.from(".section02 .mainTxt03",{
    opacity:0,
    x:100,
})
.from(".section02 .circleList li",{
    opacity:0,
    x:100,
    stagger:0.1
})
.from(".section02 .cduBox",{
    opacity:0,
    scale:0,
});
var time03 = gsap.timeline({
    scrollTrigger:{
        trigger:".section03",
        start:"top top",
        end:"500%",
        scrub:1,
        pin:true,
        markers:true
    }
});

time03.from(".section03 .title .char",{
    opacity:0,
    x:100,
    stagger:0.1
})
.from(".section03 .title",{
    backgroundColor:"transparent"
})
.from(".section03 .mainTxt span",{
    opacity:0,
    x:100,
    stagger:0.1,
})
.from(".section03 .mainTxt02",{
    opacity:0,
    x:-100,
})
.from(".section03 .mainTxt03",{
    opacity:0,
    x:100,
})
.from(".section03 .list li",{
    opacity:0,
    x:100,
    duration:5,
    stagger:0.5
})
.from(".section03 .airplane",{
    opacity:0,
    scale:0,
})
.from(".section03 .redBox",{
    opacity:0,
    scale:0,
})





var time04 = gsap.timeline({
    scrollTrigger:{
        trigger:".section04",
        start:"top top",
        end:"500%",
        scrub:1,
        pin:true,
        markers:true
    }
});

time04.from(".section04 .title .char",{
    opacity:0,
    x:100,
    stagger:0.1
})
.from(".section04 .title",{
    backgroundColor:"transparent"
})
.from(".section04 .mainTxt .char",{
    opacity:0,
    x:100,
    stagger:0.1,
})
.from(".section04 .list li",{
    opacity:0,
    x:100,
    duration:2,
    stagger:0.5
})




var time05 = gsap.timeline({
    scrollTrigger:{
        trigger:".section05",
        start:"top top",
        end:"500%",
        scrub:1,
        pin:true,
        markers:true
    }
});

time05.from(".section05 .title .char",{
    opacity:0,
    x:100,
    stagger:0.1
})
.from(".section05 .title",{
    backgroundColor:"transparent"
})
.from(".section05 .mainTxt .char",{
    opacity:0,
    x:100,
    stagger:0.1,
})
.from(".section05 .list li",{
    opacity:0,
    x:100,
    duration:2,
    stagger:0.5
});

var time06 = gsap.timeline({
    scrollTrigger:{
        trigger:".section06",
        start:"top top",
        end:"500%",
        scrub:1,
        pin:true,
        markers:true
    }
});

time06.from(".section06 .title .char",{
    opacity:0,
    x:100,
    stagger:0.1
})
.from(".section06 .title",{
    backgroundColor:"transparent"
})
.from(".section06 .mainTxt span",{
    opacity:0,
    x:100,
    stagger:0.1,
})
.from(".section06 .subTxt  .char",{
    opacity:0,
    x:100,
    stagger:0.1,
})
.from(".section06 .txtDash  .char",{
    opacity:0,
    x:100,
    stagger:0.1,
})

.from(".section06 .img  img",{
    opacity:0,
    scale:0,
})
.from(".section06 .shortcut  .char",{
    opacity:0,
    x:100,
    stagger:0.1,
})
.from(".section06 .btns a",{
    opacity:0,
    x:100,
    stagger:0.1
});



