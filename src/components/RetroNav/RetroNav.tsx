import React, { useState } from "react"
import EightBitLogo from "../../images/8bitlogo.png"
import styled from "styled-components"
import DropDown from "./Dropdown"

const RetroNav = () => {
  return (
    <StyledNav>
      <Logo src={EightBitLogo} />
      <DropDown title={"File"}></DropDown>
      <DropDown title={"Edit"}></DropDown>
      <DropDown title={"View"}></DropDown>
      <DropDown title={"Special"}></DropDown>
    </StyledNav>
  )
}

const StyledNav = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  position: fixed;
  height: 25px;
  /* padding: 3px; */
  background-color: lightgray;
  font-family: "VT323", monospace;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 18px;
`

const Logo = styled.img`
  height: 22px;
  padding-left: 10px;
`

export default RetroNav
