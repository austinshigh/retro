import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Navigation from "../components/navigation/Navigation"
import SocialIcons from "../components/SocialIcons"
import RetroNav from "../components/RetroNav"

const Layout = () => {
  return (
    <LayoutContainer>
      {/* <Navigation /> */}
      <RetroNav />
      <SocialIcons />
      <Outlet />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8eded;
  font-family: "Roboto";
  font-weight: 400;
  font-style: normal;
`

export default Layout
