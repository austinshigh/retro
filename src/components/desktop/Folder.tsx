import React, { ReactNode } from "react"

import { useRef, useState } from "react"
import styled from "styled-components"
import FolderIcon from "../../images/FolderIcon.png"

interface Props {
  title?: string
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
  const windowRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLImageElement>(null)
  const [customTitle, setCustomTitle] = useState(title)
  const [editTitle, setEditTitle] = useState(false)
  const [windowOpen, setWindowOpen] = useState(false)

  const [windowTop, setWindowTop] = useState(100)
  const [windowLeft, setWindowLeft] = useState(100)

  function handleWindowOpen() {
    if (href) {
      window.open(href, "_blank", "noopener")
    } else setWindowOpen(true)
  }

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

  const onFolderDragStart = (ev: React.DragEvent<HTMLElement>) => {
    setDragImage(ev)
  }

  const setDragImage = (ev: React.DragEvent<HTMLElement>) => {
    let img = document.createElement("img")
    // img.src =
    //   "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
    img.src = "https://i.ibb.co/48MwZNN/Single-Pixel.png"
    document.body.appendChild(img)
    ev.dataTransfer.setDragImage(img, 0, 0)
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

    if (windowRef.current) {
      let rect = windowRef.current.getBoundingClientRect()
      console.log(rect.top, rect.right, rect.bottom, rect.left)

      x = ev.clientX - rect.left // get mouse x and adjust for el.
      y = ev.clientY - rect.top // get mouse y and adjust for el.
    } else {
      x = ev.clientX // get mouse x and adjust for el.
      y = ev.clientY // get mouse y and adjust for el.
    }

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
          ref={iconRef}
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
          <InnerWindowContainer>{children}</InnerWindowContainer>
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

const InnerWindowContainer = styled.div``

export const CloseButton = styled.div`
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

export const TopBar = styled.div`
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

export const DraggableContainer = styled.div<PositionProps>`
  position: ${props => (props.top || props.left ? "absolute" : "relative")};
  top: ${props => (props.top ? props.top : 0)}px;
  left: ${props => (props.left ? props.left : 0)}px;
  padding: 5px;
  display: flex;
  width: 75px;
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
