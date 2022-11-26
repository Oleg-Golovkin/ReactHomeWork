// import {useSelector} from "react-redux"

import "./range.sass"

const Range = () => {
    
    
    return (
        <section className="range container">
            <ul className="range__items items-range">
                <li className="items-range__item items-range__item_times">
                    <span>Часы</span>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    </li>
                <li className="items-range__item items-range__item_jewelry"><span>Ювелирные изделия</span></li>
                <li className="items-range__item items-range__item_transport"><span>Автотранспорт и лодки</span></li>
                <li className="items-range__item items-range__item_accessories"><span>Аксуссуары</span></li>
                <li className="items-range__item items-range__item_real-estate"><span>Недвижимость</span></li>
                <li className="items-range__item items-range__item_hi-Tech"><span>Hi-Tech</span></li>
                <li className="items-range__item items-range__item_clothes"><span>Одежда и обувь</span></li>
                <li className="items-range__item items-range__item_art"><span>Предметы искусства</span></li>
                <li className="items-range__item items-range__item_food"><span>АЛкоголь и еда</span></li>
            </ul> 
        </section>
    )
}

export default Range