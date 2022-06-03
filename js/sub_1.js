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

if(matchMedia('screen and (max-width:699px)').matches){
  $(document).ready(function(){
    $('.down').click(function(){
        $('html,body').animate({scrollTop : 500},1000);
        return false;
    })
})
}else{
  $(document).ready(function(){
    $('.down').click(function(){
        $('html,body').animate({scrollTop : 1000},1000);
        return false;
    })
})
}




$(document).ready(function(){
    $('.text').display='';
    $('.text').fadeIn('slow')
    $('.text').fadeIn(3000)
})







if(matchMedia('screen and (max-width:699px)').matches){
  $(document).ready(function(){
    $('.main1_con').display='';
    $('.main1_con').fadeIn('slow')
    $('.main1_con').fadeIn(3000)
})
}
else{
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
}



if (matchMedia('screen and (max-width:699px)').matches){
  
$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 1100){
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
      if($(this).scrollTop() > 1400){
          $('.left_imgbox2').display='';
          $('.left_imgbox2').fadeIn('slow');
          $('.left_imgbox2').fadeIn(4000);
      }
      else{
          $('.left_imgbox2').display='';
          $('.left_imgbox2').fadeOut('slow');
          $('.left_imgbox2').fadeOut(4000);

      }
  })
})
}
else{
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
        if($(this).scrollTop() > 2550){
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
}
if (matchMedia('screen and (max-width:699px)').matches){
  
$(window).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() <= 1200){
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
}
else{
  
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
}



if (matchMedia('screen and (max-width:699px)').matches){
  $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 2100){
            $('#cont3_left').display='';
            $('#cont3_left').fadeIn('slow');
            $('#cont3_left').fadeIn(3000);
            $('.cont3_hide').hide();
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
        if($(this).scrollTop() > 2900){
            $('#cont4_left').display='';
            $('#cont4_left').fadeIn('slow');
            $('#cont4_left').fadeIn(3000);
            $('.cont4_hide').hide();
  
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
        if($(this).scrollTop() > 3800){
            $('#cont5_left').display='';
            $('#cont5_left').fadeIn('slow');
            $('#cont5_left').fadeIn(3000);
            $('.cont5_hide').hide();
  
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
        if($(this).scrollTop() > 4700){
            $('#cont6_left').display='';
            $('#cont6_left').fadeIn('slow');
            $('#cont6_left').fadeIn(3000);
            $('.cont6_hide').hide();
  
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
        if($(this).scrollTop() > 5600){
            $('#cont7_left').display='';
            $('#cont7_left').fadeIn('slow');
            $('#cont7_left').fadeIn(3000);
            $('.cont7_hide').hide();
  
        }
        else{
            $('#cont7_left').display='';
            $('#cont7_left').fadeOut('slow');
            $('#cont7_left').fadeOut(3000);
  
        }
    })
  })
}else if((matchMedia('screen and (min-width:699px)').matches)){
  $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 3000){
            $('#cont3_left').display='';
            $('#cont3_left').fadeIn('slow');
            $('#cont3_left').fadeIn(3000);
            $('.cont3_hide').hide();
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
        if($(this).scrollTop() > 3900){
            $('#cont4_left').display='';
            $('#cont4_left').fadeIn('slow');
            $('#cont4_left').fadeIn(3000);
            $('.cont4_hide').hide();
  
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
        if($(this).scrollTop() > 4850){
            $('#cont5_left').display='';
            $('#cont5_left').fadeIn('slow');
            $('#cont5_left').fadeIn(3000);
            $('.cont5_hide').hide();
  
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
        if($(this).scrollTop() > 5700){
            $('#cont6_left').display='';
            $('#cont6_left').fadeIn('slow');
            $('#cont6_left').fadeIn(3000);
            $('.cont6_hide').hide();
  
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
        if($(this).scrollTop() > 6600){
            $('#cont7_left').display='';
            $('#cont7_left').fadeIn('slow');
            $('#cont7_left').fadeIn(3000);
            $('.cont7_hide').hide();
  
        }
        else{
            $('#cont7_left').display='';
            $('#cont7_left').fadeOut('slow');
            $('#cont7_left').fadeOut(3000);
  
        }
    })
  })
}

