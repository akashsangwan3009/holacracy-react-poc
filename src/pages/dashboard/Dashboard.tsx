import React from 'react'
import styles from './Dashboard.module.css'

import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/Slices/Auth/Auth'
import DashboardCard from '../../Components/DashboardCard/DashboardCard'

const DasboardPage = () => {
	const distpatch = useDispatch()
	const navigate = useNavigate()

	const logoutClick = () => {
		distpatch(logout())
		navigate('/')
	}

	return (
		<div>
			dasboradPage
			<Link to="/">
				<button className={styles.btn}>Navigate to Home</button>
			</Link>
			<button onClick={logoutClick}>Logout</button>
			<div className={styles.dashboard_container}>
				<DashboardCard />
			</div>
		</div>
	)
}

export default DasboardPage
