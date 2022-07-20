import styled from 'styled-components'
import { CloseBtnStyled } from '../closeBtn/styles'

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 999;
`

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  padding: 2rem 1rem;
  border-radius: 12px;
  background-color: var(--white);

  @media (min-width: 576px) {
    min-width: 500px;
    padding: 3rem 2rem;
  }
`

export const ModalCloseBtn = styled(CloseBtnStyled)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: var(--gray-700);

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
