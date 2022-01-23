function TimeDisplay(){
    var today = new Date();
    var time = ('0' + today.getHours()).slice(-2) + ':'+ ('0' + (today.getMinutes())).slice(-2) + ':'+ ('0' + (today.getSeconds())).slice(-2);
    document.getElementById("time").innerText = time;
}
setInterval(TimeDisplay, 1000);