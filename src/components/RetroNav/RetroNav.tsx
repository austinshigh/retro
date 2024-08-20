import React, { useState } from "react"
import EightBitLogo from "../../images/8bitlogo.png"
import styled from "styled-components"
import DropDown from "./FileDropDown"
import FileDropDown from "./FileDropDown"
import EditDropDown from "./EditDropDown"

const RetroNav = () => {
  return (
    <StyledNav>
      <Logo src={EightBitLogo} />
      <FileDropDown></FileDropDown>
      <EditDropDown></EditDropDown>
      {/* <DropDown title={"View"}></DropDown>
      <DropDown title={"Special"}></DropDown> */}
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
