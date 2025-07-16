import styled from "styled-components"
import { WindowSize } from "../../components/desktop/DesktopWindow"
import Folder from "../../components/desktop/Folder"
import useResizeWindow from "../../hooks/useResizeWindow"
import Applications from "../Windows/Applications"
import IFrame from "../Windows/IFrame/IFrame"
import Photos from "../Windows/Photos"
import React from "../Windows/React"
import Resume from "../Windows/Resume"
import "./Desktop.css"

export interface WindowProps {
  windowtop?: number
  windowleft?: number
}

const Desktop = () => {
  const { height, width } = useResizeWindow()

  return (
    <>
      <DesktopContainer>
        <Folder title="Resume">
          <Resume />
        </Folder>
        <Folder title="Applications">
          <Applications />
        </Folder>
        <Folder title="Hangman" windowSize={WindowSize.LARGE}>
          <IFrame />
        </Folder>
        <Folder title="Carpentry">
          <Photos />
        </Folder>
        <Folder title="React Component Demos">
          <React />
        </Folder>
        {/* <Folder title="Trash" src={Trashcan}></Folder> */}
        <ScreenDimensions>
          <p>
            {height},{width}
          </p>
        </ScreenDimensions>
      </DesktopContainer>
    </>
  )
}

const ScreenDimensions = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0px;
`

const DesktopContainer = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  align-content: flex-end;
`

export default Desktop
