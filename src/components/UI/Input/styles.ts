import styled from 'styled-components'

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;

  &::placeholder {
    transition: opacity 0.3s;
  }

  &:focus::placeholder {
    opacity: 0;
  }
`
