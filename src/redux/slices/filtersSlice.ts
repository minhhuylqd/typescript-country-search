import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from './../store'

export interface FiltersState {
  searchQuery: string
  filterOptions: {
    byRegion: string[]
  }
}

export interface RegionPayload {
  region: string
  changeType: string
}

const initialState: FiltersState = {
  searchQuery: '',
  filterOptions: {
    byRegion: [],
  },
}

// REGION -- FiltersSlice
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateSearch(state: FiltersState, action) {
      state.searchQuery = action.payload
    },
    updateRegionFilter: {
      reducer(state: FiltersState, action: PayloadAction<RegionPayload>) {
        let { region, changeType } = action.payload
        const { byRegion } = state.filterOptions
        switch (changeType) {
          case 'add': {
            if (!byRegion.includes(region)) {
              byRegion.push(region)
            }
            break
          }
          case 'remove': {
            state.filterOptions.byRegion = byRegion.filter(
              (existedRegion) => existedRegion !== region
            )
            break
          }
          default:
            return
        }
      },
      prepare(region: string, changeType: string) {
        return { payload: { region, changeType } }
      },
    },
  },
})

export const { updateSearch, updateRegionFilter } = filtersSlice.actions

export default filtersSlice.reducer
// ENDREGION -- FiltersSlice

// REGION -- Selectors
export const selectSelectedRegions = (state: RootState) =>
  state.filters.filterOptions.byRegion.map((region: string) => ({
    name: region,
    id: region,
  }))
// ENDREGION -- Selectors
