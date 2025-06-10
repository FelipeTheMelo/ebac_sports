import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/' // ou o endereço correto da sua API
}),
    endpoints: (builder) => ({
    getProdutos: builder.query<any[], void>({
        query: () => 'produtos'
    })
    })
})

export const { useGetProdutosQuery } = api