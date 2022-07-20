import React, { ChangeEvent, useState } from 'react'
import { Button, Input } from '../UI'
import { FormStyled, FormTitle } from './styles'
import { useActions } from '../../hooks/useActions'
import { ButtonVariant } from '../UI/button/Button'
import { closeModal } from '../../store/modal/actions'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Form = () => {
  const [productName, setProductName] = useState<string>('')
  const dispatch = useDispatch()
  const { isOpen } = useTypedSelector((state) => state.modal)

  const { createProduct } = useActions()

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newProduct = {
      id: new Date().getTime(),
      title: productName,
      completed: false,
    }

    if (newProduct.title) {
      createProduct(newProduct)
    }

    setProductName('')
    dispatch(closeModal(isOpen))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormTitle>Create product</FormTitle>
      <Input placeholder="Product name" onChange={handleChange} value={productName} autoFocus />
      <Button onClick={() => null} variant={ButtonVariant.primary}>
        Add product
      </Button>
    </FormStyled>
  )
}
