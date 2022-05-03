import styled from 'styled-components'

export const ProductItemStyled = styled.li`
  display: grid;
  grid-template-columns: 15px 1fr 15px;
  grid-gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`
