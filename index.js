setInterval(displayTime, 1000); 
const hourEL = document.getElementById('hour');
const minutesEL = document.getElementById('minutes');
const secondsEL = document.getElementById('seconds');
const ampmEL = document.getElementById('ampm');


function displayTime() {
    
    const dateTime = new Date();
    
    let hour = dateTime.getHours();
    let ampm = hour >= 12 ? 'PM' : 'AM';

    let minutes = dateTime.getMinutes();
        minutes = minutes <= 9 ? '0' + minutes : minutes;

    let seconds = dateTime.getSeconds();
        seconds = seconds <= 9 ? '0' + seconds : seconds;  

    hourEL.innerText = hour;
    minutesEL.innerText = minutes;
    secondsEL.innerText = seconds;
    ampmEL.innerText = ampm;

    
}


