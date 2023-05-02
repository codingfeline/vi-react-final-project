import React from 'react'
import { Awe, xmark } from './icons'
import { useState } from 'react'

const Compo = () => {
  const [value, setValue] = useState('')
  return (
    <div className=" bg-red-100 flex flex-col ">
      <p>welcome to testing</p>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Awe
        icon={xmark}
        onClick={() => setValue('')}
        size="3x"
        className="hover:cursor-pointer hover:text-slate-400"
      />
    </div>
  )
}

export default Compo
