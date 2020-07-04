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
        moveColor(pic, rgbaArr, function () {
            console.log("颜色改变完了")
        });

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
            }, 16)
        }
    }
} 