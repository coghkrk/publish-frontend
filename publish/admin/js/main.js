$(document).ready(function() {
     // 팝업 리스트 열기
    $('.popup-list').change(function() {
        var list = $('.popup-list').val();
        console.log(list);
        $("." + list).css("display","block");
    });

    // 팝업 닫기
    $('.btn-close').click(function() {
        $('.popup').css("display", "none");
        $('.popup-list option:eq(0)').prop("selected", true);
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

// 팝업 열기
function popupOpen(id) { 
    $("#" + id).css("display" ,"block");
    console.log(id);
}
