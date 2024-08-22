import React from "react"
import { ColorNames } from "./backgroundColor/backgroundColor"

interface Props {
  color: string
  setColor: (color: ColorNames) => void
}

const RadioComponent: React.FC<Props> = ({ color, setColor }) => (
  <div>
    <div>
      <input
        type="radio"
        value={ColorNames.GRAY}
        name="color"
        checked={color === ColorNames.GRAY}
        onChange={() => setColor(ColorNames.GRAY)}
      />{" "}
      Gray
    </div>
    <div>
      <input
        type="radio"
        value={ColorNames.DARKGRAY}
        name="color"
        checked={color === ColorNames.DARKGRAY}
        onChange={() => setColor(ColorNames.DARKGRAY)}
      />{" "}
      Dark Gray
    </div>
    <div>
      <input
        type="radio"
        value={ColorNames.PINK}
        name="color"
        checked={color === ColorNames.PINK}
        onChange={() => setColor(ColorNames.PINK)}
      />{" "}
      Pink
    </div>
    <div>
      <input
        type="radio"
        value={ColorNames.GREEN}
        name="color"
        checked={color === ColorNames.GREEN}
        onChange={() => setColor(ColorNames.GREEN)}
      />{" "}
      Green
    </div>
  </div>
)

export default RadioComponent
