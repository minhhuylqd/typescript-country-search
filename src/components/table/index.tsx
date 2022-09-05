import React from "react";
import { useSelector } from "react-redux";

import { selectAllCountryIds } from "../../redux/slices/countriesSlice";
import TableItems from "./TableItems";


export default function Table() {

  const countryIds = useSelector(selectAllCountryIds)

  const renderedItems = countryIds.map((countryId:string) => {
    return <TableItems key={countryId} id={countryId} />
  })

  return (
    <div className="overflow-auto relative shadow-md sm:rounded-lg p-4 md:p-8">
      <table className="table-auto w-full text-left">
        <thead className="uppercase bg-gray-100">
          <tr>
            <th className="py-3 px-4 border-r">
              Flag</th>
            <th className="py-3 px-4 border-r">
              Name</th>
            <th className="py-3 px-4 border-r">
              Region</th>
            <th className="py-3 px-4 border-r">
              Population</th>
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