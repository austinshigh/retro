import React from "react"
import Photo from "../../components/desktop/Photo"
import styled from "styled-components"
import { WindowProps } from "../Desktop/Desktop"

const Photos = ({ windowtop, windowleft }: WindowProps) => {
  return (
    <WindowContainer>
      <Photo
        title={"Ping Pong"}
        src={
          "https://i.ibb.co/Qj55dYv/64564685692-6-C3-A2-D94-3-B4-D-4-A81-A523-8-AE95-A1-AFF6-C.jpg"
        }
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Photo
        title={"Staircase"}
        src={"https://i.ibb.co/jv8h8HX/Steel-Staircase-Evergreen.jpg"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Photo
        title={"Mudroom Rack"}
        src={"https://i.ibb.co/wp6yn9H/Mudroom-Rack.jpg"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Photo
        title={"Rendering Front"}
        src={"https://i.ibb.co/JxYDv8Y/Render-Golden-Colorado.jpg"}
        windowtop={windowtop}
        windowleft={windowleft}
      />
      <Photo
        title={"Rendering Back"}
        src={"https://i.ibb.co/yf5LzSD/Golden-2.jpg"}
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

export default Photos
