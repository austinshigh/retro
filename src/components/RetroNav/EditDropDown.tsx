import React, { useState } from "react"
import styled from "styled-components"
import "./DropDown.css"
import DropDownItem from "./DropDownItem"
import { ExpandedDropDown } from "./FileDropDown"
import useNavBar from "../../hooks/useNavBar"
import { DropDownProps } from "./RetroNav"

const DropDown = ({ requestToOpenNav, setRequestToOpenNav }: DropDownProps) => {
  const { handleToggleDropDown, dropDownExpanded } = useNavBar(
    requestToOpenNav,
    setRequestToOpenNav,
  )
  const handleClickNewFolder = () => {}

  return (
    <>
      <DropDownTitle onClick={() => handleToggleDropDown()}>Edit</DropDownTitle>
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
