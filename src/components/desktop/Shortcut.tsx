import type React from "react"
import type { ReactNode } from "react"

import { useState } from "react"
import styled from "styled-components"
import FolderIcon from "../../images/FolderIcon.png"
import { setDragImage } from "../../utils/DragUtility"
import type { WindowSize } from "./DesktopWindow"
import DesktopWindow from "./DesktopWindow"
// import { useLongPress } from "use-long-press"

export enum ShortCutTypes {
  FOLDER = "FOLDER",
  PHOTO = "PHOTO",
  FILE = "FILE",
}

interface Props {
  title: string
  initLeft?: number
  initTop?: number
  src?: string
  href?: string
  children?: ReactNode
  windowtop?: number
  windowleft?: number
  type: ShortCutTypes
  windowSize?: WindowSize
  description?: string
  handleCurrentDescription?: (input: string) => void
  draggable: boolean
}

const Shortcut = ({
  title,
  initLeft,
  initTop,
  src = FolderIcon,
  href,
  children,
  windowtop = 0,
  windowleft = 0,
  type,
  windowSize,
  description = "",
  draggable,
  handleCurrentDescription,
}: Props) => {
  const [top, setTop] = useState(initTop)
  const [left, setLeft] = useState(initLeft)
  const [customTitle, setCustomTitle] = useState(title)
  const [windowOpen, setWindowOpen] = useState(false)

  const [showDescription, setShowDescription] = useState(false)

  const [internalX, setInternalX] = useState(0)
  const [internalY, setInternalY] = useState(0)

  function handleWindowOpen() {
    if (href && type === ShortCutTypes.FILE) {
      window.open(href, "_blank", "noopener")
    } else setWindowOpen(true)
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
      setLeft(ev.clientX - internalX - windowleft)
      setTop(ev.clientY - internalY - windowtop)
    }
  }

  const onFolderDragEnd = (ev: React.DragEvent<HTMLElement>) => {
    setLeft(ev.clientX - internalX - windowleft)
    setTop(ev.clientY - internalY - windowtop)
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
    let touchLocation = e.targetTouches[0]
    if (touchLocation.pageX !== 0 && touchLocation.pageY !== 0) {
      setLeft(touchLocation.pageX)
      setTop(touchLocation.pageY)
    }
  }

  const handleSetDescription = () => {
    console.log("set")
    handleCurrentDescription && handleCurrentDescription(description)
  }

  return (
    <>
      <DraggableContainer
        top={top}
        left={left}
        onTouchMove={draggable ? e => onMobileDrag(e) : undefined}
        onDragStart={draggable ? e => onFolderDragStart(e) : undefined}
        onDragCapture={draggable ? e => onFolderDrag(e) : undefined}
        onDragEnd={draggable ? e => onFolderDragEnd(e) : undefined}
        draggable={draggable}
        tabIndex={0}
        onClick={handleSetDescription}
        onDoubleClick={() => handleWindowOpen()}
      >
        <DraggableImage src={src} alt="" />
        <Title>{customTitle}</Title>
      </DraggableContainer>
      {windowOpen && (
        <DesktopWindow
          title={customTitle}
          handleCloseWindow={() => setWindowOpen(false)}
          windowSize={windowSize}
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

const Description = styled.div`
  display: none;
`

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
    ${Description} {
      display: block;
    }
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

export default Shortcut
