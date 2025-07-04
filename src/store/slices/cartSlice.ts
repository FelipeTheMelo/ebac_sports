import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Produto = {
  id: number;
  nome: string;
  preco: number;
};

type CartState = {
  items: Produto[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
