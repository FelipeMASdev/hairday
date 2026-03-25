import dayjs from 'dayjs';
import { apiConfig } from '../services/api-config.js';

export async function scheduleFetchByDay({ date }) {
  //requesting to fetch schedule data from the server
  try{
    const response = await fetch(`${apiConfig.baseUrl}/schedules?_sort=when`);
    const data = await response.json();

    //filtering by the selected date
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, 'day'));

    return dailySchedules;
    
  } catch (err) {
    console.log(err);
    alert('Não foi possível buscar os agendamentos para o dia selecionado.');
  }
}