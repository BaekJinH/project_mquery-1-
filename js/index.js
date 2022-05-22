$(document).ready(function(){
    $('.main4_img1').hover(function(){
        $('.icon1').fadeIn();
        $('.icon2').hide();
        $('.icon3').hide();
        $('.icon4').hide();
    })
    $('.main4_img2').hover(function(){
        $('.icon2').fadeIn();
        $('.icon1').hide();
        $('.icon3').hide();
        $('.icon4').hide();
    })
    $('.main4_img3').hover(function(){
        $('.icon3').fadeIn();
        $('.icon2').hide();
        $('.icon1').hide();
        $('.icon4').hide();
    })
    $('.main4_img4').hover(function(){
        $('.icon4').fadeIn();
        $('.icon2').hide();
        $('.icon3').hide();
        $('.icon1').hide();
    })
})






$(function(){
    $('.menu').click(function(){
        $('.slide_menu').slideToggle()
    })
})

function open_menu(){
    document.getElementsByClassName('slide_menu')[0].style.width='100%';
}

function close_menu(){
    document.getElementsByClassName('slide_menu')[0].style.width='0%';
}