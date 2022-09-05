import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./slices/countriesSlice";
import appearanceReducer from "./slices/appearanceSlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    appearance: appearanceReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch