
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
        $('.icon').hide();
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



function open_menu(){
    document.getElementsByClassName('slide_menu')[0].style.width='335px';
}

function close_menu(){
    document.getElementsByClassName('slide_menu')[0].style.width='0%';
}



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
    } );



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


$(window).scroll(
    function(){
        if($(window).scrollTop() > 1050){
            $('.header').addClass('fix')
            $('.header').addClass('.logo head_nav')
        }
        else{
            $('.header').removeClass('fix')
            $('.header').removeClass('fix')
        }
    }
)








// let header = document.querySelector(".header");
// let headerHeight = header.offsetHeight;

// window.onscroll = function () {
//   let windowTop = window.scrollY;
//   if (windowTop >= headerHeight) {
//     header.classList.add("drop");
//   } else {
//     header.classList.remove("drop");
//   }
// };

