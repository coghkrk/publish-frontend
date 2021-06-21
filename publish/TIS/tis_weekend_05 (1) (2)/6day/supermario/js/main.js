// $.ajax({
//     url:"mario.json"
// })
// .done(function(res){
//     //console.log(res);
//     var mario = res.mario;
//     var total=mario.length;
//     var zAmount = 5000;
//     $("#gnb ul").html("");
    
//     $.each(mario,function(idx,item){
//         var listItem = `<li>
//                             <div class="mario">
//                                 <img src="${item.imgSrc}" alt="">
//                             </div>
//                             <div class="txtBox">
//                                 <h2>${item.title}</h2>
//                                 <p>
//                                     ${item.desc}
//                                 </p>
//                             </div>
//                             <div class="bg"></div>
//                         </li>`;
//         $("#main ul").append(listItem);
//         if(idx===0){
//             var menuItem = `<li class="on"><a href="">${item.title}</a></li>`;
//         } else {
//             var menuItem = `<li><a href="">${item.title}</a></li>`;
//         }
//         $("#gnb ul").append(menuItem);
//     });
//     var oldIndex = 0;
//     $("#gnb li").on("click",function(){
//         //console.log($(this).index());
//         num=zAmount*$(this).index();
//         var selected = $(this).index();
//         var time = Math.abs(selected - oldIndex)*0.25;
//         $("#gnb li").eq(selected).addClass("on");
//         $("#gnb li").eq(selected).siblings("li").removeClass("on");
//         $("#main li").each(function(idx,item){
//             var defaultNum = -zAmount*idx;
//             gsap.to( $(this),{
//                 z:defaultNum+num,
//                 duration:time
//             });
//         });
//         oldIndex=selected;
//         return false;
//     });
//     $("#main li").each(function(idx,item){
//         gsap.set($(this),{
//             zIndex:9999-idx,
//             z:-zAmount*idx
//         });
//     });
    
//     var num=0;
//     var wheelAmount = 150;
//     $(window).on("mousewheel",function(e){
//         var amount = e.originalEvent.deltaY;
//         if(amount>0){
//             num+=wheelAmount;
//             var selected = Math.floor(num/zAmount);
//         } else {
//             num-=wheelAmount;
//             var selected = Math.round(num/zAmount);
//         }
//         if(num>(total-1)*zAmount) {
//             num=(total-1)*zAmount;
//         }else if(num<0){
//             num=0;
//         }
        
//         $("#gnb li").eq(selected).addClass("on");
//         $("#gnb li").eq(selected).siblings("li").removeClass("on");
//         $("#main li").each(function(idx,item){
//             var defaultNum = -zAmount*idx;
//             gsap.to( $(this),{
//                 z:defaultNum+num
//             });
//         });
//     });
// });

// $("#gnb").on("click","li",function(){
//     console.log($(this).index());
//     return false;
// });





$.ajax({
    url:"mario.json"
})
.done(function(res){
    console.log(res.mario);
    var marioArray = res.mario;
    $.each(marioArray,function(idx,item){
        $("#main ul").append(
            `<li>
                <div class="mario">
                    <img src=${item.img} alt="">
                </div>
                <div class="txtBox">
                    <h2>${item.title}</h2>
                    <p>
                        ${item.desc}                    
                    </p>
                </div>
                <div class="bg" style="background:${item.bg}"></div>
            </li>`
        );
        $("#gnb ul").append(`<li><a href="">${item.title}</a></li>`);
    });
    var time = 0.5;
    var tz = 0;
    var step = 20;
    var zDistance= 10000;
    var zAmount = zDistance*(1/step);
    var endZ = ($("#main li").length-1)*zDistance;
    //console.log(endZ);
    $("#main li").each(function(idx,item){
        gsap.set($(this),{
            z:-zDistance*idx,
            zIndex:9999-idx
        });
        moveMario($(this).find(".mario"));
    });
    $(window).on("mousewheel",function(e){
        //console.log(e.originalEvent.deltaY);
        if(e.originalEvent.deltaY>0) {
            //아래로
            tz+=zAmount;
            //조건을 달아보세요...
            if(tz>endZ){
                tz=endZ;
            }
        } else {
            //위로
            tz-=zAmount;
            if(tz<0){
                tz=0;
            }
        }
        
        selected = Math.round(tz/zDistance);
        $("#gnb li").eq(selected).addClass("on");
        $("#gnb li").eq(selected).siblings().removeClass("on");

        $("#main li").each(function(idx,item){
            gsap.to($(this),{
                z:tz-zDistance*idx,
                ease:"power3"
            });
        })
    });

    var selected = 0;
    $("#gnb ul li").on("click",function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        tz = zDistance*$(this).index();
        time = Math.abs($(this).index() - selected)*0.5;
        $("#main li").each(function(idx,item){
            gsap.to($(this),{
                duration:time,
                z:tz-zDistance*idx,
                ease:"power3"
            });
        });
        selected = $(this).index();
        return false;
    });

    function moveMario(mario){
        gsap.to(mario,{
            duration:function(){
                return Math.random()*0.7 + 0.3;  //0.3~1
            },
            y:function(){
                return Math.random()*200-100;  //0-100  200-100
            },
            x:function(){
                return Math.random()*200-100
            },
            ease:"power1.out",
            onComplete:function(){
                moveMario(mario);
            }
        });
    }

    // moveMario($("#main li:nth-child(1) .mario"));
    // moveMario($("#main li:nth-child(2) .mario"));
    // moveMario($("#main li:nth-child(3) .mario"));
    // moveMario($("#main li:nth-child(4) .mario"));
    // moveMario($("#main li:nth-child(5) .mario"));
    

});