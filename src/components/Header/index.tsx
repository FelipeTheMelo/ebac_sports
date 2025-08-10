import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../../utils/format'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itensNoCarrinho
  )
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  const valorTotal = itensNoCarrinho.reduce(
    (acc: number, item) => acc + item.preco,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="cesta" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
