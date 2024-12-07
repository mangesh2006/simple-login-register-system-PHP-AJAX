<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
    </style>
</head>

<body>
    <?php
    session_start();
    echo "<h1>";
    echo "Welcome! ";
    echo $_SESSION['user'];
    echo "</h1>";
    ?>
    <p><a href="../php/logout.php"> Log Out</a></p>
</body>

</html>
