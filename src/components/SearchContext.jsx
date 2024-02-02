/* eslint-disable react/prop-types */
import {createContext, useContext, useState} from 'react'
import {useDebounce} from '../hooks/debounce'

const SearchResultsContext = createContext()
// const API_KEY = 'AIzaSyBDMjVms9fPH4HHwYJ_zrT_AWHwL5lVzxA'

export const SearchResultsProvider = ({children}) => {
	const [search, setSearch] = useState('')
	const [limit, setLimit] = useState(8)
	const [loading, setLoading] = useState(false)
	const debounced = useDebounce(search)
	const [submit, setSubmit] = useState('')
	const [category, setCategory] = useState('all')

	const handleSearch = async () => {
		try {
			setLoading(true)
			const res = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=${debounced}&maxResults=${limit}`,
			)
			const json = await res.json()
			setLoading(false)
			setSubmit(json)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<SearchResultsContext.Provider
			value={{
				limit,
				setLimit,
				search,
				setSearch,
				submit,
				setSubmit,
				handleSearch,
				loading,
				setLoading,
				category,
				setCategory,
			}}
		>
			{children}
		</SearchResultsContext.Provider>
	)
}

export const useSearchResults = () => {
	return useContext(SearchResultsContext)
}
