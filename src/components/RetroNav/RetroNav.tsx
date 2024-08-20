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

const RetroNav = () => {
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
