import { WindowSize } from "../../components/desktop/DesktopWindow"
import Folder from "../../components/desktop/Folder"
import { WindowProps } from "../Desktop/Desktop"
import HangmanIFrame from "./IFrame/IFrame"
import { WindowContainer } from "./Photos"

const Games = ({ windowtop, windowleft }: WindowProps) => {
  return (
    <WindowContainer>
      <Folder title={"Hangman"} windowSize={WindowSize.LARGE}>
        <HangmanIFrame />
      </Folder>
    </WindowContainer>
  )
}

export default Games
