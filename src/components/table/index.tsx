import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { selectFilteredCountryIds } from '../../redux/slices/countriesSlice'
import TableItems from './TableItems'
import useTable from '../../hooks/useTable'
import styles from './Table.module.css'
import TableFooter from './TableFooter'

type RenderedTable = {
  data: string[]
  rowsPerPage: number
}

export default function Table() {
  const countryIds = useSelector(selectFilteredCountryIds)

  const RenderedTable = ({ data, rowsPerPage }: RenderedTable) => {
    const [page, setPage] = useState(1)
    const { slice, range } = useTable(data, page, rowsPerPage)
    return (
      <>
        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
        <table
          className={`${styles.table} table-auto w-full text-left text-gray-900 dark:text-gray-100`}
        >
          <thead
            className={`${styles.tableRowHeader} uppercase bg-gray-100 text-black dark:bg-gray-700 dark:text-white`}
          >
            <tr>
              <th
                className={`${styles.tableHeader} py-3 px-4 border-r dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
              >
                Flag
              </th>
              <th
                className={`${styles.tableHeader} py-3 px-4 border-r dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
              >
                Name
              </th>
              <th
                className={`${styles.tableHeader} py-3 px-4 border-r dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
              >
                Region
              </th>
              <th
                className={`${styles.tableHeader} py-3 px-4 border-r dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
              >
                Population
              </th>
              <th
                className={`${styles.tableHeader} py-3 px-4 border-r dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
              ></th>
              <th
                className={`${styles.tableHeader} py-3 px-4 dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
              ></th>
            </tr>
          </thead>
          <tbody>
            {slice.map((countryId) => (
              <TableItems key={countryId} id={countryId} />
            ))}
          </tbody>
        </table>
        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
      </>
    )
  }

  return (
    <div className="overflow-auto relative shadow-md p-4 md:p-8">
      <RenderedTable data={countryIds} rowsPerPage={30} />
    </div>
  )
}
