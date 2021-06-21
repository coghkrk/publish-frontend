Splitting();
gsap.defaults({
    duration:1,
    ease:"power4"
})
var mainTl = gsap.timeline();
mainTl.from("#mainVisual .txtBox .main .char",{
    opacity:0,
    x:100,
    ease:"back",
    stagger:0.05,
    clearProps:"transform,opacity"
})
.from("#mainVisual .txtBox .sub .char",{
    opacity:0,
    x:100,
    ease:"back",
    stagger:0.02,
    clearProps:"all"
},"-=1")
.from("#mainVisual .txtBox a",{
    opacity:0,
    x:100,
    ease:"back",
    clearProps:"all"
},"-=1");


var i = 0;
$(window).on("scroll",function(){
    i++;
    console.log(i);
    var st = $(window).scrollTop();
    if(st>0){
        if(!$("#header").hasClass("on")){
            $("#header").addClass("on");
        }
    } else {
        if($("#header").hasClass("on")){
            $("#header").removeClass("on");
        }
    }
});
gsap.to("#mainVisual",{
    opacity:0,
    scrollTrigger:{
        trigger:"#mainVisual",
        start:"300 top",
        end:"80%",
        scrub:true,
        markers:true
    }
});

var productTl = gsap.timeline({
    scrollTrigger:{
        trigger:"#product .txtBox",
        start:"top 70%",
        end:"bottom",
        markers:true,
        toggleActions:"restart none none reset"
    }
});
productTl.from("#product .txtBox h2 .char",{
    x:100,
    opacity:0,
    stagger:0.05,
    ease:"power3"
})
.from("#product .txtBox .main .char",{
    x:100,
    opacity:0,
    stagger:0.05,
    ease:"power3"
},"-=1")
.from("#product .txtBox .sub .char",{
    x:100,
    opacity:0,
    stagger:0.05,
    ease:"power3"
},"-=1")
.from("#product .txtBox .desc .char",{
    x:100,
    opacity:0,
    stagger:0.02,
    ease:"power3"
},"-=1");

var pl01 = gsap.timeline({
    scrollTrigger:{
        trigger:"#product .list li:nth-child(1)",
        start:"top 70%",
        end:"bottom",
        markers: true,
        toggleActions:"restart none none reset"
    }
});
pl01.from("#product .list li:nth-child(1) img",{
    x:300,
    opacity:0,
})
.from("#product .list li:nth-child(1) .contentsBox",{
    backgroundColor:"transparent"
},"-=0.8")
.from("#product .list li:nth-child(1) .contentsBox .no",{
    opacity:0,
    x:100
},"-=0.8")
.from("#product .list li:nth-child(1) .contentsBox h3",{
    opacity:0,
    x:100
},"-=0.8")
.from("#product .list li:nth-child(1) .contentsBox p",{
    opacity:0,
    x:100
},"-=0.8")
.from("#product .list li:nth-child(1) .contentsBox a",{
    opacity:0,
    x:100
},"-=0.8")








