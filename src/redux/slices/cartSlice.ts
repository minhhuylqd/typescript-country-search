import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface CartState {
  countryItems: string[]
}

const initialState: CartState = {
  countryItems: []
}

// REGION -- CartSlice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state: CartState, action) {
      const item = action.payload
      if (!state.countryItems.includes(item)) {
        state.countryItems.push(item)
      }
    },
    removeItem(state: CartState, action) {
      state.countryItems = state.countryItems.filter((item) => item !== action.payload)
    },
    clearAll(state: CartState, action) {
      state.countryItems = []
    }
  }
})

export const {addItem, removeItem, clearAll} = cartSlice.actions

export default cartSlice.reducer
// ENDREGION -- CartSlice

// REGION -- Selectors
export const fetchCountryItems = (state:RootState) => state.cart.countryItems
// ENDREGION -- Selectors