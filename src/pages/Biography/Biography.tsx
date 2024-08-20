import React from "react"
import portrait from "../../images/portrait.png"
import "./Biography.css"
import Resume from "../../components/Resume"
import styled from "styled-components"
import Folder from "../../components/desktop/Folder"
import Applications from "../Windows/Applications"
import IFrame from "../Hangman/IFrame/IFrame"
import Photos from "../Windows/Photos"

const Biography = () => {
  return (
    <>
      <DesktopContainer>
        <Folder title="Resume">
          <Resume />
        </Folder>
        <Folder title="Applications">
          <Applications />
        </Folder>
        <Folder title="Hangman">
          <IFrame />
        </Folder>
        <Folder title="Carpentry">
          <Photos />
        </Folder>
        {/* <Folder title="Trash" src={Trashcan}></Folder> */}
      </DesktopContainer>
    </>
  )
}

const DesktopContainer = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  align-content: flex-end;
`

export default Biography
