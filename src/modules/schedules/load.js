import { scheduleFetchByDay} from '../../services/schedule-fetch-by-day.js';
import { schedulesShow } from '../schedules/show.js';
import { hoursLoad } from '../form/hours-load.js';

const selectedDate = document.getElementById('date');

export async function schedulesDay(){
  const date = selectedDate.value;
  
  //Fetch schedule data from the API
  const dailySchedules = await scheduleFetchByDay({ date });

  //render schedules
  schedulesShow({ dailySchedules });

  //Load avaiable hours avaiable for scheduling
  hoursLoad({ date, dailySchedules });
}