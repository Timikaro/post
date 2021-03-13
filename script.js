
var button = document.getElementsByClassName("toggle")[0];
var bar = document.getElementsByClassName('ul')[0];
button.addEventListener('click',function(){
   bar.classList.toggle('move');
    
})





// scroll smooth

$('.container').on('click', function(e){

      
      var href = $('#about');
      var jam = $(href);
      
      
     $('html,body').animate({
        scrollTop: jam.offset().top -21
        
       
     }, duration= 1000,
        easing ='easeOutSine' );

   e.preventDefault();

      $('.pabout').addClass('p-move');
       
});




// onscroll p akan muncul



window.onscroll = function() {myScroll()};

function myScroll(){
   if( document.documentElement.scrollTop > 450 ){
      $('.pabout').addClass('p-move');
   } else{
      $('.pabout').removeClass('p-move');
   }
}