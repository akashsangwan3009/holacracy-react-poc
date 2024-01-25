import React from 'react'
import styles from './Login.module.css'
import LoginForm from '../../Components/Molecules/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.loginPage}>
			<LoginForm
				onLogin={() => {
					navigate('/pokemonCard')
				}}
			/>
		</div>
	)
}

export default LoginPage
