var time = 850;
var oldIndex = 0;
var paginationTxt = ["Main","Our Value","What We Do","Nas Report","Lets Go Together"];
var mainSlider = new Swiper("#main",{
    parallax: true,
    direction:"vertical",
    speed:1000,
    mousewheel: {
        invert: true,
    },
    pagination:{
        el:".pagination",
        clickable:true,
        renderBullet: function (index, className) {
            return `<span class="${className}"><span class="title">${paginationTxt[index]}</span></span>`;
        }
    },
    on:{
        transitionStart:function(){
            console.log("slide가 바꼈어요...");
            console.log(this.activeIndex);
            //한번 해보세요...
            if(this.activeIndex > this.previousIndex){
                time=850;
            } else {
                time=150;
            }
            if(this.activeIndex===1 || this.activeIndex===3){
                setTimeout(
                    function(){
                        $("body").addClass("invert")
                    },time 
                )
            } else {
                setTimeout(
                    function(){
                        $("body").removeClass("invert")
                    },time 
                )
            }
        }
    }
});

$("#gnb li").on("click",function(){
    mainSlider.slideTo(  $(this).index() );
    return false;
});

// greensock   /    swiper   /   gnb    