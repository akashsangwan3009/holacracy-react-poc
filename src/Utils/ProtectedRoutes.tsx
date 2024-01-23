import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootType } from '../Redux/Store'

interface PrivateRouteProps {
	children: React.ReactNode
	path?: string
	caseSensitive?: boolean
}

const PrivateRoutes: React.FC<PrivateRouteProps> = ({ children }) => {
	const isAuthenticated = useSelector(
		(state: RootType) => state.auth.isAuthenticated
	)

	return isAuthenticated ? (
		<Outlet />
	) : (
		<Navigate to="/login" replace state={{ from: location }} />
	)
}

export default PrivateRoutes
