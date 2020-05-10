function clock() {
    var hours = document.querySelector(".hours")
    var minutes = document.querySelector(".minutes")
    var seconds = document.querySelector(".seconds")

    hours.innerHTML = new Date().getHours();
    minutes.innerHTML = new Date().getMinutes();
    seconds.innerHTML = new Date().getSeconds();

    if (minutes.innerHTML.toString().length == 1) {
        minutes.innerHTML = "0" + minutes.innerText;
    }

    if (seconds.innerHTML.toString().length == 1) {
        seconds.innerText = "0" + seconds.innerText;
    }

    if (hours.innerHTML.toString().length == 1) {
        hours.innerHTML = "0" + hours.innerHTML;
    }
}
setInterval(function() {
    clock();
}, 1000);
