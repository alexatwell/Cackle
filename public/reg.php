<?php
//put in htdocs
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'cackledb', 'cackledb','cackledb');

// get the post records
$fullName = $_POST['name'];
$emailAddress = $_POST['email'];
$mobileNumber = $_POST['mobile'];
$homeAddress = $_POST['address'];
$userPassword = $_POST['password'];

// database insert SQL code
$sql = "INSERT INTO Users VALUES ('$fullName', '$mobileNumber', '$emailAddress', '$homeAddress', '$userPassword')";

// insert in database
if ($con->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $con->error;
}

$con->close();

?>