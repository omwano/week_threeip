

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