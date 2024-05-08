const requestUrl = "https://randomuser.me/api";
const xhl = new XMLHttpRequest();

xhl.open("GET", requestUrl);
xhl.onreadystatechange() = function(){
    console.log(xhl.readyState);
    
    xhl.send();
}
