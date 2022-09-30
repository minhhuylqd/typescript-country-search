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

export type SelectedRegion = {
  id: string
  name: string
}
