import React from 'react'
import { useParams } from 'react-router-dom'
import CountryInfo from '../components/countryInfo'

import Navbar from '../components/navbar'

export default function Country() {
  const { countryId } = useParams<{ countryId: string }>()

  return (
    <div className="relative w-full min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100">
      <Navbar />
      <CountryInfo id={countryId} />
    </div>
  )
}
