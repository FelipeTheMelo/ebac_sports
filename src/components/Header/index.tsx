import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container } from './styles';

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.cart.items.length
  );
  const favoritos = useSelector(
    (state: RootState) => state.favorites.items.length
  );

  return (
    <Container>
      <h1>EBAC Sports</h1>
      <div>
        <p>❤️ {favoritos}</p>
        <p>Carrinho: {itensNoCarrinho} itens</p>
      </div>
    </Container>
  );
};

export default Header;
