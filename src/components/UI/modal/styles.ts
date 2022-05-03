import styled from 'styled-components'

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
  border-radius: 10px;
  background-color: #fff;

  @media (min-width: 576px) {
    min-width: 450px;
  }
`
