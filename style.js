

document.addEventListener("DOMContentLoaded", () =>  {
    const hoursElement = document.querySelector(".hour")
    const minutesElement = document.querySelector(".minute")
    const secondsElement = document.querySelector(".second")
    const ampmElement = document.querySelector(".ampm");


function setTime() {
    const date = new Date();

    let hoursTime = date.getHours();
    const minutsTime = String(date.getMinutes()).padStart(2, "0");
    const secondTime = String(date.getSeconds()).padStart(2, "0");

    const ampm = hoursTime >= 12 ? "PM" : "AM";

    hoursTime = hoursTime % 12;
    hoursTime = hoursTime ? hoursTime : 12;

    hoursTime = String(hoursTime).padStart(2, "0");

    hoursElement.innerText = hoursTime;
    minutesElement.innerText = minutsTime;
    secondsElement.innerText = secondTime;
    ampmElement.innerText = ampm;

    requestAnimationFrame(setTime);
}

requestAnimationFrame(setTime);
})