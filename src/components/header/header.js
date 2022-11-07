import {useSelector} from "react-redux";
import iconlabel from '../../icons/iconlabel.png';
import iconEarth from '../../icons/iconEarth.png';
import iconUser from '../../icons/iconUser.png';
import uniqid from 'uniqid';


import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';

import 'rc-menu/assets/index.css';
import 'rc-menu/assets/menu.sass';

import './header.sass'



const Header = () => {
    const headerMenu = useSelector(state=> state.headerSlice.headerMenu)
    let item = headerMenu.map((item, i)=> {
        return(
            <SubMenu  
                key={uniqid()}
                title={item}>
                    <MenuItem                    
                    key={uniqid()}>Главное
                    </MenuItem>
                    <MenuItem 
                    key={uniqid()}>Самое главное
                    </MenuItem>
                    <MenuItem 
                    key={uniqid()}>Главнее быть не может
                    </MenuItem>
                    <SubMenu
                        key={uniqid()}
                        title={i}>
                        <MenuItem                        
                        key={uniqid()}>Главное
                        </MenuItem>
                        <MenuItem 
                        key={uniqid()}>Самое главное
                        </MenuItem>
                        <MenuItem 
                        key={uniqid()}>Главнее быть не может
                        </MenuItem>
                    </SubMenu>
            </SubMenu> 
        )
       
    })

    return(
        <section className="header">
            <header
            className="header__wrapper container">
                <div className="header__lable label-header">
                    <img src={iconlabel} alt="Iconlabel" class="label-header__img"></img>
                </div>  
                <Menu
                    className="header__menu menu-header"
                    mode="horizontal"
                    triggerSubMenuAction="click"
                    defaultActiveFirst= {false}
                    multiple={false}
                    selectable={true}>  
                    {item}                    
                </Menu>
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