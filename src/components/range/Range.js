// import {useSelector} from "react-redux"
import {useSelector} from "react-redux"
import { useMediaQuery } from "react-responsive";
import "./range.sass"


const Range = () => {
    const itemsRange = useSelector((state)=> state.rangeSlice.itemsRange )
    const mediaMax950px = useMediaQuery({ query: '(max-width: 950px)' })
    const mediaMin951px = useMediaQuery({ query: '(min-width: 951px)' })
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
        return (
            <li className={`items-range__item items-range__item_${clazz}`}><span>{name}</span>
                {mediaMax950px && i % 2 === 0 ? <FigureRange/> : mediaMin951px ? <FigureRange/> :  null}
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