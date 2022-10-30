import "./randomChar.sass"
import cardChar from '../../img/thor.jpeg'

const RandomChar = () => {
    return(
      <>
      <div className="randomChar">
          <div className="randomChar__card card-randomChar">
            <div class="card-randomChar__picture-wrapper">
              <img
                  alt='cardChar'
                  src={cardChar}
                  class="card-randomChar__picture"></img>
            </div>
            <div class="card-randomChar__dsc"> 
              <div class="card-randomChar__title">
                Thor
              </div>
              <div class="card-randomChar__text">
                As the Norse God of thunder and lightning, Thor wields one of the greatest 
                weapons ever made, the enchanted hammer Mjolnir. While others have described 
                Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
              </div>
              <div class="card-randomChar__wrapperBTN">
                <button class="card-randomChar__btn _reset-btn">HOMEPAGE</button>
                <button class="card-randomChar__btn _reset-btn">WIKI</button>
              </div>
            </div>      
          </div>          
        </div> 

        <div className="randomChar">
        
        </div>
      </>
        
    )
};
export default RandomChar