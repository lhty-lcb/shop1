$(function () {
    var div = document.createElement('div');
    div.className = "shadow";
    $(div).css('height', '1686');
    $('body').append(div);
    // 展开购物车
    $('.car').mouseenter(function () {
        $('.nav-car').slideDown('fast');
    })
    // 隐藏购物车
    $('.car').mouseleave(function () {
        $('.nav-car').slideUp('fast');
    })
    // 点击购物车里的登录按钮显示登录框
    $('.btn-warning').click(function () {
        $('.nav-car').css('display', 'none');
        var top = (document.documentElement.clientHeight - 380) / 2;
        var left = (document.documentElement.clientWidth - 352) / 2;
        $('.login').css({ 'display': 'block', 'left': left, 'top': top })
        $('.shadow').css('display', 'block');
    })
    // 当网页的尺寸改变的时候，更改div的位置
    $(window).resize(function () {
        var top = (document.documentElement.clientHeight - 380) / 2;
        var left = (document.documentElement.clientWidth - 352) / 2;
        $('.login').css({ 'left': left, 'top': top })
        $('.register').css({ 'left': left, 'top': top })
    })
    // 点击取消按钮，将所有的东西隐藏
    $('.cancel').click(function () {
        $('.login').css('display', 'none');
        $('.shadow').css('display', 'none');
        $('.register').css('display', 'none');
    })
    // 点击展示注册框
    $('.re').click(function () {
        var top = (document.documentElement.clientHeight - 380) / 2;
        var left = (document.documentElement.clientWidth - 352) / 2;
        $('.login').css('display', 'none');
        $('.register').css('display', 'block');
        $('.register').css({ 'left': left, 'top': top })
        $('.shadow').css('display', 'block');
    })
    // 点击显示登录框
    $('.lg').click(function () {
        var top = (document.documentElement.clientHeight - 380) / 2;
        var left = (document.documentElement.clientWidth - 352) / 2;
        $('.login').css('display', 'block');
        $('.register').css('display', 'none');
        $('.login').css({ 'left': left, 'top': top })
        $('.shadow').css('display', 'block');
    })
    // 点击nav上的登录显示登录框
    $('.nav-login').click(function () {
        $('.lg').trigger('click');
    })
    // 点击nav上的注册显示注册框
    $('.nav-register').click(function () {
        $('.re').trigger('click');
    })

    $('.big-img-box').hover(
        // 鼠标移入
        function () {
            $('.move-span').css('display', 'block');
            $('.show-img-box').css('display', 'block');
            // 鼠标在图片上移动
            $(this).mousemove(function (e) {
                var left = e.pageX - $(this).offset().left;
                var top = e.pageY - $(this).offset().top;
                left -= $('.move-span').width() / 2;
                top -= $('.move-span').height() / 2;
                // 设置左边界
                if (left < 0) {
                    left = 0;
                }
                // 设置右边界
                if (top < 0) {
                    top = 0;
                }
                // 设置下边界
                if (top > ($(this).height() - $('.move-span').height())) {
                    top = $(this).height() - $('.move-span').height();
                }
                // 设置上边界
                if (left > ($(this).width() - $('.move-span').width())) {
                    left = $(this).width() - $('.move-span').width();
                }
                $('.move-span').css({ left: left, top: top });
                $('.show-img').css({ left: -2 * left, top: -2 * top })
            })
        },
        // 鼠标移出
        function () {
            $('.move-span').css('display', 'none');
            $('.show-img-box').css('display', 'none');
        }
    )
    $('.small-img ul li').click(function () {
        var src = '../images/info/' + ($(this).index() + 1) + '-1.jpg';
        $('.big-img').attr('src', src)
        $('.show-img img').attr('src', src)
    })
})
