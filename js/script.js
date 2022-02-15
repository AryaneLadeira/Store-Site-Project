import initSmoothScroll from "./modules/smooth-scroll.js"
import initScrollAnimation from "./modules/scroll-animation.js"
import initNumbersAnimation from "./modules/numbers-animation.js"
import Countdown from "./modules/countdown.js";

initScrollAnimation();
initSmoothScroll();
initNumbersAnimation();

const missingDays = new Countdown('24 Feb 2022 14:00:00 GMT-0300')
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

console.log(missingDays.total)

setInterval(() => {
    days.innerText = missingDays.total.days
    hours.innerText = missingDays.total.hours
    minutes.innerText = missingDays.total.minutes
    seconds.innerText = missingDays.total.seconds
    console.log(missingDays.total)
}, 1000)

