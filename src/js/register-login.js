$(function () {
    // 点击注册按钮注册
    $('#reg-btn').click(function () {
        var phone = $('#phone').val();
        var check = $('#check').val();
        var setPass = $('#set-pass').val();
        if (!phone) {
            alert('请填写电话号码');
            $('#phone').focus();
        } else {
            if (!check) {
                alert('请填写验证码');
                $('#check').focus();
            } else {
                if (!setPass) {
                    alert('请设置密码');
                    $('#set-pass').focus();
                } else {
                    if (!$('#agree').attr('check') || $('#agree').attr('check') == 'false') {
                        alert('请先勾选同意协议');
                    } else {
                        register(phone, check, setPass);
                    }
                }
            }
        }
    })

    $('#login-btn').click(function () {
        var username = $('#username').val();
        var userpass = $('#userpass').val();
        if (username) {
            if (userpass) {
                login(username, userpass);
            } else {
                alert('请输入密码');
                $('#userpass').focus();
            }
        } else {
            alert('请输入用户名');
            $('#username').focus();
        }
    })

    // 注册功能
    var register = function (phone, check, setPass) {
        var url = 'http://localhost/shop7.4/shop1/dist/interface/adduser.php';
        var msg = '?phone=' + phone + '&check=' + check + '&setPass=' + setPass;
        $.ajax({
            url: url + msg,
            dataType: 'jsonp',
            success: function (data) {
                alert('注册成功');
                setCookie('username', phone);
                location.reload();
            }
        })
    }
    // 登录功能
    var login = function (username, userpass) {
        var url = 'http://localhost/shop7.4/shop1/dist/interface/search_user.php';
        var msg = '?username=' + username + '&userpass=' + userpass;
        $.ajax({
            url:url+msg,
            dataType:'jsonp',
            success:function(data){
                if(data.code==1){
                    setCookie('username',data.data[0].username);
                    alert('登录成功');
                    location.reload();
                }else{
                    alert('账号或密码错误');
                }
            }
        })
    }
})