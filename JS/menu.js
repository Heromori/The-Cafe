{
  document.documentElement.style.scrollBehavior = "smooth";


}

document.getElementById("reponseOui").style.display = "none"
document.getElementById("reponseNon").style.display = "none"




//  console.log(Client);



/*   anniv()

  function anniv(){


    x = (new Date() - new Date(birthday))/1000/60/60/24/7/52;

    console.log(x);

    if (x > 13) {
      document.getElementById("reponseOui").style.display = "block";
      document.getElementById("reponseNon").style.display = "none";
    } else {
      document.getElementById("reponseNon").style.display = "block";
      document.getElementById("reponseOui").style.display = "none";
    }



  }
*/


document.getElementById("eat").onclick = menu;

function menu() {
  document.getElementById("eat").style.backgroundColor = "grey";
  document.getElementById("eat").style.color = "white";
  document.getElementById("drink").style.backgroundColor = "white";
  document.getElementById("drink").style.color = "black";

  document.getElementById("drink2").style.display = "none";
  document.getElementById("eat2").style.display = "block";
}


document.getElementById("drink").onclick = menu2;

function menu2() {
  document.getElementById("drink").style.backgroundColor = "grey";
  document.getElementById("drink").style.color = "white";
  document.getElementById("eat").style.backgroundColor = "white";
  document.getElementById("eat").style.color = "black";

  document.getElementById("eat2").style.display = "none";
  document.getElementById("drink2").style.display = "block";
}



/* var timer = 10

if (timer > 0) {

setInterval(myTimer, 1000);

} else {
  clearInterval(myTimer)
}

function myTimer() {
  (timer--);
  document.getElementById("time").innerHTML = "Attention vous avez " + timer + " secs pour le faire !";
  console.log(timer);
  if (timer === 0) {
    alert ("trop tard");
    document.getElementById("time").style.display = "none";
  }
} */
