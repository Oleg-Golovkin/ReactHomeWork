import {useSelector, useDispatch} from "react-redux";
import uniqid from 'uniqid';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import Dropdown from 'rc-dropdown';
import {onCountriesSelected} from "./headerSlice.js";
import {onActiveClass} from '../hamburger/hamburgerSlice'

import Hamburger from '../hamburger/Hamburger';

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
    const media576px = useSelector(state=> state.mediaSlice.media576px)
    const mediaMin577px = useSelector(state=> state.mediaSlice.mediaMin577px)
    const activeClass = useSelector(state=> state.hamburgerSlice.activeClass)

    const subNavigationMenu = headerMenu.map((item, i)=> {
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
    const container = (() => document.body)
    const MenuNavigation = () => {
        return(
                <Menu
                    defaultOpenKeys = {["0"]}
                    className="header__menu menu-header"
                    mode={mediaMin577px ? "horizontal" : "vertical"}
                    triggerSubMenuAction="click"
                    defaultActiveFirst= {false}
                    multiple={false}
                    selectable={true}
                    getPopupContainer={container}>  
                    {subNavigationMenu}                    
                </Menu>
        )
    }
    
    
    const contriesMenuItem = countriesAnyDropdown.map(item=> {
        return (
            <MenuItem key={uniqid()}>{item}</MenuItem>
        )
    })
    function onSelect({item}) {
        dispatch(onCountriesSelected(item.props.children[0]))
    }        
    const HeaderRegionDropdown =  () => {
        return(
        <div className="header__region region-header">
            <img src={iconEarth} alt= "iconEarth" className="region-header__earth"></img>
            <Dropdown
                overlayClassName= "region-header__choice"
                trigger={['click']}
                overlay={
                    <Menu 
                        onSelect={onSelect}
                        style={{ width: 140 }}
                        >
                            {contriesMenuItem}
                    </Menu>
                }
                animation="slide-up"                
            >
                <button className="region-header__btn">{countriesSelected}</button>
            </Dropdown> 
        </div>)
    }

    return(
        <>
        
        <section className="header">
            <header
            className="header__wrapper container">
                <div className="header__lable label-header">
                    <img src={iconlabel} alt="Iconlabel" className="label-header__img"></img>
                </div> 
                {mediaMin577px? <MenuNavigation/> : null}
                {mediaMin577px? <HeaderRegionDropdown/> : null}
                {mediaMin577px?
                <div className="header__user">
                        <img src={iconUser} alt="iconUser" className="user__icon"/>
                    </div> 
                : null}
            </header>
        </section> 
        <Hamburger/>
            <div className={`menu-header_mobile ${activeClass ? 'menu-header_active-mobile' : ''}`}>
                {media576px? <MenuNavigation/> : null}
                {media576px?
                <div className="header__user">
                        <img src={iconUser} alt="iconUser" className="user__icon"/>
                    </div> 
                : null}
                {media576px? <HeaderRegionDropdown/> : null}
            </div>
            {/* <div
            onClick={()=> dispatch(onActiveClass(!activeClass))}
            className={`menu-header_background ${activeClass ? 'menu-header_active-background' : ''}`}></div> */}
        </>          
    )
}

export default Header