import React, { ReactNode, Ref, useState } from "react"
import styled from "styled-components"
import { setDragImage } from "../../utils/DragUtility"

interface Props {
  handleCloseWindow: any
  title: string
  children: ReactNode
}

const DesktopWindow = ({ handleCloseWindow, title, children }: Props) => {
  const [windowTop, setWindowTop] = useState(100)
  const [windowLeft, setWindowLeft] = useState(100)

  const onWindowDragStart = (ev: React.DragEvent<HTMLElement>) => {
    setDragImage(ev)
  }

  function onWindowDrag(ev: React.DragEvent<HTMLElement>) {
    let x = ev.clientX // get mouse x
    let y = ev.clientY // get mouse y

    if (x !== 0 && y !== 0) {
      setWindowLeft(x)
      setWindowTop(y)
    }
  }
  return (
    <WindowContainer left={windowLeft} top={windowTop}>
      <TopBar
        draggable={true}
        onDragStart={e => onWindowDragStart(e)}
        onDragCapture={e => onWindowDrag(e)}
        onDragEnd={e => onWindowDrag(e)}
      >
        <div>{title}</div>
        <CloseButton onClick={() => handleCloseWindow()}>X</CloseButton>
      </TopBar>
      {children}
    </WindowContainer>
  )
}

interface PositionProps {
  top?: number
  left?: number
}

const WindowContainer = styled.div<PositionProps>`
  position: fixed;
  width: 400px;
  height: 400px;
  resize: both;
  overflow: auto;
  border: 1px solid black;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  background-color: #f8eded;
  z-index: 1000;
`

const TopBar = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8eded;
`

const CloseButton = styled.div`
  line-height: 18px;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 18px;
  width: 20px;
  border: 1px solid black;
  text-align: center;
  &:hover {
    border: 1px solid black;
    background-color: white;
    filter: invert(1);
  }
`

export default DesktopWindow
