<?php 
// echo "I am message sent from php file" ;  /* Testing */

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if (!empty($email) && !empty($message)) {
   if (filter_var($email , FILTER_VALIDATE_EMAIL)) {
      $receiver = "hassan.elshiat@gmail.com" ;
      $subject = "From : $name <$email>" ;
      $body = "Name : $name \n Email : $email \n Phone : $phone \n 
      Website : $website \n\n Message : $message \n\n Regards , \n $name " ;
      $sender = "From : $email" ;
      if (mail($receiver , $subject , $body , $sender)) {
         echo "Your message has been sent" ;
      }else{
         echo "Failed to send this message" ;
      }
   }else {
      echo "Please enter a valid email address" ;
   }
}else{
   echo "Email and password fields are required!" ;
}
?>