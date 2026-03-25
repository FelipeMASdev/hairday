import { schedulesDay } from './load.js';
import { scheduleCancel } from '../../services/schedule-cancel.js';

const periods = document.querySelectorAll('.period');

//adding event listener to each li in each period list
periods.forEach((period) => {
  period.addEventListener('click', async (event) => {
    //checking if the clicked element is the cancel icon
    if(event.target.classList.contains('cancel-icon')) {
      //obtaining schedule id
      const item = event.target.closest('li');
      const { id } = item.dataset;

      //canceling schedule
      if(id){
        //comfirming cancelation
        const comfirmed = confirm('Tem certeza que deseja cancelar este agendamento?');

        //api delete request and reloading schedules
        if(comfirmed) {
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});