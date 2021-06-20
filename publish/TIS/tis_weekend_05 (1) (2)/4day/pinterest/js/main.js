$.ajax({
    url:"typo.json"
})
.done(function(res){
    console.log(res.typo);
    var typo = res.typo;
    var imgPath = res.imgPath;
    $.each(typo,function(idx,item){
        var img = imgPath+item.src;
        var big = imgPath+item.big;
        var title = item.title;
        var desc = item.desc;
        var type=item.type;
        var point = item.point;
        $(".grid").append(
            `
            <li class="item ${type}" data-point="${point}">
                <a href="${big}" data-fancybox="${type}">
                    <div class="imgBox">
                        <img src="${img}" alt="">
                    </div>
                    <div class="infoBox">
                        <h2 class="title">${title}</h2>
                        <p>
                            ${desc}
                        </p>
                        <p class="point">
                            <span>point:${point}</span>
                        </p>
                    </div>
                </a>
            </li>
            `
        );
        $("body").imagesLoaded()
        .done(function(){
            $(".grid li").addClass("end");
            var $grid = $(".grid").isotope({
                // options
                itemSelector: ".item",
                layoutMode: "masonry",
                getSortData: {
                    point: '[data-point] parseFloat',
                },
                sortBy:"point",
                sortAscending:false,
            });

            $(".filter li").on("click",function(){
                var filterWord = $(this).data("filter-word");
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
                $grid.isotope({ 
                    filter: "."+filterWord, 
                    sortBy:"point",
                    sortAscending:false,
                });
                return false;
            });
        }) 
    });
    $(".grid li").on("mouseenter",function(){
        $(".cursor").addClass("on");
        $(".cursorFollower").addClass("on");
    });
    $(".grid li").on("mouseleave",function(){
        $(".cursor").removeClass("on");
        $(".cursorFollower").removeClass("on");
    });
});




$(window).on("mousemove",function(e){
    //console.log(e.clientY,"====",e.pageY);
    gsap.to(".cursor",{
        left:e.clientX,
        top:e.clientY,
        ease:"power4",
        duration:0.5
    });
    gsap.to(".cursorFollower",{
        left:e.clientX,
        top:e.clientY,
        ease:"power4",
        duration:1
    });
});


