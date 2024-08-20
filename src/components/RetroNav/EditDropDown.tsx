import React, { useState } from "react"
import styled from "styled-components"
import "./DropDown.css"
import DropDownItem from "./DropDownItem"
import { ExpandedDropDown } from "./FileDropDown"

interface Props {
  src?: string
}

const DropDown = ({ src }: Props) => {
  const [dropDownExpanded, setDropDownExpanded] = useState(false)

  const handleClickNewFolder = () => {}

  return (
    <>
      <DropDownTitle
        className={dropDownExpanded ? "expanded" : "collapsed"}
        onClick={() => setDropDownExpanded(!dropDownExpanded)}
        onBlur={() => setDropDownExpanded(false)}
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
