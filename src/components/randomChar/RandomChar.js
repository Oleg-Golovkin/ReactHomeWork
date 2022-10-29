import "./randomChar.sass"

const RandomChar = () => {
    return(
        <div className="randomChar">
          <div className="randomChar__card card-randomChar">
            <img
              alt='cardChar'
              src="../../img/thor.jpeg"
              class="card-randomChar__picture"></img>
            <div class="card-randomChar__dsc">              
            </div>      
          </div>
        </div> 
    )
};
export default RandomChar