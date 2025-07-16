import { WindowSize } from "../../components/desktop/DesktopWindow"
import Folder from "../../components/desktop/Folder"
import { WindowContainer } from "../../components/WindowContainer"
import { type WindowProps } from "../Desktop/Desktop"
import IFrame from "./IFrame/IFrame"

const Games = ({ windowtop, windowleft }: WindowProps) => {
  return (
    <WindowContainer>
      <Folder
        title="Hangman"
        windowSize={WindowSize.LARGE}
        windowtop={windowtop}
        windowleft={windowleft}
      >
        <IFrame />
      </Folder>
    </WindowContainer>
  )
}

export default Games
