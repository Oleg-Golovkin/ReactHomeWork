import "./separator.sass"

const Separator = ({showLine} = true) => {
    return (
        <div className="separator separator_services">
            <div className="separator__icon-wrapper">                
                {showLine ? <div className="separator__line"></div> : null}
                <div className="separator__round"></div>
                <div className="separator__squareMin"></div>
                <div className="separator__squareBig"></div>
            </div>

            <div className="separator__times"></div>

            <div className="separator__icon-wrapper separator__icon-wrapper_left">                
                {showLine ? <div className="separator__line"></div> : null}
                <div className="separator__round"></div>
                <div className="separator__squareMin"></div>
                <div className="separator__squareBig"></div>
            </div>        
        </div>
    )
}

export default Separator