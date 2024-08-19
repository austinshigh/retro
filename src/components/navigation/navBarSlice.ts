import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface NavBarSliceState {
  loggedIn: boolean
  userName: string
  status: "idle" | "loading" | "failed"
}

const initialState: NavBarSliceState = {
  loggedIn: true,
  userName: "",
  status: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const navBarSlice = createAppSlice({
  name: "navBar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    login: create.reducer(state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (!state.loggedIn) {
        state.loggedIn = true
      }
    }),
    logout: create.reducer(state => {
      if (state.loggedIn) {
        state.loggedIn = false
      }
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    updateUserName: create.reducer((state, action: PayloadAction<string>) => {
      state.userName = action.payload
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectStatus: navBar => navBar.loggedIn,
    selectUserName: navBar => navBar.userName,
  },
})

// Action creators are generated for each case reducer function.
export const { login, logout, updateUserName } = navBarSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectStatus, selectUserName } = navBarSlice.selectors
