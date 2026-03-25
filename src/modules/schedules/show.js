import dayjs from "dayjs";

const periodMorning = document.getElementById('period-morning');
const periodAfternoon = document.getElementById('period-afternoon');
const periodNight = document.getElementById('period-night');

export function schedulesShow({ dailySchedules }) {
  try {
    //Clear schedule list
    periodMorning.innerHTML = '';
    periodAfternoon.innerHTML = '';
    periodNight.innerHTML = '';

    //Render each period list with the respective schedules
    dailySchedules.forEach((schedule) => {
      //create elements 
      const item = document.createElement('li');
      const time = document.createElement('strong');
      const name = document.createElement('span');
      const cancelIcon = document.createElement('img');

      //set properties and content
      item.setAttribute('data-id', schedule.id);
      time.textContent = dayjs(schedule.when).format('HH:mm');
      name.textContent = schedule.name;

      cancelIcon.classList.add('cancel-icon');
      cancelIcon.setAttribute('src', './src/assets/cancel.svg');
      cancelIcon.setAttribute('alt', 'cancelar');

      //structure the item elements hierarchically
      item.append(time, name, cancelIcon);

      //render in the correct period list
      const hour = dayjs(schedule.when).hour();

      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });

  } catch (err) {
    console.log(err);
    alert('Não foi possível exibir os agendamentos');
  }
}