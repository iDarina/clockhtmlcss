function updateClock() {
    // current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // displaying time
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// 
setInterval(updateClock);

