import { useEffect, useState } from 'react'

const calculateRange = (data: string[], rowsPerPage: number) => {
  const range = []
  const num = Math.ceil(data.length / rowsPerPage)

  for (let i = 1; i <= num; i++) {
    range.push(i)
  }

  return range
}

const sliceData = (data: string[], page: number, rowsPerPage: number) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}

const useTable = (data: string[], page: number, rowsPerPage: number) => {
  const [tableRange, setTableRange] = useState<number[]>([])
  const [slice, setSlice] = useState<string[]>([])

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage)
    setTableRange([...range])

    const slice = sliceData(data, page, rowsPerPage)
    setSlice([...slice])
  }, [data, setTableRange, page, rowsPerPage, setSlice])

  return { slice, range: tableRange }
}

export default useTable
