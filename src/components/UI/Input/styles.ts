import styled from 'styled-components'

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--gray-100);
  border-radius: 12px;
  background-color: transparent;

  &::placeholder {
    color: var(--gray-300);
  }
`
