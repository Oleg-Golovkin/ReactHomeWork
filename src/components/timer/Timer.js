
import { useEffect } from "react";
import { useState } from "react";

    const Timer = () => {
    const [t_s, setT_s] = useState();
    const [days_s, setDays_s] = useState();
    const [hours_s, setHours_s] = useState();
    const [minutes_s, setMinutes_s] = useState();
    const [seconds_s, setSeconds_s] = useState();

    const deadline = "2022-12-07";
    /* везде подставляем вместо 
        аргумента endtime */

    function time(endtime) {
            setT_s (Date.parse(endtime) - Date.parse(new Date()) - 10800000);
    /*         // Дата всегда показываеся по начальному часовому поясу.
            // Москва + 3 часа.Соответственно дата всегда будет на 
            // три часа больше.Чтобы этого не было 3 часа это 10800000 
            // милисекунд.Значит от полученной в переменной t количества 
            // милисекунд отнять 3 часа в милисекундах */
            setDays_s(Math.floor((t_s / 1000 / 60 / 60 / 24) % 24))
            // получаем количество дней до назначенной даты. 
            // То, что в скобках, это количество милисекунд в сутках.
            // То есть мы округляем милисекунды до секунд 
            // (делим на 1000), до менут (на 60),
            // до часов (на 60) до суток (на 24)
            // Нельзя было сразу 18 400 000 написать? 
            // Через указанный метод округляем получившееся 
            // часы (поскольку в результате выражения может 
            // получится дробное число), получившееся из
            // произведения желаемой даты и даты текущей).
            setHours_s(Math.floor((t_s / 1000 / 60 / 60) % 24))
            setMinutes_s(Math.floor((t_s / 1000 / 60) % 60))
            setSeconds_s(Math.floor((t_s / 1000) % 60))
        // Если до назначенной даты больше суток, 
        // то получем больше 24 часов (60 минут,
        // 60 секунд), а в таймере часы, минуты, секунды 
        // должны быть до 24 и 60 
        // соответственно. Чтобы такого не было через
        //  оператор процента мы делим 
        // полученные милисекунды t) по указанным формулам.
        // Оператор процента делит часы, минуты, секунды 
        // до того момента, пока не останется неделимый 
        // остаток (меньше часов (минут, секунд), 
        // то есть меньше 24 (60)). Этот остаток и будет
        // оставшееся часы (минуты, секунды) до назначенной даты.
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

    
    // Вызываем функцию по 
    // вычислению разницы между желаемой датой и действующей,
    // с присвоением полученного значения кажды раз через секунду */        



    return (
        <div class="timer1" id="timer">
            <p>
            <h4>ДО ЗАВЕРШЕНИЯ АКЦИИ:</h4>
            </p>
            <div class="container1">
            <div class="numbers1">
                <div><span id="days">{days_s}</span></div>
                <div class="description1">Дней</div>
            </div>
            <div class="numbers1">
                <div><span id="hours">{hours_s}</span></div>
                <div class="description1">Часов</div>
            </div>
            <div class="numbers1">
                <div><span id="minutes">{minutes_s}</span></div>
                <div class="description1">Минут</div>
            </div>
            <div class="numbers1">
                <div><span id="seconds">{seconds_s}</span></div>
                <div class="description1">Секунд</div>
            </div>
            </div>
        </div>
    )
}


export default Timer
