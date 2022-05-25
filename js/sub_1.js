
$(document).ready(function(){
    $('.main4_img1').mouseover(function(){
        $('.icon1').fadeIn();
        $('.icon2').hide();
        $('.icon3').hide();
        $('.icon4').hide();
    })
    $('.main4_img1').mouseleave(function(){
        $('.icon').hide();
        $('.icon').hide();
        $('.icon').hide();
        $('.icon').hide();
    })
    $('.main4_img2').mouseover(function(){
        $('.icon2').fadeIn();
        $('.icon1').hide();
        $('.icon3').hide();
        $('.icon4').hide();
    })
    $('.main4_img2').mouseleave(function(){
        $('.icon').hide();
        $('.icon').hide();
        $('.icon').hide();
        $('.icon').hide();
    })
    $('.main4_img3').mouseover(function(){
        $('.icon3').fadeIn();
        $('.icon2').hide();
        $('.icon1').hide();
        $('.icon4').hide();
    })
    $('.main4_img3').mouseleave(function(){
        $('.icon').fadeOut();
        $('.icon').hide();
        $('.icon').hide();
        $('.icon').hide();
    })
    $('.main4_img4').mouseover(function(){
        $('.icon4').fadeIn();
        $('.icon2').hide();
        $('.icon3').hide();
        $('.icon1').hide();
    })
    $('.main4_img4').mouseleave(function(){
        $('.icon').hide();
        $('.icon').hide();
        $('.icon').hide();
        $('.icon').hide();
    })
})


$(function(){
    $('.slide_btn1').click(function(){
        $('.slide_btn1').addClass('active')
        $(this).removeClass('active')
        $('.slide_1').fadeIn();
        $('.slide_2').hide();
        $('.slide_3').hide();
    })
    $('.slide_btn2').click(function(){
        $('.slide_2').fadeIn();
        $('.slide_2').css({'display':'flex'})
        $('.slide_1').hide();
        $('.slide_3').hide();
    })
    $('.slide_btn3').click(function(){
        $('.slide_3').fadeIn();
        $('.slide_3').css({'display':'flex'})
        $('.slide_1').hide();
        $('.slide_2').hide();
    })
})



// function open_menu(){
//     document.getElementsByClassName('slide_menu')[0].style.width='335px';
// }

// function close_menu(){
//     document.getElementsByClassName('slide_menu')[0].style.width='0%';
// }



$( document ).ready( function() {
    $( window ).scroll( function() {
      if ( $( this ).scrollTop() > 200 ) {
        $( '.scroll_top' ).fadeIn();
      } else {
        $( '.scroll_top' ).fadeOut();
      }
    } );

    $( '.scroll_top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
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


// $(window).load(function(){
//   
// })

$(document).ready(function(){
    $('.text').display='';
        $('.text').fadeIn('slow')
        $('.text').fadeIn(3000)
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

setInterval(slide,1000)
var arr = ['../img/main3_1.jpg','../img/main_slide-3.jpg','../img/main_slide3.jpg']
var i = 0;
function slide(){
    i++;
    if(i>=arr.length){
        i=0;
    }
    var bodyTag=document.getElementById('slide_img2');
    bodyTag.src=arr[i]
}