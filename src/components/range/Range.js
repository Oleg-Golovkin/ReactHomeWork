// import {useSelector} from "react-redux"

import "./range.sass"

const Range = () => {
    
    
    return (
        <section className="range container container_range">
            <ul className="range__items items-range">
                <li className="items-range__item items-range__item_times"><span>Часы</span>
                    <div className="items-range__figure figure-range">
                        <div className="figure-range__square"></div>
                        <div className="figure-range__line"></div>
                        <div className="figure-range__round"></div>
                        <div className="figure-range__line"></div>
                    </div>
                </li>
                <li className="items-range__item items-range__item_jewelry"><span>Ювелирные изделия</span>
                        <div className="items-range__figure figure-range">
                            <div className="figure-range__square"></div>
                            <div className="figure-range__line"></div>
                            <div className="figure-range__round"></div>
                            <div className="figure-range__line"></div>
                        </div>
                    </li>
                <li className="items-range__item items-range__item_transport"><span>Автотранспорт и лодки</span>
                        <div className="items-range__figure figure-range">
                            <div className="figure-range__square"></div>
                            <div className="figure-range__line"></div>
                            <div className="figure-range__round"></div>
                            <div className="figure-range__line"></div>
                        </div>
                    </li>
                <li className="items-range__item items-range__item_accessories"><span>Аксуссуары</span>
                        <div className="items-range__figure figure-range">
                            <div className="figure-range__square"></div>
                            <div className="figure-range__line"></div>
                            <div className="figure-range__round"></div>
                            <div className="figure-range__line"></div>
                        </div>
                    </li>
                <li className="items-range__item items-range__item_real-estate"><span>Недвижимость</span>
                        <div className="items-range__figure figure-range">
                            <div className="figure-range__square"></div>
                            <div className="figure-range__line"></div>
                            <div className="figure-range__round"></div>
                            <div className="figure-range__line"></div>
                        </div>
                    </li>
                <li className="items-range__item items-range__item_hi-Tech"><span>Hi-Tech</span>
                        <div className="items-range__figure figure-range">
                            <div className="figure-range__square"></div>
                            <div className="figure-range__line"></div>
                            <div className="figure-range__round"></div>
                            <div className="figure-range__line"></div>
                        </div>
                    </li>
                <li className="items-range__item items-range__item_clothes"><span>Одежда и обувь</span>
                        <div className="items-range__figure figure-range">
                            <div className="figure-range__square"></div>
                            <div className="figure-range__line"></div>
                            <div className="figure-range__round"></div>
                            <div className="figure-range__line"></div>
                        </div>
                    </li>
                <li className="items-range__item items-range__item_art"><span>Предметы искусства</span>
                        <div className="items-range__figure figure-range">
                            <div className="figure-range__square"></div>
                            <div className="figure-range__line"></div>
                            <div className="figure-range__round"></div>
                            <div className="figure-range__line"></div>
                        </div>
                    </li>
                <li className="items-range__item items-range__item_food"><span>АЛкоголь и еда</span>
                        <div className="items-range__figure figure-range">
                            <div className="figure-range__square"></div>
                            <div className="figure-range__line"></div>
                            <div className="figure-range__round"></div>
                            <div className="figure-range__line"></div>
                        </div>
                    </li>
            </ul> 
        </section>
    )
}

export default Range