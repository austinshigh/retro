import type { ReactNode } from "react"
import Shortcut, { ShortCutTypes } from "./Shortcut"

interface Props {
  title: string
  children?: ReactNode
  windowtop?: number
  windowleft?: number
  href?: string
  src?: string
  description?: string
  handleCurrentDescription: (input: string) => void
  draggable?: boolean
}

const FileIcon = ({
  title,
  children,
  windowtop,
  windowleft,
  href,
  src,
  description,
  handleCurrentDescription,
  draggable = false,
}: Props) => {
  return (
    <Shortcut
      src={src}
      title={title}
      type={ShortCutTypes.FILE}
      windowtop={windowtop}
      windowleft={windowleft}
      href={href}
      description={description}
      handleCurrentDescription={handleCurrentDescription}
      draggable={draggable}
    />
  )
}

export default FileIcon
