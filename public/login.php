<?php
//put in htdocs
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'cackledb', 'cackledb', 'cackledb');

// check records for
$emailAddress = $_POST['email'];
$userPassword = $_POST['password'];

try {

    $stmt = $con->prepare("SELECT * FROM Users WHERE EmailAddress ='$emailAddress' and Password='$userPassword'");
    $result = $stmt->execute();


    if (!$result){
        console.log("Incorrect Password Entered");
        $attempts = $attempts + 1;
    } else {
        header("Location: profile.html");
    }
} catch(PDOException $e) {

     echo 'ERROR: ' . $e->getMessage();

     }
$con->close();
?>