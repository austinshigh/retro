import React from "react"
import "./Desktop.css"
import Resume from "../Windows/Resume"
import styled from "styled-components"
import Folder from "../../components/desktop/Folder"
import Applications from "../Windows/Applications"
import IFrame from "../Windows/IFrame/IFrame"
import Photos from "../Windows/Photos"
import { WindowSize } from "../../components/desktop/DesktopWindow"
import { useAppSelector } from "../../app/hooks"
import {
  ColorNames,
  selectColor,
} from "../../components/backgroundColor/backgroundColor"

export interface WindowProps {
  windowtop?: number
  windowleft?: number
}

const Desktop = () => {
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

export default Desktop
