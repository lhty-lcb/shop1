$(function () {
    var div = document.createElement('div');
    div.className = "shadow";
    $(div).css('height','1686');
    $('body').append(div);
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
        $('.shadow').css('display', 'block');
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
        $('.shadow').css('display', 'block');
    })
    $('.lg').click(function () {
        var top = (document.documentElement.clientHeight - 380) / 2;
        var left = (document.documentElement.clientWidth - 352) / 2;
        $('.login').css('display', 'block');
        $('.register').css('display', 'none');
        $('.login').css({ 'left': left, 'top': top })
        $('.shadow').css('display', 'block');
    })
    $('.nav-login').click(function () {
        $('.lg').trigger('click');
    })
    $('.nav-register').click(function () {
        $('.re').trigger('click');
    })
})
