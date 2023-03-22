import React from "react";
import {
  FlexContainer,
  IconContainer,
  PaddingContainer,
} from "./Styled-Components/Globel.styled";
import { Logo, NavMenu } from "./Styled-Components/Navbar.styled";
import logo from "./../assets/logo/logo.png";
import { NavLink } from "../utils/Data";
import {VscSearch} from "react-icons/vsc"
function Navbar() {
  return (
    <PaddingContainer top='4%'>
      <FlexContainer justify="space-around" align='center' >
        <Logo>
          <img src={logo} />
        </Logo>
        <FlexContainer  justify='space-around'>
          {
            NavLink.map((link)=>(
              <NavMenu>{link.name}</NavMenu>
            ))
          }
          <IconContainer size="1.5rem" cursor="pointer">
            <VscSearch/>
          </IconContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
}

export default Navbar;
