import { RootState } from './../store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  searchQuery: string
  filter: {
    byRegion: string[]
  }
}

const initialState: FiltersState = {
  searchQuery: '',
  filter: {
    byRegion: []
  }
}

// REGION -- FiltersSlice
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateSearch(state:FiltersState, action) {
      state.searchQuery = action.payload
    },
    updateRegionFilter: {
      reducer(state: FiltersState, action: PayloadAction<{region: string, changeType: string}>) {
        let {region, changeType} = action.payload
        const {byRegion} = state.filter
        switch (changeType) {
          case 'add': {
            if (!byRegion.includes(region)) {
              byRegion.push(region)
            }
            break
          }
          case 'remove': {
            state.filter.byRegion = byRegion.filter((existedRegion: string) => existedRegion !== region)
            break
          }
          default:
            return
        }
      },
      prepare(region: string, changeType: string) {
        return {payload: {region, changeType}}
      }
    }
  }
})

export const {
  updateSearch,
  updateRegionFilter
} = filtersSlice.actions

export default filtersSlice.reducer
// ENDREGION -- FiltersSlice


// REGION -- Selectors
export const selectSelectedRegions = (state: RootState) => state.filters.filter.byRegion.map(
  (region: string) => ( {name: region, id: region} )
)
// ENDREGION -- Selectors