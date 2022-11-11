import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import uniqid from 'uniqid';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import Dropdown from 'rc-dropdown';
import {onCountriesSelected, onChangeModeMenu} from "./headerSlice.js";

import 'rc-menu/assets/index.css';
import 'rc-menu/assets/menu.sass';
import 'rc-dropdown/assets/index.css';
import iconlabel from '../../icons/header/iconlabel.png';
import iconEarth from '../../icons/header/iconEarth.png';
import iconUser from '../../icons/header/iconUser.png';
import './header.sass'



const Header = () => {
    const dispatch = useDispatch();
    const headerMenu = useSelector(state=> state.headerSlice.headerMenu)
    const countriesAnyDropdown = useSelector(state=> state.headerSlice.countriesAnyDropdown)
    const countriesSelected = useSelector(state=> state.headerSlice.countriesSelected)
    const modeMenu = useSelector(state=> state.headerSlice.modeMenu)
    const item = headerMenu.map((item, i)=> {
        return(
            <SubMenu 
                popupClassName="menu-header__sub"
                key={uniqid()}
                title={item}>
                    <MenuItem  
                    className=" menu-header__item"                  
                    key={uniqid()}>Главное
                    </MenuItem>
                    <MenuItem 
                    className=" menu-header__item"
                    key={uniqid()}>Самое главное
                    </MenuItem>
                    <MenuItem 
                    className=" menu-header__item"
                    key={uniqid()}>Главнее быть не может
                    </MenuItem>
            </SubMenu> 
        )
       
    })  
    
    const contriesMenuItem = countriesAnyDropdown.map(item=> {
        return (
            <MenuItem key={uniqid()}>{item}</MenuItem>
        )
    })
    function  onSelect ({item}) {
        dispatch(onCountriesSelected(item.props.children[0]))
    }
    const menuDropdown = (  
        <Menu 
        onSelect={onSelect}
        style={{ width: 140 }}
        >
            {contriesMenuItem}
        </Menu>
    );

    const HeaderRegion =  () => {
        return(
        <div className="header__region region-header">
            <img src={iconEarth} alt= "iconEarth" className="region-header__earth"></img>
            <Dropdown
                overlayClassName= "region-header__choice"
                trigger={['click']}
                overlay={menuDropdown}
                animation="slide-up"
                
            >
                <button className="region-header__btn">{countriesSelected}</button>
            </Dropdown> 
        </div>)
    }
    let headerRegionMaxWidth576 = null;


    const MediaQuery = window.matchMedia("(max-width: 576px)");
    MediaQuery.addEventListener("change", (e) => media(e));
    function media(e) {
    if (e.matches) {
        dispatch(onChangeModeMenu("vertical"))
        headerRegionMaxWidth576 = HeaderRegion;
        } else {
        dispatch(onChangeModeMenu("horizontal"))
        headerRegionMaxWidth576 = null
        }
    }

    
    useEffect(()=> {
        media(MediaQuery);
// eslint-disable-next-line   
    }, [])

    return(
        <section className="header">
            <header
            className="header__wrapper container">
                <div className="header__lable label-header">
                    <img src={iconlabel} alt="Iconlabel" className="label-header__img"></img>
                </div> 
                <div className="header__menu menu-header">
                    <Menu
                        defaultOpenKeys = {["0"]}
                        className="menu-header__menu"
                        mode={modeMenu}
                        triggerSubMenuAction="click"
                        defaultActiveFirst= {false}
                        multiple={false}
                        selectable={true}>  
                        {item}                    
                    </Menu>
                    {headerRegionMaxWidth576}
                    <div class="menu-header__background">
                    <div class="hamburger hamburger--3dx">
                            <div class="hamburger-box">
                            <div class="hamburger-inner"></div>
                            </div>
                        </div>
                        <code>hamburger--3dx</code>
                    </div>
                </div>
                <div className="hamburger"></div>               
                <HeaderRegion/>
                <div className="header__user">
                    <img src={iconUser} alt="iconUser" className="user__icon"/>
                </div>
                
            </header> 
        </section>
                
    )
}

export default Header