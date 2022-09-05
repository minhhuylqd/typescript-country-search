import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { selectDarkmode } from "../../redux/slices/appearanceSlice";
import { useDispatch, useSelector } from "react-redux";
import {AiFillHome} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

export default function Navbar() {

  const dispatch = useDispatch()

  const isDarkmode = useSelector(selectDarkmode)

  const handleToggleDarkmode = () => {
    dispatch({type:'appearance/toggleDarkmode'})
  }

  useEffect(() => {
    isDarkmode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isDarkmode])

  return (
    <nav className="sticky top-0 w-full z-20 flex justify-between items-center px-6 h-[60px] bg-slate-100 dark:bg-slate-800 dark:border-b dark:border-white/10">
      <Link to="/">
        <div>
          <IconContext.Provider value={{
            color: `${isDarkmode ? "white" : "black"}`,
            size: '1.5em'
          }}>
            <AiFillHome />
          </IconContext.Provider>
        </div>
      </Link>
        
      <div className="flex gap-4">
        <div onClick={handleToggleDarkmode}>
          <IconContext.Provider value={{
            color: `${isDarkmode ? "white" : "black"}`,
            size: '1.5em'
          }}>
            {isDarkmode ? <BsFillSunFill /> : <BsFillMoonFill />}
          </IconContext.Provider>
        </div>

        <Link to="/cart">
          <div>
            <IconContext.Provider value={{
              color: `${isDarkmode ? "white" : "black"}`,
              size: '1.5em'
            }}>
              <FaShoppingCart />
            </IconContext.Provider>
          </div>
        </Link>
      </div>
    </nav>
  )
}