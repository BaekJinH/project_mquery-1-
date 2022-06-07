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

$(function(){
    $('#slider_img').hover(function(){
        $('.controls_wrap').fadeIn(1200)
    },function(){
        $('.controls_wrap').hide()
    })
})



$(function(){
    $('input').on('keyup',function(){
        var value= $(this).val().toUpperCase();
        $('main div').attr(value)
        $('main').children().filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
        })
    })
})





function prev(){
    $('.slide_img li:last').prepentTo('.slide_img')
    $('.slide_img').css('margin-left','-1902');
    $('.slide_img').stop().animate({'marginLeft':'0'},800)
}
function next(){
    $('.slide_img').stop().animate({marginLeft:-1902}, function(){
    $('.slide_img li:first').appendTo('.slide_img');
    $('.slide_img').css({marginLeft:0});
    });
}
function slide(){
    $('.slide_img').stop().animate({marginLeft:-1902}, function(){
    $('.slide_img li:first').appendTo('.slide_img');
    $('.slide_img').css({marginLeft:0});
    });
}
setInterval(slide, 3000);
$('.left').click(function(){
    prev();
    });
$('.right').click(function(){
    next();
    });


$(function(){
    $('.btn_click').click(function(){
        $(this).addClass('click');
        $('.btn_hover1').removeClass('click');
        // $(this).siblings().removeClass('click')
    });
})
$(function(){
    $('.btn_hover1').click(function(){
        $('main').children().fadeIn('slow')
    })
    $('.btn_hover2').click(function(){
        $('#garden-cont').fadeIn('slow')
        $('main > #garden-cont').siblings().fadeOut('slow')
    })
    $('.btn_hover3').click(function(){
        $('#hotel-cont').fadeIn('slow')
        $('main > #hotel-cont').siblings().fadeOut('slow')
    })
    $('.btn_hover4').click(function(){
        $('#interi-cont').fadeIn('slow')
        $('main > #interi-cont').siblings().fadeOut('slow')
    })
    $('.btn_hover5').click(function(){
        $('#retail-cont').fadeIn('slow')
        $('main > #retail-cont').siblings().fadeOut('slow')
    })
    $('.btn_hover6').click(function(){
        $('#yatch-cont').fadeIn('slow')
        $('main > #yatch-cont').siblings().fadeOut('slow')
    })
})

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





