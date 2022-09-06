import React from "react";
import Filters from "./Filters";

import Search from './Search'

export default function FilterBar() {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center p-4 md:p-8 mb-[-1rem] md:mb-[-2rem] ">
      <Search />
      <Filters />
    </div>
  )
}