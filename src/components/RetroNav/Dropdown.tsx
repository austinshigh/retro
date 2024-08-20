import React, { useState } from "react"
import styled from "styled-components"

interface Props {
  title?: string
  src?: string
}

const DropDown = ({ title, src }: Props) => {
  const [dropDownExpanded, setDropDownExpanded] = useState(false)

  return (
    <>
      <DropDownTitle
        onClick={() => setDropDownExpanded(!dropDownExpanded)}
        onBlur={() => setDropDownExpanded(false)}
      >
        {title}
      </DropDownTitle>
      {dropDownExpanded && <Expanded></Expanded>}
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

const Expanded = styled.div`
  position: absolute;
  top: 25px;
  left: 35px;
  width: 100px;
  height: 200px;
  background-color: lightgray;
`

export default DropDown
