import { RootState } from './../store'
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

export type Country = {
  name: {
    common: string
    official: string
  }
  cca3: string
  capital: string[]
  region: string
  subregion: string
  languages: {
    [language: string]: string
  }
  population: number
  flags: {
    png: string
  }
}

export interface CountryState {
  entities: {
    [countryId: string]: Country
  }
  status: string
}

const initialState: CountryState = {
  entities: {},
  status: 'idle',
}

// REGION -- Thunk function
export const fetchAllCountries = createAsyncThunk(
  'countries/fetchAllCountries',
  async () => {
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,cca3,capital,region,subregion,languages,population,flags'
      )
      const data = await response.json()
      if (response.ok) {
        return data
      }
      throw new Error(response.statusText)
    } catch (err) {
      return console.log(err)
    }
  }
)
// ENDREGION -- Thunk function

// REGION -- CountriesSlices
const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state: CountryState, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAllCountries.fulfilled, (state: CountryState, action) => {
        let data = action.payload
        data.forEach((country: Country) => {
          state.entities = {
            ...state.entities,
            [country.cca3]: country,
          }
        })
        state.status = 'idle'
      })
  },
})

export default countriesSlice.reducer
// ENDREGION -- CountriesSlices

// REGION -- Selectors
export const selectAllCountries = (state: RootState) => state.countries

export const selectCountryEntities = (state: RootState) =>
  state.countries.entities

export type CountryEntities = CountryState['entities']

export const selectAllCountryIds = createSelector(
  (state: RootState) => selectCountryEntities(state),
  (countries: CountryEntities) =>
    Object.values(countries).map((country: Country) => country.cca3)
)

export const selectFilteredCountries = createSelector(
  selectAllCountries,

  (state: RootState) => state.filters,

  (countriesState, filtersState) => {
    const { searchQuery, filterOptions } = filtersState
    const { byRegion } = filterOptions

    let filteredCountries = Object.values(countriesState.entities)

    if (searchQuery !== '') {
      filteredCountries = filteredCountries.filter((country: Country) => {
        return country.name.official
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      })
    }

    if (byRegion.length > 0) {
      filteredCountries = filteredCountries.filter((country: Country) => {
        return byRegion.includes(country.region)
      })
    }

    return filteredCountries
  }
)

export const selectFilteredCountryIds = createSelector(
  selectFilteredCountries,
  (filteredCountries) =>
    filteredCountries.map((country: Country) => country.cca3)
)

export type CountryIds = string[]

export const selectCountryById = (state: RootState, countryId: string) =>
  selectCountryEntities(state)[countryId]
// ENDREGION -- Selectors
