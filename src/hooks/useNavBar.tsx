import React, { useEffect, useState } from "react"

const useNavBar = (requestToOpenNav: boolean, setRequestToOpenNav: any) => {
  const [expandPending, setExpandPending] = useState(false)
  const [dropDownExpanded, setDropDownExpanded] = useState(false)

  const handleToggleDropDown = () => {
    if (dropDownExpanded) {
      setDropDownExpanded(false)
    } else {
      setExpandPending(true)
      setRequestToOpenNav(true)
    }
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
    handleToggleDropDown,
  }
}

export default useNavBar
