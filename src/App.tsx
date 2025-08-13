import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { RootState } from './redux/store'
import { Produto } from './types'
import {
  setProdutos,
  adicionarAoCarrinho,
  favoritar
} from './redux/slices/produtoSlice'

function App() {
  const dispatch = useDispatch()
  const produtos = useSelector((state: RootState) => state.produto.lista)
  const carrinho = useSelector((state: RootState) => state.produto.carrinho)
  const favoritos = useSelector((state: RootState) => state.produto.favoritos)

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(setProdutos(res)))
  }, [dispatch])

  function handleAdicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionarAoCarrinho(produto))
    }
  }

  function handleFavoritar(produto: Produto) {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
