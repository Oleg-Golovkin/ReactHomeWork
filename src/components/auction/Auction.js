// import {useSelector, useDispatch} from "react-redux";
// import uniqid from 'uniqid';


// import background from './../../img/auction_backgraund.png';
import titleExclusiv from './../../icons/auction/title_exclusiv.png'


import './auction.sass'

const Auction = ()=> {
    return(
        <section className="auction">
            <div className="auction__content container">
                <img 
                    src={titleExclusiv} 
                    className="auction__title-exclusive"></img>
                <h2 className="auction__title-lots">
                    Лоты под аукцион и свободную продажу
                </h2>
                <div className="auction__dsc">
                    Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный 
                    и автоматизированный сервис по покупке и продаже, а также выставлению 
                    лотов на аукцион, предоставляем личные кабинеты, 
                    а также оказываем сопутствубщие услуги с продажей редких и дорогих вещей
                </div>
                <button className="auction__btn-join">
                    Присоединиться
                </button>
            </div>
        </section>
    )
}

export default Auction