<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['questText'];

    $to = "Email";

    $subject = "=?utf-8?B?".base64_encode("Вопрос по корму")."?=";
    $headers ="From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $feedback = "Имя: " . $name;
    $feedback .= "<br>Эл. почта: ". $email;
    $feedback .= "<br>Вопрос: " . $message;

    $success = mail($to, $subject, $feedback, $headers);

    header("Location: ../index.html");
    
?>