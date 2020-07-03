window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 2000,
        speed: 2000,
        autoplayDisableOnInteraction: false,
        pagination: '.pagination',
        paginationClickable: true,
        //其他设置
        onSlideChangeStart: function (swiper) {
            // 更改颜色 
            var pic = document.getElementById("pic")
            changeColor(swiper.activeLoopIndex, getStyle(pic, 'backgroundColor'))
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
    var changeColor = function (index,oldColor) {
        var img = document.createElement('img');
        var canvas = document.createElement('canvas');

        img.src = "../images/pic/pic-" + (index + 1) + ".png";

        canvas.width = img.width;
        canvas.height = img.height;

        canvas.style.display = "none";

        var context = canvas.getContext('2d');

        context.drawImage(img, 0, 0, canvas.width, canvas.height);

        var data = context.getImageData(0, 0, img.width, img.height).data;
        var rtotle = 0;
        var gtotle = 0;
        var btotle = 0;
        var atotle = 0;
        for (var i = 0; i < data.length; i++) {
            var t = i % 4;
            if (t == 0) {
                rtotle += data[i];
            } else if (t == 1) {
                gtotle += data[i];
            } else if (t == 2) {
                btotle += data[i];
            } else if (t == 3) {
                atotle += data[i];
            }
        }
        var r = parseInt(rtotle / (data.length / 4))
        var g = parseInt(gtotle / (data.length / 4))
        var b = parseInt(btotle / (data.length / 4))
        var a = parseInt(atotle / (data.length / 4))
        // console.log(r, g, b, a)
        var color = "rgba(" + r + "," + g + "," + b + "," + a + ")";

        // var pic = document.getElementById("pic")
        // console.log(getStyle(pic,'backgroundColor'))
        $('#pic').css('background', color)

        // 获取样式的兼容处理
        function getStyle(ele, attr) {
            if (ele.currentStyle) {
                return ele.currentStyle[attr];
            } else {
                return getComputedStyle(ele, false)[attr];
            }
        }

        //缓慢改变背景颜色的封装
        // function move(ele, data, cb) {
        //     clearInterval(ele.t);
        //     ele.t = setInterval(function () {
        //         var iNow = parseInt(getStyle(ele, i));
        //         var speed = (data[i] - iNow) / 8;
        //         speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        //         if (data[i] != iNow) {
        //             tr = false;
        //         }
        //         if (tr) {
        //             clearInterval(ele.t);
        //             cb && cb();
        //         }
        //     }, 16)
        // }
    }
} 