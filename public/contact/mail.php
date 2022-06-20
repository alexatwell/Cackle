<?php
    $Submit = isset($_POST['Submit']) ? $_POST['Submit'] : false;
    if($Submit){
        echo bruh;
    }else{
        $email = "floodtechbdos@gmail.com";
        $name = $_POST['name'];
        $email2 = "From: " . $_POST['email'] . "\n\n";
        $subject = $_POST['subject'];
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
            alert("Successful Submission");
            print "Successful Submission";
        }else{
            alert("Unsuccessful Submission");
            print "Unsuccessful Submission";
        }
    }
?>
