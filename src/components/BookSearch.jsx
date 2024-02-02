import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {actions} from '../actions/book.slices'
import {useSearchResults} from './SearchContext'

const BookSearch = () => {
	const {
		search,
		setSearch,
		handleSearch,
		loading,
		setCategory,
		setSort,
		category,
		sort,
	} = useSearchResults()
	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(actions.bookFilterPush(category))
	}, [category])

	return (
		<section className='flex text-center justify-center flex-col'>
			<h2 className='text-neutral-950 font-bold text-[32px]'>
				Search for books
			</h2>

			<div className='flex items-center justify-center mt-16'>
				<input
					className='py-4 px-5 bg-stone-950 rounded-2xl text-amber-200 mr-2'
					type='text'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Search books'
				/>
				<button
					className='bg-yellow-300 py-4 px-5 rounded-2xl cursor-pointer'
					onClick={handleSearch}
				>
					{loading ? 'loading...' : 'search'}
				</button>
			</div>

			<div className='flex items-center justify-center mt-5'>
				<form className='flex items-center justify-center mr-10' action=''>
					<h2 className='font-medium text-[16px] mr-5 bg-stone-900 text-white py-2 px-3 rounded-lg'>
						Categories
					</h2>
					<select
						className='bg-yellow-400 py-1 px-2 rounded-lg cursor-pointer'
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value='all'>All</option>
						<option value='art'>Art</option>
						<option value='biography'>Biography</option>
						<option value='computers'>Computers</option>
						<option value='history'>History</option>
						<option value='medical'>Medical</option>
						<option value='poetry'>Poetry</option>
					</select>
				</form>

				<form className='flex items-center justify-center' action=''>
					<h2 className='font-medium text-[16px] mr-5 bg-stone-900 text-white py-2 px-3 rounded-lg'>
						Sort
					</h2>
					<select
						className='bg-yellow-400 py-1 px-2 rounded-lg cursor-pointer'
						value={sort}
						onChange={(e) => setSort(e.target.value)}
					>
						<option value='relevance'>Relevance</option>
						<option value='newest'>Newest</option>
					</select>
				</form>
			</div>
		</section>
	)
}

export default BookSearch
