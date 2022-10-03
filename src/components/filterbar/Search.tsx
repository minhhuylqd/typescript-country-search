import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconContext } from 'react-icons'
import { FaTimes } from 'react-icons/fa'

import { updateSearch } from '../../redux/slices/filtersSlice'
import { selectDarkmode } from '../../redux/slices/appearanceSlice'

export default function Search() {
  const dispatch = useDispatch()

  const [input, setInput] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  useEffect(() => {
    dispatch(updateSearch(input))
  }, [input, dispatch])

  const isDarkmode = useSelector(selectDarkmode)

  const clearSearch = () => setInput('')

  const clearSearchButton = (
    <button className="absolute inset-y-0 right-0 p-4" onClick={clearSearch}>
      <IconContext.Provider
        value={{
          color: `${isDarkmode ? '#9ca3af' : '#6b7280'}`,
        }}
      >
        <FaTimes />
      </IconContext.Provider>
    </button>
  )

  return (
    <div className="relative w-full max-w-[500px]">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        className="p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Country..."
        value={input}
        onChange={handleInputChange}
      />
      {input !== '' && clearSearchButton}
    </div>
  )
}
