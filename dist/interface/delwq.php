<?php
require('./model/_connect.php');
$id = $_REQUEST['id'];
$cb=$_REQUEST['callback'];
//根据id删除数据
$sql = "DELETE FROM `cart` WHERE `product_id`=$id";
$result = mysqli_query($conn,$sql);

if ($result) {
	$json = json_encode(array("code"=> 1));
	echo "$cb($json)";
} else {
	$json = json_encode(array("code"=> 0));
	echo "$cb($json)";
}

?>