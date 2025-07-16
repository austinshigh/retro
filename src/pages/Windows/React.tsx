import styled from "styled-components"
import Folder from "../../components/desktop/Folder"
import react from "../../images/ReactLogo8Bit.png"
import { WindowProps } from "../Desktop/Desktop"

const React = ({ windowtop, windowleft }: WindowProps) => {
  return (
    <WindowContainer>
      <Folder
        title={"Infinite Scroll"}
        src={react}
        href={"https://ai.wildtrack.org/"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Folder
        title={"Form Generator"}
        src={react}
        href={"https://ai.wildtrack.org/"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Folder
        title={"Search Bar w/ Debounce"}
        src={react}
        href={"https://ai.wildtrack.org/"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Folder
        title={"Memo / Callback Optimization Demo"}
        src={react}
        href={"https://ai.wildtrack.org/"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Folder
        title={"Lazy Loading"}
        src={react}
        href={"https://ai.wildtrack.org/"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Folder
        title={"Drag and Drop Re-Order"}
        src={react}
        href={"https://ai.wildtrack.org/"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Folder
        title={"Window Resize Hook"}
        src={react}
        href={"https://ai.wildtrack.org/"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
    </WindowContainer>
  )
}

export const WindowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 20px;
`

export default React
