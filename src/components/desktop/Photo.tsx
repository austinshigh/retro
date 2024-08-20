import React, { ReactNode } from "react"

import { useRef, useState } from "react"
import styled from "styled-components"
import PhotoIcon from "../../images/FolderIcon.png"
import { DraggableContainer } from "./Folder"

interface Props {
  title?: string
  initLeft?: number
  initTop?: number
  src?: string
}

const Photo = ({ title, initLeft, initTop, src }: Props) => {
  const [top, setTop] = useState(initTop)
  const [left, setLeft] = useState(initLeft)
  const windowRef = useRef<HTMLDivElement>(null)
  const [customTitle, setCustomTitle] = useState(title)
  const [editTitle, setEditTitle] = useState(false)
  const [windowOpen, setWindowOpen] = useState(false)

  const [windowTop, setWindowTop] = useState(100)
  const [windowLeft, setWindowLeft] = useState(100)

  function handleWindowOpen() {
    setWindowOpen(true)
  }

  const onWindowDragStart = (ev: React.DragEvent<HTMLElement>) => {
    setDragImage(ev)
  }

  function onWindowDrag(ev: React.DragEvent<HTMLElement>) {
    let x = ev.clientX // get mouse x and adjust for el.
    let y = ev.clientY // get mouse y and adjust for el.

    if (x !== 0 && y !== 0) {
      setWindowLeft(x)
      setWindowTop(y)
    }
  }

  const onFolderDragStart = (ev: React.DragEvent<HTMLElement>) => {
    setDragImage(ev)
  }

  const setDragImage = (ev: React.DragEvent<HTMLElement>) => {
    let img = document.createElement("img")
    img.src = "https://i.ibb.co/48MwZNN/Single-Pixel.png"
    document.body.appendChild(img)
    ev.dataTransfer.setDragImage(img, 0, 0)
  }

  const onFolderDrag = (ev: React.DragEvent<HTMLElement>) => {
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
      <DraggableContainer
        top={top}
        left={left}
        onDragStart={e => onFolderDragStart(e)}
        onDragCapture={e => onFolderDrag(e)}
        onDragEnd={e => onFolderDrag(e)}
        draggable={true}
        tabIndex={0}
      >
        <FolderImage
          src={src ? src : PhotoIcon}
          alt=""
          onDoubleClick={() => handleWindowOpen()}
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
      </DraggableContainer>
      {windowOpen && (
        <WindowContainer left={windowLeft} top={windowTop} ref={windowRef}>
          <TopBar
            draggable={true}
            onDragStart={e => onWindowDragStart(e)}
            onDragCapture={e => onWindowDrag(e)}
            onDragEnd={e => onWindowDrag(e)}
          >
            <div>{customTitle}</div>
            <CloseButton onClick={() => setWindowOpen(false)}>X</CloseButton>
          </TopBar>
          <EnlargedPhoto src={src} />
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
  resize: both;
  overflow: auto;
  border: 1px solid black;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  background-color: #f8eded;
  z-index: 1000;
`

const EnlargedPhoto = styled.img`
  min-width: 200px;
  max-width: 50vw;
  max-height: 50vh;
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

const FolderImage = styled.img`
  height: 50px;
  width: 50px;
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
  -webkit-user-drag: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
`

const Title = styled.div`
  font-family: "VT323", monospace;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 18px;
  text-align: center;
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

export default Photo
