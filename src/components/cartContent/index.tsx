import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconContext } from 'react-icons'
import { FaTimes } from 'react-icons/fa'

import CartItems from './CartItems'
import { clearAll, fetchCountryItems } from '../../redux/slices/cartSlice'
import { selectDarkmode } from '../../redux/slices/appearanceSlice'

export default function CartContent() {
  const dispatch = useDispatch()

  const countryItems = useSelector(fetchCountryItems)

  const isDarkmode = useSelector(selectDarkmode)

  const renderedItems = countryItems.map((item) => {
    return <CartItems id={item} key={item} />
  })

  const handleClearAll = () => dispatch(clearAll())

  const clearAllElement = (
    <button
      className="p-1.5 m-2 flex items-center gap-2 hover:bg-red-500 dark:hover:bg-red-700 rounded-md"
      style={{ cursor: 'pointer' }}
      onClick={handleClearAll}
    >
      <IconContext.Provider
        value={{
          color: `${isDarkmode ? 'white' : 'black'}`,
        }}
      >
        <FaTimes />
      </IconContext.Provider>
      <p className="italic">Clear all</p>
    </button>
  )

  return (
    <div className="p-8 flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-lg">
          You have {countryItems.length}{' '}
          {countryItems.length > 1 ? 'countries' : 'country'} in the cart
        </h1>
        {countryItems.length > 0 && clearAllElement}
      </div>
      {renderedItems}
    </div>
  )
}
