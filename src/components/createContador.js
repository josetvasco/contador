export const sectionContador = () => {
    const section = document.createElement('section');
    section.setAttribute('id', 'clock');

    return section
}

export const createContador = ( days, hours, minutes, seconds ) => {

    const DIV_CLOCK = document.createElement('div');
    DIV_CLOCK.classList.add('div-clock');

    const DIV_PRINCIPAL_DAYS = document.createElement('div');
    const DIV_NUMBER_DAYS = document.createElement('div');
    DIV_NUMBER_DAYS.classList.add('div-number');
    const P_DAYS = document.createElement('p');
    P_DAYS.innerText = days;
    DIV_NUMBER_DAYS.append(P_DAYS);
    const DIV_SUBTITLE_DAYS = document.createElement('div');
    DIV_SUBTITLE_DAYS.classList.add('subtitle-clock');
    const SPAN_DAYS = document.createElement('span');
    SPAN_DAYS.innerText = 'DAYS'; 
    DIV_SUBTITLE_DAYS.append(SPAN_DAYS);

    DIV_PRINCIPAL_DAYS.append(DIV_NUMBER_DAYS, DIV_SUBTITLE_DAYS);
    
    const DIV_PRINCIPAL_HOURS = document.createElement('div');
    const DIV_NUMBER_HOURS = document.createElement('div');
    DIV_NUMBER_HOURS.classList.add('div-number');
    const P_HOURS = document.createElement('p');
    P_HOURS.innerText = hours;
    DIV_NUMBER_HOURS.append(P_HOURS);
    const DIV_SUBTITLE_HOURS = document.createElement('div');
    DIV_SUBTITLE_HOURS.classList.add('subtitle-clock');
    const SPAN_HOURS = document.createElement('span');
    SPAN_HOURS.innerText = 'HOURS'; 
    DIV_SUBTITLE_HOURS.append(SPAN_HOURS);

    DIV_PRINCIPAL_HOURS.append(DIV_NUMBER_HOURS, DIV_SUBTITLE_HOURS);

    const DIV_PRINCIPAL_MINUTES = document.createElement('div');
    const DIV_NUMBER_MINUTES = document.createElement('div');
    DIV_NUMBER_MINUTES.classList.add('div-number');
    const P_MINUTES = document.createElement('p');
    P_MINUTES.innerText = minutes;
    DIV_NUMBER_MINUTES.append(P_MINUTES);
    const DIV_SUBTITLE_MINUTES = document.createElement('div');
    DIV_SUBTITLE_MINUTES.classList.add('subtitle-clock');
    const SPAN_MINUTES = document.createElement('span');
    SPAN_MINUTES.innerText = 'MINUTES'; 
    DIV_SUBTITLE_MINUTES.append(SPAN_MINUTES);

    DIV_PRINCIPAL_MINUTES.append(DIV_NUMBER_MINUTES, DIV_SUBTITLE_MINUTES);

    const DIV_PRINCIPAL_SECONDS = document.createElement('div');
    const DIV_NUMBER_SECONDS = document.createElement('div');
    DIV_NUMBER_SECONDS.classList.add('div-number');
    const P_SECONDS = document.createElement('p');
    P_SECONDS.innerText = seconds;
    DIV_NUMBER_SECONDS.append(P_SECONDS);
    const DIV_SUBTITLE_SECONDS = document.createElement('div');
    DIV_SUBTITLE_SECONDS.classList.add('subtitle-clock');
    const SPAN_SECONDS = document.createElement('span');
    SPAN_SECONDS.innerText = 'SECONDS'; 
    DIV_SUBTITLE_SECONDS.append(SPAN_SECONDS);

    DIV_PRINCIPAL_SECONDS.append(DIV_NUMBER_SECONDS, DIV_SUBTITLE_SECONDS);



    DIV_CLOCK.append(DIV_PRINCIPAL_DAYS, DIV_PRINCIPAL_HOURS, DIV_PRINCIPAL_MINUTES, DIV_PRINCIPAL_SECONDS);

    return DIV_CLOCK;

}

