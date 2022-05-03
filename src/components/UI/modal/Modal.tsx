import React from 'react'
import { ModalContainer, ModalStyled } from './styles'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
}

export const Modal = (props: ModalProps) => {
  const { children, isOpen } = props

  if (!isOpen) return null

  return createPortal(
    // @ts-ignore
    <ModalStyled isOpen={isOpen}>
      <ModalContainer>{children}</ModalContainer>
    </ModalStyled>,
    // @ts-ignore
    document.querySelector('#root')
  )
}
