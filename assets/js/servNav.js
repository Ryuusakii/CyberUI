$(document).ready(function(){





$('#slide1').on('click', function(){
    $('.servthree').hide();
    $('.servtwo').hide();
    $('.servone').show();
    $('.servone').addClass('glitch--animate');
    setTimeout(function () {
        $('.servone').removeClass("glitch--animate");
   },800);    
    
});

$('#slide2').on('click', function(){
    $('.servone').hide();
    $('.servthree').hide();
    $('.servtwo').show();
    $('.servtwo').addClass('glitch--animate');
    setTimeout(function () {
        $('.servtwo').removeClass("glitch--animate");
   },1200);  
});

$('#slide3').on('click', function(){
    $('.servone').hide();
    $('.servtwo').hide();
    $('.servthree').show();
    $('.servthree').addClass('glitch--animate');
    setTimeout(function () {
        $('.servthree').removeClass("glitch--animate");
   },800);  
});




});


