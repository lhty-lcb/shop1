$(function () {
    // 判断是否登录了
    var islogin = false;
    var checkCookie = function () {
        // 判断是否有cookie
        var user = getCookie(document.cookie, 'username');
        if (user) {
            islogin = true;
            $('.nav-register').css('display', 'none');
            $('.nav-login').text('欢迎您，' + user).css('width','160');
            $('.btn.btn-warning').text('点击进入我的购物车').attr('href', './shop.html');
        }
    }
    checkCookie();
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
        if (!islogin) {
            $('.nav-car').css('display', 'none');
            var top = (document.documentElement.clientHeight - 380) / 2;
            var left = (document.documentElement.clientWidth - 352) / 2;
            $('.login').css({ 'display': 'block', 'left': left, 'top': top })
            $('.shadow').css('display', 'block');
        } else {
            location.href = './shop.html';
        }
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
        if (!islogin) {
            $('.lg').trigger('click');
        }
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
    // 更换图片
    $('.small-img ul li').mouseenter(function () {
        var src = '../images/info/' + ($(this).index() + 1) + '-1.jpg';
        $('.big-img').attr('src', src)
        $('.show-img img').attr('src', src)
        $(this).css('border', '2px solid #f60').siblings().css('border', 'none');
    })
    // 选中的规格高亮
    var guige = '';
    var img = '';
    var id = 0;
    $('.guige li').click(function () {
        if ($(this).hasClass('select')) {
            $(this).removeClass('select');
            guige = '';
            $('.num').html('37.80<i>¥</i>');
        } else {
            $(this).addClass('select').siblings().removeClass('select');
            guige = $(this).children().eq(1).text();
            img = $(this).children().eq(0).attr('src');
            var tem = img.match(/\d+/);
            img = img.replace(/\d/, tem[0] + '-1')
            id = $(this).index();
            switch ($(this).index()) {
                case 0:
                    $('.num').html('37.80<i>¥</i>'); break;
                case 1:
                    $('.num').html('47.80<i>¥</i>'); break;
                case 2:
                    $('.num').html('57.10<i>¥</i>'); break;
                case 3:
                    $('.num').html('67.80<i>¥</i>'); break;
            }
        }
    })
    // 点击-减少数量
    $('.less').click(function () {
        if ($('.produceNum').val() != 0) {
            $('.produceNum').val($('.produceNum').val() - 1)
        }
    })
    // 点击+添加数量
    $('.more').click(function () {
        if ($('.produceNum').val() == "") {
            $('.produceNum').val(1)
        } else {
            $('.produceNum').val(parseInt($('.produceNum').val()) + 1)
        }
    })
    // 点击加入购物车
    $('.add-car').click(function () {
        if (guige != '') {
            var name = $('.info-message').children().eq(0).text();
            var price = parseFloat($('.num').text()).toFixed(2);
            var num = $('.produceNum').val();
            var url = 'http://localhost/shop7.4/shop1/dist/interface/addwq.php';
            var msg = '?id=' + id + '&name=' + name + '&price=' + price + '&guige=' + guige + '&img=' + img + '&num=' + num;
            $.ajax({
                url: url + msg,
                dataType: 'jsonp',
                success: function (data) {
                    clearTimeout($('.tip').attr('timer'));
                    // 弹出一个提示框，并定位到屏幕中间
                    var top = (document.documentElement.clientHeight - $('.tip').height()) / 2;
                    var left = (document.documentElement.clientWidth - $('.tip').width()) / 2;
                    $('.tip').css({ 'left': left, 'top': top }).fadeIn();
                    if (data.code == 1) {
                        $('.tip').addClass('addsuccess').removeClass('addfail').text('添加成功');
                    } else {
                        $('.tip').addClass('addfail').removeClass('addsuccess').text('添加失败');
                    }
                    $('.tip').attr('timer', setTimeout(function () {
                        $('.tip').fadeOut();
                    }, 1000))
                }
            })
        } else {
            clearTimeout($('.tip').attr('timer'));
            $('.tip').slideDown().addClass('addfail').text('请先选择一个规格');
            var top = (document.documentElement.clientHeight - 57) / 2;
            var left = (document.documentElement.clientWidth - $('.tip').outerWidth()) / 2;
            $('.tip').css({ 'left': left, 'top': top });
            $('.tip').attr('timer', setTimeout(function () {
                $('.tip').fadeOut();
            }, 1000))
        }
    })
})
