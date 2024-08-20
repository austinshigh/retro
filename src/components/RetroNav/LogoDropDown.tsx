import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "./DropDown.css"
import ExpandedDropdown from "./DropDownItem"
import EightBitLogo from "../../images/8bitlogo.png"
import DropDownItem from "./DropDownItem"
import { DropDownProps } from "./RetroNav"
import useNavBar from "../../hooks/useNavBar"

const DropDown = ({ requestToOpenNav, setRequestToOpenNav }: DropDownProps) => {
  const { handleToggleDropDown, dropDownExpanded } = useNavBar(
    requestToOpenNav,
    setRequestToOpenNav,
  )

  const handleClickPowerOff = () => {
    console.log("trigger power off animation")
  }

  return (
    <>
      <DropDownTitle onClick={() => handleToggleDropDown()}>
        <Logo src={EightBitLogo} />
      </DropDownTitle>
      {dropDownExpanded && (
        <ExpandedDropDown>
          <DropDownItem title={"Power Off"} handleClick={handleClickPowerOff} />
        </ExpandedDropDown>
      )}
    </>
  )
}

const DropDownTitle = styled.div`
  &:hover {
    background-color: white;
    filter: invert(1);
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  margin-left: 10px;
`

const ExpandedDropDown = styled.div`
  position: absolute;
  top: 25px;
  left: 10px;
  width: 100px;
  background-color: lightgray;
`

const Logo = styled.img`
  height: 25px;
  filter: grayscale(100%) invert(1);
`

export default DropDown
