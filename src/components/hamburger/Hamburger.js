import './humburgers.scss'
import {useSelector, useDispatch} from "react-redux";
import {onActiveClass} from './hamburgerSlice'

const Hamburger = () => {
    const activeClass = useSelector(state=> state.hamburgerSlice.activeClass)
    const dispatch = useDispatch(onActiveClass(!activeClass))
    const clazz = `hamburger hamburger--3dx`
    return (
        <>
            <div onClick={dispatch} class={clazz}>
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>
        </>
    )
}

export default Hamburger 