const calendar = document.getElementById("calendar");
const reminders = {};

function createCalendar() {
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const currentDate = new Date();
  currentDate.setDate(1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  let dayIndex = currentDate.getDay();

  // Cabeçalho do calendário
  for (let i = 0; i < 7; i++) {
    const dayHeader = document.createElement("div");
    dayHeader.classList.add("day");
    dayHeader.textContent = daysOfWeek[i];
    calendar.appendChild(dayHeader);
  }

  // Dias do mês
  for (let i = 1; i <= lastDayOfMonth; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = i;
    calendar.appendChild(dayElement);

    dayIndex++;

    // Adicionar lembretes para o dia
    const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${i}`;
    const remindersForDay = reminders[dateKey] || [];
    remindersForDay.forEach(reminder => {
      const reminderElement = document.createElement("div");
      reminderElement.classList.add("reminder");
      reminderElement.innerHTML = `<span class="reminder-time">${reminder.time}</span> ${reminder.text}`;
      dayElement.appendChild(reminderElement);
    });

    if (dayIndex === 7) {
      dayIndex = 0;
      currentDate.setDate(i + 1);
    }
  }
}

function addReminder() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const text = document.getElementById("reminderText").value;

  if (!date || !time || !text) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const dateKey = `${year}-${month}-${day}`;

  // Adicionar o lembrete ao registro
  if (!reminders[dateKey]) {
    reminders[dateKey] = [];
  }
  reminders[dateKey].push({ date, time, text });

  // Recarregar o calendário após adicionar o lembrete
  calendar.innerHTML = "";
  createCalendar();
}

createCalendar();
