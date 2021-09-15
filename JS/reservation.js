document.getElementById("button").onclick = reservation

var contact = []

function reservation() {

  nom = document.getElementById("nom").value,
  people = document.getElementById("people").value,
  date = document.getElementById("date").value,
  time = document.getElementById("time").value,
  message = document.getElementById("message").value,

   contact = [nom,people,date,time,message]

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    console.log("ok");
  document.getElementById("txtHint2").innerHTML = this.responseText;
  }
  xhttp.open("GET", "reservation_check.php?q="+contact);
  xhttp.send();
}
