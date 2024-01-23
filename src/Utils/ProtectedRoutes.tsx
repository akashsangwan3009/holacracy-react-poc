import React from 'react'

import { useSelector } from 'react-redux'
import { RootType } from '../Redux/Store'
import { useNavigate } from 'react-router-dom'

import Navbar from '../Components/Navbar/Navbar'

interface PrivateRouteProps {
	children: React.ReactNode
	path?: string
	caseSensitive?: boolean
}

const PrivateRoutes: React.FC<PrivateRouteProps> = ({ children }) => {
	const isAuthenticated = useSelector(
		(state: RootType) => state.auth.isAuthenticated
	)

	const navigate = useNavigate()

	React.useEffect(() => {
		if (!isAuthenticated) {
			const timeoutId = setTimeout(() => {
				navigate('/')
			}, 0)

			return () => clearTimeout(timeoutId)
		}
	}, [isAuthenticated, navigate])

	return isAuthenticated ? <>{children}</> : <Navbar />
}

export default PrivateRoutes