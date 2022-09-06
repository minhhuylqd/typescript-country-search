import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import {BsCartPlusFill} from 'react-icons/bs'
import {MdRemoveShoppingCart} from 'react-icons/md'

import {RootState} from "../../redux/store"
import { selectCountryById } from "../../redux/slices/countriesSlice";
import { selectDarkmode } from "../../redux/slices/appearanceSlice";
import { addItem, removeItem, fetchCountryItems } from "../../redux/slices/cartSlice";

type Item = {
  id: string
}

export default function TableItems({id}: Item) {

  const dispatch = useDispatch()

  const country = useSelector((state: RootState) => selectCountryById(state, id))
  const isDarkmode = useSelector(selectDarkmode)

  const flag = country.flags.png
  const name = country.name.common
  const region = country.region
  const population = country.population

  const countryItems = useSelector(fetchCountryItems)
  const dispatchAddItem = () => dispatch(addItem(id))
  const dispatchRemoveItem = () => dispatch(removeItem(id))

  const addItemElement = (
    <div
      onClick={dispatchAddItem}
      className="p-3 hover:bg-gray-300 dark:hover:bg-gray-500"
      style={{cursor: 'pointer'}}
    >
      <IconContext.Provider value={{
        color: `${isDarkmode ? "white" : "black"}`,
        size: '1.25em'
      }}>
        <BsCartPlusFill />
      </IconContext.Provider>
    </div>
  )
  const removeItemElement = (
    <div
      onClick={dispatchRemoveItem}
      className="p-3 hover:bg-gray-300 dark:hover:bg-gray-500"
      style={{cursor: 'pointer'}}
    >
      <IconContext.Provider value={{
        color: `${isDarkmode ? "white" : "black"}`,
        size: '1.25em'
      }}>
        <MdRemoveShoppingCart />
      </IconContext.Provider>
    </div>
  )

  return (
    <tr className="border-b dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600">
      <td className="py-2 px-4 border-r dark:border-gray-600">
        <img src={flag} alt="Country Flag" className="max-w-[100px]" />
      </td>
      <td className="py-2 px-4 border-r dark:border-gray-600">
        {name}
      </td>
      <td className="py-2 px-4 border-r dark:border-gray-600">
        {region}
      </td>
      <td className="py-2 px-4 border-r dark:border-gray-600">
        {population}
      </td>
      <td className="text-center py-2 px-4 border-r dark:border-gray-600">
        <p>Read More</p>
      </td>
      <td className="text-center py-2 px-4">
        {
          !countryItems.includes(id)
           ? addItemElement
           : removeItemElement
        }
      </td>
    </tr>
  )
}