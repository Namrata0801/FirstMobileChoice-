<?php

require "connection.php";

$sql = "select * from login where id=".$_GET['id']." limit 1";

$result = $con->query($sql);

$outp = array();

$outp = $result->fetch_all(MYSQLI_ASSOC);

echo $json = json_encode($outp);

mysqli_close($con);


?>