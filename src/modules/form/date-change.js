import { schedulesDay } from "../schedules/load";

const selectedDate = document.getElementById('date');

//reload hour list when date input changes
selectedDate.onchange = () => schedulesDay();