import React, { ReactNode } from "react"
import FolderIcon from "../../images/FolderIcon.png"
import Shortcut, { ShortCutTypes } from "./Shortcut"
import { WindowSize } from "./DesktopWindow"

interface Props {
  title: string
  children?: ReactNode
  windowtop?: number
  windowleft?: number
  href?: string
  src?: string
  windowSize?: WindowSize
}

const Folder = ({
  title,
  children,
  windowtop,
  windowleft,
  href,
  src,
  windowSize,
}: Props) => {
  return (
    <Shortcut
      src={src}
      title={title}
      type={ShortCutTypes.FOLDER}
      windowtop={windowtop}
      windowleft={windowleft}
      href={href}
      windowSize={windowSize}
    >
      {children}
    </Shortcut>
  )
}

export default Folder
