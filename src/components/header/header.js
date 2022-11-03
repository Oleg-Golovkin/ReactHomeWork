import './header.sass'
import iconlabel from '../../icons/iconlabel.png';
import iconEarth from '../../icons/iconEarth.png';
import iconUser from '../../icons/iconUser.png';


const Header = () => {
    return(
        <section className="header">
            <header className="header__wrapper container">
                <div className="header__lable label-header">
                    <img src={iconlabel} alt="Iconlabel" class="label-header__img"></img>
                </div>  
                <ul class="header__menu menu-header">
                    <li className="menu-header__item">главная</li>
                    <li className="menu-header__item">аукцион</li>
                    <li className="menu-header__item">о проекте</li>
                    <li className="menu-header__item">партнерам</li>
                    <li className="menu-header__item">контакты</li>
                </ul>
                <div class="header__region region-header">
                    <img src={iconEarth} alt= "iconEarth" class="region-header__earth"></img>
                    <div class="region-header__choice">выбор региона</div>
                </div>
                <div className="user">
                    <img src={iconUser} alt="iconUser" className="user__icon"/>
                </div> 
            </header> 
        </section>
                
    )
}

export default Header