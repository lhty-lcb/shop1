<?php
require('./model/_connect.php');
        //获取前端的参数
        $id = $_REQUEST['id'];//商品id
        $name = $_REQUEST['name'];//商品name
        $img = $_REQUEST['img'];//商品img
        $price = $_REQUEST['price'];//商品price
        $guige = $_REQUEST['guige'];//商品guige
        $num = $_REQUEST['num'];//商品num
        $cb = $_REQUEST['callback'];//商品num

        //根据前端参数插入数据
        $sql = "SELECT * FROM `cart` WHERE `product_id`=$id";
        $res = mysqli_query($conn, $sql);
        $rows = mysqli_num_rows($res);
        if ($rows > 0) {
            $row = mysqli_fetch_assoc($res);
            $num = $row['product_num'] + 1;
            $sql = "UPDATE `cart` SET `product_num`=$num WHERE `product_id`=$id";
        } else {
            $sql = "INSERT INTO `cart`(product_id,product_name,product_img,product_price,product_num,product_guige) VALUES ('$id','$name','$img','$price','$num','$guige')";

        }
        $res = mysqli_query($conn, $sql);
        if ($res) {
            $json = json_encode(array("code"=> 1));
            echo "$cb($json)";
        } else {
            $json = json_encode(array("code"=> 0));
            echo "$cb($json)";
        }
?>