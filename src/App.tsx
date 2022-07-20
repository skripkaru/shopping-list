import React, { useEffect } from 'react'
import { Header, ProductList } from './components'
import { Spinner } from './components/UI'
import { Container } from './components/UI/container/Container'
import { useTypedSelector } from './hooks/useTypedSelector'
import { useActions } from './hooks/useActions'

const App = () => {
  const loading = useTypedSelector((state) => state.product.loading)

  const { fetchProducts } = useActions()

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(fetchProducts)

  return (
    <Container>
      <Header />
      {loading ? <Spinner /> : <ProductList />}
    </Container>
  )
}

export default App
