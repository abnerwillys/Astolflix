import React from "react"
import { Formcss } from './styles'

function FormField({ label, type, name, value, onChange }) {
  return (
    <Formcss>
      <label>
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </Formcss>
  )
}

export default FormField