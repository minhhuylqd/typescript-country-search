import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IconContext } from 'react-icons'
import { AiFillHome } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { RootState } from '../../redux/store'
import {
  selectDarkmode,
  toggleDarkmode,
} from '../../redux/slices/appearanceSlice'

export default function Navbar() {
  const dispatch = useDispatch()

  const isDarkmode = useSelector(selectDarkmode)

  const handleToggleDarkmode = () => dispatch(toggleDarkmode())

  useEffect(() => {
    isDarkmode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isDarkmode])

  const cartItemCounts = useSelector(
    (state: RootState) => state.cart.countryItems.length
  )

  return (
    <nav className="sticky top-0 w-full z-20 flex justify-between items-center px-2 h-[60px] bg-slate-100 dark:bg-slate-800 dark:border-b dark:border-white/10 rounded-b-lg">
      <Link to="/">
        <div className="p-4 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-md">
          <IconContext.Provider
            value={{
              color: `${isDarkmode ? 'white' : 'black'}`,
              size: '1.5em',
            }}
          >
            <AiFillHome />
          </IconContext.Provider>
        </div>
      </Link>

      <div className="flex">
        <button
          className="p-4 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-md"
          onClick={handleToggleDarkmode}
        >
          <IconContext.Provider
            value={{
              color: `${isDarkmode ? 'white' : 'black'}`,
              size: '1.5em',
            }}
          >
            {isDarkmode ? <BsFillSunFill /> : <BsFillMoonFill />}
          </IconContext.Provider>
        </button>

        <Link to="/cart">
          <div className="flex gap-2 items-center p-4 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-md">
            <IconContext.Provider
              value={{
                color: `${isDarkmode ? 'white' : 'black'}`,
                size: '1.5em',
              }}
            >
              <FaShoppingCart />
            </IconContext.Provider>
            {cartItemCounts > 0 && <p>{cartItemCounts}</p>}
          </div>
        </Link>
      </div>
    </nav>
  )
}
