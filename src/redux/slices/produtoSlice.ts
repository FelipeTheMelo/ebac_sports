import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types' // caminho correto

interface ProdutoState {
  lista: Produto[]
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: ProdutoState = {
  lista: [],
  carrinho: [],
  favoritos: []
}

const produtoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    setProdutos(state, action: PayloadAction<Produto[]>) {
      state.lista = action.payload
    },
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      const existe = state.carrinho.find((p) => p.id === action.payload.id)
      if (!existe) {
        state.carrinho.push(action.payload)
      }
    },
    favoritar(state, action: PayloadAction<Produto>) {
      const existe = state.favoritos.find((p) => p.id === action.payload.id)
      if (existe) {
        state.favoritos = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { setProdutos, adicionarAoCarrinho, favoritar } =
  produtoSlice.actions
export default produtoSlice.reducer
