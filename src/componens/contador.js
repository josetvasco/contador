


export const contador = () => {

   const contenedorContador = document.createElement('section');
   contenedorContador.classList.add('section-contador');

   const divDays = document.createElement('div');
   const spanDays = document.createElement('span');
   spanDays.innerText = 'DAYS';
   const pDays = document.createElement('p');
   pDays.setAttribute('id', 'days');
   pDays.innerText = '00';
   divDays.append(pDays, spanDays);

   const divHours = document.createElement('div');
   const spanHours = document.createElement('span');
   spanHours.innerText = 'HOURS';
   const pHours = document.createElement('p');
   pHours.setAttribute('id', 'hours');
   pHours.innerHTML = '00';
   divHours.append(pHours, spanHours);

   const divMinutes = document.createElement('div');
   const spanMinutes = document.createElement('span');
   spanMinutes.innerText = 'MINUTES';
   const pMinutes = document.createElement('p');
   pMinutes.setAttribute('id', 'minutes');
   pMinutes.innerText = '00';
   divMinutes.append(pMinutes, spanMinutes);

   const divSeconds = document.createElement('div');
   const spanSeconds = document.createElement('span');
   spanSeconds.innerText = 'SECONDS';
   const pSeconds = document.createElement('p');
   pSeconds.setAttribute('id', 'seconds');
   pSeconds.innerText = '00';
   divSeconds.append(pSeconds, spanSeconds);

   contenedorContador.append(divDays, divHours, divMinutes, divSeconds)

   return contenedorContador
}