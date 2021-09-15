

// Get the modal
var modal = document.getElementById("myModal");

var span = document.getElementById("accepte");

var decline = document.getElementById("decline");



span.onclick = function() {
  modal.style.display = "none";
  document.cookie = "consent=yes";
}

decline.onclick = function() {
  modal.style.display = "block";
}



  function getCookie(cname) {
   let name = cname + "=";;
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for(let i = 0; i <ca.length; i++) {
     let c = ca[i];
     while (c.charAt(0) == ' ') {
       c = c.substring(1);
     }
     if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
     }
   }
   return "";
 }

function checkCookie() {
   let consent = getCookie("consent")

 if (consent == "yes") {
   modal.style.display = "none";
 }
}
