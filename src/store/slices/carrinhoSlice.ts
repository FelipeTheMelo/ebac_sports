import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../types'

interface CarrinhoState {
  itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itensNoCarrinho: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      if (
        !state.itensNoCarrinho.find((item) => item.id === action.payload.id)
      ) {
        state.itensNoCarrinho.push(action.payload)
      }
    },
    favoritar(state, action: PayloadAction<Produto>) {
      const existe = state.favoritos.find(
        (item) => item.id === action.payload.id
      )
      if (existe) {
        state.favoritos = state.favoritos.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
