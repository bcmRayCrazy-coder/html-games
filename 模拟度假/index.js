//设置Cookie
function setCookie(name, value) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path:/";
}
/*
 获取Cookie中的值
 */
function getCookie(objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) {
            return decodeURI(temp[1]);
        }
    }
}

//element导入
layui.use('element', function(){
    var element = layui.element;
    
    //…
});

//轮播导入
layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#carousel'
      ,width: '100%' //设置容器宽度
      ,arrow: 'always' //始终显示箭头
      ,anim: 'default' //切换动画方式
      ,interval: 2000 //切换间隔时间
    });
  });

function randomInt(a,b){if(a>b){var c = a;a = b;b = c; }return Math.floor(Math.random() * (b - a + 1) + a); }

window.onload = function(){
    var skinowInfo1 = document.getElementById("skinowInfo1");
    var skinowInfo2 = document.getElementById("skinowInfo2");
    var skinowInfo3 = document.getElementById("skinowInfo3");
    skinowInfo1.innerText = `温度:${String(randomInt(-20, 5))}`;
    skinowInfo2.innerText = "状态:开放";
    skinowInfo3.innerText = `人数:${String(randomInt(400, 5000))}`;
    var hotelInfo1 = document.getElementById("hotelInfo1");
    var hotelInfo2 = document.getElementById("hotelInfo2");
    var hotelInfo3 = document.getElementById("hotelInfo3");
    hotelInfo1.innerText = `价格:23000RMB`;
    hotelInfo2.innerText = "状态:开放";
    hotelInfo3.innerText = `房间剩余:${String(5100 - randomInt(4000, 5000))}`;
}