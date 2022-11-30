import { useEffect } from "react";
import { useState } from "react";
import '../timer/timer.sass'

const Timer = ({deadline = "2022-12-05"}) => {
    const initialState = 
                    {t: "",
                    days: "",
                    hours: "",
                    minutes: "",
                    seconds: ""}
    const [timer, setTimer] = useState(initialState)

    function time (endTime) {
        setTimer(timer =>  ({
            ...timer, 
            t: Date.parse(endTime) - Date.parse(new Date()) - 10800000,
            days: Math.floor((timer.t / 1000 / 60 / 60 / 24) % 24),
            hours: Math.floor((timer.t / 1000 / 60 / 60) % 24),
            minutes: Math.floor((timer.t / 1000 / 60) % 60),
            seconds: Math.floor((timer.t / 1000) % 60)
        }))
    }    
    
    function getTimeZero(num) {
        // функция по добавлению нуля
        // в таймере в тех случаях, когда цифра больше нуля, 
        // но меньше 10
        if (num > 0 && num < 10) {
            return "0" + num;
        } else {
            return num;
        }
    }

    const setKlock = (endTime) => {
        const interval = setInterval(intervalKlock, 1000); 
        
        function intervalKlock() {
            time(endTime);
            if(time.t<= 0) {
                clearInterval(interval)
                setTimer(timer =>  ({
                    ...timer, 
                    t: "00",
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00"
                }))
            }
        }
    }
    useEffect(()=> {
        setKlock(deadline)
    // eslint-disable-next-line  
    }, [])

    return (
        <div className="timer">
            <div className="numbers1">
                <div><span id="days">{timer.days}:</span></div>
            </div>
            <div className="numbers1">
                <div><span id="hours">{getTimeZero(timer.hours)}:</span></div>
            </div>
            <div className="numbers1">
                <div><span id="minutes">{getTimeZero(timer.minutes)}:</span></div>
            </div>
            <div className="numbers1">
                <div><span id="seconds">{getTimeZero(timer.seconds)}</span></div>
            </div>
        </div>
    )
}


export default Timer