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

try {

    $result = mysqli_query($con, "SELECT * FROM Users WHERE EmailAddress ='$emailAddress' or MobileNumber='$mobileNumber'");


    if (mysqli_num_rows($result)==0){
        // database insert SQL code
        $sql = "INSERT INTO Users (FullName, MobileNumber, EmailAddress, Password) VALUES ('$fullName', '$mobileNumber', '$emailAddress', '$userPassword')";

        // insert in database
        if ($con->query($sql) === TRUE) {
          echo "New record created successfully";
          echo $sql;
          header("Location: interests.html");
        } else {
          echo "Error: " . $sql . "<br>" . $con->error;
        }
    } else {
        echo '<script>alert("User Exists")</script>';
    }
} catch(PDOException $e) {
     echo 'ERROR: ' . $e->getMessage();
}

$con->close();

?>

<script>
window.location.href="register.html"
</script>