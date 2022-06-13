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



if (matchMedia('screen and (min-width:699px)').matches){
    $(document).ready(function(){
        $('.down').click(function(){
            $('html,body').animate({scrollTop : 1000},1000);
            return false;
        })
    })
}else{
    $(document).ready(function(){
        $('.down').click(function(){
            $('html,body').animate({scrollTop : 500},1000);
            return false;
        })
    })
}







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
        $('.controls_wrap').fadeIn(300)
    },function(){
        $('.controls_wrap').fadeOut(300)
    })
})



$(function(){
    $('input').on('keyup',function(){
        var value= $(this).val().toUpperCase();
        $('main div').attr(value)
        $('main').children().filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
        })
        $('input').on('keyup',function(){
            $('.btn_click').not('.btn_hover1').removeClass('click');
            $('.btn_hover1').addClass('click');
            // $('.btn_click').filter(function(){
            //     if(value2 == $('.btn_click')){
            //         $('.btn_click').addClass('click')
            //     }
            // })
        })
    })
})
// 두번째만들기
$(function(){
    $('input').on('keyup',function(){
        var value = $(this).val().toUpperCase();
        $('main div').attr(value)
    })
})


// $(function(){
//     $('input').on('keyup',function(){
//         var value2 = $(this).val().toUpperCase();
//         $('.btn_click').attr(value)
//         $('.btn_click').filter(function(){
//             $(this).toggle($(this).text().toUpperCase().indexOf(value2) > -1)
//         })
//     })
// })
$(function(){
    var input = $('input');
    if(input==undefined){
        $('.btn_hover1').addClass('click')
    }
    $('.btn_hover1').on('click',function(){
        $("input[type=text]").val("")
        input.val(input.val()+'All')
    })
    $('.btn_hover2').on('click',function(){
        $("input[type=text]").val("")
        input.val(input.val()+'Garden')
    })
    $('.btn_hover3').on('click',function(){
        $("input[type=text]").val("")
        input.val(input.val()+'Hotel')
    })
    $('.btn_hover4').on('click',function(){
        $("input[type=text]").val("")
        input.val(input.val()+'Interiors')
    })
    $('.btn_hover5').on('click',function(){
        $("input[type=text]").val("")
        input.val(input.val()+'Retail')
    })
    $('.btn_hover6').on('click',function(){
        $("input[type=text]").val("")
        input.val(input.val()+'Yatchs')
    })
    $('.btn_hover1').click(function(){
        $(this).addClass('click');
        $('.btn_hover2').removeClass('click');
        $('.btn_hover3').removeClass('click');
        $('.btn_hover4').removeClass('click');
        $('.btn_hover5').removeClass('click');
        $('.btn_hover6').removeClass('click');
    });
    $('.btn_hover2').click(function(){
        $(this).addClass('click');
        $('.btn_hover1').removeClass('click');
        $('.btn_hover3').removeClass('click');
        $('.btn_hover4').removeClass('click');
        $('.btn_hover5').removeClass('click');
        $('.btn_hover6').removeClass('click');
    });
    $('.btn_hover3').click(function(){
        $(this).addClass('click');
        $('.btn_hover1').removeClass('click');
        $('.btn_hover2').removeClass('click');
        $('.btn_hover4').removeClass('click');
        $('.btn_hover5').removeClass('click');
        $('.btn_hover6').removeClass('click');
    });
    $('.btn_hover4').click(function(){
        $(this).addClass('click');
        $('.btn_hover1').removeClass('click');
        $('.btn_hover3').removeClass('click');
        $('.btn_hover2').removeClass('click');
        $('.btn_hover5').removeClass('click');
        $('.btn_hover6').removeClass('click');
    });
    $('.btn_hover5').click(function(){
        $(this).addClass('click');
        $('.btn_hover1').removeClass('click');
        $('.btn_hover3').removeClass('click');
        $('.btn_hover4').removeClass('click');
        $('.btn_hover2').removeClass('click');
        $('.btn_hover6').removeClass('click');
    });
    $('.btn_hover6').click(function(){
        $(this).addClass('click');
        $('.btn_hover1').removeClass('click');
        $('.btn_hover3').removeClass('click');
        $('.btn_hover4').removeClass('click');
        $('.btn_hover2').removeClass('click');
        $('.btn_hover5').removeClass('click');
    });
})
$(function(){
    $('.btn_hover1').click(function(){
        $('main').children().fadeIn(500)
    })
    $('.btn_hover2').click(function(){
        $('#garden-cont').fadeIn(500)
        $('main > #garden-cont').siblings().fadeOut(500)
    })
    $('.btn_hover3').click(function(){
        $('#hotel-cont').fadeIn(500)
        $('main > #hotel-cont').siblings().fadeOut(500)
    })
    $('.btn_hover4').click(function(){
        $('#interi-cont').fadeIn(500)
        $('main > #interi-cont').siblings().fadeOut(500)
    })
    $('.btn_hover5').click(function(){
        $('#retail-cont').fadeIn(500)
        $('main > #retail-cont').siblings().fadeOut(500)
    })
    $('.btn_hover6').click(function(){
        $('#yatch-cont').fadeIn(500)
        $('main > #yatch-cont').siblings().fadeOut(500)
    })
})

