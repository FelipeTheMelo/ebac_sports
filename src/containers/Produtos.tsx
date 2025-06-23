import { useGetProdutosQuery } from '../store/services/api';
import Produto from '../components/Produto';
import Header from '../components/Header';
import { Container } from './styles';
import { JSX } from 'react/jsx-runtime';

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery();

  if (isLoading) return <p>Carregando produtos...</p>;

  return (
    <>
      <Header />
      <Container>
        {produtos?.map(
          (
            produto: JSX.IntrinsicAttributes & {
              id: number;
              nome: string;
              preco: number;
            }
          ) => (
            <Produto key={produto.id} {...produto} />
          )
        )}
      </Container>
    </>
  );
};

export default Produtos;
