
let num , temp ;
function check()
{
    num = parseInt(document.getElementById("num").value);
  if(num)
  {
    temp = document.getElementById("resPara");
    temp.style.display = "block";
    if(num%2==0)
      document.getElementById("res").innerHTML = "Even";
    else
      document.getElementById("res").innerHTML = "Odd";
  }
}