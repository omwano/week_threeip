//business functionality

$(document).ready(function () {

    //what we do 
    $('#design').click(function () {
        $('#designContent').show(function () {
            $('#design').hide('fast');
        });
    });
    $('#designContent').click(function () {
        $('#design').show(function () {
            $('#designContent').hide('fast');
        });
    });

    $('#development').click(function () {
        $('#devContent').show(function () {
            $('#development').hide('fast');
        });
    });
    $('#devContent').click(function () {
        $('#development').show(function () {
            $('#devContent').hide('fast');
        });
    });

    $('#product').click(function () {
        $('#prodContent').show(function () {
            $('#product').hide('fast');
        });
    });
    $('#prodContent').click(function () {
        $('#product').show(function () {
            $('#prodContent').hide('fast');
        });
    });


    //portfolio
    /*
    $(".proj1-title").hide();
    $(".proj1").animate({
      opacity: 1
    });
    $(".proj1").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $('.proj1-title').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.proj1-title').fadeOut();
  });
    */
    $('#proj1').mouseenter(function () {
        $('.project_heading').filter('#proj1-title').show("slow");
    }).mouseleave(function () {
        $('#proj1-title').hide("slow");
    });

    $('#proj2').mouseenter(function () {
        $('.project_heading').filter('#proj2-title').show("slow");
    }).mouseleave(function () {
        $('#proj2-title').hide("slow");
    });

    $('#proj3').mouseenter(function () {
        $('.project_heading').filter('#proj3-title').show("slow");
    }).mouseleave(function () {
        $('#proj3-title').hide("slow");
    });


    $('#proj4').mouseenter(function () {
        $('.project_heading').filter('#proj4-title').show("slow");
    }).mouseleave(function () {
        $('#proj4-title').hide("slow");
    });

    $('#proj5').mouseenter(function () {
        $('.project_heading').filter('#proj5-title').show("slow");
    }).mouseleave(function () {
        $('#proj5-title').hide("slow");
    });


    $('#proj6').mouseenter(function () {
        $('.project_heading').filter('#proj6-title').show("slow");
    }).mouseleave(function () {
        $('#proj6-title').hide("slow");
    });

    $('#proj7').mouseenter(function () {
        $('.project_heading').filter('#proj7-title').show("slow");
    }).mouseleave(function () {
        $('#proj7-title').hide("slow");
    });
    $('#proj8').mouseenter(function () {
        $('.project_heading').filter('#proj8-title').show("slow");
    }).mouseleave(function () {
        $('#proj8-title').hide("slow");
    });
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