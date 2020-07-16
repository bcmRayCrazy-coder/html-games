window.onload = function(){
    var user_list = document.getElementById("user_list");
    var user_list_test = document.getElementById("user_list_test");
    user_list_test.style.display = "none";
    for(let i = 0;i < 5;++i){
        var l = user_list.appendChild(
            document.createElement("P").appendChild(
                document.createTextNode(String(i)
                )
            )
        )
        l.appendChild(
            document.createElement("BR")
        )
    }
}