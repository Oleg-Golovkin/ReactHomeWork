import './humburgers.scss'
import {useSelector, useDispatch} from "react-redux";
import {onActiveClass} from './hamburgerSlice'

const Hamburger = () => {
    const activeClass = useSelector(state=> state.hamburgerSlice.activeClass)
    const dispatch = useDispatch()
    const clazz = `hamburger hamburger--3dx ${activeClass? 'is-active' : ""}`
    return (
        <>
            <div
                onClick={()=> dispatch(onActiveClass(!activeClass))}
                className={clazz}>
                <div className="hamburger-box">
                    <div
                        
                        className="hamburger-inner"></div>
                </div>
            </div>
        </>
    )
}

export default Hamburger 