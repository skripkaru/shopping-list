export const saveProductToLS = (products: { id: number; title: string; completed: boolean }[]) => {
  localStorage.setItem('products', JSON.stringify(products))
}
