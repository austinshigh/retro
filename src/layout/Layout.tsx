import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import RetroNav from "../components/RetroNav/RetroNav"
import LoginPage from "../pages/LoginPage"

const Layout = () => {
  const [powerOff, setPowerOff] = useState(false)
  const [reset, setReset] = useState(false)
  const [loggedIn, setLoggedIn] = useState(true)

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
            <LayoutContainer>
              {/* <Navigation /> */}
              <RetroNav
                handleShutDown={() => setPowerOff(true)}
                handleReset={() => setReset(true)}
                handleLogout={() => setLoggedIn(false)}
              />
              <Outlet />
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

const LoginContainer = styled.div``

export default Layout
