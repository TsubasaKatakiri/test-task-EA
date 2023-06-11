const clock = (daysSelector, hoursSelector, minutesSelector, secondsSelector, targetDate = Date.now()) => {
    const timeDays = document.querySelector(daysSelector);
    const timeHours = document.querySelector(hoursSelector);
    const timeMinutes = document.querySelector(minutesSelector);
    const timeSeconds = document.querySelector(secondsSelector);

    const MINUTE_SECONDS = 60;
    const HOUR_MINUTES = 60;
    const DAY_HOURS = 24;

    const zeroingValue = (value) => {
        if(value < 10) return `0${value}`;
        return `${value}`;
    }

    const setTime = () => {
        const currentDate = Date.now();
        const dateDiff = Math.trunc((targetDate - currentDate) / 1000) > 0 ? Math.trunc((targetDate - currentDate) / 1000) : 0;
        const days = Math.floor(dateDiff / (MINUTE_SECONDS * HOUR_MINUTES * DAY_HOURS));
        const hours = Math.floor(dateDiff / (MINUTE_SECONDS * HOUR_MINUTES)) - (days * DAY_HOURS);
        const minutes = Math.floor(dateDiff / MINUTE_SECONDS) - (days * DAY_HOURS * HOUR_MINUTES) - (hours * HOUR_MINUTES);
        const seconds = dateDiff - (days * DAY_HOURS * HOUR_MINUTES * MINUTE_SECONDS) - (hours * HOUR_MINUTES * MINUTE_SECONDS) - (minutes * MINUTE_SECONDS);
        timeDays.innerHTML = zeroingValue(days);
        timeHours.innerHTML = zeroingValue(hours);
        timeMinutes.innerHTML = zeroingValue(minutes);
        timeSeconds.innerHTML = zeroingValue(seconds);
    }

    setTime();

    setInterval(() => {
        setTime();
    }, 1000);
}

export default clock;