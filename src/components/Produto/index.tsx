import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleFavorite } from '../../store/slices/favoritesSlice';
import { RootState } from '../../store';
import { Container, Button } from './styles';

interface ProdutoProps {
  id: number;
  nome: string;
  preco: number;
}

const Produto = ({ id, nome, preco }: ProdutoProps) => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state: RootState) => state.favorites.items);
  const isFavorito = favoritos.includes(id);

  return (
    <Container>
      <h3>{nome}</h3>
      <p>R$ {preco.toFixed(2)}</p>
      <Button onClick={() => dispatch(addToCart({ id, nome, preco }))}>
        Adicionar ao carrinho
      </Button>
      <Button onClick={() => dispatch(toggleFavorite(id))}>
        {isFavorito ? '❤️ Remover favorito' : '🤍 Favoritar'}
      </Button>
    </Container>
  );
};

export default Produto;
