import React, { ReactNode } from "react"

import { useRef, useState } from "react"
import styled from "styled-components"
import PhotoIcon from "../../images/FolderIcon.png"
import { DraggableContainer, DraggableImage, Input, Title } from "./Folder"
import DesktopWindow from "./DesktopWindow"
// import { useLongPress } from "use-long-press"

interface Props {
  title: string
  initLeft?: number
  initTop?: number
  src?: string
}

const Photo = ({ title, initLeft, initTop, src = PhotoIcon }: Props) => {
  const [top, setTop] = useState(initTop)
  const [left, setLeft] = useState(initLeft)
  const [customTitle, setCustomTitle] = useState(title)
  const [editTitle, setEditTitle] = useState(false)
  const [windowOpen, setWindowOpen] = useState(false)

  const [dragging, setDragging] = useState(false)

  function handleWindowOpen() {
    setWindowOpen(true)
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

  //   Mobile Event Handlers
  //   const longPressOpenWindow = useLongPress(() => {
  //     if (!dragging) {
  //       handleWindowOpen()
  //     }
  //   })

  //   const longPressToggleInput = useLongPress(() => {
  //     if (!dragging) {
  //       toggleInput()
  //     }
  //   })

  const onMobileDrag = (e: React.TouchEvent<HTMLElement>) => {
    setDragging(true)
    let touchLocation = e.targetTouches[0]
    let x = touchLocation.pageX
    let y = touchLocation.pageY

    if (x !== 0 && y !== 0) {
      setLeft(x)
      setTop(y)
    }
  }

  return (
    <>
      <DraggableContainer
        top={top}
        left={left}
        onTouchMove={e => onMobileDrag(e)}
        onTouchEnd={() => setDragging(false)}
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
          //   {...longPressOpenWindow()}
        />
        {editTitle ? (
          <Input
            onBlur={() => toggleInput()}
            onChange={(e: any) => setCustomTitle(e.target.value)}
            placeholder={customTitle}
          />
        ) : (
          <Title
            onDoubleClick={() => toggleInput()}
            // {...longPressToggleInput()}
          >
            {customTitle}
          </Title>
        )}
      </DraggableContainer>
      {windowOpen && (
        <DesktopWindow
          title={customTitle}
          handleCloseWindow={() => setWindowOpen(false)}
        >
          <EnlargedPhoto src={src} />
        </DesktopWindow>
      )}
    </>
  )
}

const EnlargedPhoto = styled.img`
  min-width: 200px;
  max-width: 50vw;
  max-height: 50vh;
  @media (max-width: 800px) {
    min-width: 50vw;
    max-width: 100%;
    max-height: 100%;
    width: 100vw;
  }
`

export default Photo
