// import {useSelector} from "react-redux"
import {useSelector} from "react-redux"
import "./range.sass"

const Range = () => {
    const mediaMin766px = useSelector(state=> state.mediaSlice.mediaMin766px)
    const itemsRange = useSelector((state)=> state.rangeSlice.itemsRange )
    const FigureRange = () => {
            return (
                <div  className="items-range__figure figure-range">
                    <div className="figure-range__square"></div>
                    <div className="figure-range__line"></div>
                    <div className="figure-range__round"></div>
                    <div className="figure-range__line"></div>
                </div>
                )
    }
    const Li = () => itemsRange.map(({name, clazz}, i)=> {
        
        // const figureRangeBlock = i % 2 === 0 && mediaMin766px ? <FigureRange/> : null
        return (
            <li className={`items-range__item items-range__item_${clazz}`}><span>{name}</span>
                {mediaMin766px ? <FigureRange/> : i % 2 === 0 ? <FigureRange/> : null}
            </li>
        )
    })

    return (
        <section className="range container container_range">
            <ul className="range__items items-range">
                <Li/>
            </ul> 
        </section>
    )
}

export default Range