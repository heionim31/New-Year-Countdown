const countDays = document.getElementById("days");
const countHours = document.getElementById("hours");
const countMinutes = document.getElementById("minutes");
const countSeconds = document.getElementById("seconds");


setInterval(countDown);

function countDown() {
     // January 1st of the next year
    const yearEnd = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
    const dateNow = Date.now();
    const timeLeft = yearEnd - dateNow;

    let seconds = Math.floor((timeLeft / 1000) % 60);
    let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    let hours = Math.floor((timeLeft / (1000 *60 * 60)) % 60);
    let days = Math.floor((timeLeft / (1000 * 60 * 60 * 24)));

    countDays.textContent = days;
    countHours.textContent = hours;
    countMinutes.textContent = minutes;
    countSeconds.textContent = seconds;
}