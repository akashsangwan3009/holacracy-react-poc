import React from 'react'
import styles from './Navbar.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { RootType } from '../../Redux/Store'
import { login, logout } from '../../Redux/Slices/Auth/Auth'

import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const auth = useSelector((state: RootType) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

	return (
		<div>
			<button
				className={styles.btn}
				onClick={() => dispatch(login())}
			>
				Login
			</button>
			<button
				className={styles.btn}
				onClick={() => dispatch(logout())}
			>
				Logout
			</button>

			<Link to="/dashboard">
				<button>Navigate to dashboard</button>
			</Link>

			<Link to="/login">
				<button>Navigate to login</button>
			</Link>
		</div>
	)
}

export default Navbar
