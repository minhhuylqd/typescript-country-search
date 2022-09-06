import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons";
import {MdRemoveShoppingCart} from 'react-icons/md'

import {RootState} from "../../redux/store"
import { selectCountryById } from "../../redux/slices/countriesSlice";
import { selectDarkmode } from "../../redux/slices/appearanceSlice";
import { removeItem } from "../../redux/slices/cartSlice";

type Item = {
  id: string
}

export default function CartItems({id}: Item) {

  const dispatch = useDispatch()

  const isDarkmode = useSelector(selectDarkmode)
  
  const country = useSelector((state: RootState) => selectCountryById(state, id))

  const flag = country.flags.png
  const name = country.name.common

  const dispatchRemoveItem = () => dispatch(removeItem(id))

  return (
    <div className="w-full max-w-[700px] flex justify-between items-center p-4 border rounded-md my-1 dark:border-gray-600">
      <div className="flex items-center gap-4">
        <img 
          src={flag} 
          alt="" 
          className="max-w-[100px]"
        />
        <p>{name}</p>
      </div>
      <div>
        <div
          onClick={dispatchRemoveItem}
          className="inline-block p-4 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md"
          style={{cursor: 'pointer'}}
        >
          <IconContext.Provider value={{
            color: `${isDarkmode ? "white" : "black"}`,
            size: '1.25em'
          }}>
            <MdRemoveShoppingCart />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}