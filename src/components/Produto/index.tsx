import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { Container, Button } from './styles';

interface Props {
  id: number;
  nome: string;
  preco: number;
}

const Produto = ({ id, nome, preco }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, nome, preco }));
  };

  return (
    <Container>
      <h3>{nome}</h3>
      <p>R$ {preco.toFixed(2)}</p>
      <Button onClick={handleAddToCart}>Adicionar ao carrinho</Button>
    </Container>
  );
};

export default Produto;
