<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signup_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $su_username = $_POST["su_username"];
    $su_email = $_POST["su_email"];
    $su_password = $_POST["su_password"];

    $sql = "INSERT INTO users (username, email, password) VALUES ('$su_username', '$su_email', '$su_password')";

    if ($conn->query($sql) === TRUE) {
        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
