import './header'

const Header = () => {
    return(
        <header className="header._container">
            <button className="header__btnMarvelHome">Marvel information portal</button>
            <div className="header__wrapper">
                <button class="header__btnCharacters">Characters</button>
                /
                <button class="header__btnComics">Comics</button>
            </div>
        </header>        
    )
}

export default Header