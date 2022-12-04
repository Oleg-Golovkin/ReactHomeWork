import Separator from "../separator/Separator"
import "./services.sass"



const Services = () => {
    return(
        <section className="services">
            <div className="container">
                <Separator backgroundImage={"services"}/>
            </div>

            <div className="services__dsc dsc-services">
                <div className="dsc-services__item">
                    <div className="dsc-services__wrapper-img">
                        <img src="" alt="" />
                    </div>
                    <div className="dsc-services__title"></div>
                    <div className="dsc-services__dsc"></div>
                    <div className="dsc-services__more-wrapper">
                        <div className="dsc-services__line"></div>                        
                        <div className="dsc-services__more"></div>
                        <div className="dsc-services__line"></div>                        
                    </div>
                    
                </div>
                
            </div>

        </section>
    )
}

export default Services