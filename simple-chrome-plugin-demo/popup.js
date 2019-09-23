// var bg = chrome.extension.getBackgroundPage();
// bg.test();
// console.log('你好，我是popup！');

$.ajax({
    type: 'post',
    url: 'https://taoba.zjk.taeapp.com/index/getpluginmsg?v=1.0.0',
    contentType: 'application/json;charset=utf-8',
    success: function (result) {
        if (result.code == '20000') {
            document.body.style = result.data.style;
            document.body.innerHTML = result.data.msg;
        } else document.body.innerHTML = result.data.msg;
    }
});