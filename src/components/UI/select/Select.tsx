import React from 'react'
import { OptionStyled, SelectStyled } from './styles'

interface SelectProps {
  list: { value: string; label: string }[]
  onChange: (e: any) => any
}

export const Select = (props: SelectProps) => {
  const { list, onChange } = props

  return (
    <SelectStyled onChange={onChange}>
      {list.map((item, i) => (
        <OptionStyled key={i} value={item.value}>
          {item.label}
        </OptionStyled>
      ))}
    </SelectStyled>
  )
}
