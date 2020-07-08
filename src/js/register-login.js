// 注册功能
var register = function (phone,check,setPass) {
    console.log(phone,check,setPass);
    var url='http://localhost/shop7.4/shop1/dist/interface/adduser.php';
    var msg='?phone='+phone+'&check='+check+'&setPass='+setPass;
    $.ajax({
        url:url+msg,
        dataType:'jsonp',
        success:function(data){
            alert('注册成功');
            setCookie('username',phone);
            location.reload();
        }
    })
}
// 登录功能
var login = function () {

}

