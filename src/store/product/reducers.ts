import { Filter, ProductAction, ProductActionTypes, ProductState } from './types'

const initialState: ProductState = {
  id: null,
  error: null,
  loading: false,
  product: null,
  products: [],
  filterType: Filter.ALL,
}

export const reducers = (state = initialState, action: ProductAction): ProductState => {
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
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    case ProductActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      }
    case ProductActionTypes.COMPLETE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload ? { ...product, completed: !product.completed } : product
        ),
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
