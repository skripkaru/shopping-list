import React from 'react'
import { ProductItem } from './productItem/ProductItem'
import { useSelector } from 'react-redux'
import { getFilteredProducts } from '../../store/product/selectors'

export const ProductList = () => {
  const filteredProducts = useSelector(getFilteredProducts)

  return (
    <ul>
      {filteredProducts.length !== 0 ? (
        filteredProducts.map((product) => (
          <ProductItem id={product.id} key={product.id} checked={product.completed}>
            {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
          </ProductItem>
        ))
      ) : (
        <h2>Список пуст</h2>
      )}
    </ul>
  )
}
