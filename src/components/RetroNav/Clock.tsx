import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  //const {timeFormat} = useConfig();

  // useEffect rerenders when config re-renders, run checks to change time formatting based on system preferences config

  // timeformat = {
  //    seconds = true;
  //    military = false;
  //    timeZone = ""
  //}

  useEffect(() => {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString())
    }, 1 * 1000)
  }, [])
  return <TimeContainer>{time}</TimeContainer>
}

const TimeContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
`

export default Clock
