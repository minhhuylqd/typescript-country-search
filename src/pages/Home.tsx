import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/store'
import Navbar from '../components/navbar'
import Table from '../components/table'

export default function Home() {

  const loadingStatus = useSelector((state:RootState) => state.countries.status)

  if (loadingStatus === 'loading') {
    return (
      <>
        <Navbar />
        <h1>Loading the countries....</h1>
      </>
    )
  }

  return (
    <div className='relative bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100'>
      <Navbar />
      <Table />
    </div>
  )
}