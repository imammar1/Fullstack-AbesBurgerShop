<?php
$servername = "localhost";
$username = "root";
$password = "";  // Default password for XAMPP is empty.
$dbname = "burgerdb";

// Connection to database
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>