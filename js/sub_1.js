
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


// $(window).load(function(){
//   
// })

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


$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 2300){
          $('.left_imgbox').display='';
          $('.left_imgbox').fadeIn('slow');
          $('.left_imgbox').fadeIn(3000);
      }
      else{
          $('.left_imgbox').display='';
          $('.left_imgbox').fadeOut('slow');
          $('.left_imgbox').fadeOut(3000);

      }
  })
})

$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 2500){
          $('.left_imgbox2').display='';
          $('.left_imgbox2').fadeIn('slow');
          $('.left_imgbox2').fadeIn(3500);
      }
      else{
          $('.left_imgbox2').display='';
          $('.left_imgbox2').fadeOut('slow');
          $('.left_imgbox2').fadeOut(3000);

      }
  })
})








$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 3000){
          $('.main3_left1').display='';
          $('.main3_left1').fadeIn('slow');
          $('.main3_left1').fadeIn(3000);
      }
      else{
          $('.main3_left1').display='';
          $('.main3_left1').fadeOut('slow');
          $('.main3_left1').fadeOut(3000);

      }
  })
})

$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 3550){
          $('.main3_left2').display='';
          $('.main3_left2').fadeIn('slow');
          $('.main3_left2').fadeIn(3000);
      }
      else{
          $('.main3_left2').display='';
          $('.main3_left2').fadeOut('slow');
          $('.main3_left2').fadeOut(3000);

      }
  })
})


$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 4100){
          $('.main3_left3').display='';
          $('.main3_left3').fadeIn('slow');
          $('.main3_left3').fadeIn(3000);
      }
      else{
          $('.main3_left3').display='';
          $('.main3_left3').fadeOut('slow');
          $('.main3_left3').fadeOut(3000);

      }
  })
})



$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 4800){
          $('.main3_left4').display='';
          $('.main3_left4').fadeIn('slow');
          $('.main3_left4').fadeIn(3000);
      }
      else{
          $('.main3_left4').display='';
          $('.main3_left4').fadeOut('slow');
          $('.main3_left4').fadeOut(3000);

      }
  })
})


$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 5350){
          $('.main3_left5').display='';
          $('.main3_left5').fadeIn('slow');
          $('.main3_left5').fadeIn(3000);
      }
      else{
          $('.main3_left5').display='';
          $('.main3_left5').fadeOut('slow');
          $('.main3_left5').fadeOut(3000);

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


$(window).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() < 2100){
      $({ val : 0 }).animate({ val : 2500 }, {
        duration: 1500,
        step: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".count1").text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".count1").text(num);
        }
      });
      
      $({ val : 0 }).animate({ val : 1.5 }, {
        duration: 1000,
        step: function() {
          var num = numberWithCommas(this.val.toFixed(1));
          $(".count2").text(num+'K');
        },
        complete: function() {
          var num = numberWithCommas(this.val.toFixed(1));
          $(".count2").text(num+'K');
        }
      });
      $({ val : 0 }).animate({ val : 800 }, {
        duration: 1000,
        step: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".count3").text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".count3").text(num);
        }
      });
      $({ val : 0 }).animate({ val : 200 }, {
        duration: 1000,
        step: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".count4").text(num);
        },
        complete: function() {
          var num = numberWithCommas(Math.floor(this.val));
          $(".count4").text(num);
        }
      });
      
      function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  
    }
  })
})







// .left_imgbox
// .left_imgbox2






$( document ).ready( function(){
  $('.main1_1').click(function(){
    var offset = $('.main_container3').offset();
    $('html').animate({scrollTop:offset.top},1000);
  })
  $('.main1_2').click(function(){
    var offset = $('.main_container4').offset();
    $('html').animate({scrollTop:offset.top},1000);
  })
  $('.main1_3').click(function(){
    var offset = $('.main_container5').offset();
    $('html').animate({scrollTop:offset.top},1000);
  })
  $('.main1_4').click(function(){
    var offset = $('.main_container6').offset();
    $('html').animate({scrollTop:offset.top},1000);
  })
  $('.main1_5').click(function(){
    var offset = $('.main_container7').offset();
    $('html').animate({scrollTop:offset.top},1000);
  })
})

$(document).ready(function(){
    $('.cont3_btn1').mouseover(function(){
      $('#cont3_left').addclass('button');
    })
})


// $(document).ready(function() {
//   $('h1').mouseover(function() {
//     $( 'h1' ).addClass( 'bg' );
//     $( 'h2' ).addClass( 'bg bd' );
// })
// })



// $(document).ready(function(){
//     $('.main3_button1').mouseover(function(){
//         $('.main3_left1').fadeIn('slow');
//         $('.main3_left1').fadeIn(3000);
//     })
//     $('.main3_button1').mouseleave(function(){
//         $('.main3_left1').fadeout('slow');
//         $('.main3_left1').fadeout(3000);
//     })
//     $('.main3_button2').mouseover(function(){
//         $('.main3_left2').fadeIn('slow');
//         $('.main3_left2').fadeIn(3000);
//     })
//     $('.main3_button2').mouseleave(function(){
//         $('.main3_left2').fadeout('slow');
//         $('.main3_left2').fadeout(3000);
//     })
// })


// $(document).ready(function(){
//     $('.main3_button').mouseover(function(){
//         // $('.main3_left').css({'background':'url(../img/twitter.png)'})
//     })
// })



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





