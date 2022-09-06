import { configureStore } from '@reduxjs/toolkit'

import countriesReducer from './slices/countriesSlice'
import appearanceReducer from './slices/appearanceSlice'
import filtersReducer from './slices/filtersSlice'
import cartReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    appearance: appearanceReducer,
    filters: filtersReducer,
    cart: cartReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
