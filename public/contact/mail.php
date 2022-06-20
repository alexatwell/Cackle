<?php
    $email = "floodtechbdos@gmail.com";
    $name = $_POST['name'];
    $email2 = "Reply To: " . $_POST['email'] . "\n\n";
    $subject = $name . " : " . $_POST['subject'];
    $message = $email2 . $_POST['message'];

    $url = "https://script.google.com/macros/s/AKfycbxnIYwhsGbFIkV7uTRZprqefDXr0OktaMkNo8wjZy153yJhuYB2rNROZrGHHQf0ycgrZQ/exec";

    $ch = curl_init($url);
    curl_setopt_array($ch, [
       CURLOPT_RETURNTRANSFER => true,
       CURLOPT_FOLLOWLOCATION => true,
       CURLOPT_POSTFIELDS => http_build_query([
          "recipient" => $email,
          "subject"   => $subject,
          "body"      => $message
       ])
    ]);

    $result = curl_exec($ch);

    if($result){
        echo '<script>alert("Successful Submission")</script>';
    }else{
        echo '<script>alert("Unsuccessful Submission")</script>';
    }
?>

<script>
window.location.href="contact.html"
</script>