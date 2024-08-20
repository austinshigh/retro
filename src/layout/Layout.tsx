import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import RetroNav from "../components/RetroNav/RetroNav"
import Folder from "../components/desktop/Folder"
import Resume from "../components/Resume"
import Applications from "../pages/Windows/Applications"
import IFrame from "../pages/Hangman/IFrame/IFrame"
import Photos from "../pages/Windows/Photos"
import Trashcan from "../images/Trashcan.png"

const Layout = () => {
  return (
    <LayoutContainer>
      {/* <Navigation /> */}
      <RetroNav />
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
      <Outlet />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  //overflow: none;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  background-color: #f8eded;
  font-weight: 400;
  font-style: normal;
`

const DesktopContainer = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 10px;
`

export default Layout
