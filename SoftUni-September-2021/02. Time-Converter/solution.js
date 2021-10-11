function attachEventsListeners() {
    let obj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convert(DHMS, type){
        let inDays = DHMS / obj[type];

        return {
            days: inDays,
            hours: inDays * obj.hours,
            minutes: inDays * obj.minutes,
            seconds: inDays * obj.seconds,
        }
    }

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function onConvert(e){
        let input = e.target.parentElement.querySelector('input[type="text"]');
        let inputid = input.id
        let time = convert(input.value, inputid);
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
    }



}


/*
function attachEventsListeners() {

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    } 

    function convert(value, unit){
        const inDays = value / ratios[unit];

        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds,
        }
    }

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onConvert)
    document.getElementById('hoursBtn').addEventListener('click', onConvert)
    document.getElementById('minutesBtn').addEventListener('click', onConvert)
    document.getElementById('secondsBtn').addEventListener('click', onConvert)

    function onConvert(e){
        let input = e.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
    }
}

*/