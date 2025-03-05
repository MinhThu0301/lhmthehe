function login()
{
  let a = username.value
  let b = password.value
  if (a == "abc" && b == "123")
  {
    window.open("Home.html");
    document.getElememtById("compiler").style.display="block";
  }
  else
    document.write("không hợp lệ")
}
