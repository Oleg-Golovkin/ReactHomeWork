import populyarnye from './../../icons/lots/populyarnye.png'

import Separator from "../separator/Separator"
import './lots.sass'


const Lots = () => {
    return(
        <section className="lots container">
            <img 
                src={populyarnye} 
                className="title title_lots"
                alt='title'>
            </img>
            <h2 className="sub-title sub-title_lots">
                лоты Под аукцион
            </h2>
            <Separator/>                
        </section> 
    )
}

export default Lots