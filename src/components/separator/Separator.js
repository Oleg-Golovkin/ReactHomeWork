import "./separator.sass"


const Separator = ({classSection, img, subTitle} ) => {
    return (
        <>
            <img 
                src={img} 
                className={`title title_${classSection}`}
                alt='title'>
            </img>
            <h2 className={`sub-title sub-title_${classSection}`}>
                {subTitle}
            </h2>
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
        </>
    )
}

export default Separator