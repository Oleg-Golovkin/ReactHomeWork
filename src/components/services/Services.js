import Separator from "../separator/Separator"
import "./services.sass"



import detail from '../../img/services/detail.png'
import magnifyingGlass from '../../img/services/magnifyingGlass.png'
import screwdriver from '../../img/services/screwdriver.png'
import additional from '../../img/services/additional.png'


const Services = () => {
    return(
        <section className="services">
            <img 
                src={additional} 
                className="title title_services"
                alt='title'>
            </img>
            <h2 className="sub-title sub-title_services">
                услуги
            </h2>
            <div className="container">
                <Separator 
                classSection={"services"}/>
            </div>

            <div className="services__dsc dsc-services">
                <div className="dsc-services__item">
                    <div className="dsc-services__wrapper-img">
                        <img src={magnifyingGlass} alt="magnifyingGlass" />
                    </div>
                    <div className="dsc-services__title">Экспертная оценка</div>
                    <div className="dsc-services__dsc">Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный</div>
                    <div className="dsc-services__more-wrapper">
                        <div className="dsc-services__line"></div>                        
                        <div className="dsc-services__more">Подробнее</div>
                        <div className="dsc-services__line"></div>                        
                    </div>
                </div>   
            </div>

        </section>
    )
}

export default Services