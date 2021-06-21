var page = 1;
var isEnd = true;
$("#txtSearch").on("keyup",function(e){
    if(e.keyCode===13){
        $(".loadData .list").html("");
        searchImg();
    }
})

$("#btnSearch").on("click",function(){
    $(".loadData .list").html("");
    searchImg();
});
function searchImg() {
    isEnd=false;
    var query = $("#txtSearch").val();
    $.ajax({
        url:`https://dapi.kakao.com/v2/search/vclip?query=${query}&page=${page}&size=30`,
        headers:{
            "Authorization": "KakaoAK abdf5514b151d82105547207aad0cd40"
        }
    })
    .done(function(res){
        console.log(res);
        //$(".loadData .list li").remove();
        var documents = res.documents;
        $.each(documents,function(idx,item){
            var thumbnail = item.thumbnail;
            var big = item.url;
            $(".loadData .list").append(
                `
                <li>
                    <a href="${big}" data-fancybox="gallery">
                        <img src="${thumbnail}" alt="">
                    </a>
                </li>
                `
            );
        });
        //gsap autoAlpha  opacity:0, visibility:hidden
        console.log("dh===",$(document).height());
        console.log("wh===",$(window).height());
        console.log("st===",$(window).scrollTop());
        //추가되는 것만 에니메이션 되게...
        //0~80,80~160
        gsap.fromTo($(".loadData .list li").eq(30*(page-1)).nextAll(),{scale:0},{
            scale:1,
            ease:"power3",
            stagger:0.01,
            onComplete:function(){
                console.log("차례대로 나타나는 애니메이션 끝났다.");
            }
        });
    });
}
$(window).on("scroll",function(){
    var st = $(window).scrollTop();
    var wh = $(window).height();
    var dh = $(document).height();
    var gap = dh-wh;
    if(st >= gap  && isEnd===true){
        //console.log("bottom");
        page++;
        searchImg();
    }
});