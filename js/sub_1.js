
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
      if($(this).scrollTop() > 2650){
          $('.left_imgbox2').display='';
          $('.left_imgbox2').fadeIn('slow');
          $('.left_imgbox2').fadeIn(4500);
      }
      else{
          $('.left_imgbox2').display='';
          $('.left_imgbox2').fadeOut('slow');
          $('.left_imgbox2').fadeOut(4500);

      }
  })
})








$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 3000){
          $('#cont3_left').display='';
          $('#cont3_left').fadeIn('slow');
          $('#cont3_left').fadeIn(3000);
      }
      else{
          $('#cont3_left').display='';
          $('#cont3_left').fadeOut('slow');
          $('#cont3_left').fadeOut(3000);

      }
  })
})

$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 3550){
          $('#cont4_left').display='';
          $('#cont4_left').fadeIn('slow');
          $('#cont4_left').fadeIn(3000);
      }
      else{
          $('#cont4_left').display='';
          $('#cont4_left').fadeOut('slow');
          $('#cont4_left').fadeOut(3000);

      }
  })
})


$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 4100){
          $('#cont5_left').display='';
          $('#cont5_left').fadeIn('slow');
          $('#cont5_left').fadeIn(3000);
      }
      else{
          $('#cont5_left').display='';
          $('#cont5_left').fadeOut('slow');
          $('#cont5_left').fadeOut(3000);

      }
  })
})



$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 4800){
          $('#cont6_left').display='';
          $('#cont6_left').fadeIn('slow');
          $('#cont6_left').fadeIn(3000);
      }
      else{
          $('#cont6_left').display='';
          $('#cont6_left').fadeOut('slow');
          $('#cont6_left').fadeOut(3000);

      }
  })
})


