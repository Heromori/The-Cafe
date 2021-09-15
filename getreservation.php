<?php
$mysqli = new mysqli("localhost", "root", "", "cafe", 3306);
if($mysqli->connect_error) {
  exit('Could not connect');
}


$sql = "SELECT * FROM reservation";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {

    echo "nom: " . $row["name"]. " - nombre de réservation: " . $row["people"]. " date: " . $row["date"] . " message: " . $row["message"] . "<br>";
  }
} else {
  echo "0 results";
}
$mysqli->close();

/*
$sql = "SELECT name, people, date, message
FROM reservation";

$stmt = $mysqli->prepare($sql);

$stmt->execute();
$stmt->store_result();
$stmt->bind_result($name, $nb, $date, $message);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>nom</th>";
echo "<td>" . $name . "</td>";
echo "<th>nombre</th>";
echo "<td>" . $nb . "</td>";
echo "<th>date</th>";
echo "<td>" . $date . "</td>";
echo "<th>message</th>";
echo "<td>" . $message . "</td>";
echo "</tr>";
echo "</table>";
*/


?>
