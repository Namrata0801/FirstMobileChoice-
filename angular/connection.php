<?php
// header('Access-Control-Allow-Origin:*');
// header("Content-Type: application/json;charset=UTF-8");
// header("Access-Control-Allow-Methods: PUT,GET,Post");
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST',"localhost:3307");
define('DB_USER',"root");
define('DB_PASS',"");
define('DB_NAME',"mobile");




	$con= mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
	
	
	

?>
