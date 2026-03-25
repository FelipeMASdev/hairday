//imports
import dayjs from 'dayjs';
import { scheduleNew } from '../../services/schedule-new.js';
import { schedulesDay } from '../schedules/load.js';

//DOM element selectors
const form = document.querySelector('.form');
const clientName = document.getElementById('client');
const selectedDate = document.getElementById('date');

//Load current date and set it as the minimum date for input
const today = dayjs(new Date()).format('YYYY-MM-DD');
selectedDate.value = today;
selectedDate.min = today;

//form submit event
form.onsubmit = async (event) => {
  event.preventDefault();

  try{
    //Obtaining and validating form data
    const name = clientName.value.trim();
    if(!name){
      return alert('Por favor, informe o nome do cliente.');
    }

    const hourSelected = document.querySelector('.hour-selected');
    if(!hourSelected){
      return alert('Por favor, selecione o horário do agendamento.');
    }

    const [hour] = hourSelected.innerText.split(':');
    const when = dayjs(selectedDate.value).add(hour, 'hour');
    
    const id = new Date().getTime();

    //Creating schedule
    await scheduleNew({
      id,
      name,
      when,
    });

    //reloading schedule list
    await schedulesDay();

    //reset form
    clientName.value = '';
    hourSelected.classList.remove('hour-selected');

  } catch(err){
    alert('não foi possível realizar o agendamento.');
    console.log(err);
  }
}