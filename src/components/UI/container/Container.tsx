import React from 'react'
import { ContainerStyled } from './styles'

interface ContainerProps {
  children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
  const { children } = props

  return <ContainerStyled>{children}</ContainerStyled>
}
