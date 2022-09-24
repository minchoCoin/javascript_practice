const clock = document.querySelector("h2.clock");

function getClock(){
    const date = new Date();
    hours = String(date.getHours());
    minutes = String(date.getMinutes());
    seconds = String(date.getSeconds());
    clock.innerText = `${hours.padStart(2,0)}:${minutes.padStart(2,0)}:${seconds.padStart(2,0)}`;
}
getClock();
setInterval(getClock,1000);