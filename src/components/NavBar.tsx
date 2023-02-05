import { useState, useEffect } from 'react';
import styled, { AnyStyledComponent } from "styled-components";
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const NavBar:React.FC = () => {

    const [ isNavMenu, setIsNavMenu ] = useState(false);
    const [ width, setWidth ] = useState(window.innerWidth)
    const [ topMenuVisible, setTopMenuVisible ] = useState(true)

    const changeNavMenuStatus = () => {
        setIsNavMenu(!isNavMenu)
    }

    useEffect(() => {
        width < 990 ? setTopMenuVisible(false) : setTopMenuVisible(true)
    }, [width])


    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        return () => window.removeEventListener('resize', () => setWidth(window.innerWidth))
    })

    return(

        <Wrapper>
            <i style={{maxWidth: "250px"}}>
                <Link to='/'><img width="110px" src="./images/tesla-logo.png" alt="" /></Link>
            </i>
            {topMenuVisible ?
                <Menu>
                    <p><Link to='/models'>Model S</Link></p>
                    <p><Link to='/'>Model 3</Link></p>
                    <p><Link to='/'>Model X</Link></p>
                    <p><Link to='/'>Model Y</Link></p>
                    <p><Link to='/'>Solar Panels</Link></p>
                    <p><Link to='/'>Roof Panels</Link></p>
                </Menu> : false
            }
            <RightMenu>
                {topMenuVisible ?
                    <>
                        <p><Link to='/'>Shop</Link></p>
                        <p><Link to='/'>Account</Link></p>
                    </> : null
                }
                <p onClick={changeNavMenuStatus}><a href="#">Menu</a></p>
            </RightMenu>
            <MenuNav show={isNavMenu}>
                <CloseWrapper>
                    <CustomClose onClick={changeNavMenuStatus}/>
                </CloseWrapper>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">Demo Drive</a></li>
                    <li><a href="#">Insurance</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">find Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><LanguageIcon /><a href="#">Model S</a></li>
            </MenuNav>
        </Wrapper>
    )
}
  
export default NavBar;

const Wrapper = styled.div`
    width: 100vw;
    min-height: 60px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    a{
        font-weight: 600;
    }
`
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    aligh-items: center;
    justify-content: center;
    gap: 25px;
    flex: 2;
    @media (max-width: 990px) {
        visibility: hidden;
    }
`
const RightMenu = styled.div`
    max-width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
`
const MenuNav = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 280px;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 20px 40px;
    gap: 20px;
    box-shadow: 0px 0px 8px #888888;
    transform: ${(props: AnyStyledComponent) => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Visible = styled.div`
`