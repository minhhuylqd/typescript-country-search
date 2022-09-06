import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import {FaTimes} from 'react-icons/fa'

import CartItems from "./CartItems";
import { fetchCountryItems } from "../../redux/slices/cartSlice";
import { selectDarkmode } from "../../redux/slices/appearanceSlice";


export default function CartContent() {

  const dispatch = useDispatch()

  const countryItems = useSelector(fetchCountryItems)

  const isDarkmode = useSelector(selectDarkmode)

  const renderedItems = countryItems.map((item) => {
    return <CartItems id={item} key={item} />
  })

  const handleClearAll = () => dispatch({type: 'cart/clearAll'})

  const clearAllElement = (
    <div 
      className="p-1 flex items-center gap-2 hover:border-b border-gray-900 dark:border-gray-300"
      style={{cursor: 'pointer'}}
      onClick={handleClearAll}
    >
      <IconContext.Provider value={{
        color: `${isDarkmode ? "white" : "black"}`
      }}>
        <FaTimes />
      </IconContext.Provider>
      <p className="italic">Clear all</p>
    </div>
  )

  return (
    <div
      className="p-8 flex flex-col justify-center items-center gap-4"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-lg">
          You have {countryItems.length} {countryItems.length > 1 ? "countries" : "country"} in the cart
        </h1>
        {countryItems.length > 0 && clearAllElement}
      </div>
      {renderedItems}
    </div>
  )
}