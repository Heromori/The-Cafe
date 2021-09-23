function meteo() {
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  document.getElementById("meteo").innerHTML = this.responseText;
}
xhttp.open("GET", "meteo.php?q=");
xhttp.send();
console.log("c bon ?");
}

meteo();