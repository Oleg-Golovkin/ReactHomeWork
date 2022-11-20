
import { useEffect } from "react";
import { useState } from "react";

    const Timer = () => {
    const [t_s, setT_s] = useState();
    const [years_s, setYears] = useState();
    const [days_s, setDays_s] = useState();
    const [hours_s, setHours_s] = useState();
    const [minutes_s, setMinutes_s] = useState();
    const [seconds_s, setSeconds_s] = useState();


    const deadline = "2022-12-07";
    /* везде подставляем вместо 
       аргумента endtime */

    function time(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()) - 10800000,
    /*         // Дата всегда показываеся по начальному часовому поясу.
            // Москва + 3 часа.Соответственно дата всегда будет на 
            // три часа больше.Чтобы этого не было 3 часа это 10800000 
            // милисекунд.Значит от полученной в переменной t количества 
            // милисекунд отнять 3 часа в милисекундах */
            years = Math.floor(t / 1000 / 60 / 60 / 24 / 365),
            days = Math.floor((t / 1000 / 60 / 60 / 24) % 24),
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
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
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

        return {
            // закидываем полученный результат в объект, чтобы
            // проще было вытаскивать из него значения в функции ниже
            // intervalKlock() */
            "total": t,
            "years": years,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
        };
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

    function setKlock(endtime) {
        const timerInterval = setInterval(intervalKlock, 1000);
        // задаем повторяющейся через 1000 млс (1 сек) интервал
        intervalKlock(endtime);

        function intervalKlock() {
            /* тело этой функции помещаем 
            в интервал, для повторения этого тела каждую секунду */
            const t = time(endtime);
            
            setYears(t.years);
            setDays_s(t.days);
            setHours_s(t.hours_s);
            setMinutes_s(t.minutes_s);
            setSeconds_s(t.seconds_s);
            
            // years.innerHTML = getTimeZero(t.years);
            // days.innerHTML = getTimeZero(t.days);
            // // // присваиваем к полученным из верстки переменным
            // // // те значения, которые мы получили из функции time(endtime).
            // // // Как видно мы обращаемся через точку к объекту, через перменную
            // // // t */
            // hours.innerHTML = getTimeZero(t.hours);
            // minutes.innerHTML = getTimeZero(t.minutes);
            // seconds.innerHTML = getTimeZero(t.seconds);
            if (t.total <= 0) {
                // прекращаем интервал, когда он дойдет до нуля */
                clearInterval(timerInterval);           
                // Обнуляем счетчик
            //     hours.innerHTML = '00';
            //     minutes.innerHTML = '00';
            //     seconds.innerHTML = '00';
            //     years.innerHTML = '00';
            //     days.innerHTML = '00';
            }
        }
    }

    
    // Вызываем функцию по 
    // вычислению разницы между желаемой датой и действующей,
    // с присвоением полученного значения кажды раз через секунду */

    useEffect(()=> {
        setKlock(deadline);
        console.log();
    })



    return (
        <div class="timer1" id="timer">
            <p>
            <h4>ДО ЗАВЕРШЕНИЯ АКЦИИ:</h4>
            </p>
            <div class="container1">
            <div class="numbers1">
                <div><span id="days">08</span></div>
                <div class="description1">Дней</div>
            </div>
            <div class="numbers1">
                <div><span id="hours">18</span></div>
                <div class="description1">Часов</div>
            </div>
            <div class="numbers1">
                <div><span id="minutes">33</span></div>
                <div class="description1">Минут</div>
            </div>
            <div class="numbers1">
                <div><span id="seconds">44</span></div>
                <div class="description1">Секунд</div>
            </div>
            </div>
        </div>
    )
}


export default Timer
