import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './slices/carrinhoSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// Tipagens para usar no useSelector e useDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
