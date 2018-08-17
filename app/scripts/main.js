$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on:{
          init: function(){
            if($('.swiper-slide #player').length){
              $('.swiper-button-next').on('click',function(){
              player.pauseVideo();

});
            $('.swiper-button-prev').on('click',function(){
              player.pauseVideo();

});
          }
       },
          slideChangeTransitionEnd: function(){
          var number = swiper[0].activeIndex;
// Check xem slide co video hay ko 
var check = ($($('.s1 .swiper-slide')[number]).find('iframe').length);
if(check == 1)
{
  player.playVideo();
}
else
{
  player.pauseVideo();
}
      }
    }
  });
// End check
  $('.fancybox').fancybox({
            padding : 0, // default 15
            margin: 0,   // default 20
            width: 400,  // default 800
            height: 300, // default 600
            opacity: true, // default false
        });
// Smooth Scroll
$('.navbar-nav').localScroll({offset:-70});
// End Smoothe Scroll
function ChangeColora(){


}
function topInViewport(element) {
    return $(element).offset().top;
 }
$('.download-button').on('click',function(){
  $('body,html').animate({scrollTop:0});
})
$(window).on('scroll',function(){

  if( $('body,html').scrollTop() > topInViewport($('#intro'))){
      $('#navigation').addClass('navbar-scroll');
      $('.navbar-nav').addClass('navbar-fixed');
      $('.topheader').addClass('color'); 

// Doi mau the a tren navbar-fixed
// End doi mau
    }
      else
      {    
        $('#navigation').removeClass('navbar-scroll');
        $('.navbar-nav').removeClass('navbar-fixed');
        $('.topheader').removeClass('color');
      }
  $('.slideanim').each(function() {
      var pos = $(this).offset().top;
      var wintop = $(window).scrollTop();
      if(pos < wintop + 500){
        $(this).addClass('slide');
      }
      
    });
});
});

  var tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '345',
          width: '500',
          videoId: 'vBSGh_65qwQ',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange

          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 160000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }


 
       
      

