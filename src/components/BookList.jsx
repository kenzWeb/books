import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {actions} from '../actions/book.slices'
import {useSearchResults} from './SearchContext'

const BookList = () => {
	const {submit, limit, setLimit, handleSearch, loading} = useSearchResults()
	const loadMore = async () => {
		setLimit(limit + 8)
		await handleSearch()
	}

	// const state = useSelector((state) => state.filteredItems)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(actions.bookFilter(submit))
	}, [submit, dispatch])

	return (
		<section className='books_list__container '>
			<p className='flex justify-center mb-[8px]'>{`Total: ${
				submit ? submit.totalItems : ''
			}`}</p>
			{submit && submit.items && submit.items.length > 0 ? (
				<>
					<div className='book__list-card'>
						{submit.items.map((item, id) => (
							<div className='books_list__box rounded-[10%]' key={id}>
								{item.volumeInfo.imageLinks &&
								item.volumeInfo.imageLinks.smallThumbnail ? (
									<img
										className='w-[120px] h-[200px]'
										src={item.volumeInfo.imageLinks.smallThumbnail}
										alt=''
									/>
								) : (
									<p></p>
								)}
								<h2 className='text-gray-500 text-[16px] mb-2'>
									{item.volumeInfo.categories}
								</h2>
								<h3 className='text-slate-950 font-bold text-[10px] mb-2'>
									{item.volumeInfo.title}
								</h3>
								<h3 className='text-gray-500 text-[12px]'>
									{item.volumeInfo.authors}
								</h3>
							</div>
						))}
					</div>
					<div className='flex justify-center text-center items-center'>
						<button
							className='bg-yellow-300 py-4 px-5 rounded-2xl cursor-pointer text-center mt-5'
							onClick={loadMore}
						>
							{loading ? 'Loading...' : 'load more'}
						</button>
					</div>
				</>
			) : (
				<p>No books found.</p>
			)}
		</section>
	)
}

export default BookList
