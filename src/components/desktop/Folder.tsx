import React from "react"

import { useRef, useState } from "react"
import styled from "styled-components"
import FolderIcon from "../../images/FolderIcon.png"

interface Props {
  title?: string
  initLeft?: number
  initTop?: number
}

const Folder = ({ title, initLeft, initTop }: Props) => {
  const [top, setTop] = useState(initTop)
  const [left, setLeft] = useState(initLeft)
  const iconRef = useRef<HTMLImageElement>(null)
  const [customTitle, setCustomTitle] = useState("")
  const [editTitle, setEditTitle] = useState(false)

  function onDragStartHandler(ev: React.DragEvent<HTMLElement>) {
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

    var dragIcon = document.createElement("img")
    dragIcon.src = "blank.png"
    dragIcon.width = 100
    ev.dataTransfer.setDragImage(dragIcon, -10, -10)

    let x = ev.clientX // get mouse x and adjust for el.
    let y = ev.clientY // get mouse y and adjust for el.

    console.log(x + "   " + y)

    if (x !== 0 && y !== 0) {
      setLeft(x)
      setTop(y)
    }
  }

  function toggleInput() {
    setEditTitle(!editTitle)
  }

  return (
    <FolderContainer
      top={top}
      left={left}
      onDragCapture={e => onDragStartHandler(e)}
      onDragEnd={e => onDragStartHandler(e)}
      draggable={true}
      tabIndex={0}
    >
      <FolderImage src={FolderIcon} ref={iconRef} alt="" />
      {editTitle ? (
        <Input
          onBlur={() => toggleInput()}
          onChange={(e: any) => setCustomTitle(e.target.value)}
          placeholder={customTitle ? customTitle : title}
        />
      ) : (
        <Title onDoubleClick={() => toggleInput()}>
          {customTitle ? customTitle : title}
        </Title>
      )}
    </FolderContainer>
  )
}

interface PositionProps {
  top?: number
  left?: number
}

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