if(matchMedia('screen and (min-width:699px)').matches){
    $(window).scroll(
        function(){
            if($(window).scrollTop() > 1050){
                $('.header').addClass('fix head')
            }
            else{
                $('.header').removeClass('fix')
            }
        }
    )
}else{
    $(window).scroll(
        function(){
            if($(window).scrollTop() > 650){
                $('.header').addClass('fix')
            }
            else{
                $('.header').removeClass('fix')
            }
        }
    )
}



// if (matchMedia('screen and (min-width:1100px)').matches){
//   $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 3300){
//             $('#cont3_left').display='';
//             $('#cont3_left').fadeIn('slow');
//             $('#cont3_left').fadeIn(3000);
//             $('.cont3_hide').hide();
//         }
//         else{
//             $('#cont3_left').display='';
//             $('#cont3_left').fadeOut('slow');
//             $('#cont3_left').fadeOut(3000);
  
//         }
//     })
//   })
  
//   $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 4200){
//             $('#cont4_left').display='';
//             $('#cont4_left').fadeIn('slow');
//             $('#cont4_left').fadeIn(3000);
//             $('.cont4_hide').hide();
  
//         }
//         else{
//             $('#cont4_left').display='';
//             $('#cont4_left').fadeOut('slow');
//             $('#cont4_left').fadeOut(3000);
  
//         }
//     })
//   })
  
  
//   $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 5150){
//             $('#cont5_left').display='';
//             $('#cont5_left').fadeIn('slow');
//             $('#cont5_left').fadeIn(3000);
//             $('.cont5_hide').hide();
  
//         }
//         else{
//             $('#cont5_left').display='';
//             $('#cont5_left').fadeOut('slow');
//             $('#cont5_left').fadeOut(3000);
  
//         }
//     })
//   })
  
  
  
//   $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 6100){
//             $('#cont6_left').display='';
//             $('#cont6_left').fadeIn('slow');
//             $('#cont6_left').fadeIn(3000);
//             $('.cont6_hide').hide();
  
//         }
//         else{
//             $('#cont6_left').display='';
//             $('#cont6_left').fadeOut('slow');
//             $('#cont6_left').fadeOut(3000);
  
//         }
//     })
//   })
  
  
//   $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 7000){
//             $('#cont7_left').display='';
//             $('#cont7_left').fadeIn('slow');
//             $('#cont7_left').fadeIn(3000);
//             $('.cont7_hide').hide();
  
//         }
//         else{
//             $('#cont7_left').display='';
//             $('#cont7_left').fadeOut('slow');
//             $('#cont7_left').fadeOut(3000);
  
//         }
//     })
//   })
  
// }





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

