$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 5350){
          $('#cont7_left').display='';
          $('#cont7_left').fadeIn('slow');
          $('#cont7_left').fadeIn(3000);
      }
      else{
          $('#cont7_left').display='';
          $('#cont7_left').fadeOut('slow');
          $('#cont7_left').fadeOut(3000);

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
    if($(this).scrollTop() <= 2100){
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





// $(function(){
//   $('.cont3_btn2').hover(function(){
//     $('#cont3_left').removeClass('main3_left');
//     $('#cont3_left').addClass('button');
//   })
// })


$(function(){
  $('.cont3_btn1').mouseover(function(){
    $('.cont3_left1').show();
    $('#cont3_left').hide();
  })
  $('.cont3_btn1').mouseleave(function(){
    $('#cont3_left').show();
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
  })
  $('.cont3_btn2').mouseover(function(){
    $('.cont3_left2').show();
    $('#cont3_left').hide();
  })
  $('.cont3_btn2').mouseleave(function(){
    $('#cont3_left').show();
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
  })
  $('.cont3_btn3').mouseover(function(){
    $('.cont3_left3').show();
    $('#cont3_left').hide();
  })
  $('.cont3_btn3').mouseleave(function(){
    $('#cont3_left').show();
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
  })
  $('.cont3_btn4').mouseover(function(){
    $('.cont3_left4').show();
    $('#cont3_left').hide();
  })
  $('.cont3_btn4').mouseleave(function(){
    $('#cont3_left').show();
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
  })
  $('.cont3_btn5').mouseover(function(){
    $('.cont3_left5').show();
    $('#cont3_left').hide();
  })
  $('.cont3_btn5').mouseleave(function(){
    $('#cont3_left').show();
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
    $('.cont3_hide').hide()
  })





  $('.cont4_btn1').mouseover(function(){
    $('.cont4_left1').show();
    $('#cont4_left').hide();
  })
  $('.cont4_btn1').mouseleave(function(){
    $('#cont4_left').show();
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
  })
  $('.cont4_btn2').mouseover(function(){
    $('.cont4_left2').show();
    $('#cont4_left').hide();
  })
  $('.cont4_btn2').mouseleave(function(){
    $('#cont4_left').show();
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
  })
  $('.cont4_btn3').mouseover(function(){
    $('.cont4_left3').show();
    $('#cont4_left').hide();
  })
  $('.cont4_btn3').mouseleave(function(){
    $('#cont4_left').show();
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
  })
  $('.cont4_btn4').mouseover(function(){
    $('.cont4_left4').show();
    $('#cont4_left').hide();
  })
  $('.cont4_btn4').mouseleave(function(){
    $('#cont4_left').show();
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
  })
  $('.cont4_btn5').mouseover(function(){
    $('.cont4_left5').show();
    $('#cont4_left').hide();
  })
  $('.cont4_btn5').mouseleave(function(){
    $('#cont4_left').show();
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
    $('.cont4_hide').hide()
  })



  $('.cont5_btn1').mouseover(function(){
    $('.cont5_left1').show();
    $('#cont5_left').hide();
  })
  $('.cont5_btn1').mouseleave(function(){
    $('#cont5_left').show();
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
  })
  $('.cont5_btn2').mouseover(function(){
    $('.cont5_left2').show();
    $('#cont5_left').hide();
  })
  $('.cont5_btn2').mouseleave(function(){
    $('#cont5_left').show();
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
  })
  $('.cont5_btn3').mouseover(function(){
    $('.cont5_left3').show();
    $('#cont5_left').hide();
  })
  $('.cont5_btn3').mouseleave(function(){
    $('#cont5_left').show();
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
  })
  $('.cont5_btn4').mouseover(function(){
    $('.cont5_left4').show();
    $('#cont5_left').hide();
  })
  $('.cont5_btn4').mouseleave(function(){
    $('#cont5_left').show();
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
  })
  $('.cont5_btn5').mouseover(function(){
    $('.cont5_left5').show();
    $('#cont5_left').hide();
  })
  $('.cont5_btn5').mouseleave(function(){
    $('#cont5_left').show();
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
    $('.cont5_hide').hide()
  })



  $('.cont6_btn1').mouseover(function(){
    $('.cont6_left1').show();
    $('#cont6_left').hide();
  })
  $('.cont6_btn1').mouseleave(function(){
    $('#cont6_left').show();
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
  })
  $('.cont6_btn2').mouseover(function(){
    $('.cont6_left2').show();
    $('#cont6_left').hide();
  })
  $('.cont6_btn2').mouseleave(function(){
    $('#cont6_left').show();
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
  })
  $('.cont6_btn3').mouseover(function(){
    $('.cont6_left3').show();
    $('#cont6_left').hide();
  })
  $('.cont6_btn3').mouseleave(function(){
    $('#cont6_left').show();
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
  })
  $('.cont6_btn4').mouseover(function(){
    $('.cont6_left4').show();
    $('#cont6_left').hide();
  })
  $('.cont6_btn4').mouseleave(function(){
    $('#cont6_left').show();
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
    $('.cont6_hide').hide()
  })




  $('.cont7_btn1').mouseover(function(){
    $('.cont7_left1').show();
    $('#cont7_left').hide();
  })
  $('.cont7_btn1').mouseleave(function(){
    $('#cont7_left').show();
    $('.cont7_hide').hide()
  })
})
























// $(function(){
//   $('.cont3_btn1').mouseover(function(){
//     $('.cont3_left1').show()
//     $('#cont3_left').hide()
//   })
//   $('.cont3_btn1').mouseleave(function(){
//     $('.cont3_hide').hide();
//     $('#cont3_left').show()
//   })
//   $('.cont3_btn2').mouseover(function(){
//     $('.cont3_left2').fadeIn()
//     $('#cont3_left').hide()
//   })
//   $('.cont3_btn2').mouseleave(function(){
//     $('.cont3_hide').hide();
//     $('#cont3_left').show()
//   })
//   $('.cont3_btn3').mouseover(function(){
//     $('.cont3_left3').show()
//     $('#cont3_left').hide()
//   })
//   $('.cont3_btn3').mouseleave(function(){
//     $('.cont3_hide').hide();
//     $('#cont3_left').show()
//   })
//   $('.cont3_btn4').mouseover(function(){
//     $('.cont3_left4').show()
//     $('#cont3_left').hide()
//   })
//   $('.cont3_btn4').mouseleave(function(){
//     $('.cont3_hide').hide();
//     $('#cont3_left').show()
//   })
//   $('.cont3_btn5').mouseover(function(){
//     $('.cont3_left5').show()
//     $('#cont3_left').hide()
//   })
//   $('.cont3_btn5').mouseleave(function(){
//     $('.cont3_hide').hide();
//     $('#cont3_left').show()
//   })
// })






// .cont3_btn1
// .cont3_btn2
// .cont3_btn3
// .cont3_btn4
// .cont3_btn5

























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




