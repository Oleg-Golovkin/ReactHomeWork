import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import '../timer/timer.sass'
import {onTime} from './timerSlice'

const Timer = ({deadline}) => {
    const dispatch = useDispatch();
    const days = useSelector((state)=> state.timerSlice.time.days);
    const hours = useSelector((state)=> state.timerSlice.time.hours);
    const minutes = useSelector((state)=> state.timerSlice.time.minutes);
    const seconds = useSelector((state)=> state.timerSlice.time.seconds);

    function time (endTime) {
        // console.log(endTime);
        const t = Date.parse(endTime) - Date.parse(new Date()) - 10800000;
        const times = {
                days: Math.floor((t / 1000 / 60 / 60 / 24) % 24),
                hours: Math.floor((t / 1000 / 60 / 60) % 24),
                minutes: Math.floor((t / 1000 / 60) % 60),
                seconds: Math.floor((t / 1000) % 60)
        }
        dispatch(onTime(times));
        return t
    }
    // time(deadline)
    // const {t, times} = time()
    // console.log(times.days);
    
    
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
            if(time(endTime)<= 0) {
                clearInterval(interval)
                dispatch(onTime(
                    {
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00"
                    }
                ))
            }
        }
    }

    useEffect(()=> {
        setKlock(deadline)
    // eslint-disable-next-line  
    }, [])

    return (
        <div class="timer">
            <div class="numbers1">
                <div><span id="days">{getTimeZero(days)}:</span></div>
            </div>
            <div class="numbers1">
                <div><span id="hours">{getTimeZero(hours)}:</span></div>
            </div>
            <div class="numbers1">
                <div><span id="minutes">{getTimeZero(minutes)}:</span></div>
            </div>
            <div class="numbers1">
                <div><span id="seconds">{getTimeZero(seconds)}</span></div>
            </div>
        </div>
    )
}


export default Timer