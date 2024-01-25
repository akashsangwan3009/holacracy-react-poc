import React from 'react'
import styles from './Dashboard.module.css'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/Slices/Auth/Auth'

import PokemonCard from '../../Components/Molecules/PokemonCard/PokemonCard'
import Button from '../../Components/Atoms/Button/Button'

const DasboardPage: React.FC = () => {
	const distpatch = useDispatch()
	const navigate = useNavigate()

	const logoutClick = () => {
		distpatch(logout())
		navigate('/')
	}

	return (
		<div className={styles.dashboardPage}>
			<div className={styles.dashboardMain}>
				<PokemonCard />
				<Button label="Logout" onClick={logoutClick} type="button" />
			</div>
		</div>
	)
}

export default DasboardPage