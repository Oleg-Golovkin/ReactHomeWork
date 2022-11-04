import {useSelector} from "react-redux";
import iconlabel from '../../icons/iconlabel.png';
import iconEarth from '../../icons/iconEarth.png';
import iconUser from '../../icons/iconUser.png';


import Menu, { SubMenu, MenuItem } from 'rc-menu';
import './header.sass'


const Header = () => {
    const headerMenu = useSelector(state=> state.headerSlice.headerMenu)
    // let li = headerMenu.map((item, i)=> {
    //     return(
    //         <li className="menu-header__item">{item}</li> 
    //     )
       
    // })

    return(
        <section className="header">
            <header
            className="header__wrapper container">
                <div className="header__lable label-header">
                    <img src={iconlabel} alt="Iconlabel" class="label-header__img"></img>
                </div>  
                <ul className="header__menu menu-header liReset">
                <Menu>
                    <MenuItem>1</MenuItem>
                    <SubMenu title="2">
                        <MenuItem>2-1</MenuItem>
                    </SubMenu>
                </Menu>
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