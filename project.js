var countDownDate = new Date("march 9, 2024 11:30:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance /(1000*60*60*24));
    var hours = Math.floor((distance %(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance %(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance %(1000*60))/1000);

    document.getElementById("days").innerHTML=days < 10 ? '0' + days : days;
    document.getElementById("hours").innerHTML=hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerHTML=minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerHTML=seconds < 10 ? '0' + seconds : seconds;

},1000);

