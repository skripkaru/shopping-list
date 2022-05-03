import React from 'react'
import { CloseBtnStyled } from './styles'

interface CloseBtnProps {
  onClick: () => void
  children: React.ReactNode
}

export const CloseBtn = (props: CloseBtnProps) => {
  const { onClick, children } = props

  return <CloseBtnStyled onClick={onClick}>{children}</CloseBtnStyled>
}