// $(function(){
//     $('input:text').focus('click',function(){
//         $('.popup').css({'height':'250px'})
//     })
//     $('input:text').blur(function(){
//         $('.popup').css({'height':'0%'});
//     })
// })

$(function(){
    if (matchMedia('screen and (min-width:699px)').matches){}

})

$(function(){
    $('input:text').mousedown('click',function(){
        $('.popup').css({'height':'350px'})
        // $('.popup').slideDown('slow')
        $('.category').css({display:'flex'})

        // 한 번 만들어보는 것
        // $('.btn_box').css({height:'0%'})
    })
    $('.category').css({display:'none'})
    $('.search_box').mouseleave(function(){
        // $('.popup').slideUp('slow')
        $('.popup').css({'height':'0%'});
        $('.category').fadeOut()
    })
})

$(function(){
    function left(){
        $('.slide_img li:last').prependTo('.slide_img');
        $('.slide_img').css({marginLeft:'-100vw'});
        $('.slide_img').stop().animate({marginLeft:0}, 1000);
        // 이전으로 가는 버튼은 문장의 배치가 중요하다 배치가 얽히면 copy가 되지 않아 제대로 작동을 안 함
    }
    function right(){
        $('.slide_img').stop().animate({marginLeft:'-100vw'}, 1000,function(){
            $('.slide_img li:first').appendTo('.slide_img');
            $('.slide_img').css({marginLeft:0});
        });
    }
    function slide(){
        $('.slide_img').stop().animate({marginLeft:'-100vw'}, 1000,function(){
            $('.slide_img li:first').appendTo('.slide_img');
            $('.slide_img').css({marginLeft:0});
        });
    }
    
    setInterval(slide, 5000);
    $('.left').click(function(){
        left();
        });
    $('.right').click(function(){
        right();
        });
})

$(function(){
    $('.img_container > div > h5').click(function(){
        $('.hide_box').slideToggle(800)
    })
})

// $(function(){
//     $('.img_container div').hover(function(){
//         $('.img_container h3').css({display:'block'})
//     },function(){
//         $('.img_container h3').css({display:'none'})
//     })
// })
// $(function(){
//     $('.img_container div').hover(function(){
//         $('.')
//     },function(){

//     })
// })

$(function(){
    $('.img_container > div').hover(function(){
        $(this).find('h3').css({display:''})
        $(this).find('h3').fadeIn('slow')
        $(this).find('h3').addClass('drop')
        // $(this).find('h5').css({display:''})
        // $(this).find('h5').fadeIn('slow')
        // $(this).find('h5').addClass('drop2')
        // $('.img_container > div > h3').css({top:'50%',left:'50%','transForm':'translate(-50%,-50%)'})
        // $('.img_container > div > h3').animate({marginTop:'50%'})
        // $('.img_container > div > h3').animate({top:'50%',left:'50%'},500)
    },function(){
        $('.img_container h3,.img_container h5').css({display:'none'})
    })
})

// $(function(){
    // $('button').click(function(){
        // $('h1').offset({top:1500,left:500})
        // var offset = $('h1').offset()
        // $('html').animate({scrollLeft:offset.left,scrollTop:offset.top},800)
        // (두가지 방향)우,하로 부드럽게 이동할 시에는 animate 안에 두가지 속성을 같이 넣는다.
        // $('html').animate({scrollTop:offset.top},800)
    // })
// })
// 위의 예시는 화면 이동


        // $('.img_container > div > h3').css({marginTop:'-20px'});
// var offset = $('.img_container > div > h3').offset({top:'-20%'});
// $('.img_container > div > h3').animate({scrollTop:offset.top});



// 밑 fix 잠시 보류

if(matchMedia('screen and (min-width:699px)').matches){
    $(window).scroll(
        function(){
            if($(window).scrollTop() > 1050){
                $('.header').addClass('fix')
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





