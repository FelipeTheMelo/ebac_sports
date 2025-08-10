import React from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './store/api'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { adicionarAoCarrinho, favoritar } from './store/slices/carrinhoSlice'

function App() {
  const { data: produtos = [], isLoading, isError } = useGetProdutosQuery()
  const dispatch = useDispatch<AppDispatch>()

  const carrinho = useSelector(
    (state: RootState) => state.carrinho.itensNoCarrinho
  )
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  const adicionarProdutoAoCarrinho = (produto: (typeof produtos)[0]) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const favoritarProduto = (produto: (typeof produtos)[0]) => {
    dispatch(favoritar(produto))
  }

  if (isLoading) return <div>Carregando...</div>
  if (isError) return <div>Erro ao carregar produtos</div>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarProduto}
          adicionarAoCarrinho={adicionarProdutoAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
