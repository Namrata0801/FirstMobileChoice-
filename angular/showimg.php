<?php
require "connection.php";



$sql = "select * from upload";

$result = $con->query($sql);

$outp = $con->query($sql);

$outp = array();

$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);

mysqli_close($con);



?>