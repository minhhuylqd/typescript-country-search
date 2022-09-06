import React from "react";
import { useSelector } from "react-redux";

import { selectAllCountryIds, selectFilteredCountryIds } from "../../redux/slices/countriesSlice";
import TableItems from "./TableItems";


export default function Table() {

  const countryIds = useSelector(selectFilteredCountryIds)

  const renderedItems = countryIds.map((countryId:string) => {
    return <TableItems key={countryId} id={countryId} />
  })

  return (
    <div className="overflow-auto relative shadow-md p-4 md:p-8">
      <table className="table-auto w-full text-left text-gray-900 dark:text-gray-100 sm:rounded-lg">
        <thead className="uppercase bg-gray-100 text-black dark:bg-gray-700 dark:text-white">
          <tr>
            <th className="py-3 px-4 border-r dark:border-gray-600">
              Flag
            </th>
            <th className="py-3 px-4 border-r dark:border-gray-600">
              Name
            </th>
            <th className="py-3 px-4 border-r dark:border-gray-600">
              Region
            </th>
            <th className="py-3 px-4 border-r dark:border-gray-600">
              Population
            </th>
            <th className="py-3 px-4 border-r dark:border-gray-600">
              
            </th>
            <th className="py-3 px-4">

            </th>
          </tr>
        </thead>
        <tbody>
          {renderedItems}
        </tbody>
      </table>
    </div>
  )
}