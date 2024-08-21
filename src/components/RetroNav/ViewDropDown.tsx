import React, { useState } from "react"
import styled from "styled-components"
import "./DropDown.css"
import DropDownItem from "./DropDownItem"
import useNavBar from "../../hooks/useNavBar"
import { DropDownProps } from "./RetroNav"
// import { useLongPress } from "use-long-press"

const DropDown = ({ requestToOpenNav, setRequestToOpenNav }: DropDownProps) => {
  const { handleToggleDropDown, dropDownExpanded } = useNavBar(
    requestToOpenNav,
    setRequestToOpenNav,
  )

  const handleClickPowerOff = () => {
    console.log("trigger power off animation")
  }

  const handleClickSystemSettings = () => {
    console.log("open system settings window")
    console.log("color scheme selector")
    console.log("bell on / off")
    console.log("timezone")
  }

  // //   Mobile Event Handlers
  // const longPressOpen = useLongPress(() => {
  //   handleToggleDropDown()
  // })

  // const longPressSettings = useLongPress(() => {
  //   handleClickSystemSettings()
  // })

  return (
    <>
      <DropDownTitle
        className={dropDownExpanded ? "expanded" : "collapsed"}
        onClick={() => handleToggleDropDown()}
        // {...longPressOpen()}
      >
        View
      </DropDownTitle>
      {dropDownExpanded && (
        <ExpandedDropDown>
          <DropDownItem
            title={"System Settings"}
            handleClick={handleClickSystemSettings}
            // {...longPressSettings()}
          />
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
`

const ExpandedDropDown = styled.div`
  position: absolute;
  top: 25px;
  left: 130px;
  width: 200px;
  background-color: lightgray;
`

const Logo = styled.img`
  height: 25px;
  filter: grayscale(100%) invert(1);
`

export default DropDown
