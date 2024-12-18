<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data formulir
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email penerima
    $to = "youremail@example.com"; // Ganti dengan email Anda

    // Judul email
    $subject = "Contact Form: " . $subject;

    // Pesan email
    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n\n";
    $body .= "Message:\n" . $message;

    // Header email
    $headers = "From: " . $email;

    // Kirim email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent. Thank you!";
    } else {
        echo "There was a problem sending your message. Please try again.";
    }
}
?>
