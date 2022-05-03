import React from 'react'

interface CheckboxProps {
  checked: boolean
  onChange: () => void
}

export const Checkbox = (props: CheckboxProps) => {
  const { checked, onChange } = props

  return <input type="checkbox" checked={checked} onChange={onChange} />
}
