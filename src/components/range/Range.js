// import {useSelector} from "react-redux"
import {useSelector} from "react-redux"
import { useMediaQuery } from "react-responsive";
import "./range.sass"


const Range = () => {
    const itemsRange = useSelector((state)=> state.rangeSlice.itemsRange )
    const mediaMin766px = useSelector(state=> state.mediaSlice.mediaMin766px)
    const mediaMax950px = useMediaQuery({ query: '(max-width: 950px)' })
    const mediaMin950px = useMediaQuery({ query: '(min-width: 950px)' })
    const mediaMin768px = useMediaQuery({ query: '(min-width: 768px)' })
    const mediaMin600px = useMediaQuery({ query: '(min-width: 600px)' })
    

    const FigureRange = ({clazz}) => {

        return (
                <div  className="items-range__figure figure-range">
                    <div className="figure-range__square"></div>
                    <div className="figure-range__line"></div>
                    <div className="figure-range__round"></div>
                    <div className="figure-range__line"></div>
                    {(clazz == "clothes" || clazz == "art" || clazz == 'food') && mediaMin766px ? <div className="figure-range__square"></div> : null }
                </div>
                )
    }

    const FigureRound = () => {
        return(
            <div className="items-range__figure-round">
            </div>
        )
    }

    const Li = () => itemsRange.map(({name, clazz}, i)=> {
        const even = i % 2 === 0 
        return (
            <li className={`items-range__item items-range__item_${clazz}`}><span>{name}</span>
                {mediaMin950px ? <FigureRange clazz = {clazz}/> : null}
                {mediaMin768px && even ? <FigureRange clazz = {clazz}/> : null}
                <FigureRound/>
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