<?php
$username = "root";
$password = "";
$hostname = "localhost";
$database = "user";

$conn = mysqli_connect($hostname, $username, $password, $database) or die("Connection Failed");
$input = file_get_contents("php://input");
$decode = json_decode($input, true);

$user = $decode['user'];
$pass = $decode['pass'];

$sql = "Select * from users where username = '$user'";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    if (password_verify($pass, $row['password'])) {
        session_start();
        $_SESSION['user'] = $user;
        echo json_encode(array("login" => "success"));
    } else {
        echo json_encode(array("login" => "error"));
    }
} else {
    echo json_encode(array("login" => "error"));
}
