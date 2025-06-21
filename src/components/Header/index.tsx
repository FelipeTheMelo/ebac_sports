import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container } from './styles';

const Header = () => {
  const favoritosCount = useSelector(
    (state: RootState) => state.favorites.items.length
  );
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.cart.items.length
  );

  return (
    <Container>
      <h1>EBAC Sports</h1>
      <div>
        ❤️ {favoritosCount} favoritos | 🛒 {itensNoCarrinho} itens
      </div>
    </Container>
  );
};

export default Header;
