import { createSelector } from 'reselect'
import { Filter, FilterTypes, IProduct } from './types'
import { RootState } from '../reducers'

const getFilterType = (state: RootState) => state.product.filterType

const getProducts = (state: RootState) => state.product.products

export const getFilteredProducts = createSelector(
  getProducts,
  getFilterType,
  (products: IProduct[], filterType: FilterTypes) => {
    switch (filterType) {
      case Filter.ALL:
        return products
      case Filter.ACTIVE:
        return products.filter((product) => !product.completed)
      case Filter.COMPLETED:
        return products.filter((product) => product.completed)
      default:
        return products
    }
  }
)
