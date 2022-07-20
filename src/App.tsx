import React from 'react'
import { Header, ProductList } from './components'
import { Spinner } from './components/UI'
import { Container } from './components/UI/container/Container'
import { useTypedSelector } from './hooks/useTypedSelector'

const App = () => {
  const loading = useTypedSelector((state) => state.product.loading)

  return (
    <Container>
      <Header />
      {loading ? <Spinner /> : <ProductList />}
    </Container>
  )
}

export default App
