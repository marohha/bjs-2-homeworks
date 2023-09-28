class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (time in this.alarmCollection) {
            console.warn('Уже присутствует звонок на это же время');
        }

        let canCall = true;
        callback(() => canCall);
        this.alarmCollection.push({callback, time, canCall});
    }

    removeClock(timeNew) {
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time === timeNew) {
                this.alarmCollection.splice(timeNew, 2);
            }
        }
        // delete this.alarmCollection.filter(item => item.time === timeNew); 
    }

    getCurrentFormattedTime() {
        return String(new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          }));
    }

    start() {
        if (!this.intervalId === null) {
            return;
        }
        setInterval(() => this.alarmCollection.forEach((alarm) => {
            if (this.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
                alarm.canCall = false;
                callback();
            }
        }), 1000);
    }

    stop() {
        clearInterval(() => this.intervalId = null);
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop(); 
        this.alarmCollection = [];
    }



}