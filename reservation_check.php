<?php
$mysqli = new mysqli("localhost", "root", "", "cafe", 3306);
if($mysqli->connect_error) {
  exit('Could not connect');
}

$tableau = explode(",", $_GET['q']);


$nom = $tableau[0];
$nb = $tableau[1];
$date = $tableau[2];
$heure = $tableau[3];
$message = $tableau[4];

$sql = "SELECT SUM(people) AS nb_total FROM reservation GROUP BY date";

$result = $mysqli->prepare($sql);
$result->execute();
$result->store_result();
$result->bind_result($nb_total);
$result->fetch();
$result->close();


    if (($nb_total + $nb) > 30 ) {

      echo "tu ne peux pas réserver pour cette date";

    } else {


      $stmt = $mysqli->prepare('INSERT INTO reservation (name, people, date, time, message) VALUES (?,?,?,?,?)');
      $stmt->bind_Param("sisss", $nom, $nb, $date, $heure, $message);

      $stmt -> execute();

      echo "votre réservation a bien été effectué.";

    }




/*
$stmt = $mysqli->prepare("INSERT INTO reservation (name, people, date, time, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param($tableau[0], $tableau[1], $tableau[2], $tableau[3], $tableau[4]);
*/



/* Antonin

$sql = "INSERT INTO reservation (nom, nb) VALUES ("."'"."$tableau[0]"."'".",$tableau[1])";

var_dump($sql);
var_dump($tableau);


if ($mysqli->query($sql) === TRUE) {
echo "New record created successfully";
} else {
echo "Error: " . $sql . "<br>" . $mysqli->error;
}

$mysqli->close();
*/


?>
