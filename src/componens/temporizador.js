const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};

export const countdown = (deadline, elem) => {

    const temp = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainingTime(deadline);

        temp.innerHTML = `
            <div><p id="seconds">${t.remainDays}</p><span>DAYS</span></div>
            <div><p id="seconds">${t.remainHours}</p><span>HOURS</span></div>
            <div><p id="seconds">${t.remainMinutes}</p><span>MINUTES</span></div>
            <div><p id="seconds">${t.remainSeconds}</p><span>SECONDS</span></div>
        `;

    }, 1000)
};