import "./separator.sass"

const Separator = () => {
    return (
        <div className="separator">
            <div className="separator__icon-wrapper">                
                <div className="separator__line"></div>
                <div className="separator__round"></div>
                <div className="separator__squareMin"></div>
                <div className="separator__squareBig"></div>
            </div>

            <div className="separator__times"></div>

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