<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include 'db_conn.php';

$sql = "SELECT ID, Name, Description, Price FROM Burgers";
$result = $conn->query($sql);

$burgers = [];

while($row = $result->fetch_assoc()) {
    $burgers[] = $row;
}

echo json_encode($burgers);

$conn->close();
?>