// 팝업 dim 처리
function dim() {
    $("<div>", {
        css: {
            width: "100%",
            height: "100%",
            position: "fixed",
            left: "0",
            top: "0",
            zIndex: "0",
            backgroundColor: "rgba(0,0,0,.8)",
        },
    }).appendTo("body").addClass("dim");
}

// 팝업 열기
function popupOpen(id) { 
    var popupHeight = $("#" + id).height();
    var popupWidth = $("#" + id).width();
    $("#" + id).css("display" ,"block").draggable({
        handle: 'h3',
        cursorAt: { top: -popupHeight/2 + 20 , left: popupWidth - popupWidth },
    });
    dim();
}

$(document).ready(function() {
    // [D] 팝업 리스트 열기 (개발 후 주석 또는 삭제 하셔도 됩니다.)
    $('.popup-list').change(function() {
        var list = $('.popup-list').val();
        var popupHeight = $("." + list).height();
        var popupWidth = $("." + list).width();
        $("." + list).css("display","block").draggable({
            handle: 'h3',
            cursorAt: { top: -popupHeight/2 + 20 , left: popupWidth - 500 },
        });
        dim();
    });

    // 팝업 닫기
    $('.btn-close').click(function() {
        $('.popup').css({
            "display": "none",
            "left": "50%",
            "top": "50%"
        });
        $('.popup-list option:eq(0)').prop("selected", true);
        $('.dim').remove();     
    });

    // jQurey UI Datepicker
    $( "#date" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+10',
        showMonthAfterYear: true,
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        dateFormat: "yy년 mm월 dd일",
        showButtonPanel: true,
    });

    $(function() {
        var dateFormat = "mm/dd/yy",
            from = $( "#from" )
            .datepicker({
                changeYear: true,
                changeMonth: true,
                dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
                monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                dateFormat: "yy년 mm월 dd일",
                yearRange: 'c-100:c+10',
                showMonthAfterYear: true,
                showButtonPanel: true,
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
            to = $( "#to" )
            .datepicker({
                changeYear: true,
                changeMonth: true,
                dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
                monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                dateFormat: "yy년 mm월 dd일",
                yearRange: 'c-100:c+10',
                showMonthAfterYear: true,
                showButtonPanel: true,
            })
            .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
            });

        function getDate( element ) {
            var date;
            try {
            date = $.datepicker.parseDate( dateFormat, element.value );
            } catch( error ) {
            date = null;
            }

            return date;
        }
        });

    // jQurey UI accordion
    $(function() {
        $(".notice-list").accordion({
            heightStyle: "content",
            collapsible: true,
            active: '',
        });
    });

});
