import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js';
import { hoursClick } from './hours-click.js';

const hours = document.getElementById('hours');

export function hoursLoad({ date, dailySchedules }){
  //clear previous hours
  hours.innerHTML = '';

  //map hours that already have a schedule
  const unavailableHours = dailySchedules.map((schedule) => 
    dayjs(schedule.when).format('H:mm')
  );

  //map wich hours are avaiable for scheduling
  const opening = openingHours.map((hour) => {
    //check if the hour is in the past
    const [scheduleHour] = hour.split(':');
    const isNotHourInPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs());
    
    const avaiable = isNotHourInPast && !unavailableHours.includes(hour);

    return {
      hour,
      avaiable
    }
  });

  //render hours in the form
  opening.forEach(({ hour, avaiable }, index) => {
    const li = document.createElement('li');
    li.classList.add('hour');
    li.classList.add(avaiable ? 'hour-avaiable' : 'hour-unavailable');
    li.textContent = hour;

    if(index === 0){
      hourHeaderAdd('Manhã');
    }else if(hour === '13:00'){
      hourHeaderAdd('Tarde');
    }else if (hour === '18:00'){
      hourHeaderAdd('Noite');
    }

    hours.append(li);
  });

  //add click event to avaiable hours
  hoursClick();
}

//Add header for period of the day
function hourHeaderAdd(title){
  const header = document.createElement('li');
  header.classList.add('hour-period');
  header.textContent = title;
  hours.append(header);
}