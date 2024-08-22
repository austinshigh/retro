import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import "./DropDown.css"
import DropDownItem from "./DropDownItem"
import useNavBar from "../../hooks/useNavBar"
import { DropDownProps } from "./RetroNav"
import { useReactToPrint } from "react-to-print"
import Resume from "../../pages/Windows/Resume"
// import { useLongPress } from "use-long-press"

const DropDown = ({ requestToOpenNav, setRequestToOpenNav }: DropDownProps) => {
  const { handleOpenDropDown, handleCloseDropDown, dropDownExpanded } =
    useNavBar(requestToOpenNav, setRequestToOpenNav)

  const componentRef = useRef<HTMLDivElement>(null)

  const [printClicked, setPrintClicked] = useState(false)

  const handlePrint = () => {
    openPrintDialogue()
    setPrintClicked(false)
  }

  const openPrintDialogue = useReactToPrint({
    content: () => componentRef.current as HTMLElement,
  })

  //   Mobile Event Handlers
  // const longPressOpen = useLongPress(() => {
  //   handleToggleDropDown()
  // })

  useEffect(() => {
    if (printClicked) {
      handlePrint()
    }
  }, [printClicked])

  return (
    <>
      <DropDownTitle
        onFocus={() => handleOpenDropDown()}
        onBlur={() => handleCloseDropDown()}
        tabIndex={0}
      >
        File
      </DropDownTitle>
      {dropDownExpanded && (
        <ExpandedDropDown>
          <DropDownItem
            title={"Print"}
            handleClick={() => setPrintClicked(true)}
          />
        </ExpandedDropDown>
      )}
      <PDFContainer>
        <div ref={componentRef}>
          {/* render resume after print is clicked */}
          {printClicked && <Resume />}
        </div>
      </PDFContainer>
    </>
  )
}

const PDFContainer = styled.div`
  display: none;
`

const DropDownTitle = styled.div`
  &:hover {
    background-color: white;
    filter: invert(1);
    cursor: pointer;
  }
`

export const ExpandedDropDown = styled.div`
  position: absolute;
  top: 25px;
  left: 45px;
  width: 100px;
  background-color: lightgray;
`
export default DropDown
