const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let timerId = null;

const clickHandlerStart = () => {
    startBtn.disabled = true;
    timerId = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)]
  }, 1000);
};

const clickHandlerStop = () => {
    startBtn.disabled = false;
    clearInterval(timerId);
};

startBtn.addEventListener('click', clickHandlerStart);
stopBtn.addEventListener('click', clickHandlerStop);
