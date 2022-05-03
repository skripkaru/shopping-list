import React, { ChangeEvent } from 'react'
import { Select } from '../UI'
import { Form } from '../form/Form'
import { HeaderStyled } from './styles'
import { useActions } from '../../hooks/useActions'
import { filter, FilterTypes } from '../../store/product/types'

export const Header = () => {
  const { filterProduct } = useActions()

  const handleSelectChange = (e: ChangeEvent<HTMLOptionElement>) => {
    filterProduct(e.target.value as FilterTypes)
  }

  return (
    <HeaderStyled>
      <h1>Список покупок</h1>
      <Form />
      <Select list={filter} onChange={handleSelectChange} />
    </HeaderStyled>
  )
}
