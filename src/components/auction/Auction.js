import {useSelector, useDispatch} from "react-redux";
import uniqid from 'uniqid';


import background from './../../img/auction_backgraund.png';


import './auction.sass'

const Auction = ()=> {
    return(
        <section className="auction">
            <div class="auction__content ">
                <div class="auction__title-exclusive">
                    Только эксклюзивные
                </div>
                <h2 class="auction__title-lots">
                    Лоты под аукцион и свобоДную продажу
                </h2>
                <div class="auction__dsc">
                    Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный 
                    и автоматизированный сервис по покупке и продаже, а также выставлению 
                    лотов на аукцион, предоставляем личные кабинеты, 
                    а также оказываем сопутствубщие услуги с продажей редких и дорогих вещей
                </div>
                <button class="auction__btn-join">
                    Присоединиться
                </button>
            </div>
        </section>
    )
}

export default Auction