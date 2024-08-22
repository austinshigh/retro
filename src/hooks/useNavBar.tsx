import React, { useEffect, useState } from "react"

const useNavBar = (requestToOpenNav: boolean, setRequestToOpenNav: any) => {
  const [expandPending, setExpandPending] = useState(false)
  const [dropDownExpanded, setDropDownExpanded] = useState(false)

  const handleCloseDropDown = () => {
    setTimeout(function () {
      setDropDownExpanded(false)
    }, 1 * 100)
  }

  const handleOpenDropDown = () => {
    setDropDownExpanded(true)
  }

  useEffect(() => {
    if (requestToOpenNav) {
      if (expandPending) {
        setDropDownExpanded(true)
        setExpandPending(false)
      } else {
        setDropDownExpanded(false)
      }
    }
  }, [requestToOpenNav, expandPending])
  return {
    dropDownExpanded,
    handleOpenDropDown,
    handleCloseDropDown,
  }
}

export default useNavBar
