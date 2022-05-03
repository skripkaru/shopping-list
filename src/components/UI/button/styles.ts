import styled, {css} from 'styled-components'
import {ButtonVariant} from './Button'

export const ButtonStyled = styled.button<{ variant: ButtonVariant }>`
  display: inline-block;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  background-color: transparent;
  cursor: pointer;

  ${({variant}) => variant === ButtonVariant.outline && css`
    color: #6E7198;
    border: 1px solid #6E7198;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: .5;
    }
  `}

  ${({variant}) => variant === ButtonVariant.primary && css`
    color: #ffffff;
    background-color: #3643FC;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #323de0;
    }
  `}
`
