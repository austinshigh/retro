import React, { useState } from "react"
import styled from "styled-components"
import "./DropDown.css"
import DropDownItem from "./DropDownItem"
import { ExpandedDropDown } from "./FileDropDown"
import useNavBar from "../../hooks/useNavBar"
import { DropDownProps } from "./RetroNav"
// import { useLongPress } from "use-long-press"

const DropDown = ({ requestToOpenNav, setRequestToOpenNav }: DropDownProps) => {
  const { handleToggleDropDown, dropDownExpanded } = useNavBar(
    requestToOpenNav,
    setRequestToOpenNav,
  )
  const handleClickNewFolder = () => {}

  // //   Mobile Event Handlers
  // const longPressOpen = useLongPress(() => {
  //   handleToggleDropDown()
  // })

  return (
    <>
      <DropDownTitle
        onClick={() => handleToggleDropDown()}
        // {...longPressOpen()}
      >
        Edit
      </DropDownTitle>
      {dropDownExpanded && (
        <StyledExpandedDropDown>
          <DropDownItem
            title={"New Folder"}
            handleClick={handleClickNewFolder}
          />
        </StyledExpandedDropDown>
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

const StyledExpandedDropDown = styled(ExpandedDropDown)`
  left: 85px;
`

export default DropDown
