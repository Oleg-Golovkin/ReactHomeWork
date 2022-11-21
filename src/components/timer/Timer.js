import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    onDays,
    onHours,
    onMinutes,
    onSeconds} from './timerSlice'

const Timer = ({deadline = "2022-12-07"}) => {

    const dispatch = useDispatch();
    const days = useSelector((state)=> state.timerSlice.time.days)
    const hours = useSelector((state)=> state.timerSlice.time.hours)
    const minutes = useSelector((state)=> state.timerSlice.time.minutes)
    const seconds = useSelector((state)=> state.timerSlice.time.seconds)

    const time = (endtime)=> {
            const t_s = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
                    days_s = Math.floor((t_s / 1000 / 60 / 60 / 24) % 24),
                    hours_s = Math.floor((t_s / 1000 / 60 / 60) % 24),
                    minutes_s = Math.floor((t_s / 1000 / 60) % 60),
                    seconds_s = Math.floor((t_s / 1000) % 60); 
            
            dispatch(onDays(getTimeZero(days_s)))
            dispatch(onHours(getTimeZero(hours_s)))
            dispatch(onMinutes(getTimeZero(minutes_s)))
            dispatch(onSeconds(getTimeZero(seconds_s)))
        return t_s
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

    const setKlock = (endtime) => {
        const interval = setInterval(intervalKlock, 1000); 
        
        function intervalKlock() {
            time(endtime);
            if(time(endtime)<= 0) {
                clearInterval(interval)
                dispatch(onDays("00"))
                dispatch(onHours("00"))
                dispatch(onMinutes("00"))
                dispatch(onSeconds("00"))
            }
        }
    }
    
    useEffect(()=> {
        setKlock(deadline)
    }, [])

    return (
        <div class="timer1" id="timer">
            <p>
            {/* <h4>ДО ЗАВЕРШЕНИЯ АКЦИИ:</h4> */}
            </p>
            <div class="container1">
            <div class="numbers1">
                <div><span id="days">{days}</span></div>
                <div class="description1">Дней</div>
            </div>
            <div class="numbers1">
                <div><span id="hours">{hours}</span></div>
                <div class="description1">Часов</div>
            </div>
            <div class="numbers1">
                <div><span id="minutes">{minutes}</span></div>
                <div class="description1">Минут</div>
            </div>
            <div class="numbers1">
                <div><span id="seconds">{seconds}</span></div>
                <div class="description1">Секунд</div>
            </div>
            </div>
        </div>
    )
}


export default Timer