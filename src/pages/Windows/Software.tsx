import styled from "styled-components"
import Folder from "../../components/desktop/Folder"
import type { WindowProps } from "../Desktop/Desktop"
import Applications from "./Applications"
import Games from "./Games"
import ReactDemo, { WindowContainer } from "./ReactDemo"

const Software = ({ windowtop, windowleft }: WindowProps) => {
  return (
    <StyledWindowContainer>
      <Folder
        title="Applications"
        windowtop={windowtop}
        windowleft={windowleft}
      >
        <Applications />
      </Folder>
      <Folder
        title="React Components"
        windowtop={windowtop}
        windowleft={windowleft}
      >
        <ReactDemo />
      </Folder>
      <Folder title="Games" windowtop={windowtop} windowleft={windowleft}>
        <Games />
      </Folder>
    </StyledWindowContainer>
  )
}

export default Software

const StyledWindowContainer = styled(WindowContainer)`
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`
