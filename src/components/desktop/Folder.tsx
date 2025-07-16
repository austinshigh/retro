import type { ReactNode } from "react"
import type { WindowSize } from "./DesktopWindow"
import Shortcut, { ShortCutTypes } from "./Shortcut"

interface Props {
  title: string
  children?: ReactNode
  windowtop?: number
  windowleft?: number
  href?: string
  src?: string
  windowSize?: WindowSize
  description?: string
}

const Folder = ({
  title,
  children,
  windowtop,
  windowleft,
  href,
  src,
  windowSize,
  description,
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
      description={description}
    >
      {children}
    </Shortcut>
  )
}

export default Folder
