import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Multiselect from 'multiselect-react-dropdown'

import { availableRegions } from "../../utilities/regions";
import { selectSelectedRegions, updateRegionFilter } from "../../redux/slices/filtersSlice";

const regionOptions = availableRegions.map(
  (region: string) => ( {name: region, id: region} )
)

export default function Filters() {

  const dispatch = useDispatch()

  const selectedRegions = useSelector(selectSelectedRegions)

  const onSelect = (selectedRegions: any, selectedItem: {name: string, id: string}) => {
    dispatch(updateRegionFilter(selectedItem.id, 'add'))
  }

  const onRemove = (selectedRegions: any, selectedItem: {name: string, id: string}) => {
    dispatch(updateRegionFilter(selectedItem.id, 'remove'))
  }

  return (
    <div>
      <Multiselect 
        options={regionOptions}
        selectedValues={selectedRegions}
        displayValue='name'
        onSelect={onSelect}
        onRemove={onRemove}
        showCheckbox
        placeholder="Filter by regions..."
        className="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        style={
          {
            option: {
              backgroundColor: "#e5e7eb",
              color: "#111827"
            },
          }
        }
      />
    </div>
  )
}