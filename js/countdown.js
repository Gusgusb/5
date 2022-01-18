const getRemainTime = deadline => {
    let now = new Date();
    let remainTime = (new Date(deadline) - now + 1000) / 1000;

    let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2); 
    let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
    let remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);
        el.innerHTML = `<span id="days">${t.remainDays} <small>DÍAS</small></span> 
                        <span id="hours">${t.remainHours} <small>HORAS</small> </span>
                        <span id="minutes">${t.remainMinutes} <small>MINUTOS</small> </span>
                        <span id="seconds">${t.remainSeconds} <small>SEGUNDOS</small> </span>`;

        if(t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML(finalMessage);
        }
    }, 1000);
};

countdown('Mar 12 2022 16:30:00 GMT-0500', 'countdown', "Es hoy!!!");
