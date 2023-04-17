/* eslint-disable react/display-name */
import { useState, forwardRef, useMemo } from 'react'

const SelectGroup = forwardRef(({ id, name, lista, onChange, ...props }, ref) => {
  const refId = useMemo(() => id ?? name, [id, name])
  const { form } = props

  return (
    <div className="select-box">
      <select name={refId} form={form} ref={ref} >
        {lista.map((item) => (
          <option key={item.id} value={item.id}>
            { item.id +' - '+item.name }
          </option>
        ))}
      </select>
    </div>
  )
})

export default SelectGroup
