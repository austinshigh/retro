import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import RetroNav from "../components/RetroNav/RetroNav"
import LoginPage from "../pages/LoginPage"
import { useAppSelector } from "../app/hooks"
import {
  ColorNames,
  selectColor,
} from "../components/backgroundColor/backgroundColor"

const Layout = () => {
  const [powerOff, setPowerOff] = useState(false)
  const [reset, setReset] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true)

  const color = useAppSelector(selectColor)

  useEffect(() => {
    if (reset) {
      setTimeout(
        function () {
          setReset(false)
        },
        1 * 1 * 1000,
      )
    }
  }, [reset])

  return (
    <>
      {powerOff || reset ? (
        <ShutDown />
      ) : (
        <>
          {loggedIn ? (
            <LayoutContainer color={color}>
              {/* <Navigation /> */}
              <Outlet />
              <RetroNav
                handleShutDown={() => setPowerOff(true)}
                handleReset={() => setReset(true)}
                handleLogout={() => setLoggedIn(false)}
              />
            </LayoutContainer>
          ) : (
            <LoginContainer>
              <LoginPage />
            </LoginContainer>
          )}
        </>
      )}
    </>
  )
}

const ShutDown = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
`

interface LayoutContainerProps {
  color: ColorNames
}

const LayoutContainer = styled.div<LayoutContainerProps>`
  width: 100%;
  min-height: 100vh;
  //overflow: none;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  background-color: #f8eded;
  font-weight: 400;
  font-style: normal;
  background-color: ${props => (props.color ? props.color : "red")};
`

const LoginContainer = styled.div``

export default Layout
