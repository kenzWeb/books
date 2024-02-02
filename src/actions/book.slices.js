import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	filter: 'Computers',
	sort: 'Relevance',
}

export const Bookslices = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		bookFilterPush: (state, {payload}) => {
			state.filter = payload
		},
		bookFilter: (state, {payload}) => {
			if (payload && payload.items) {
				payload.items.filter((item) => {
					item.volumeInfo.categories === initialState.filter
					console.log(item.volumeInfo.categories)
					console.log(item.volumeInfo.categories)
				})
			} else {
				console.log('ERROR', Error)
			}
		},
	},
})

export const {actions, reducer} = Bookslices
