$.ajax({
    url:"test.json"
})
.done(function(res){
    //console.log(res.news);
    var news  = res.news;
    $.each(news,function(idx,item){
        //console.log(item);
        // console.log(item.no);
        // console.log(item.title);
        // console.log(item.desc);
        // console.log(item.date);
        var no = item.no;
        var title = item.title;
        var desc = item.desc;
        var date = item.date;
        $(".loadData .list").append(
            `<li>
                <span class="no">${no}</span>
                <h2 class="title">${title}</h2>
                <p class="desc">
                    ${desc}
                </p>
                <p class="date">${date}</p>
            </li>`
        )
    });
})
.fail(function(jqXHR){
    console.log(jqXHR);
})