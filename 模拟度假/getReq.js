function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function GetRequest(){var s=location.search,t=new Object;if(-1!=s.indexOf("?")){var r=s.substr(1);strs=r.split("&");for(var e=0;e<strs.length;e++)t[strs[e].split("=")[0]]=decodeURI(strs[e].split("=")[1])}return t}