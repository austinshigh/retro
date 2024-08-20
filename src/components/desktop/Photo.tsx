import React, { ReactNode } from "react"

import { useRef, useState } from "react"
import styled from "styled-components"
import PhotoIcon from "../../images/FolderIcon.png"
import {
  CloseButton,
  DraggableContainer,
  DraggableImage,
  Input,
  Title,
  TopBar,
} from "./Folder"

interface Props {
  title?: string
  initLeft?: number
  initTop?: number
  src?: string
}

const Photo = ({ title, initLeft, initTop, src = PhotoIcon }: Props) => {
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
        <DraggableImage
          src={src}
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

export default Photo
