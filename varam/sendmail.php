<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;



if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Use POST Method');
}

// 2) HTTPS check
if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
    http_response_code(403);
    exit('Use HTTPS Only');
}


$data = json_decode(file_get_contents("php://input"), true);
$name    = filter_var($data['name'], FILTER_SANITIZE_STRING);
$email   = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var($data['phone'], FILTER_SANITIZE_STRING);
if (empty($name) || empty($email) || empty($phone) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
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
    $mail->Username   = 'contact@stoneandacres.in';       // Your Gmail address
    $mail->Password   = 'tfzg sikf ccks yqav';          // Gmail App Password (2FA enabled)
    $mail->SMTPSecure = 'tls';                        // Use TLS
    $mail->Port       = 587;

    //Recipients
    $mail->setFrom('contact@stoneandacres.in', 'VARAM - Stone and Acres');
    $mail->addAddress('contact@stoneandacres.in', 'Varam');
    $mail->addReplyTo('contact@stoneandacres.in', 'Varam');
    $mail->addCC('akshaya@atwias.in');
    $mail->addCC('isai@atwias.in');
 

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission'. ' from ' . $name . ' - ' . $phone . ' - ' . $email;
    $mail->Body    = '<b>New Conatact Form Submission from VARAM</b>.<br><br>'
                   . '<b>Name:</b> ' . htmlspecialchars($name) . '<br>'
                   . '<b>Email:</b> ' . htmlspecialchars($email) . '<br>'
                   . '<b>Phone:</b> ' . htmlspecialchars($phone) . '<br>';

    $mail->send();
    echo 'Email has been sent successfully!';
} catch (Exception $e) {
    echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
