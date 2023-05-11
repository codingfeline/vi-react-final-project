import React from 'react'
import { Awe, xmark } from './icons'
import { useState } from 'react'

const Compo = () => {
  const [value, setValue] = useState('')
  return (
    <div className=" bg-slate-400 flex flex-col ">
      <p>welcome to testing</p>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>para</h6>
      <p>para</p>
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
