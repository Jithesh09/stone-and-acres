<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;



if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    //http_response_code(405);
    //exit('Use POST Method');
}

// 2) HTTPS check
if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
    http_response_code(403);
    exit('Use HTTPS Only');
}


if($_POST['name'] != ""){
    $name    = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $city = filter_var($_POST['city'], FILTER_SANITIZE_STRING);
    $carName = filter_var($_POST['car'], FILTER_SANITIZE_STRING);
    $portfolio = filter_var($data['portfolio'], FILTER_SANITIZE_STRING);
}else{
    $data = json_decode(file_get_contents("php://input"), true);
    $name    = filter_var($data['name'], FILTER_SANITIZE_STRING);
    $email   = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($data['phone'], FILTER_SANITIZE_STRING);
    $city = filter_var($data['city'], FILTER_SANITIZE_STRING);
    $carName = filter_var($data['car'], FILTER_SANITIZE_STRING);
    $portfolio = filter_var($data['portfolio'], FILTER_SANITIZE_STRING);
}


// 3) Basic validation
if (empty($name) || empty($email) || empty($phone) || empty($city) || empty($carName) || empty($portfolio) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Invalid Input');
}


// 4) Send email using PHPMailer with Gmail SMTP
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'care@insuron.in';       // Your Gmail address
    $mail->Password   = 'qisi akbz heep xrjv';          // Gmail App Password (2FA enabled)
    $mail->SMTPSecure = 'tls';                        // Use TLS
    $mail->Port       = 587;

    //Recipients
    $mail->setFrom('care@insuron.in', 'Insuron');
    $mail->addAddress('care@insuron.in', 'Insuron');
    $mail->addReplyTo('care@insuron.in', 'Insuron');
    $mail->addCC('akshaya@atwias.in');
    $mail->addCC('akshaya@atwias.in');
    //$mail->addCC('gopiwithyou@gmail.com');
 

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission'. ' from ' . $name . ' - ' . $phone . ' - ' . $email;
    $mail->Body    = '<b>New Registration for Insuron Webinar</b>.<br><br>'
                   . '<b>Name: </b> ' . htmlspecialchars($name) . '<br><br>'
                   . '<b>Email: </b> ' . htmlspecialchars($email) . '<br><br>'
                   . '<b>Car: </b> ' . htmlspecialchars($carName) . '<br><br>'
                   . '<b>Phone: </b> ' . htmlspecialchars($phone) . '<br><br>'
                   . '<b>Portfolio: </b> ' . htmlspecialchars($portfolio) . '<br><br>'
                   . '<b>city: </b> ' . htmlspecialchars($city) . '<br><br>';

    $mail->send();
    echo 'Email has been sent successfully!';
} catch (Exception $e) {
    echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

