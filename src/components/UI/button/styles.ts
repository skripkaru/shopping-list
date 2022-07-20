import styled, { css } from 'styled-components'
import { ButtonVariant } from './Button'

export const ButtonStyled = styled.button<{ variant: ButtonVariant }>`
  display: inline-block;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  background-color: transparent;
  cursor: pointer;

  ${({ variant }) =>
    variant === ButtonVariant.outline &&
    css`
      border: 1px solid var(--gray-300);
      transition: border-color 0.3s ease-in-out;

      &:hover {
        border-color: var(--gray-200);
      }
    `}

  ${({ variant }) =>
    variant === ButtonVariant.primary &&
    css`
      color: var(--white);
      background-color: var(--gray-300);
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: var(--gray-200);
      }
    `}
`
