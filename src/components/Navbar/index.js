import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksBlack, NavBtn, NavBtnLink} from './NavbarElements'



const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">5515</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                        <NavLinks to="/home">New Sale</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/sales">Rep Sales</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/store">Store Sales</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/returns">Returns</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavLinksBlack to="/profile">Karamveer</NavLinksBlack>
                    <NavBtnLink to="/signout">Sign out</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
