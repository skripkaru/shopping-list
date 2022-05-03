import React, { ChangeEvent, useState } from 'react'
import { Button, Input } from '../UI'
import { FormStyled } from './styles'
import { useActions } from '../../hooks/useActions'
import { ButtonVariant } from '../UI/button/Button'

export const Form = () => {
  const [productName, setProductName] = useState<string>('')

  const { createProduct } = useActions()

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newProduct = {
      id: new Date().getTime(),
      title: productName,
      completed: false,
    }
    newProduct.title && createProduct(newProduct)
    setProductName('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input placeholder="Название товара" onChange={handleChange} value={productName} />
      <Button onClick={() => null} variant={ButtonVariant.primary}>
        Добавить
      </Button>
    </FormStyled>
  )
}
