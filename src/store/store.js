import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {reducer} from '../actions/book.slices'

const reducers = combineReducers({
	reducer,
})

export const store = configureStore({
	reducer: {reducers},
})
