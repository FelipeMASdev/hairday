//Handle the click event to select an hour in the form
export function hoursClick(){
  const hours = document.querySelectorAll('.hour-avaiable');
  hours.forEach(( avaiable ) => {
    avaiable.addEventListener('click', (selected) => {
      
      hours.forEach((hour) => {
        hour.classList.remove('hour-selected');
      });
      
      selected.target.classList.add('hour-selected');
    });
  });

}