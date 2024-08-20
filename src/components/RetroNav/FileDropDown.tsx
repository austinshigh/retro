import React, { useState } from "react"
import styled from "styled-components"
import "./DropDown.css"
import ExpandedDropdown from "./DropDownItem"
import DropDownItem from "./DropDownItem"

interface Props {
  src?: string
}

const DropDown = ({ src }: Props) => {
  const [dropDownExpanded, setDropDownExpanded] = useState(false)

  const handleClickPrint = () => {}

  return (
    <>
      <DropDownTitle
        className={dropDownExpanded ? "expanded" : "collapsed"}
        onClick={() => setDropDownExpanded(!dropDownExpanded)}
        onBlur={() => setDropDownExpanded(false)}
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
  left: 40px;
  width: 100px;
  background-color: lightgray;
`
export default DropDown
