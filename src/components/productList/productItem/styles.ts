import styled from 'styled-components'

export const ProductItemStyled = styled.li`
  display: grid;
  grid-template-columns: 20px 1fr 25px;
  grid-gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  background-color: var(--gray-100);
  border-radius: 12px;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`
