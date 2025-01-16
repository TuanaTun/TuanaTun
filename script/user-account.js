document.getElementById("save").addEventListener("click", function(){
    var user_name = document.getElementById("name").value;
    var user_email = document.getElementById("mail").value;
    var user_phone = document.getElementById("phone").value;
    var user_gender = document.getElementById("gender").value;
    // document.getElementById("name").innerHTML = user_name;
    // document.getElementById("email").innerHTML = user_email;
    console.log(user_name,user_email, user_phone, user_gender);
    
  });