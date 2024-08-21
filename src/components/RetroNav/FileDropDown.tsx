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

  const handleClickPrint = () => {}

  //   Mobile Event Handlers
  // const longPressOpen = useLongPress(() => {
  //   handleToggleDropDown()
  // })

  return (
    <>
      <DropDownTitle
        onClick={() => handleToggleDropDown()}
        // {...longPressOpen()}
      >
        File
      </DropDownTitle>
      {dropDownExpanded && (
        <ExpandedDropDown>
          <DropDownItem title={"Print"} handleClick={handleClickPrint} />
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
`

export const ExpandedDropDown = styled.div`
  position: absolute;
  top: 25px;
  left: 45px;
  width: 100px;
  background-color: lightgray;
`
export default DropDown
