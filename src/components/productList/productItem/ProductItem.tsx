import React from 'react'
import { ProductItemStyled } from './styles'
import { Checkbox } from '../../UI/checkbox/Checkbox'
import { CloseBtn } from '../../UI'
import { useActions } from '../../../hooks/useActions'

interface ProductItemProps {
  id: number
  checked: boolean
  children: React.ReactNode
}

export const ProductItem = (props: ProductItemProps) => {
  const { id, children, checked } = props
  const { deleteProduct, completeProduct } = useActions()

  const handleClick = () => {
    deleteProduct(id)
  }

  const handleChange = () => {
    completeProduct(id)
  }

  return (
    <ProductItemStyled>
      <Checkbox onChange={handleChange} checked={checked} />
      <span>{children}</span>
      <CloseBtn onClick={handleClick} />
    </ProductItemStyled>
  )
}
