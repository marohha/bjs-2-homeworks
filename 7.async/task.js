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

        const canCall = () => callback = true; // пробовал и так 

        // const func = callback = () => true;  
        // const canCall = func;

        // и так пробовал, но не могу понять принцип куда здесь присваивать callBack. Не могу понять последовательность.
        // и еще десяток вариантов у меня было =)))

        this.alarmCollection.push({callback, time, canCall});
    }

    removeClock(timeNew) {
        delete this.alarmCollection.filter(timeNew => timeNew === this.time);
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
        setInterval(() => this.alarmCollection.forEach((item) => {
            if (this.time === new Date() && item.canCall === true) {
                item.canCall = false;
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
        this.stop(() => this.alarmCollection = []);
    }



}