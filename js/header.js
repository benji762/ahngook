$(function(){

      //로고 이미지변경용 정의
      var img = $('.logo img'); 
      var src = img.attr('src')
      var src_on = src.replace('_off','_on');
      var src_off = src_on.replace('_on','_off');

      //nav 마우스 인터랙션
      nav_mouseenter();
      nav_mouseleave();
  
  $(window).scroll(function(){

      if ($(document).scrollTop() >= 50){ 
        $('header').addClass('scroll'); //header backgorund
        $('.nav').removeClass('white') //nav text color 
        img.attr('src',src_on);  //로고 이미지 변경
        nav_mouseleave_scroll();
      } //if
      else{ 
        $('header').removeClass('scroll'); //header backgorund
        $('.nav').addClass('white') //nav text color 
        img.attr('src',src_off); //로고 이미지 변경
        nav_mouseleave();
      }//else
    }) //$(window).scroll
  })//end
  
function nav_mouseenter(){
    var img = $('.logo img'); 
      var src = img.attr('src')
      var src_on = src.replace('_off','_on');
      var src_off = src_on.replace('_on','_off');

    $('#header .gnb>li>a').mouseenter(function(){
    $('#header .nav_on').stop().fadeIn(300)
    $('.nav').removeClass('white'); //nav text color : black
    $('header').addClass('scroll'); //header backgorund : white
    img.attr('src',src_on); //로고 이미지 변경 : black
  })
}//nav_mouseenter
function nav_mouseleave(){
  var img = $('.logo img'); 
  var src = img.attr('src')
  var src_on = src.replace('_off','_on');
  var src_off = src_on.replace('_on','_off');

$('#header .nav_on').mouseleave(function(){
  $('#header .nav_on').stop().fadeOut(300)
  $('.nav').addClass('white') //nav text color : white
  $('header').removeClass('scroll'); //header backgorund : trans
  img.attr('src',src_off); //로고 이미지 변경 : white
})
}//nav_mouseleave
function nav_mouseleave_scroll(){
  var img = $('.logo img'); 
  var src = img.attr('src')
  var src_on = src.replace('_off','_on');
  var src_off = src_on.replace('_on','_off');

$('#header .nav_on').mouseleave(function(){
  $('#header .nav_on').stop().fadeOut(300)
  $('.nav').removeClass('white') //nav text color : black
  $('header').addClass('scroll'); //header backgorund : white
  img.attr('src',src_on); //로고 이미지 변경 : black
})
}//nav_mouseleave_scroll
