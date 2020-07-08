<?php
require('./model/_connect.php');
$cb=$_REQUEST['callback'];

//书写sql语句
$sql = "SELECT * FROM cart";

//执行sql语句
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){	
	$arr = mysqli_fetch_all($result,MYSQL_ASSOC);
	$json=json_encode(array("code"=>1,"data"=>$arr));
	echo "$cb($json)";
}else{	
	$json=json_encode(array("code"=>0));
	echo "$cb($json)";
}


?>