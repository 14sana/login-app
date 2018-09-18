$(document).ready(function () {
    $("#login").on('click', function () {
      var user = $('#username').val();
      var pass = $('#password').val();
      if (user != "" || pass != "") {
      
      
   
        $.ajax({
          type: "POST",
          url: "https://httpbin.org/anything",

          data: { username: $('#username').val(), password: $('#password').val() },

          success: function (rs, textStatus, xhr) {
            if (xhr.status == 200)

              window.location.href = "http://localhost:8000/welcome.html";
            else
              alert("User not found");

          },
          fail: function (xhr) {
            alert(xhr.status);
          }
        });
      }
      else{alert("username or password is NULL")}
    });
  });