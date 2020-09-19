<?php

require "connection.php";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$Name=$request->name;
$UserName=$request->username;
$Email=$request->email;
$Mobile=$request->mobileno;
$Password=$request->password;


$sql="insert into login (name,  username,  email, mobileno,  password)
values('$Name','$UserName', '$Email','$Mobile', '$Password')";
if(mysqli_query($con, $sql))
{
	echo json_encode("new user created");
}

?>