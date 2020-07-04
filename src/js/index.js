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
        var rtotle = 0;
        var gtotle = 0;
        var btotle = 0;
        var atotle = 0;
        var rgbaArr = [];
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
            // rgbaArr[i] += data[i];
        }
        var r = parseInt(rtotle / (data.length / 4))
        var g = parseInt(gtotle / (data.length / 4))
        var b = parseInt(btotle / (data.length / 4))
        var newColor = "rgb(" + r + "," + g + "," + b + ")";
        var pic = document.getElementById('pic');
        // 立即改变颜色
        // $('#pic').css('background', newColor);
        moveColor(pic, newColor,function(){
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
            newColor = newColor.slice(4, this.length - 1).split(",");
            ele.t = setInterval(function () {
                var oldColor = getStyle(ele, "backgroundColor");
                oldColor = oldColor.slice(4, this.length - 1).split(", ");
                var r = (newColor[0] - oldColor[0]) / 80;
                var g = (newColor[1] - oldColor[1]) / 80;
                var b = (newColor[2] - oldColor[2]) / 80;
                r = r > 0 ? Math.ceil(r) : Math.floor(r);
                g = g > 0 ? Math.ceil(g) : Math.floor(g);
                b = b > 0 ? Math.ceil(b) : Math.floor(b);

                ele.style.backgroundColor = "rgb(" + (r + parseInt(oldColor[0])) + "," + (g + parseInt(oldColor[1])) + "," + (b + parseInt(oldColor[2])) + ")";
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