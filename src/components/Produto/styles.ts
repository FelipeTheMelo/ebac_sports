import styled from 'styled-components'

export const Produtos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Produto = styled.li`
  border: 1px solid hsl(var(--primary));
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  padding: 16px;
  border-radius: 8px;
  transition: all ease 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`

export const Capa = styled.div`
  text-align: center;
  margin-bottom: 8px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
`

export const Titulo = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
`

export const Prices = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`

export const BtnComprar = styled.button`
  background-color: hsl(var(--primary));
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 4px;

  &:hover {
    background-color: hsl(var(--primary) / 0.9);
  }
`
