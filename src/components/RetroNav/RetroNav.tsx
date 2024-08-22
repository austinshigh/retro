import React, { useEffect, useState } from "react"
import styled from "styled-components"
import DropDown from "./FileDropDown"
import FileDropDown from "./FileDropDown"
import EditDropDown from "./EditDropDown"
import LogoDropDown from "./LogoDropDown"
import ViewDropDown from "./ViewDropDown"
import Clock from "./Clock"

export interface DropDownProps {
  requestToOpenNav: boolean
  setRequestToOpenNav: any
}

interface Props {
  handleShutDown: any
  handleReset: any
  handleLogout: any
}

const RetroNav = ({ handleShutDown, handleReset, handleLogout }: Props) => {
  const [requestToOpenNav, setRequestToOpenNav] = useState(false)

  useEffect(() => {
    if (requestToOpenNav) {
      setRequestToOpenNav(false)
    }
  }, [requestToOpenNav])

  return (
    <StyledNav>
      {/* Add shutdown feature */}
      <LogoDropDown
        requestToOpenNav={requestToOpenNav}
        setRequestToOpenNav={setRequestToOpenNav}
        handleShutDown={handleShutDown}
        handleReset={handleReset}
        handleLogout={handleLogout}
      />
      <FileDropDown
        requestToOpenNav={requestToOpenNav}
        setRequestToOpenNav={setRequestToOpenNav}
      />
      <EditDropDown
        requestToOpenNav={requestToOpenNav}
        setRequestToOpenNav={setRequestToOpenNav}
      />
      <ViewDropDown
        requestToOpenNav={requestToOpenNav}
        setRequestToOpenNav={setRequestToOpenNav}
      />
      {/* <DropDown title={"View"}></DropDown>
      <DropDown title={"Special"}></DropDown> */}
      <Clock />
    </StyledNav>
  )
}

const StyledNav = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 25px;
  /* padding: 3px; */
  background-color: lightgray;
  font-family: "VT323", monospace;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 18px;
  align-items: center;
`

export default RetroNav
