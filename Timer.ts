interface TimerObj {
    resume(): void;
    pause(): void;
    step(): number;
}

export const startTimer = (seconds: number, container: string, oncomplete?: any, timerNumbers?: any): any  => {
    let startTime: number;
    let timer: any;
    let ms = seconds * 1000;
    const display = document.getElementById(container);
    const obj = {} as TimerObj;


    obj.resume = () => {
        startTime = new Date().getTime();
        timer = setInterval(obj.step, 250); // adjust this number to affect granularity
        // lower numbers are more accurate, but more CPU-expensive
    };
    obj.pause = () => {
        ms = obj.step();
        clearInterval(timer);
    };
    obj.step = () => {
        const now = Math.max(0, ms - (new Date().getTime() - startTime));

        const m = Math.floor(now / 60000);
        let s = Math.floor(now / 1000) % 60 as string | number;
        s = (s < 10 ? '0' : '') + s;

        if (display) {
            display.innerHTML = m + ':' + s;
        }

        if (now === 0) {
            clearInterval(timer);
            obj.resume = () => { };
            if (timerNumbers) { clearInterval(timerNumbers); }
            if (oncomplete) { oncomplete(); }
        }
        return now;
    };
    obj.resume();
    return obj;
};
