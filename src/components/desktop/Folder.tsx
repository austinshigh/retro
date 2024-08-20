import React, { ReactNode } from "react"

import { useRef, useState } from "react"
import styled from "styled-components"
import FolderIcon from "../../images/FolderIcon.png"
import { setDragImage } from "../../utils/DragUtility"
import DesktopWindow from "./DesktopWindow"
import { useLongPress } from "use-long-press"

interface Props {
  title: string
  initLeft?: number
  initTop?: number
  src?: string
  href?: string
  children?: ReactNode
}

const Folder = ({
  title,
  initLeft,
  initTop,
  src = FolderIcon,
  href,
  children,
}: Props) => {
  const [top, setTop] = useState(initTop)
  const [left, setLeft] = useState(initLeft)
  const iconRef = useRef<HTMLImageElement>(null)
  const [customTitle, setCustomTitle] = useState(title)
  const [editTitle, setEditTitle] = useState(false)
  const [windowOpen, setWindowOpen] = useState(false)
  const [dragging, setDragging] = useState(false)

  function handleWindowOpen() {
    if (href) {
      window.open(href, "_blank", "noopener")
    } else setWindowOpen(true)
  }

  const onFolderDragStart = (ev: React.DragEvent<HTMLElement>) => {
    setDragImage(ev)
  }

  const onFolderDrag = (ev: React.DragEvent<HTMLElement>) => {
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

    // ev.dataTransfer.setDragImage(img, 0, 0)

    // let x = ev.clientX // get mouse x and adjust for el.
    // let y = ev.clientY // get mouse y and adjust for el.

    let x
    let y

    // TODO: need to pass a window ref to the child, so that a folder contained within a window knows the spacing of its

    // if (windowRef.current) {
    //   let rect = windowRef.current.getBoundingClientRect()
    //   console.log(rect.top, rect.right, rect.bottom, rect.left)

    //   x = ev.clientX - rect.left // get mouse x and adjust for el.
    //   y = ev.clientY - rect.top // get mouse y and adjust for el.
    // } else {
    x = ev.clientX // get mouse x and adjust for el.
    y = ev.clientY // get mouse y and adjust for el.
    // }

    if (x !== 0 && y !== 0) {
      setLeft(x)
      setTop(y)
    }
  }

  function toggleInput() {
    setEditTitle(!editTitle)
  }

  //   Mobile Event Handlers
  const longPressOpenWindow = useLongPress(() => {
    if (!dragging) {
      handleWindowOpen()
    }
  })

  const longPressToggleInput = useLongPress(() => {
    if (!dragging) {
      toggleInput()
    }
  })

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
          ref={iconRef}
          alt=""
          {...longPressOpenWindow()}
          onDoubleClick={() => handleWindowOpen()}
        />
        {editTitle ? (
          <Input
            onBlur={() => toggleInput()}
            onChange={(e: any) => setCustomTitle(e.target.value)}
            placeholder={customTitle}
            maxLength={13}
          />
        ) : (
          <Title
            onDoubleClick={() => toggleInput()}
            {...longPressToggleInput()}
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
          {children}
        </DesktopWindow>
      )}
    </>
  )
}

interface PositionProps {
  top?: number
  left?: number
}

export const DraggableContainer = styled.div<PositionProps>`
  position: ${props => (props.top || props.left ? "absolute" : "relative")};
  top: ${props => (props.top ? props.top : 0)}px;
  left: ${props => (props.left ? props.left : 0)}px;
  padding: 5px;
  display: flex;
  max-width: 120px;
  flex-direction: column;
  align-items: center;
  filter: grayscale(100%);
  &:focus {
    border: 1px solid black;
    background-color: white;
    filter: grayscale(100%) invert(1);
  }
  &:focus-visible {
    border: 1px solid black;
    background-color: white;
    filter: grayscale(100%) invert(1);
  }
`

export const DraggableImage = styled.img`
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

export const Title = styled.div`
  font-family: "VT323", monospace;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 18px;
  text-align: center;
`

export const Input = styled.input`
  font-family: "VT323", monospace;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 18px;
  background: transparent;
  border: none;
  outline: none;
  text-align: center;
`

export default Folder
