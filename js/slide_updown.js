$(function(){

    //family_site_wrap
    var family_btn_sta = 0;

    $('.family_site_wrap .slide_up_down > button').click(function(){
        if (family_btn_sta == 0){
        $('.family_site_wrap .slide_up_down > ul').stop().slideDown();
        $(this).addClass('on');
        family_btn_sta = 1;
        }
        else{
            $('.family_site_wrap .slide_up_down > ul').stop().slideUp();
            $(this).removeClass('on');
            family_btn_sta = 0;
        }
    })

    //quick_btn_wrap
    var quick_btn_sta = 0;
    $('.quick_btn_wrap .slide_up_down > button').click(function(){
        if (quick_btn_sta == 0){
        $('.quick_btn_wrap .slide_up_down > ul').stop().slideDown();
        // $(this).removeClass('on');
        $(this).addClass('on');
        quick_btn_sta = 1;
        }
        else{
            $('.quick_btn_wrap .slide_up_down > ul').stop().slideUp();
            $(this).removeClass('on');
            // $(this).addClass('on');
            quick_btn_sta = 0;
        }
    })//$('.quick_btn').click
    $('.quick_btn_wrap .slide_up_down > ul > button').click(function(){
        $('.quick_btn_wrap .slide_up_down > button').removeClass('on');
        $('.quick_btn_wrap .slide_up_down > ul').stop().slideUp();
        btn_sta = 0;
    })
})//end


//div class="slide_ip_down"
// b
// 두번클릭해야되고 X버튼은 slideDown이안됨