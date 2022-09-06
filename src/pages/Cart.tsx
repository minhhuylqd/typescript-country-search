import React from 'react'

import Navbar from '../components/navbar'
import CartContent from '../components/cartContent'

export default function Cart() {
  return (
    <div className="relative w-full min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100">
      <Navbar />
      <CartContent />
    </div>
  )
}
