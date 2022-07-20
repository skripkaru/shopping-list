import React, { ChangeEvent } from 'react'
import { InputStyled } from './styles'

interface InputProps {
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  autoFocus?: boolean
}

export const Input = (props: InputProps) => {
  const { placeholder, onChange, value, autoFocus } = props

  return (
    <InputStyled
      type="text"
      value={value}
      onChange={onChange}
      className="input"
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  )
}