$( document ).ready( function(){
  $('.main1_1').click(function(){
    var offset = $('#cont3_bg').offset();
    $('html').animate({scrollTop:offset.top},1000);
  })
  $('.main1_2').click(function(){
    var offset = $('#cont4_bg').offset();
    $('html').animate({scrollTop:offset.top},1000);
  })
  $('.main1_3').click(function(){
    var offset = $('#cont5_bg').offset();
    $('html').animate({scrollTop:offset.top},1000);
  })
  $('.main1_4').click(function(){
    var offset = $('#cont6_bg').offset();
    $('html').animate({scrollTop:offset.top},1000);
  })
  $('.main1_5').click(function(){
    var offset = $('#cont7_bg').offset();
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
  $('.cont3_btn1').hover(function(){
    $('.cont3_left1').show();
    $('#cont3_left').hide()
    $('#cont3_left').css({'display':'none'})
    $('.cont3_left2').hide()
    $('.cont3_left3').hide()
    $('.cont3_left4').hide()
    $('.cont3_left5').hide()
  })
  $('.cont3_btn2').hover(function(){
    $('.cont3_left2').show();
    $('#cont3_left').hide()
    $('.cont3_left1').hide();
    $('.cont3_left3').hide()
    $('.cont3_left4').hide()
    $('.cont3_left5').hide()
  })
  $('.cont3_btn3').hover(function(){
    $('.cont3_left3').show();
    $('#cont3_left').hide()
    $('.cont3_left1').hide();
    $('.cont3_left2').hide()
    $('.cont3_left4').hide()
    $('.cont3_left5').hide()
  })
  $('.cont3_btn4').hover(function(){
    $('.cont3_left4').show();
    $('#cont3_left').hide()
    $('.cont3_left1').hide();
    $('.cont3_left3').hide()
    $('.cont3_left2').hide()
    $('.cont3_left5').hide()
  })
  $('.cont3_btn5').hover(function(){
    $('.cont3_left5').show();
    $('#cont3_left').hide()
    $('.cont3_left1').hide();
    $('.cont3_left3').hide()
    $('.cont3_left4').hide()
    $('.cont3_left2').hide()
  })





  
  $('.cont4_btn1').hover(function(){
    $('.cont4_left1').show();
    $('#cont4_left').hide();
    $('.cont4_left2').hide();
    $('.cont4_left3').hide();
    $('.cont4_left4').hide();
    $('.cont4_left5').hide();
    
  })

  
  $('.cont4_btn2').hover(function(){
    $('.cont4_left2').show();
    $('#cont4_left').hide();
    $('.cont4_left1').hide();
    $('.cont4_left3').hide();
    $('.cont4_left4').hide();
    $('.cont4_left5').hide();
    
  })

  
  $('.cont4_btn3').hover(function(){
    $('.cont4_left3').show();
    $('#cont4_left').hide();
    $('.cont4_left2').hide();
    $('.cont4_left1').hide();
    $('.cont4_left4').hide();
    $('.cont4_left5').hide();
    
  })

  
  $('.cont4_btn4').hover(function(){
    $('.cont4_left4').show();
    $('#cont4_left').hide();
    $('.cont4_left2').hide();
    $('.cont4_left3').hide();
    $('.cont4_left1').hide();
    $('.cont4_left5').hide();
    
  })

  
  $('.cont4_btn5').hover(function(){
    $('.cont4_left5').show();
    $('#cont4_left').hide();
    $('.cont4_left2').hide();
    $('.cont4_left3').hide();
    $('.cont4_left4').hide();
    $('.cont4_left1').hide();
    
  })
  


  $('.cont5_btn1').hover(function(){
    $('.cont5_left1').show();
    $('#cont5_left').hide();
    $('.cont5_left2').hide();
    $('.cont5_left3').hide();
    $('.cont5_left4').hide();
    $('.cont5_left5').hide();
  })
  $('.cont5_btn2').hover(function(){
    $('.cont5_left2').show();
    $('#cont5_left').hide();
    $('.cont5_left1').hide();
    $('.cont5_left3').hide();
    $('.cont5_left4').hide();
    $('.cont5_left5').hide();
  })
  $('.cont5_btn3').hover(function(){
    $('.cont5_left3').show();
    $('#cont5_left').hide();
    $('.cont5_left2').hide();
    $('.cont5_left1').hide();
    $('.cont5_left4').hide();
    $('.cont5_left5').hide();
  })
  $('.cont5_btn4').hover(function(){
    $('.cont5_left4').show();
    $('#cont5_left').hide();
    $('.cont5_left2').hide();
    $('.cont5_left3').hide();
    $('.cont5_left1').hide();
    $('.cont5_left5').hide();
  })
  $('.cont5_btn5').hover(function(){
    $('.cont5_left5').show();
    $('#cont5_left').hide();
    $('.cont5_left2').hide();
    $('.cont5_left3').hide();
    $('.cont5_left4').hide();
    $('.cont5_left1').hide();
  })


  $('.cont6_btn1').hover(function(){
    $('.cont6_left1').show();
    $('#cont6_left').hide();
    $('.cont6_left2').hide();
    $('.cont6_left3').hide();
    $('.cont6_left4').hide();
  })
  $('.cont6_btn2').hover(function(){
    $('.cont6_left2').show();
    $('#cont6_left').hide();
    $('.cont6_left1').hide();
    $('.cont6_left3').hide();
    $('.cont6_left4').hide();
  })
  $('.cont6_btn3').hover(function(){
    $('.cont6_left3').show();
    $('#cont6_left').hide();
    $('.cont6_left2').hide();
    $('.cont6_left1').hide();
    $('.cont6_left4').hide();
  })
  $('.cont6_btn4').hover(function(){
    $('.cont6_left4').show();
    $('#cont6_left').hide();
    $('.cont6_left2').hide();
    $('.cont6_left3').hide();
    $('.cont6_left1').hide();
  })

  $('.cont7_btn1').hover(function(){
    $('.cont7_left1').show();
    $('#cont7_left').hide();
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




