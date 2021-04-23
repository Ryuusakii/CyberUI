




$(document).ready(function () {

  

    setTimeout(function () {
        $('.slider__inner').removeClass("glitch--animate");
   },2000);  
  
    $('#inicio').on('click', function () {


        $('#two').hide();
        $('#three').hide();

        $('#four').hide();
        $('#one').show();
        $('.inicio').addClass("glitch--animate");
        setTimeout(function () {
            
            $('.inicio').removeClass("glitch--animate");
       },1000); 

    });




    $('#servicos').on('click', function () {

        $('#one').hide();

        $('#two').hide();
        $('#four').hide();
        $('#three').show();

        $('.divserviços').addClass("glitch--animate");
        setTimeout(function () {
            
            $('.divserviços').removeClass("glitch--animate");
       },1000); 

    });

    $('#contato').on('click', function () {

        $('#one').hide();

        $('#two').hide();
        $('#three').hide();

        $('#four').show();
        $('.contact').addClass("glitch--animate");
        setTimeout(function () {
            
            $('.contact').removeClass("glitch--animate");
       },800);  

    });
    $('#close').on('click', function () {

        if ($('#buttons').hasClass("inactive")) {
            $('#buttons').toggleClass('inactive active')
            $('#buttons').show("blind");
            $('#navbar').animate({
                height: '330px'
            })
        }
        else if ($('#buttons').hasClass('active')) {
            $('#buttons').toggleClass('active inactive');
             $('#buttons').hide("blind");
             $('#navbar').animate({
                 height: '80px'
             })
             $('#close').animate({
                 'margin-top': '-5px'
             })

        }
    });

  


// Color changer


 
$('#redtheme').on('click', function () {

    $('.header-presentation').addClass('glitch--animate');
    setTimeout(function () {
        $('.header-presentation').removeClass("glitch--animate");
   },800);  

    $(':root').css('--gold88', ' rgba(255, 0, 0, 0.53)');
    $(':root').css('--gold', '#ff0000');
    $(':root').css('--goldDark', '#ed2525');
    $(':root').css('--hovercolor','#00ffbf');
    $(':root').css('--hovercolorbg','rgba(0, 255, 170, 0.25)');
    $(':root').css('--inputfocus','rgba(255, 23, 23, 0.644)');
    $(':root').css('--termcolor','#0f0000');

     
    
    });
    
$('#bluetheme').on('click', function () {
    $('.header-presentation').addClass('glitch--animate');
    setTimeout(function () {
        $('.header-presentation').removeClass("glitch--animate");
   },800);  


    $(':root').css('--gold88', 'rgba(0, 255, 213, 0.53)');
    $(':root').css('--gold', '#00ffd5');
    $(':root').css('--goldDark', '#25edc2');
    $(':root').css('--hovercolor','#ffee00');
    $(':root').css('--hovercolorbg','rgba(255, 217, 0, 0.25)');
    $(':root').css('--inputfocus','rgba(23, 255, 216, 0.644)');
    $(':root').css('--termcolor','#000f0d');
 });


 $('#goldtheme').on('click', function () {

    $('.header-presentation').addClass('glitch--animate');
    setTimeout(function () {
        $('.header-presentation').removeClass("glitch--animate");
   },800);  


    $(':root').css('--gold88', 'rgba(255, 215, 0, 0.53)');
    $(':root').css('--gold', '#ffd700');
    $(':root').css('--goldDark', '#eda725');
    $(':root').css('--hovercolor','#ff0000');
    $(':root').css('--hovercolorbg','rgba(255, 0, 0, 0.25)');
    $(':root').css('--inputfocus','rrgba(255, 220, 23, 0.644)');
    $(':root').css('--termcolor','#0f0900');
    });
});




