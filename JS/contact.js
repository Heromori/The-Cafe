document.getElementById("button").onclick = bouton;


//let i = 0;

//let x = 0;

var Client = [];

function bouton(){
// i = i + 1;
//  console.log(i);
//  console.log(document.getElementById("nom").value)
//  console.log(document.getElementById("people").value)
//  console.log(document.getElementById("date").value)
//  console.log(document.getElementById("message").value)


  nom = document.getElementById("nom").value,
  people = document.getElementById("people").value,
  date = document.getElementById("date").value,
  time = document.getElementById("time").value,
  message = document.getElementById("message").value,
//  birthday = document.getElementById("birthday").value,


  Client = [
    nom,
    people,
    date,
    time,
//    birthday,
    message,
]

document.cookie = `form=${Client}`;
}
