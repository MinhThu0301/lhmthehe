function login ()
  {
    let a = usernam.value
    let b= password.value
    if ( a == "abc" && b == "123" )
    {
      window.open("home.html")
      document. getElementById(compiler).style.display="block";
    }
    else document.write("Không hợp lệ") 
  } 
