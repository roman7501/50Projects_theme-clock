const themeBtn = document.getElementById("toggle-theme");

const hourClock = document.getElementById("hour");
const minClock = document.getElementById("min");
const secClock = document.getElementById("sec");

const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

getTime();
const interval = setInterval(() => {
  getTime();
}, 1000);

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function getTime() {
  const date = new Date();
  const month = date.toLocaleString("en-us", { month: "short" });
  const day = date.toLocaleString("en-us", { weekday: "long" });
  const time = date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  const dayNum = date.toLocaleString("en-us", { day: "numeric" });

  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  updateClock(hours, mins, secs);
  displayTime(time);
  displayDate(day, month, dayNum);
}

function updateClock(h, m, s) {
  const hoursFormatted = Math.abs(h - 12);
  hourClock.style.transform = `rotateZ(${hoursFormatted * 30 + 180}deg)`;
  minClock.style.transform = `rotateZ(${m * 6 + 180}deg)`;
  secClock.style.transform = `rotateZ(${s * 6 + 180}deg)`;
}

function displayTime(time) {
  timeEl.innerText = time;
}

function displayDate(d, m, dN) {
  dateEl.innerHTML = `${d}, ${m} <span class="day">${dN}</span>`;
}
