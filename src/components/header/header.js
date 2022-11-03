import './header.sass'
// import moduleName from '../../icons/iconlabel';


const Header = () => {
    return(
        <header className="header container">
            <div className="header__lable label-header">
                <img src="" alt="Iconlabel" class="label-header__img"></img>
            </div>  
            <ul class="header__menu menu-header">
                <li className="menu-header__item">главная</li>
                <li className="menu-header__item">аукцион</li>
                <li className="menu-header__item">о проекте</li>
                <li className="menu-header__item">партнерам</li>
                <li className="menu-header__item">контакты</li>
            </ul>
            <div class="header__region region-header">
                <img src="" alt= "iconEarth" class="region-header__earth"></img>
                <div class="region-header__choice">выбор региона</div>
            </div>
            <div className="user">
                <img src="" alt="iconUser" className="user__icon"/>
            </div> 
        </header>         
    )
}

export default Header