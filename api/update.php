<?php
header('Access-Control-Allow-Origin: http://localhost:3000'); // Allowing front-end to access
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');
include 'db_conn.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->ID;
$name = $data->Name;
$description = $data->Description;
$price = $data->Price;

// Accessing database to update existing Burger
$sql = "UPDATE Burgers SET Name='$name', Description='$description', Price='$price' WHERE ID=$id";

if ($conn->query($sql) === TRUE) {
    echo "Burger Updated Successfully!";
} else {
    echo "Error Updating Burger: " . $conn->error;
}

$conn->close();
?>