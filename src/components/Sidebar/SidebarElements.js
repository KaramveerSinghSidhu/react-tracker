import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #222831;
    display: grid;
    align-itmes: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #EEEEEE;

    &:hover {
        color: #D65A31;
        transition: 0.2s ease-in-out;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #EEEEEE;
`;

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #EEEEEE;
    cursor: pointer;

    &:hover {
        color: #D65A31;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SideBtn = styled(LinkR)`
    border-radius: 15px;
    background: #393E46;
    white-space: nowarp;
    padding: 10px 22px;
    color: #EEEEEE;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        color: #D65A31;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarMenu = styled.ul`
    padding-top: 100px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px); 
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px); 
    }
`;