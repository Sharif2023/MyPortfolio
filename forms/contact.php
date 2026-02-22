<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../assets/vendor/PHPMailer/src/Exception.php';
require '../assets/vendor/PHPMailer/src/PHPMailer.php';
require '../assets/vendor/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = strip_tags(trim($_POST["name"]));
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = strip_tags(trim($_POST["message"]));

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo "Please fill in all fields.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'sharifislam0505@gmail.com';
        $mail->Password   = 'jmaf yvxz tash ubaq';   
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('sharifislam0505@gmail.com', 'Shariful Islam Portfolio');
        $mail->addAddress('sharifislam0505@gmail.com', 'Shariful Islam');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(false);
        $mail->Subject = "Portfolio Contact Form: $subject";
        $mail->Body    = "You have a new message from your portfolio website:\n\n" .
                         "Name: $name\n" .
                         "Email: $email\n\n" .
                         "Message:\n$message";

        $mail->send();
        http_response_code(200);
        echo "Your message has been sent successfully!";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Sorry, the email could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(403);
    echo "Invalid request.";
}
