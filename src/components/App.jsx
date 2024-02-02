import BookList from './BookList'
import BookSearch from './BookSearch'
import {SearchResultsProvider} from './SearchContext'

const App = () => {
	return (
		<SearchResultsProvider>
			<div>
				<BookSearch />
				<BookList />
			</div>
		</SearchResultsProvider>
	)
}

export default App
