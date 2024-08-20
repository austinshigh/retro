import React from "react"

import { useRef, useState } from "react"
import styled from "styled-components"
import FolderIcon from "../../images/FolderIcon.png"
import Resume from "../Resume"

interface Props {
  title?: string
  initLeft?: number
  initTop?: number
}

const Folder = ({ title, initLeft, initTop }: Props) => {
  const [top, setTop] = useState(initTop)
  const [left, setLeft] = useState(initLeft)
  const iconRef = useRef<HTMLImageElement>(null)
  const [customTitle, setCustomTitle] = useState(title)
  const [editTitle, setEditTitle] = useState(false)
  const [windowOpen, setWindowOpen] = useState(false)

  const [windowTop, setWindowTop] = useState(100)
  const [windowLeft, setWindowLeft] = useState(100)

  function onWindowDrag(ev: React.DragEvent<HTMLElement>) {
    let x = ev.clientX // get mouse x and adjust for el.
    let y = ev.clientY // get mouse y and adjust for el.

    if (x !== 0 && y !== 0) {
      setWindowLeft(x)
      setWindowTop(y)
    }
  }

  const onDragStartHandler = (ev: React.DragEvent<HTMLElement>) => {
    // if (iconRef.current) {
    //   let rect = iconRef.current.getBoundingClientRect()
    //   console.log(rect.top, rect.right, rect.bottom, rect.left)
    // }

    // let rect = (ev.target as HTMLImageElement).getBoundingClientRect()

    // var x = ev.clientX - rect.left // get mouse x and adjust for el.
    // var y = ev.clientY - rect.top // get mouse y and adjust for el.

    // console.log(x + "   " + y)

    // setLeft(x)
    // setTop(y)

    // var dragIcon = document.createElement("img")
    // dragIcon.src = "blank.png"
    // dragIcon.width = 100
    // ev.dataTransfer.setDragImage(dragIcon, -10, -10)

    // var crt = this.cloneNode(true)
    // crt.style.backgroundColor = "red"
    // crt.style.display = "none" /* or visibility: hidden, or any of the above */
    // document.body.appendChild(crt)
    // ev.dataTransfer.setDragImage(crt, 0, 0)

    // let img = document.createElement("img")
    // img.src = "blank.png"
    // img.style.display = "none"
    // document.body.appendChild(img)
    // ev.dataTransfer.setDragImage(img, 0, 0)

    var img = document.createElement("img")
    img.src = "blank.png"
    img.style.display = "none"
    if (iconRef.current !== null) {
      iconRef.current.appendChild(img)
    }

    ev.dataTransfer.setDragImage(img, 0, 0)

    let x = ev.clientX // get mouse x and adjust for el.
    let y = ev.clientY // get mouse y and adjust for el.

    if (x !== 0 && y !== 0) {
      setLeft(x)
      setTop(y)
    }
  }

  function toggleInput() {
    setEditTitle(!editTitle)
  }

  return (
    <>
      <FolderContainer
        top={top}
        left={left}
        onDragCapture={e => onDragStartHandler(e)}
        onDragEnd={e => onDragStartHandler(e)}
        draggable={true}
        tabIndex={0}
      >
        <FolderImage
          src={FolderIcon}
          ref={iconRef}
          alt=""
          onDoubleClick={() => setWindowOpen(true)}
        />
        {editTitle ? (
          <Input
            onBlur={() => toggleInput()}
            onChange={(e: any) => setCustomTitle(e.target.value)}
            placeholder={customTitle}
          />
        ) : (
          <Title onDoubleClick={() => toggleInput()}>{customTitle}</Title>
        )}
      </FolderContainer>
      {windowOpen && (
        <WindowContainer left={windowLeft} top={windowTop}>
          <TopBar
            draggable={true}
            onDragCapture={e => onWindowDrag(e)}
            onDragEnd={e => onWindowDrag(e)}
          >
            <div>{customTitle}</div>
            <CloseButton onClick={() => setWindowOpen(false)}>X</CloseButton>
          </TopBar>
          <Resume />
        </WindowContainer>
      )}
    </>
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

const FolderContainer = styled.div<PositionProps>`
  position: fixed;
  top: ${props => (props.top ? props.top : 50)}px;
  left: ${props => (props.left ? props.left : 50)}px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  &:focus {
    border: 1px solid black;
    background-color: white;
    filter: invert(1);
  }
  &:focus-visible {
    border: 1px solid black;
    background-color: white;
    filter: invert(1);
  }
`

const FolderImage = styled.img`
  height: 50px;
  width: 50px;
`

const Title = styled.div`
  font-family: "VT323", monospace;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 18px;
  max-width: 50px;
`

const Input = styled.input`
  font-family: "VT323", monospace;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 18px;
  background: transparent;
  border: none;
  outline: none;
`

export default Folder
