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
$(document).ready(function(){
$("#proj1").mouseover(function(){
    $("#proj1-title").show();
    }).mouseout(function(){
      $("#proj1-title").hide();
    });
  });

$(document).ready(function(){
    $("#proj2").mouseover(function(){
      $("#proj2-title").show();
    }).mouseout(function(){
      $("#proj2-title").hide();
    });
  });

$(document).ready(function(){
    $("#proj3").mouseover(function(){
      $("#proj3-title").show();
    }).mouseout(function(){
      $("#proj3-title").hide();
    });
  });

$(document).ready(function(){
    $("#proj4").mouseover(function(){
      $("#proj4-title").show();
    }).mouseout(function(){
    $("#proj4-title").hide();
    });
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