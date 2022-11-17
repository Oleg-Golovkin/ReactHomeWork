import titleExclusiv from './../../icons/auction/title_exclusiv.png'



const Lots = () => {
    return(
        <section className="lots">
            <img 
                    src={titleExclusiv} 
                    className="title"
                    alt='title'>
                </img>
                <h2 className="sub-title">
                    Лоты под аукцион и свободную продажу
                </h2>
        </section> 
    )
}

export default Lots