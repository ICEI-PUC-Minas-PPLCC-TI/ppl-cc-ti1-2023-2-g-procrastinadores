const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const alarmTime = document.querySelector("#alarmTime");

function setTime() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  hours.textContent = h < 10 ? "0" + h : h;
  minutes.textContent = m < 10 ? "0" + m : m;
  seconds.textContent = s < 10 ? "0" + s : s;
}

setInterval(setTime, 1000);

function setAlarm() {
  const time = alarmTime.value;
  const alarmHours = time.split(":")[0];
  const alarmMinutes = time.split(":")[1];
  const alarmSeconds = "00";
  const alarmTime = `${alarmHours}:${alarmMinutes}:${alarmSeconds}`;
  const now = new Date();
  const timeToAlarm = new Date(now.toDateString() + " " + alarmTime);
  const timeDiff = timeToAlarm - now;
  if (timeDiff < 0) {
    alert("Invalid time!");
    return;
  }
  setTimeout(() => {
    alert("Alarm!");
  }, timeDiff);
}
