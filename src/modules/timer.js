function timer(deadLine, index = 0) {
    const timerDays = document.querySelectorAll('.count-wrap .count_1 span')[index],
        timerHours = document.querySelectorAll('.count-wrap .count_2 span')[index],
        timerMinutes = document.querySelectorAll('.count-wrap .count_3 span')[index],
        timerSeconds = document.querySelectorAll('.count-wrap .count_4 span')[index];

    function getTimeRemaining(deadLineArg) {
        const dateStop = new Date(deadLineArg).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 3600) % 24),
            days = Math.floor(timeRemaining / 3600 / 24);

        return { timeRemaining, days, hours, minutes, seconds };
    }

    updateClock();
    const intervalIndex = setInterval(() => {
        updateClock();
    }, 1000);

    function updateClock() {
        const timer = getTimeRemaining(deadLine);
        timerDays.textContent = (timer.days / 10 < 1) ? '0' + timer.days : timer.days;
        timerHours.textContent = (timer.hours / 10 < 1) ? '0' + timer.hours : timer.hours;
        timerMinutes.textContent = (timer.minutes / 10 < 1) ? '0' + timer.minutes : timer.minutes;
        timerSeconds.textContent = (timer.seconds / 10 < 1) ? '0' + timer.seconds : timer.seconds;

        if (timer.timeRemaining <= 0) {
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(intervalIndex);
        }
    }
}

export default timer;
