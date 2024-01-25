import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface AuthState {
	isAuthenticated: boolean
}

const initialState: AuthState = {
	isAuthenticated: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state) => {
			state.isAuthenticated = true
		},
		logout: (state) => {
			state.isAuthenticated = false
		},
	},
	extraReducers: (builder) => {
		builder.addCase(asyncLogin.fulfilled, (state) => {
			console.log('Logged In...')
		})
	},
})

export const asyncLogin = createAsyncThunk(
	'auth/asyncLogin',
	async (state, { dispatch }) => {
		await new Promise((res) => setTimeout(() => res, 1000))
		dispatch(login())
	}
)

export const { login, logout } = authSlice.actions

export default authSlice.reducer