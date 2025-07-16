import Folder from "../../components/desktop/Folder"
import type { WindowProps } from "../Desktop/Desktop"
import Applications from "./Applications"
import Games from "./Games"
import { WindowContainer } from "./Photos"
import ReactDemo from "./ReactDemo"

const Software = ({ windowtop, windowleft }: WindowProps) => {
  return (
    <WindowContainer>
      <Folder
        title="Applications"
        windowtop={windowtop}
        windowleft={windowleft}
      >
        <Applications />
      </Folder>
      <Folder
        title="React Component Demos"
        windowtop={windowtop}
        windowleft={windowleft}
      >
        <ReactDemo />
      </Folder>
      <Folder title="Games" windowtop={windowtop} windowleft={windowleft}>
        <Games />
      </Folder>
    </WindowContainer>
  )
}

export default Software
