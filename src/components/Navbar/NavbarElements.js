import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
//import {Link as linkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #D65A31;
    height: 80px;
    //margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px){
        transition: 0.8x all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #EEEEEE;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #EEEEEE;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    
    list-style: none;
    text-align: center;
    margin-right: -22px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    hight: 80px;
`;

export const NavLinks = styled(LinkR)`
    color: #EEEEEE;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 3px solid #EEEEEE
    }
`;

export const NavLinksBlack = styled(LinkR)`
    color: #222831;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 3px solid #393E46
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 15px;
    background: #393E46;
    white-space: nowarp;
    padding: 10px 22px;
    color: #EEEEEE;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:active {
        background: #222831
    }
`;