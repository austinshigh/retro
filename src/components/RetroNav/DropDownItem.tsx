import React from "react"
import styled from "styled-components"

interface Props {
  handleClick: any
  title: string
}

const DropDownItem = ({ handleClick, title }: Props) => {
  return (
    <StyledDropDownItem onClick={() => handleClick()}>
      {title}
    </StyledDropDownItem>
  )
}

const StyledDropDownItem = styled.div`
  &:hover {
    background-color: white;
    filter: invert(1);
    cursor: pointer;
  }
`

export default DropDownItem
