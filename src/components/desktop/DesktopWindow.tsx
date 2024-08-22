import React, { ReactNode, Ref, useEffect, useState } from "react"
import styled from "styled-components"
import { setDragImage } from "../../utils/DragUtility"

export enum WindowSize {
  LARGE = 75,
}

interface Props {
  handleCloseWindow: any
  title: string
  children: ReactNode
  windowSize?: WindowSize
}

const DesktopWindow = ({
  handleCloseWindow,
  title,
  children,
  windowSize,
}: Props) => {
  const [internalX, setInternalX] = useState(0)
  const [internalY, setInternalY] = useState(0)

  const [windowtop, setWindowTop] = useState(0)
  const [windowLeft, setWindowLeft] = useState(0)

  function onWindowDragStart(ev: React.DragEvent<HTMLElement>) {
    setDragImage(ev)
    // set mouse position on element
    let rect = ev.currentTarget.getBoundingClientRect()
    setInternalX(ev.clientX - rect.left) // get mouse x and adjust for el.
    setInternalY(ev.clientY - rect.top) // get mouse y and adjust for el.
  }

  function onWindowDrag(ev: React.DragEvent<HTMLElement>) {
    let x = ev.clientX // get mouse x
    let y = ev.clientY // get mouse y

    if (x !== 0 && y !== 0) {
      setWindowLeft(x - internalX)
      setWindowTop(y - internalY)
    }
  }

  const onMobileDrag = (e: React.TouchEvent<HTMLElement>) => {
    let touchLocation = e.targetTouches[0]
    let x = touchLocation.pageX
    let y = touchLocation.pageY

    if (x !== 0 && y !== 0) {
      setWindowLeft(x)
      setWindowTop(y)
    }
  }

  function getRandomX() {
    return Math.floor(Math.random() * (600 - 200 + 1)) + 200
  }

  function getRandomY() {
    return Math.floor(Math.random() * (300 - 100 + 1)) + 100
  }

  function isMobile() {
    let width = window.screen.width
    if (width < 500) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    if (isMobile()) {
      setWindowTop(50)
      setWindowLeft(0)
    } else {
      setWindowTop(getRandomY())
      setWindowLeft(getRandomX())
    }
  }, [])

  return (
    <>
      {!(windowtop === 0 && windowLeft === 0) && (
        <WindowContainer left={windowLeft} top={windowtop} size={windowSize}>
          <TopBar
            draggable={true}
            onTouchMove={e => onMobileDrag(e)}
            onDragStart={e => onWindowDragStart(e)}
            onDragCapture={e => onWindowDrag(e)}
            onDragEnd={e => onWindowDrag(e)}
          >
            <Title>{title}</Title>
            <CloseButton onClick={() => handleCloseWindow()}>X</CloseButton>
          </TopBar>
          {React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement<any>, {
              windowtop: windowtop,
              windowleft: windowLeft,
            }),
          )}
        </WindowContainer>
      )}
    </>
  )
}

interface WindowContainerProps {
  top?: number
  left?: number
  size?: WindowSize
}

const WindowContainer = styled.div<WindowContainerProps>`
  position: fixed;
  width: 400px;
  height: ${props => (props.size ? props.size : 50)}vh;
  max-height: ${props => (props.size ? props.size : 75)}vh;
  max-width: 50vw;
  resize: both;
  overflow: auto;
  border: 1px solid black;
  top: ${props => (props.top ? props.top : 0)}px;
  left: ${props => (props.left ? props.left : 0)}px;
  background-color: #f8eded;
  z-index: 2000;
  /* width */
  &::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: lightgray;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #000000;
  }
  &::-webkit-resizer {
    display: none;
    /* background-color: #555; */
  }
  @media (max-width: 800px) {
    top: ${props => (props.top ? props.top : 0)}px;
    left: ${props => (props.left ? props.left : 0)}px;
    max-width: 100vw;
    overflow: scroll;
    height: ${props => (props.size ? `${props.size}vh` : "100%")};
  }
`

const TopBar = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 22px;
  /* border-bottom: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;
`

const Title = styled.div`
  font-family: "VT323", monospace;
  font-size: 20px;
`

const CloseButton = styled.div`
  line-height: 20px;
  position: absolute;
  top: 0px;
  left: 3px;
  height: 22px;
  width: 20px;
  /* border-right: 1px solid black; */
  text-align: center;
  font-family: "VT323", monospace;
  font-size: 25px;
  transform: scale(1.5, 1);
  &:hover {
    background-color: white;
    filter: invert(1);
  }
`

export default DesktopWindow
