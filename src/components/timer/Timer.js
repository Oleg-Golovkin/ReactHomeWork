
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {onT,
    onDays,
    onHours,
    onMinutes,
    onSeconds} from './timerSlice'

    const Timer = ({deadline = "2022-12-07"}) => {

    const dispatch = useDispatch();
    const t = useSelector((state)=> state.timerSlice.time.t)
    const days = useSelector((state)=> state.timerSlice.time.days)
    const hours = useSelector((state)=> state.timerSlice.time.hours)
    const minutes = useSelector((state)=> state.timerSlice.time.minutes)
    const seconds = useSelector((state)=> state.timerSlice.time.seconds)

    function time(endtime) {
            dispatch(onT(Date.parse(endtime) - Date.parse(new Date()) - 10800000))
            dispatch(onDays(Math.floor((t / 1000 / 60 / 60 / 24) % 24)))
            dispatch(onHours(Math.floor((t / 1000 / 60 / 60) % 24)))
            dispatch(onMinutes(Math.floor((t / 1000 / 60) % 60)))
            dispatch(onSeconds(Math.floor((t / 1000) % 60)))
    }

    // function getTimeZero(num) {
    //     // функция по добавлению нуля
    //     // в таймере в тех случаях, когда цифра больше нуля, 
    //     // но меньше 10
    //     if (num > 0 && num < 10) {
    //         return "0" + num;
    //     } else {
    //         return num;
    //     }
    // }


    const timerInterval = setInterval(intervalKlock, 1000);
    function intervalKlock(endtime) {
        time(endtime);
    }

    useEffect(()=> {        
        intervalKlock(deadline);
        return(
            clearInterval(timerInterval)
        )
    })

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
