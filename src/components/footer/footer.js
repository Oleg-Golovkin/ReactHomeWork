import iconlabel from '../../icons/header/iconlabel.png';


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
        <div className="container">
            <div className="footer__lable label-footer">
                <img src={iconlabel} alt="Iconlabel" className="label-footer__img"></img>
                <div class="label-footer__protection">Все права защищены</div>
            </div> 
            <ul className="footer__nav nav-footer">
                <Nav/>
            </ul>
            <div className="footer__feedback feedback-footer">
                <a className='feedback-footer__tel' href="tel:+7495222222">+7 (495) 22-22-22</a>
                <a class="feedback-footer__feedback">Обратная связь</a>
                
            </div>
            
        </div>
    )
}

export default Footer