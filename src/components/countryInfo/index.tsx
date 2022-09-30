import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconContext } from 'react-icons'
import { BsCartPlusFill } from 'react-icons/bs'
import { MdRemoveShoppingCart } from 'react-icons/md'

import { RootState } from '../../redux/store'
import { selectCountryById } from '../../redux/slices/countriesSlice'
import { selectDarkmode } from '../../redux/slices/appearanceSlice'
import {
  addItem,
  removeItem,
  fetchCountryItems,
} from '../../redux/slices/cartSlice'

type Country = {
  id: string
}

export default function CountryInfo({ id }: Country) {
  const dispatch = useDispatch()

  const country = useSelector((state: RootState) =>
    selectCountryById(state, id)
  )
  const isDarkmode = useSelector(selectDarkmode)

  const flag = country.flags.png
  const commonName = country.name.common
  const officialName = country.name.official
  const capital = country.capital.map((capital) => <span>{capital} </span>)
  const region = country.region
  const subregion = country.subregion
  const languages = Object.values(country.languages).map((language) => (
    <li>- {language}</li>
  ))
  const population = country.population

  const countryItems = useSelector(fetchCountryItems)
  const dispatchAddItem = () => dispatch(addItem(id))
  const dispatchRemoveItem = () => dispatch(removeItem(id))

  const addItemElement = (
    <button
      onClick={dispatchAddItem}
      className="flex gap-2 p-2 m-2 rounded-md hover:bg-green-500 dark:hover:bg-green-700 "
      style={{ cursor: 'pointer' }}
    >
      <IconContext.Provider
        value={{
          color: `${isDarkmode ? 'white' : 'black'}`,
          size: '1.25em',
        }}
      >
        <BsCartPlusFill />
      </IconContext.Provider>
      <p>Add to Cart</p>
    </button>
  )

  const removeItemElement = (
    <button
      onClick={dispatchRemoveItem}
      className="flex gap-2 p-2 m-2 rounded-md hover:bg-red-500 dark:hover:bg-red-700 "
      style={{ cursor: 'pointer' }}
    >
      <IconContext.Provider
        value={{
          color: `${isDarkmode ? 'white' : 'black'}`,
          size: '1.25em',
        }}
      >
        <MdRemoveShoppingCart />
      </IconContext.Provider>
      <p>Remove from Cart</p>
    </button>
  )

  return (
    <div className="w-full h-full p-8 flex flex-col md:flex-row gap-4">
      {/* Graphic info */}
      <div className="p-8 w-full md:w-[30%] flex flex-col items-center">
        <img src={flag} alt="Country Flag" className="max-w-[250px] py-2" />
        <h2 className="italic">{officialName}</h2>
        {!countryItems.includes(id) ? addItemElement : removeItemElement}
      </div>
      {/* Detail info */}
      <div className="p-8 w-full md:w-[70%] flex flex-col gap-2 md:border-l dark:border-gray-600">
        <h2 className="text-center uppercase font-semibold text-xl">
          {officialName}
        </h2>
        <p>Common Name: {commonName}</p>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Subregion: {subregion}</p>
        <label htmlFor="languages-list">Languages: </label>
        <ul id="languages-list">{languages}</ul>
        <p>Population: {population}</p>
      </div>
    </div>
  )
}
