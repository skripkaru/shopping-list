import React from 'react'
import { CloseBtnStyled } from './styles'

interface CloseBtnProps {
  onClick: () => void
}

export const CloseBtn = (props: CloseBtnProps) => {
  const { onClick } = props

  return <CloseBtnStyled onClick={onClick}>&times;</CloseBtnStyled>
}
