import iconlabel from '../../icons/header/iconlabel.png';

import './footer.sass'
import {useSelector} from "react-redux"








const Footer = ()=> {
    const footerNav = useSelector(state=> state.footerSlice.footerNav)
    console.log(footerNav);
    const Nav = () => footerNav.map(item => {
        return (
            <li className="nav-footer__item" >{item}</li>
        )
    })
    return(
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__lable label-footer">
                        <div className="label-footer__img">
                            <img src={iconlabel} alt="Iconlabel"></img>
                        </div>
                        <div className="label-footer__protection">Все права защищены © 2014</div>
                    </div> 
                    <ul className="footer__nav nav-footer">
                        <Nav/>
                    </ul>
                    <div className="footer__feedback feedback-footer">
                        <a className='feedback-footer__tel' href="tel:+7495222222"><span>+7</span>(495) 22-22-22</a>
                        <a className="feedback-footer__feedback"><span>Обратная связь</span></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer