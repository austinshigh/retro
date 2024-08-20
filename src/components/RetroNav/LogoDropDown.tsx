import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "./DropDown.css"
import EightBitLogo from "../../images/8BitLogo.png"
import DropDownItem from "./DropDownItem"
import { DropDownProps } from "./RetroNav"
import useNavBar from "../../hooks/useNavBar"

interface LogoDropDownProps {
  requestToOpenNav: boolean
  setRequestToOpenNav: any
  handleReset: any
  handleShutDown: any
  handleLogout: any
}

const DropDown = ({
  requestToOpenNav,
  setRequestToOpenNav,
  handleShutDown,
  handleReset,
  handleLogout,
}: LogoDropDownProps) => {
  const { handleToggleDropDown, dropDownExpanded } = useNavBar(
    requestToOpenNav,
    setRequestToOpenNav,
  )

  const handleClickPowerOff = () => {
    handleShutDown()
  }

  return (
    <>
      <DropDownTitle onClick={() => handleToggleDropDown()}>
        <Logo src={EightBitLogo} />
      </DropDownTitle>
      {dropDownExpanded && (
        <ExpandedDropDown>
          <DropDownItem title={"Log Out"} handleClick={handleLogout} />
          <DropDownItem title={"Reset"} handleClick={handleReset} />
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
