export interface IProduct {
  id: number
  title: string
  completed: boolean
}

export interface ProductState {
  id: number | null
  error: string | null
  loading: boolean
  product: IProduct | null
  products: IProduct[]
  filterType: FilterTypes
}

export enum Filter {
  ALL = 'Все',
  ACTIVE = 'Активные',
  COMPLETED = 'Завершенные',
}

export const filter = [
  { value: Filter.ALL, label: 'Все' },
  { value: Filter.ACTIVE, label: 'Активные' },
  { value: Filter.COMPLETED, label: 'Завершенные' },
]

export type FilterTypes = Filter.ALL | Filter.ACTIVE | Filter.COMPLETED

export enum ProductActionTypes {
  CREATE_PRODUCT = 'CREATE_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  COMPLETE_PRODUCT = 'COMPLETE_PRODUCT',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
}

interface FetchProductsActions {
  type: ProductActionTypes.FETCH_PRODUCTS
}

interface FetchProductsSuccessActions {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS
  payload: IProduct[]
}

interface FetchProductsErrorActions {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR
  payload: string
}

interface CreateProductActions {
  type: ProductActionTypes.CREATE_PRODUCT
  payload: IProduct
}

interface DeleteProductActions {
  type: ProductActionTypes.DELETE_PRODUCT
  payload: number
}

interface CompleteProductActions {
  type: ProductActionTypes.COMPLETE_PRODUCT
  payload: number
}

interface FilterProductsActions {
  type: ProductActionTypes.FILTER_PRODUCTS
  payload: FilterTypes
}

export type ProductAction =
  | FetchProductsActions
  | FetchProductsSuccessActions
  | FetchProductsErrorActions
  | CreateProductActions
  | DeleteProductActions
  | CompleteProductActions
  | FilterProductsActions
