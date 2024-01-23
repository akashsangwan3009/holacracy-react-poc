import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import PrivateRoutes from './Utils/ProtectedRoutes'
import DasboardPage from './Pages/Dashboard/Dashboard'
import LoginPage from './Pages/Login/Login'
import Navbar from './Components/Navbar/Navbar'

const App: React.FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/dashboard"
					element={
						<PrivateRoutes>
							<DasboardPage />
						</PrivateRoutes>
					}
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<Navbar />} />
			</Routes>
		</div>
	)
}

export default App
