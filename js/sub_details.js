$( document ).ready( function() {
    $( window ).scroll( function() {
      if ( $( this ).scrollTop() > 200 ) {
        $( '.scroll_top' ).fadeIn();
      } else {
        $( '.scroll_top' ).fadeOut();
      }
    } );

    $( '.scroll_top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 800 );
        return false;
      } );
    } 
);

$(document).ready(function(){
    $('.down').click(function(){
        $('html,body').animate({scrollTop : 1000},1000);
        return false;
    })
})


$(document).ready(function(){
    $('.text').display='';
    $('.text').fadeIn('slow')
    $('.text').fadeIn(3000)
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.main1_con').display='';
            $('.main1_con').fadeIn('slow');
            $('.main1_con').fadeIn(3000);
        }
        else{
            $('.main1_con').display='';
            $('.main1_con').fadeOut('slow');
            $('.main1_con').fadeOut(3000);

        }
    })
})



if (matchMedia('screen and (min-width:699px)').matches){
    function open_menu(){
        document.getElementsByClassName('slide_menu')[0].style.width='335px';
    }
    
    function close_menu(){
        document.getElementsByClassName('slide_menu')[0].style.width='0%';
    }
}else{
    function open_menu(){
        document.getElementsByClassName('slide_menu')[0].style.width='100%'
    }
    function close_menu(){
        document.getElementsByClassName('slide_menu')[0].style.width='0%'
    }
}

// 밑 fix 잠시 보류

// if(matchMedia('screen and (min-width:699px)').matches){
//     $(window).scroll(
//         function(){
//             if($(window).scrollTop() > 1050){
//                 $('.header').addClass('fix')
//             }
//             else{
//                 $('.header').removeClass('fix')
//             }
//         }
//     )
// }else{
//     $(window).scroll(
//         function(){
//             if($(window).scrollTop() > 650){
//                 $('.header').addClass('fix')
//             }
//             else{
//                 $('.header').removeClass('fix')
//             }
//         }
//     )
// }





