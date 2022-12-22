import { createContador } from "./createContador";

const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = ('0' + Math.floor(remainTime / (3600 * 24)));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};

export const countdown = (deadline, elem) => {

    const TEMP = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainingTime(deadline);

        TEMP.innerHTML = ``
        TEMP.appendChild(createContador(t.remainDays, t.remainHours, t.remainMinutes, t.remainSeconds));

    }, 1000)
};


// export const countdown = (deadline, elem) => {

//     const TEMP = document.getElementById(elem);

//     const timerUpdate = setInterval(() => {
//         let t = getRemainingTime(deadline);

//         TEMP.innerHTML = `
//             <div>
//                 <div class="div-number">
//                     <p id="days">${t.remainDays}</p>
//                 </div>
//                 <div class="subtitle-clock">
//                     <span>DAYS</span>
//                 </div>
//             </div>
//             <div><div class="div-number"><p id="hours">${t.remainHours}</p></div><div class="subtitle-clock"><span>HOURS</span></div></div>
//             <div><div class="div-number"><p id="minute">${t.remainMinutes}</p></div><div class="subtitle-clock"><span>MINUTES</span></div></div>
//             <div><div class="div-number"><p id="seconds">${t.remainSeconds}</p></div><div class="subtitle-clock"><span>SECONDS</span></div></div>
//         `;
//     }, 1000)
// };