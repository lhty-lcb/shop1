$(function () {
    // 购物车功能
    function Car() {
        this.init = function () {
            if (this.checkCookie()) {
                this.loadMsg();
                this.btnAdd = true;
            } else {
                alert('请先登录');
            }
        }
        this.checkCookie = function () {
            // 判断是否有cookie
            var user = getCookie(document.cookie, 'username');
            if (user) {
                $('.nav-register').css('display', 'none');
                $('.nav-login').text('欢迎您，' + user).css('width', '160');
                return true;
            } else {
                return false;
            }
        }
        this.addEvent = function (data) {
            this.btnAddNum = $('.btn.btn-success');
            this.btnReduceNum = $('.btn.btn-warning');
            this.btnMoveFromCar = $('.btn.btn-danger');
            this.textMsg = $('.proName');
            var that = this;
            // 点击商品名跳转到详情页面
            this.textMsg.click(function(){
                location.href='./message.html';
            })
            // 绑定商品id
            this.product = $('table tr');
            for (var i = 1; i < this.product.length; i++) {
                this.product.eq(i).attr('uid', data[i - 1].product_id);
            }
            // 增加数量
            this.btnAddNum.click(function () {
                $(this).prev().text(parseInt($(this).prev().text()) + 1);
                var uid = $(this).parent().parent().attr('uid');
                var url = 'http://localhost/shop7.4/shop1/dist/interface/updatewq.php';
                // 更新数据库
                that.ajax(uid, 'add', url);
            })
            // 减少数量
            this.btnReduceNum.click(function () {
                $(this).next().text(parseInt($(this).next().text()) - 1);
                if ($(this).next().text() == 0) {
                    if (that.checkNum($(this))) {
                        $(this).next().text(parseInt($(this).next().text()) + 1);
                    } else {
                        var uid = $(this).parent().parent().attr('uid');
                        var url = 'http://localhost/shop7.4/shop1/dist/interface/delwq.php';
                        that.ajax(uid, '', url);
                    }
                } else {
                    var uid = $(this).parent().parent().attr('uid');
                    var url = 'http://localhost/shop7.4/shop1/dist/interface/updatewq.php';
                    that.ajax(uid, 'cut', url);
                }
                // 更新数据库
            })
            // 移出购物车
            this.btnMoveFromCar.click(function () {
                var res = confirm('确定要将商品移除吗？');
                if (res) {
                    $(this).parent().parent().css('display', 'none')
                    $(this).parent().prev().children().eq(1).text(0)
                    var uid = $(this).parent().parent().attr('uid');
                    var url = 'http://localhost/shop7.4/shop1/dist/interface/delwq.php';
                    that.ajax(uid, '', url);
                }
                // 更新数据库
            })
            // 判断商品数量的方法
            this.checkNum = function (btn) {
                var res = confirm('要将商品移除吗？');
                if (res) {
                    btn.parent().next().children().eq(0).trigger('click');
                } else {
                    return true;
                }
            }
            // 发送请求
            this.ajax = function (uid, type, url) {
                var msg = '?id=' + uid + '&type=' + type;
                $.ajax({
                    url: url + msg,
                    dataType: 'jsonp',
                    success: function (data) {
                    }
                })
            }
        }
        var that = this;
        // 加载的时候渲染数据
        this.loadMsg = function () {
            var url = 'http://localhost/shop7.4/shop1/dist/interface/showlist.php';
            $.ajax({
                url: url,
                dataType: 'jsonp',
                success: function (data) {
                    data = data.data;
                    var temp = `<tr style="display: table-row;">
                    <th>商品图片</th>
                    <th>商品名</th>
                    <th>商品价格</th>
                    <th>商品规格</th>
                    <th>商品数量</th>
                    <th>移出购物车</th>
                </tr>`;
                    for (var i in data) {
                        temp += `<tr>
                        <th>
                            <img src="${data[i].product_img}" alt="">
                        </th>
                        <td class="proName">${data[i].product_name}</td>
                        <td>¥${data[i].product_price}</td>
                        <td>${data[i].product_guige}</td>
                        <td>
                            <button class="btn btn-warning">-</button>
                            <em>${data[i].product_num}</em>
                            <button class="btn btn-success">+</button>
                        </td>
                        <td>
                            <button class="btn btn-danger">移出购物车</button>
                        </td>
                    </tr>`
                    }
                    $('table').html(temp);
                    that.addEvent(data);
                }
            })
        }
    }
    var car = new Car();
    car.init()
})