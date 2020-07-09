    // 判断是否登录了
    var islogin = false;
    var checkCookie = function () {
        // 判断是否有cookie
        var user = getCookie(document.cookie, 'username');
        if (user) {
            islogin = true;
            $('.nav-register').css('display', 'none');
            $('.nav-login').text('欢迎您，' + user).css('width', '160');
            $('.btn.btn-warning').text('点击进入我的购物车').attr('href', './shop.html').prev().css('display', 'none').prev().css({ 'background': 'url("../images/nav/1.jpg")', 'background-size': '150px 96px' });
            $('.nav-list').click(function () {
                location.href = './shop.html';
            })
        }
    }