import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/Auth/Auth'

export const store = configureStore({
	reducer: {
		auth: authReducer
	},
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
