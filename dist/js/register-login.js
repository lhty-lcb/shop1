"use strict";$(function(){$("#reg-btn").click(function(){var e=$("#phone").val(),a=$("#check").val(),s=$("#set-pass").val();e?a?s?$("#agree").attr("check")&&"false"!=$("#agree").attr("check")?t(e,a,s):alert("请先勾选同意协议"):(alert("请设置密码"),$("#set-pass").focus()):(alert("请填写验证码"),$("#check").focus()):(alert("请填写电话号码"),$("#phone").focus())}),$("#login-btn").click(function(){var e=$("#username").val(),a=$("#userpass").val();e?a?s(e,a):(alert("请输入密码"),$("#userpass").focus()):(alert("请输入用户名"),$("#username").focus())});var t=function(a,e,s){var t="?phone="+a+"&check="+e+"&setPass="+s;$.ajax({url:"http://localhost/shop7.4/shop1/dist/interface/adduser.php"+t,dataType:"jsonp",success:function(e){alert("注册成功"),setCookie("username",a),location.reload()}})},s=function(e,a){var s="?username="+e+"&userpass="+a;$.ajax({url:"http://localhost/shop7.4/shop1/dist/interface/search_user.php"+s,dataType:"jsonp",success:function(e){1==e.code?(setCookie("username",e.data[0].username),alert("登录成功"),location.reload()):alert("账号或密码错误")}})}});