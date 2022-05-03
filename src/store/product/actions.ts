import { FilterTypes, IProduct, ProductAction, ProductActionTypes } from './types'
import { Dispatch } from 'redux'
import axios from 'axios'

export const fetchProducts = (page = 1, limit = 5) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS })
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
        params: { _page: page, _limit: limit },
      })
      setTimeout(() => {
        dispatch({
          type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: 'Ошибка при загрузке списка покупок',
      })
    }
  }
}

export const createProduct = (product: IProduct): ProductAction => ({
  type: ProductActionTypes.CREATE_PRODUCT,
  payload: product,
})

export const deleteProduct = (id: number): ProductAction => ({
  type: ProductActionTypes.DELETE_PRODUCT,
  payload: id,
})

export const completeProduct = (id: number): ProductAction => ({
  type: ProductActionTypes.COMPLETE_PRODUCT,
  payload: id,
})

export const filterProduct = (filter: FilterTypes): ProductAction => ({
  type: ProductActionTypes.FILTER_PRODUCTS,
  payload: filter,
})
