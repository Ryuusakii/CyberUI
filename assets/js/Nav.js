$(document).ready(function(){


$('#slide1').on('click', function(){
    $('.servthree').hide();
    $('.servtwo').hide();
    $('.servfour').hide();
    $('.servone').show();
    $('.servone').addClass('glitch--animate');
    setTimeout(function () {
        $('.servone').removeClass("glitch--animate");
   },800);    
    
});

$('#slide2').on('click', function(){
    $('.servone').hide();
    $('.servthree').hide();
        $('.servfour').hide();

    $('.servtwo').show();
    $('.servtwo').addClass('glitch--animate');
    setTimeout(function () {
        $('.servtwo').removeClass("glitch--animate");
   },1200);  
});

$('#slide3').on('click', function(){
    $('.servone').hide();
    $('.servtwo').hide();
    $('.servfour').hide();

    $('.servthree').show();
    $('.servthree').addClass('glitch--animate');
    setTimeout(function () {
        $('.servthree').removeClass("glitch--animate");
   },800);  
});

$('#slide4').on('click', function(){
    $('.servone').hide();
    $('.servtwo').hide();
    $('.servthree').hide();

    $('.servfour').show();
    $('.servfour').addClass('glitch--animate');
    setTimeout(function () {
        $('.servfour').removeClass("glitch--animate");
   },800);  
});



});


