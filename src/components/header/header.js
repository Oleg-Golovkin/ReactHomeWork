import './header.sass'
import ikonka_5067 from "..icons/ikonka_5067.pn"

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <div className="hamburger hamburger--3dx" id="header">
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
                <div className="menu">
                </div>
                <div className="menu__background"></div>
                <div className="header__main">
                    <ul className="header__content-ul">
                        <li><a href="#">Бренды</a></li>
                        <li><a href="#">Распродажа</a></li>
                        <li><a href="#">Доставка и Сборка</a></li>
                        <li><a href="#">Гарантия</a></li>
                        <li><a href="#">Оплата</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <div className="header__logo">
                        <div className="header__logo-main">Logo</div>
                        <div className="header__logo-dsc">спортивный магазин</div>

                    </div>
                    <div className="header__contacts">
                        <div className="header__contacts-first">
                            <div className="header__contacts-first-img-wrapper">
                                <img src= {ikonka_5067} alt=""></img>
                            </div>
                            <div className="header__contacts-first-wrapper">
                                <div className="header__contacts-first-city">Москва</div>
                                <a className="header__contacts-first-link"
                                    href="tel:+84991234567"><span>8-499-123-45-67</span></a>
                            </div>
                        </div>

                        <div className="header__contacts-second">
                            <div className="header__contacts-second-city">Бесплатно для России</div>
                            <a className="header__contacts-second-link" href="tel:+88005550121">8-800-555-01-21</a>
                        </div>
                    </div>
                </div>
                <div className="header__secondary">
                    <div className="header__sub-secondary">
                        <div className="header__sub-secondary-wrapper" id="a">
                            <div className="header__sub-secondary-img">
                                <img src="icons/ikonka_5043.png" alt=""></img>
                            </div>
                            <a href="#" className="header__sub-secondary-dsc header__sub-secondary-dsc_gray">
                                Вход
                            </a>
                        </div>
                        <div className="header__sub-secondary-wrapper">
                            <div className="header__sub-secondary-img">
                                <img src="icons/ikonka_pri_navedenii_5044.png" alt=""></img>
                            </div>
                            <a href="#" className="header__sub-secondary-dsc header__sub-secondary-dsc_blue">
                                Регистрация
                            </a>
                        </div>
                        <div className="header__sub-secondary-wrapper">
                            <div className="header__sub-secondary-img">
                                <img src="icons/ikonka_5068.png" alt=""></img>
                            </div>
                            <a href="#" className="header__sub-secondary-dsc header__sub-secondary-dsc_blue">
                                sport@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="header__sub-secondary">
                        <div className="header__sub-secondary-wrapper">
                            <div className="header__sub-secondary-img">
                                <img src="icons/ikonka_5038.png" alt=""></img>
                            </div>
                            <a href="#" className="header__sub-secondary-dsc header__sub-secondary-dsc_blue">
                                Обратный звонок
                            </a>
                        </div>
                        <div className="header__sub-secondary-wrapper">
                            <div className="header__sub-secondary-img">
                                <img src="icons/ikonka_5063.png" alt=""></img>

                            </div>
                            <div className="header__sub-secondary-dsc header__sub-secondary-dsc_color-font">
                                <div className="header__sub-secondary-days">
                                    <span>Пн–Пт:</span> 09:00–21:00;
                                </div>
                                <div className="header__sub-secondary-days">
                                    <span>Сб–Вс:</span> 10:00–20:00;
                                </div>
                            </div>
                        </div>

                        <div className="basket basket_header">
                            <div className="basket__img-number basket__img-number_header">
                                <div className="basket__img basket__img_header"></div>
                                <span className="basket__number basket__number_header">12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>         
    )
}

export default Header