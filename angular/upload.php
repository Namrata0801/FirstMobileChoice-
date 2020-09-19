<?php

require "connection.php";

$target = "uploads/";
$f = basename($_FILES["myFile"]["name"]);
$file = $target.basename($_FILES["myFile"]["name"]);
move_uploaded_file($_FILES["myFile"]["tmp_name"], $file);

$sql="insert into upload(student_mobile,photo)values(".$_POST['mobile'].", '$f')";

if(mysqli_query($con, $sql))
{
    echo json_encode("Data added Succesfully");
}







?>