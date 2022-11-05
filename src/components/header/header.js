import {useSelector} from "react-redux";
import iconlabel from '../../icons/iconlabel.png';
import iconEarth from '../../icons/iconEarth.png';
import iconUser from '../../icons/iconUser.png';



import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import './rc-menu.sass'
import './header.sass'




const Header = () => {
    const headerMenu = useSelector(state=> state.headerSlice.headerMenu)
    let li = headerMenu.map((item, i)=> {
        return(
            <SubMenu key={item} title={item}>
                <MenuItem key="1-1">Главное</MenuItem>
                <MenuItem key="1-2">Самое главное</MenuItem>
                <MenuItem key="1-3">Главнее быть не может</MenuItem>
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
                {/* <ul className="header__menu menu-header liReset">
                    {li}
                </ul> */}
                <Menu
                    mode="horizontal"
                    triggerSubMenuAction="hover"
                    defaultActiveFirst= {false}
                    multiple={false}
                    >  
                    {li}
                    
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