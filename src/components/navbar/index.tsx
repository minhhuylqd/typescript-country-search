import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {AiFillHome} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="sticky flex justify-between items-center px-4 w-full h-[60px] bg-dark">
      <Link to="/">
        <div>
          <IconContext.Provider value={{
            color: "white",
            size: '1.5em'
          }}>
            <AiFillHome />
          </IconContext.Provider>
        </div>
      </Link>

      <Link to="/cart">
        <div>
          <IconContext.Provider value={{
            color: "white",
            size: '1.5em'
          }}>
            <FaShoppingCart />
          </IconContext.Provider>
        </div>
      </Link>
    </nav>
  )
}