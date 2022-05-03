import React from 'react'
import { ButtonStyled } from './styles'

export enum ButtonVariant {
  outline = 'outline',
  primary = 'primary',
}

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant: ButtonVariant
}

export const Button = (props: ButtonProps) => {
  const { children, onClick, variant } = props

  return (
    <ButtonStyled onClick={onClick} variant={variant}>
      {children}
    </ButtonStyled>
  )
}
