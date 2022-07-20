import React from 'react'
import {ModalCloseBtn, ModalContainer, ModalStyled} from './styles'
import { createPortal } from 'react-dom'
import {closeModal} from "../../../store/modal/actions";
import {useDispatch} from "react-redux";

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
}

export const Modal = (props: ModalProps) => {
  const { children, isOpen } = props
  const dispatch = useDispatch();

  if (!isOpen) return null

  const handleClick = () => {
    dispatch(closeModal(isOpen))
  }

  return createPortal(
    // @ts-ignore
    <ModalStyled isOpen={isOpen}>
      <ModalContainer>
        <ModalCloseBtn onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </ModalCloseBtn>
        {children}
      </ModalContainer>
    </ModalStyled>,
    // @ts-ignore
    document.querySelector('#root')
  )
}
