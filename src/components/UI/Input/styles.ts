import styled from 'styled-components'

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #ffffff;
  border: 2px solid #6E7198;
  border-radius: 12px;
  background-color: transparent;

  &::placeholder {
    color: rgba(255, 255, 255, 0.1);
    transition: opacity 0.3s ease-in-out;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`
