import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './components/App'
import {SearchResultsProvider} from './components/SearchContext.jsx'
import './index.css'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<SearchResultsProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</SearchResultsProvider>
	</Provider>
)
