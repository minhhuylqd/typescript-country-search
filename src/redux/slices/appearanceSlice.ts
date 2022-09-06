import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

export interface AppearanceState {
  darkmode: boolean
}

const initialState: AppearanceState = {
  darkmode: false,
}

// REGION - AppearanceSlice
const appearanceSlice = createSlice({
  name: 'appearance',
  initialState,
  reducers: {
    toggleDarkmode(state: AppearanceState, action) {
      state.darkmode = !state.darkmode
    },
  },
})

export const { toggleDarkmode } = appearanceSlice.actions

export default appearanceSlice.reducer
// ENDREGION - AppearanceSlice

// REGION - Selectors
export const selectDarkmode = (state: RootState) => state.appearance.darkmode
// ENDREGION - Selectors
