function login ()
  {
    let a = document.getElementById("username").value;
    let b = document.getElementById("password").value;

    if ( a == "abc" && b == "1234" )
    {
      window.location.href = "home.html";
     document.getElementById("compiler").style.display = "block";
    }
   document.getElementById("error-message").innerText = "Không hợp lệ";
  } 
