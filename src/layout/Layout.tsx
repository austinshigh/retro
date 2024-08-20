import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import RetroNav from "../components/RetroNav"
import Folder from "../components/desktop/Folder"

const Layout = () => {
  return (
    <LayoutContainer>
      {/* <Navigation /> */}
      <RetroNav />
      <Folder title="Resume" />
      <Folder title="Applications" initLeft={0} initTop={150} />
      <Folder title="Hangman" initLeft={0} initTop={250} />
      {/* <SocialIcons /> */}
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
  font-family: "Roboto";
  font-weight: 400;
  font-style: normal;
`

export default Layout
