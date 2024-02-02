import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const API_KEY = 'AIzaSyA2Rr0GJhDFYlZ4ETmb1tkdCT2nWobIEjY'

export const bookApi = createApi({
	reducerPath: 'booksApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://www.googleapis.com/books/v1/volumes',
	}),
	endpoints: (builder) => ({
		getAllBooks: builder.query({
		query: (searchTerm, limit = 8 || 0) => ({
				url: `?q=${searchTerm}&maxResults=${limit}&key=${API_KEY}`,
			}),
		}),
	}),
})

export const {useGetAllBooksQuery} = bookApi
