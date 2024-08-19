import React from "react"
import EightBitLogo from "../images/8bitlogo.png"
import styled from "styled-components"

const RetroNav = () => {
  return (
    <StyledNav>
      <Logo src={EightBitLogo} />
      <DropDown>File</DropDown>
      <DropDown>Edit</DropDown>
      <DropDown>View</DropDown>
      <DropDown>Special</DropDown>
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
`

const Logo = styled.img`
  height: 22px;
  padding-left: 10px;
`

const DropDown = styled.div`
  &:hover {
    color: red;
  }
`

export default RetroNav
