$(document).ready(function() {
    $('.designContent').hide();
    $('.devContent').hide();
    $('.productContent').hide();

    $('.text1').hide();
    $('.img1').animate({
        opacity: 1
    });
    
    $('.img1').hover (function(){
        $(this).stop().animate({opacity:.4},200);
        $('.text1').fadeIn();

    }, function(){
        $(this).stop().animate({opacity:1},500)
        $('.text1').fadeOut();
    
    });

    $('.text2').hide();
    $('.img2').animate({
        opacity:1
    });
    $('.img2').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.text2').fadeIn();
        
    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text2').fadeOut();
    });
});

    $('.text3').hide();
    $('.img3').animate({
        opacity:1
    });
    $('.img3').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.text3').fadeIn();
        
    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text3').fadeOut();
    });


$('.text4').hide();
    $('.img4').animate({
        opacity:1
    });
    $('.img4').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.text4').fadeIn();
        
    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text4').fadeOut();
    });

$('.text5').hide();
    $('.img5').animate({
        opacity:1
    });
    $('.img5').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.text5').fadeIn();
        
    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text5').fadeOut();
    });


$('.text6').hide();
    $('.img6').animate({
        opacity:1
    });
    $('.img6').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.text6').fadeIn();
        
    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text6').fadeOut();
    
});
$('.text7').hide();
    $('.img7').animate({
        opacity:1
    });
    $('.img7').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.text7').fadeIn();
        
    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text7').fadeOut();
    
});
$('.text8').hide();
    $('.img8').animate({
        opacity:1
    });
    $('.img8').hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.text8').fadeIn();
        
    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text8').fadeOut();

});

$('#design').click(function(){
    $('.designContent').show();
    $('#design').hide();
});
$('#development').click(function(){
    $('.devContent').show();
    $('#development').hide();
});
$('#product').click(function(){
    $('.productContent').show();
    $('#product').hide();
});

$('#productContent').click(function(){
    $('.productContent').hide();
    $('#product').show();
});
$('#devContent').click(function(){
    $('.devContent').hide();
    $('#development').show();
});
$('#designContent').click(function(){
    $('.designContent').hide();
    $('#design').show();
});

$('#form1').submit(function(e){
    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    if (name== " " || email == " "){
        alert("Please enter a name and a valid email address to continue.");
        return false;
        }else {
        alert("Hello " + name + "\n we have received your message. Thank you for reaching out")
        }
});