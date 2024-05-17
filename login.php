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
    $li_username = $_POST["li_username"];
    $li_password = $_POST["li_password"];

    $sql = "SELECT * FROM users WHERE username='$li_username' AND password='$li_password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        header("Location: index.html");
        exit();
    } else {
        echo "Invalid username or password.";
    }
}

$conn->close();
?>
