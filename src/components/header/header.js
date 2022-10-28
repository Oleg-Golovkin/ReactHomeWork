const Header = () => {
    return(
        <header className="header _container">
            <button className="header__btn _reset-btn"> <span>Marvel</span>  information portal</button>
            <div className="header__wrapper">
                <button class="header__btn _reset-btn">Characters</button>
                /
                <button class="header__btn _reset-btn">Comics</button>
            </div>
        </header>        
    )
}

export default Header