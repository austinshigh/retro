import React, { ReactNode } from "react"

import { useRef, useState } from "react"
import styled from "styled-components"
import PhotoIcon from "../../images/FolderIcon.png"
import { DraggableContainer, DraggableImage, Input, Title } from "./Folder"
import DesktopWindow from "./DesktopWindow"
import { setDragImage } from "../../utils/DragUtility"
// import { useLongPress } from "use-long-press"

interface Props {
  title: string
  initLeft?: number
  initTop?: number
  src?: string
  windowTop?: number
  windowLeft?: number
}

const Photo = ({
  title,
  initLeft,
  initTop,
  src = PhotoIcon,
  windowTop = 0,
  windowLeft = 0,
}: Props) => {
  const [top, setTop] = useState(initTop)
  const [left, setLeft] = useState(initLeft)
  const [customTitle, setCustomTitle] = useState(title)
  const [editTitle, setEditTitle] = useState(false)
  const [windowOpen, setWindowOpen] = useState(false)

  const [dragging, setDragging] = useState(false)

  const [internalX, setInternalX] = useState(0)
  const [internalY, setInternalY] = useState(0)

  function handleWindowOpen() {
    setWindowOpen(true)
  }

  const onFolderDragStart = (ev: React.DragEvent<HTMLElement>) => {
    setDragImage(ev)
    // set mouse position on element
    let rect = ev.currentTarget.getBoundingClientRect()
    setInternalX(ev.clientX - rect.left) // get mouse x and adjust for el.
    setInternalY(ev.clientY - rect.top) // get mouse y and adjust for el.
  }

  const onFolderDrag = (ev: React.DragEvent<HTMLElement>) => {
    if (ev.clientX !== 0 && ev.clientY !== 0) {
      // account for mouse position offset
      setLeft(ev.clientX - internalX - windowLeft)
      setTop(ev.clientY - internalY - windowTop)
    }
  }

  const onFolderDragEnd = (ev: React.DragEvent<HTMLElement>) => {
    setLeft(ev.clientX - internalX - windowLeft)
    setTop(ev.clientY - internalY - windowTop)
  }

  //   function toggleInput() {
  //     setEditTitle(!editTitle)
  //   }

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
        onDragEnd={e => onFolderDragEnd(e)}
        draggable={true}
        tabIndex={0}
        onDoubleClick={() => handleWindowOpen()}
      >
        <DraggableImage
          src={src}
          alt=""
          //   {...longPressOpenWindow()}
        />
        <Title>{customTitle}</Title>
        {/* {editTitle ? (
          <Input
            onBlur={() => toggleInput()}
            onChange={(e: any) => setCustomTitle(e.target.value)}
            placeholder={customTitle}
          />
        ) : (
          <Title {...longPressToggleInput()}>{customTitle}</Title>
        )} */}
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
