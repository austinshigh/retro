import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

// create tuple of names and color codes
export enum ColorNames {
  GRAY = "#f8eded",
  DARKGRAY = "#6c6c6c",
  GREEN = "#8ACE00",
  PINK = "#ffb1eb",
}

export interface BackgroundColorSliceState {
  value: ColorNames
}

const initialState: BackgroundColorSliceState = {
  value: ColorNames.GRAY,
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const backgroundColorSlice = createAppSlice({
  name: "backgroundColor",
  initialState,
  reducers: create => ({
    changeColor: create.reducer((state, action: PayloadAction<ColorNames>) => {
      state.value = action.payload
    }),
  }),
  selectors: {
    selectColor: backgroundColor => backgroundColor.value,
  },
})

// Action creators are generated for each case reducer function.
export const { changeColor } = backgroundColorSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectColor } = backgroundColorSlice.selectors
