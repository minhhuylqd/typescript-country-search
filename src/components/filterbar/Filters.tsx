import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Multiselect from 'multiselect-react-dropdown'

import { availableRegions } from '../../utilities/regions'
import {
  selectSelectedRegions,
  updateRegionFilter,
} from '../../redux/slices/filtersSlice'
import { SelectedRegion } from '../../utilities/types'

const regionOptions = availableRegions.map((region: string) => ({
  name: region,
  id: region,
}))

export default function Filters() {
  const dispatch = useDispatch()

  const selectedRegions = useSelector(selectSelectedRegions)

  const onSelect = (
    newSelectedRegions: SelectedRegion[],
    selectedItem: SelectedRegion
  ) => {
    dispatch(updateRegionFilter(selectedItem.id, 'add'))
  }

  const onRemove = (
    newSelectedRegions: SelectedRegion[],
    selectedItem: SelectedRegion
  ) => {
    if (selectedItem.id) {
      dispatch(updateRegionFilter(selectedItem.id, 'remove'))
    } else {
      const prevSelectedRegionsIds = selectedRegions.map((region) => region.id)
      const newSelectedRegionsIds = newSelectedRegions.map(
        (region) => region.id
      )
      const removedElement = prevSelectedRegionsIds.filter(
        (regionId) => newSelectedRegionsIds.indexOf(regionId) === -1
      )
      dispatch(updateRegionFilter(removedElement[0], 'remove'))
    }
  }

  return (
    <div>
      <Multiselect
        options={regionOptions}
        selectedValues={selectedRegions}
        displayValue="name"
        onSelect={onSelect}
        onRemove={onRemove}
        showCheckbox
        placeholder="Filter by regions..."
        className="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        style={{
          option: {
            backgroundColor: '#e5e7eb',
            color: '#111827',
          },
        }}
      />
    </div>
  )
}
