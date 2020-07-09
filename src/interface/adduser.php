<?php
require('./model/_connect.php');
        //获取前端的参数
        $name = $_REQUEST['phone'];//用户名
        $check = $_REQUEST['check'];//验证码
        $password = $_REQUEST['setPass'];//密码
        $cb=$_REQUEST['callback'];

        if($check=='1234'){
            //根据前端参数插入数据
            $sql = "SELECT * FROM `user` WHERE `username`=$name";
            $res = mysqli_query($conn, $sql);
            $rows = mysqli_num_rows($res);
            if ($rows > 0) {
                $json = json_encode(array("code"=> 3));
                echo "$cb($json)";
            } else {
                $sql = "INSERT INTO `user`(username,userpwd) VALUES ('$name','$password')";
                $res = mysqli_query($conn, $sql);
                if ($res) {
                    $json = json_encode(array("code"=> 1));
                    echo "$cb($json)";
                } else {
                    $json = json_encode(array("code"=> 0));
                    echo "$cb($json)";
                }
            }
            
        }else{
            $json = json_encode(array("code"=> 2));
            echo "$cb($json)";
        }
        // 错误码
        // 0：失败
        // 1：成功
        // 2：验证码错误
        // 3：账号已存在
?>