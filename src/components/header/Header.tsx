import React, { ChangeEvent } from 'react'
import { Button, Input, Modal, Select } from '../UI'
import { Form } from '../form/Form'
import { HeaderControlPanel, HeaderStyled } from './styles'
import { useActions } from '../../hooks/useActions'
import { filter, FilterTypes } from '../../store/product/types'
import { ButtonVariant } from '../UI/button/Button'
import { openModal } from '../../store/modal/actions'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Header = () => {
  const { filterProduct } = useActions()
  const dispatch = useDispatch()
  const { isOpen } = useTypedSelector((state) => state.modal)

  const handleSelectChange = (e: ChangeEvent<HTMLOptionElement>) => {
    filterProduct(e.target.value as FilterTypes)
  }

  const handleClick = () => {
    dispatch(openModal(isOpen))
  }

  return (
    <HeaderStyled>
      <h1>Shopping list</h1>
      <Input placeholder="Search..." />
      <Modal isOpen={isOpen}>
        <Form />
      </Modal>
      <HeaderControlPanel>
        <Button variant={ButtonVariant.primary} onClick={handleClick}>
          Add product
        </Button>
        <Select list={filter} onChange={handleSelectChange} />
      </HeaderControlPanel>
    </HeaderStyled>
  )
}
