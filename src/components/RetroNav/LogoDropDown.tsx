import React from "react"
import styled from "styled-components"
import "./DropDown.css"
import EightBitLogo from "../../images/8BitWhiteLogo.png"
import DropDownItem from "./DropDownItem"
import useNavBar from "../../hooks/useNavBar"
// import { useLongPress } from "use-long-press"

interface LogoDropDownProps {
  requestToOpenNav: boolean
  setRequestToOpenNav: any
  handleReset: any
  handleShutDown: any
  handleLogout: any
}

const DropDown = ({
  requestToOpenNav,
  setRequestToOpenNav,
  handleShutDown,
  handleReset,
  handleLogout,
}: LogoDropDownProps) => {
  const { handleOpenDropDown, dropDownExpanded, handleCloseDropDown } =
    useNavBar(requestToOpenNav, setRequestToOpenNav)

  const handleClickPowerOff = () => {
    handleShutDown()
  }

  // //   Mobile Event Handlers
  // const longPressOpen = useLongPress(() => {
  //   handleToggleDropDown()
  // })

  // const longPressPowerOff = useLongPress(() => {
  //   handleShutDown()
  // })

  // const longPressReset = useLongPress(() => {
  //   handleReset()
  // })

  // const longPressLogOut = useLongPress(() => {
  //   handleLogout()
  // })

  return (
    <>
      <DropDownTitle
        onFocus={() => handleOpenDropDown()}
        onBlur={() => handleCloseDropDown()}
        tabIndex={0}
        // {...longPressOpen()}
      >
        <Logo src={EightBitLogo} />
      </DropDownTitle>
      {dropDownExpanded && (
        <ExpandedDropDown>
          {/* <DropDownItem
            title={"Log Out"}
            handleClick={handleLogout}
            {...longPressLogOut()}
          /> */}
          <DropDownItem
            title={"Reset"}
            handleClick={handleReset}
            // {...longPressReset()}
          />
          <DropDownItem
            title={"Power Off"}
            handleClick={handleClickPowerOff}
            // {...longPressPowerOff()}
          />
        </ExpandedDropDown>
      )}
    </>
  )
}

const DropDownTitle = styled.div`
  &:hover {
    background-color: white;
    filter: invert(1);
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  margin-left: 10px;
`

const ExpandedDropDown = styled.div`
  position: absolute;
  top: 25px;
  left: 10px;
  width: 100px;
  background-color: lightgray;
`

const Logo = styled.img`
  height: 25px;
  filter: grayscale(100%) invert(1);
`

export default DropDown
