import React from 'react'
import styles from "./DashboardCard.module.css"
import usePokemonData from '../../Services/usePokemonData'

const DashboardCard: React.FC = () => {
	const { isPending, error, data } = usePokemonData()

	if (isPending) return <div>Loading...</div>

	if (error) return <div>Error Fetching Data :(</div>

	return (
		<div className={styles.card_wrapper}>
			<div className={styles.card_item}>Name: {data.species.name.toUpperCase()}</div>
			<div className={styles.card_item}>Type: {data.types[0].type.name.toUpperCase()}</div>
			<div className={styles.card_item}>Special Move: {data.abilities[0].ability.name.toUpperCase()}</div>
		</div>
	)
}

export default DashboardCard
