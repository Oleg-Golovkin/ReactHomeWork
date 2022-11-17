import titleExclusiv from './../../icons/auction/title_exclusiv.png'


import './auction.sass'

const Auction = ()=> {
    return(
        <section className="auction container">
                <img 
                    src={titleExclusiv} 
                    className="title auction__title "
                    alt='auction__title'>
                </img>
                <h2 className="sub-title auction__sub-title ">
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
        </section>
    )
}

export default Auction