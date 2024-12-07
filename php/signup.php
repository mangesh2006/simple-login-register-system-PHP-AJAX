<?php
$username = "root";
$password = "";
$hostname = "localhost";
$database = "user";

$conn = mysqli_connect($hostname, $username, $password, $database) or die("Connection Failed");
$input = file_get_contents("php://input");
$decode = json_decode($input, true);

$name = $decode['name'];
$user = $decode['username'];
$pass = $decode['pass'];
$email = $decode['email'];
$hash = password_hash($pass, PASSWORD_DEFAULT);
echo $hash;

$sql = "Insert into users values('$name', '$user', '$hash', '$email')";
$result = mysqli_query($conn, $sql);

if ($result) {
    echo json_encode(array("signup" => "success"));
} else {
    echo json_encode(array("signup" => "error"));
}
