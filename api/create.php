<?php
header('Access-Control-Allow-Origin: http://localhost:3000'); // Allowing front-end to access
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');
include 'db_conn.php';

$data = json_decode(file_get_contents("php://input"));

$name = $data->Name;
$description = $data->Description;
$price = $data->Price;

//SQL Statement to insert new Burger into database
$sql = "INSERT INTO Burgers (Name, Description, Price) VALUES ('$name', '$description', '$price')";

if ($conn->query($sql) === TRUE) {
    echo "New Burger Created Successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
