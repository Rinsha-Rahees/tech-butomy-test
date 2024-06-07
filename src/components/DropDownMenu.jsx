import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function DropDownMenu({className, children}) {
  return (
    <li className={"flex items-center justify-center p-2 pl-3 "+className}>{children}<ChevronDownIcon className='w-4 ml-1'/></li>
  )
}

export default DropDownMenu