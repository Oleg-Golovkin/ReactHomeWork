import populyarnye from './../../icons/lots/populyarnye.png'

import './lots.sass'


const Lots = () => {
    return(
        <section className="lots">
            <img 
                src={populyarnye} 
                className="title title_lots"
                alt='title'>
            </img>
            <h2 className="sub-title sub-title_lots">
                лоты Под аукцион
            </h2>
            <div class="lots__icons ">
                <div class="lots__icon-wrapper">                
                    <div class="lots__line"></div>
                    <div class="lots__round"></div>
                    <div class="lots__squareMin"></div>
                    <div class="lots__squareBig"></div>
                </div>

                <div className="lots__times"></div>

                <div class="lots__icon-wrapper">                
                    <div class="lots__line"></div>
                    <div class="lots__round"></div>
                    <div class="lots__squareMin"></div>
                    <div class="lots__squareBig"></div>
                </div>
                
                
            </div>
                
        </section> 
    )
}

export default Lots