import React, { Dispatch, SetStateAction, useEffect } from 'react'

import styles from './TableFooter.module.css'

type Footer = {
  range: number[]
  slice: string[]
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

const TableFooter = ({ range, setPage, page, slice }: Footer) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1)
    }
  }, [slice, page, setPage])
  return (
    <div className={`${styles.tableFooter} bg-[#f1f1f1] dark:bg-gray-800`}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  )
}

export default TableFooter
