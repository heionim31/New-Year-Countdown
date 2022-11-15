const countDays = document.getElementById("days");
const countHours = document.getElementById("hours");
const countMinutes = document.getElementById("minutes");
const countSeconds = document.getElementById("seconds");


setInterval(countDown);

function countDown() {
    const dateTarget = new Date('Jan 1 2023 12:00:00').getTime();
    const dateNow = Date.now();
    const timeToCount = dateTarget - dateNow;

    let seconds = Math.floor((timeToCount / 1000) % 60);
    let minutes = Math.floor((timeToCount / (1000 * 60)) % 60);
    let hours = Math.floor((timeToCount / (1000 *60 * 60)) % 60);
    let days = Math.floor((timeToCount / (1000 * 60 * 60 * 24)));

    countDays.textContent = days;
    countHours.textContent = hours;
    countMinutes.textContent = minutes;
    countSeconds.textContent = seconds;
}