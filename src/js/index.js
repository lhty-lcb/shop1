window.onload = function () {
    window.history.replaceState(null, null, window.location.href);
    var div = document.createElement('div');
    div.className = "shadow";
    $('body').append(div);
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 2000,
        speed: 1000,
        autoplayDisableOnInteraction: false,
        pagination: '.pagination',
        paginationClickable: true,
        //其他设置
        onSlideChangeStart: function (swiper) {
            // 更改颜色 
            var pic = document.getElementById("pic")
            changeColor(swiper.activeLoopIndex, getStyle(pic, "backgroundColor"))
        },
    });
    $('.arrow-left').on('click', function (e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.arrow-right').on('click', function (e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })
    var changeColor = function (index, oldColor) {
        var img = document.createElement('img');
        var canvas = document.createElement('canvas');

        img.src = "../images/pic/pic-" + (index + 1) + ".png";

        canvas.width = img.width;
        canvas.height = img.height;
        canvas.style.display = "none";
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        var data = context.getImageData(0, 0, img.width, img.height).data;
        var rgbaArr = [0, 0, 0, 0];
        for (var i = 0; i < data.length; i++) {
            var t = i % 4;
            rgbaArr[t] += data[i];
        }
        for (var i = 0; i < rgbaArr.length; i++) {
            rgbaArr[i] = parseInt(rgbaArr[i] / (data.length / 4))
        }
        var pic = document.getElementById('pic');
        // 立即改变颜色
        // $('#pic').css('background', newColor);
        moveColor(pic, rgbaArr);

        // 获取样式的兼容处理
        function getStyle(ele, attr) {
            if (ele.currentStyle) {
                return ele.currentStyle[attr];
            } else {
                return getComputedStyle(ele, false)[attr];
            }
        }

        //缓慢改变背景颜色的封装
        function moveColor(ele, newColor, cb) {
            clearInterval(ele.t);
            ele.t = setInterval(function () {
                var oldColor = getStyle(ele, "backgroundColor");
                oldColor = oldColor.slice(4, this.length - 1).split(", ");
                var rgbArr = [0, 0, 0];
                for (var i = 0; i < oldColor.length; i++) {
                    rgbArr[i] = (newColor[i] - oldColor[i]) / 80;
                    rgbArr[i] = rgbArr[i] > 0 ? Math.ceil(rgbArr[i]) : Math.floor(rgbArr[i]);
                }
                ele.style.backgroundColor = "rgb(" + (rgbArr[0] + parseInt(oldColor[0])) + "," + (rgbArr[1] + parseInt(oldColor[1])) + "," + (rgbArr[2] + parseInt(oldColor[2])) + ")";
                var tr = true;
                for (var i = 0; i < 3; i++) {
                    if (oldColor[i] != newColor[i]) {
                        tr = false;
                        break;
                    }
                }
                if (tr) {
                    clearInterval(ele.t);
                    cb && cb();
                }
            }, 8)
        }
    }
    $('.search').on('keyup', function () {
        $('.search-list').css('display', 'block')
        var text = $('.search').eq(0).val();
        var cbName = "lcb" + Math.random().toString().slice(2) + (new Date).getTime();
        $.ajax({
            url: 'https://ds.suning.com/ds/his/new/-' + text + '-0-1_0-' + cbName + '.jsonp?',
            dataType: 'jsonp',
            jsonpCallback: cbName,
            success: function (data) {
                var ul = $('.search-list');
                ul.empty();
                $.each(data.words, function (index, value) {
                    if (value.keyword != undefined) {
                        ul.append("<li>" + value.keyword + "</li>");
                    }
                })
                $(".search-list li").click(function () {
                    $('.search').eq(0).val($(this).text())
                    $('.search-list').css('display', 'none')
                })
            }
        })
    })
    $('.car').mouseenter(function () {
        $('.nav-car').slideDown('fast');
    })
    $('.car').mouseleave(function () {
        $('.nav-car').slideUp('fast');
    })
    $('.btn-warning').click(function () {
        $('.nav-car').css('display', 'none');
        var top = (document.documentElement.clientHeight - 380) / 2;
        var left = (document.documentElement.clientWidth - 352) / 2;
        $('.login').css({ 'display': 'block', 'left': left, 'top': top })
        $('.shadow').css('display','block');
    })

    $(window).resize(function () {
        var top = (document.documentElement.clientHeight - 380) / 2;
        var left = (document.documentElement.clientWidth - 352) / 2;
        $('.login').css({ 'left': left, 'top': top })
        $('.register').css({ 'left': left, 'top': top })
    })
    $('.cancel').click(function () {
        $('.login').css('display', 'none');
        $('.shadow').css('display', 'none');
        $('.register').css('display', 'none');
    })
    $('.re').click(function () {
        var top = (document.documentElement.clientHeight - 380) / 2;
        var left = (document.documentElement.clientWidth - 352) / 2;
        $('.login').css('display', 'none');
        $('.register').css('display', 'block');
        $('.register').css({ 'left': left, 'top': top })
        $('.shadow').css('display','block');
    })
    $('.lg').click(function () {
        var top = (document.documentElement.clientHeight - 380) / 2;
        var left = (document.documentElement.clientWidth - 352) / 2;
        $('.login').css('display', 'block');
        $('.register').css('display', 'none');
        $('.login').css({ 'left': left, 'top': top })
        $('.shadow').css('display','block');
    })
    $('.nav-login').click(function(){
        $('.lg').trigger('click');
    })
    $('.nav-register').click(function(){
        $('.re').trigger('click');
    })
} 