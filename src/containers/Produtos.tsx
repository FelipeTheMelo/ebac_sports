import { useGetProdutosQuery } from '../store/services/api';
import Produto from '../components/Produto';
import Header from '../components/Header';
import { Container } from './styles';

interface ProdutoType {
  id: number;
  nome: string;
  preco: number;
}

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery();

  return (
    <>
      <Header />
      <Container>
        <h2>Produtos</h2>
        {isLoading && <p>Carregando...</p>}
        <div className="lista-produtos">
          {produtos?.map((produto: ProdutoType) => (
            <Produto
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              preco={produto.preco}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Produtos;
