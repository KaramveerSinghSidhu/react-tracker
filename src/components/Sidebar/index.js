import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SideBtn} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/home">Home</SidebarLink>
                <SidebarLink to="/sales">Rep Sales</SidebarLink>
                <SidebarLink to="/store">Store Sales</SidebarLink>
                <SidebarLink to="/returns">Returns</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SideBtn to="/returns">Sign out</SideBtn>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar