import "./randomChar.sass"
import cardChar from '../../img/thor.jpeg'

const RandomChar = () => {
    return(
        <div className="randomChar">
          <div className="randomChar__card card-randomChar">
            <img
              alt='cardChar'
              src={cardChar}
              class="card-randomChar__picture"></img>
            <div class="card-randomChar__dsc">              
            </div>      
          </div>
        </div> 
    )
};
export default RandomChar