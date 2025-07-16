import styled from "styled-components"
import PhotoIcon from "../../images/FolderIcon.png"
import Shortcut, { ShortCutTypes } from "./Shortcut"

interface Props {
  title: string
  src: string
  windowtop?: number
  windowleft?: number
}

const Photo = ({ title, windowleft, windowtop, src = PhotoIcon }: Props) => {
  return (
    <>
      <Shortcut
        title={title}
        src={src}
        type={ShortCutTypes.PHOTO}
        windowleft={windowleft}
        windowtop={windowtop}
      >
        <EnlargedPhoto src={src} />
      </Shortcut>
    </>
  )
}

const EnlargedPhoto = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  @media (max-width: 800px) {
    min-width: 50vw;
    max-width: 100%;
    max-height: 100%;
    width: 100vw;
  }
`

export default Photo
