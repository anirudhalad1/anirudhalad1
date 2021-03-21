<?php
session_start();
 
$captcha = md5($_POST['captcha']);

if($captcha != $_SESSION['randomnr2'])
{
	echo "inValid";
}
else
{
	echo "Valid";
	
$name="";
$email="";
$subject="";
$message="";

$name=$_POST["name"];
$email=$_POST["email"];
$subject="Got Email from ".$name." with Subject ".$_POST["subject"];
$message=$_POST["message"]." Email:".$email;


// the message
$msg = $message;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail('anirudhalad99@gmail.com',$subject,$msg);
}
?>