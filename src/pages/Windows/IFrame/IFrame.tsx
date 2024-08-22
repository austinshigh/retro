import React from "react"
import "./IFrame.css"
import styled from "styled-components"

const HangmanIFrame = () => {
  return (
    <StyledIFrame
      className="iframe"
      src="https://hangman-15975.web.app/"
    ></StyledIFrame>
  )
}

const StyledIFrame = styled.iframe`
  max-height: 75vh;
`

export default HangmanIFrame
