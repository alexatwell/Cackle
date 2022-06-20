<?php
//put in htdocs
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'cackledb', 'cackledb', 'cackledb');

// get the post records
$fullName = $_POST['name'];
$emailAddress = $_POST['email'];
$mobileNumber = $_POST['mobile'];
$userPassword = $_POST['password'];

echo $fullName;

// database insert SQL code
$sql = "INSERT INTO Users (FullName, MobileNumber, EmailAddress, Password) VALUES ('$fullName', '$mobileNumber', '$emailAddress', '$userPassword')";

// insert in database
if ($con->query($sql) === TRUE) {
  echo "New record created successfully";
  echo $sql;
} else {
  echo "Error: " . $sql . "<br>" . $con->error;
}
$con->close();

header("Location: interests.html");

?>