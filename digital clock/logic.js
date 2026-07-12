const display = document.getElementById("time");

function updateClock(){
    const now = new Date();
    let seconds = now.getSeconds();
    let mins = now.getMinutes();
    let hours = now.getHours();

    let period = "AM";
    if(hours >= 12){
        period = "PM";
    }
    if(hours > 12){
        hours = hours - 12;
    }
    if(hours === 0){
        hours = 12;
    }

    let s = String(seconds).padStart(2,"0");
    
    let m = String(mins).padStart(2,"0");
    
    let h = String(hours).padStart(2, "0");

    

    display.textContent = `${h}:${m}:${s}   ${period}`;
}
updateClock();
setInterval(updateClock, 1000);