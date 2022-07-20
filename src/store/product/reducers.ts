import { Filter, ProductAction, ProductActionTypes, ProductState } from './types'
import { getStorageValue } from '../../hooks/useLocalStorage'
import { saveProductToLS } from './logic'

const initialState: ProductState = {
  id: null,
  error: null,
  loading: false,
  product: null,
  products: getStorageValue('products', []),
  filterType: Filter.ALL,
}

export const productReducers = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      }
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case ProductActionTypes.CREATE_PRODUCT:
      const products = [...state.products, action.payload]
      saveProductToLS(products)

      return {
        ...state,
        products,
      }
    case ProductActionTypes.DELETE_PRODUCT:
      const deletedProducts = state.products.filter((product) => product.id !== action.payload)
      saveProductToLS(deletedProducts)

      return {
        ...state,
        products: deletedProducts,
      }
    case ProductActionTypes.COMPLETE_PRODUCT:
      const completedProducts = state.products.map((product) =>
        product.id === action.payload ? { ...product, completed: !product.completed } : product
      )
      saveProductToLS(completedProducts)

      return {
        ...state,
        products: completedProducts,
      }
    case ProductActionTypes.FILTER_PRODUCTS:
      return {
        ...state,
        filterType: action.payload,
      }
    default:
      return state
  }
}
