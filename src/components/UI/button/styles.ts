import styled from 'styled-components'
import { ButtonVariant } from './Button'

export const ButtonStyled = styled.button<{ variant: ButtonVariant }>`
  display: inline-block;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.75;
  }

  ${({ variant }) => variant === ButtonVariant.outline && 'border: 1px solid #ccc;'}
  ${({ variant }) => variant === ButtonVariant.primary && 'background-color: #ccc;'}
`
