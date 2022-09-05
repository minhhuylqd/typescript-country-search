import React from "react";
import { useSelector } from "react-redux";
import { selectCountryById } from "../../redux/slices/countriesSlice";

import {RootState} from "../../redux/store"

type Item = {
  id: string
}

export default function TableItems({id}: Item) {

  const country = useSelector((state: RootState) => selectCountryById(state, id))

  const flag = country.flags.png
  const name = country.name.common
  const region = country.region
  const population = country.population  

  return (
    <tr className="border-b hover:bg-gray-200">
      <td className="py-2 px-4 border-r">
        <img src={flag} alt="Country Flag" className="max-w-[100px]" />
      </td>
      <td className="py-2 px-4 border-r">
        {name}</td>
      <td className="py-2 px-4 border-r">
        {region}</td>
      <td className="py-2 px-4 border-r">
        {population}</td>
      <td className="text-center py-2 px-4">
        <p>Read More</p>
        <p>Add to cart</p>
      </td>
    </tr>
  )
}