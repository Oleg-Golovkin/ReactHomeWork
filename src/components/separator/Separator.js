import "./separator.sass"
import times from "../../icons/separator/times.png"

const Separator = ({classSection} ) => {
    return (
        <div className={`separator separator_${classSection}`}>
            <div className="separator__icon-wrapper">                
                <div className="separator__line"></div>
                <div className="separator__round"></div>
                <div className="separator__squareMin"></div>
                <div className="separator__squareBig"></div>
            </div>

            <div className={`separator__сentral-icon separator__сentral-icon_${classSection}`}></div>

            <div className="separator__icon-wrapper separator__icon-wrapper_left">                
                <div className="separator__line"></div>
                <div className="separator__round"></div>
                <div className="separator__squareMin"></div>
                <div className="separator__squareBig"></div>
            </div>        
        </div>
    )
}

export default Separator