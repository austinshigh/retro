import React from "react"

import { useRef, useState } from "react"
import styled from "styled-components"
import FolderIcon from "../../images/FolderIcon.png"

interface Props {
  title?: string
}

const Folder = ({ title }: Props) => {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const iconRef = useRef<HTMLImageElement>(null)

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

    let x = ev.clientX // get mouse x and adjust for el.
    let y = ev.clientY // get mouse y and adjust for el.

    console.log(x + "   " + y)

    if (x !== 0 && y !== 0) {
      setLeft(x)
      setTop(y)
    }
  }

  function removeDragImage(ev: React.DragEvent<HTMLImageElement>) {
    var dragIcon = document.createElement("img")
    dragIcon.src = "blank.png"
    dragIcon.width = 100
    ev.dataTransfer.setDragImage(dragIcon, -10, -10)
  }

  return (
    <FolderContainer
      top={top}
      left={left}
      onDragCapture={e => onDragStartHandler(e)}
      onDragEnd={e => onDragStartHandler(e)}
    >
      <FolderImage
        src={FolderIcon}
        ref={iconRef}
        alt=""
        onDragCapture={e => removeDragImage(e)}
      />
      <Title>{title}</Title>
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
`

const FolderImage = styled.img`
  height: 50px;
`

const Title = styled.div`
  font-size: 15px;
`

export default Folder
