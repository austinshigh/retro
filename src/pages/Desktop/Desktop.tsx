import styled from "styled-components"
import Folder from "../../components/desktop/Folder"
import useResizeWindow from "../../hooks/useResizeWindow"
import Photos from "../Windows/Photos"
import Resume from "../Windows/Resume"
import Software from "../Windows/Software"
import "./Desktop.css"

export interface WindowProps {
  windowtop?: number
  windowleft?: number
}

const Desktop = () => {
  const { height, width } = useResizeWindow()

  return (
    <>
      <DesktopContainer>
        <Folder title="Resume" draggable>
          <Resume />
        </Folder>
        <Folder title="Software" draggable>
          <Software />
        </Folder>
        <Folder title="Carpentry" draggable>
          <Photos />
        </Folder>
        {/* <Folder title="React Component Demos">
          <React />
        </Folder> */}
        {/* <Folder title="Trash" src={Trashcan}></Folder> */}
        {/* <ScreenDimensions>
          <p>
            {height},{width}
          </p>
        </ScreenDimensions> */}
      </DesktopContainer>
    </>
  )
}

const ScreenDimensions = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0px;
`

const DesktopContainer = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  align-content: flex-end;
`

export const WindowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
  padding: 20px;
`

export default Desktop
