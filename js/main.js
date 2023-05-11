const blockEl = document.getElementsByClassName("block")[0];
const width = window.innerWidth - 100;
const height = window.innerHeight - 100;
const rnd = (max) => Math.ceil(Math.random() * max);

setInterval(() => {
  blockEl.style.backgroundColor = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
}, 500);

setInterval(() => {
  blockEl.style.top = `${rnd(height)}px`;
  blockEl.style.left = `${rnd(width)}px`;
}, 1000);
