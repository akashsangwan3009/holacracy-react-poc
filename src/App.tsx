import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import PrivateRoutes from './Utils/ProtectedRoutes'
import DasboardPage from './Pages/Pokemon/Dashboard'
import LoginPage from './Pages/Login/Login'

const App: React.FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/pokemonCard"
					element={
						<PrivateRoutes>
							<DasboardPage />
						</PrivateRoutes>
					}
				/>
				<Route
					path="/"
					element={
						<LoginPage />
					}
				/>
			</Routes>
		</div>
	)
}

export default App