import React from "react"
import styled from "styled-components"
import LinkedInLogo from "../images/LinkedInLogo.png"
import GitHubLogo from "../images/GitHubLogo.png"

const SocialIcons = () => {
  return (
    <StyledSocialComponent>
      <a href="https://www.linkedin.com/in/austin-s-high" target="_blank">
        <SocialImage src={LinkedInLogo} alt="LinkedIn Profile" />
      </a>
      <a href="https://github.com/austinshigh" target="_blank">
        <SocialImage src={GitHubLogo} alt="Github Profile" />
      </a>
    </StyledSocialComponent>
  )
}

const StyledSocialComponent = styled.div`
  position: fixed;
  z-index: 1000;
  right: 32px;
  top: 10px;
  display: flex;
  gap: 15px;
  @media (max-width: 575px) {
    flex-direction: column;
    top: 75px;
    right: 22px;
  }
`
const SocialImage = styled.img`
  height: 50px;
  width: 50px;
  @media (max-width: 575px) {
    height: 35px;
    width: 35px;
  }
`

export default SocialIcons
