<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$email_from = 'umarali1@alumni.ubc.ca';

$email_subject = "New Form Submission";

$email_body = "User Name: $name.\n".
"User Email: $email.\n".
"User Message: $message.\n";


$to = "umaru.alia@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply To: $visitor_email \r\n";

mail($to,email_subject,$email_body,$headers);

header("Location: Website Name");



?>