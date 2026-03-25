import { apiConfig } from './api-config.js'

export async function scheduleCancel ({ id }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: 'DELETE',
    });
    alert('Agendamento cancelado com sucesso.');

  } catch (err){
    console.log(err);
    alert('Não foi possivel cancelar o agendamento.');
  }
}