import React from 'react';
import styles from './PokemonCard.module.css';
import usePokemonData from '../../../Services/usePokemonData';

const PokemonCard: React.FC = () => {
  const {data, isLoading, error} = usePokemonData()

  if (isLoading) return <div className={styles.loading}>Loading...</div>;

  if (error) return <div className={styles.loading}>There was an error fetching the data...:(</div>

  return (
    <div className={styles.pokemonInfo}>
      <h2 className={styles.pokemonName}>{data.name.toUpperCase()}</h2>
      <div className={styles.pokemonImageContainer}>
        <img className={styles.pokemonImage} src={data.sprites.front_default} alt={`${data.name} Sprite`} />
      </div>
      <p className={styles.pokemonDetail}>
        <strong>Types:</strong> {data.types.map((type: any) => type.type.name).join(', ')}
      </p>
      <p className={styles.pokemonDetail}>
        <strong>Abilities:</strong> {data.abilities.map((ability: any) => ability.ability.name).join(', ')}
      </p>
      <p className={styles.pokemonDetail}>
        <strong>Base Experience:</strong> {data.base_experience}
      </p>
      <p className={styles.pokemonDetail}>
        <strong>Height:</strong> {data.height / 10} m
      </p>
      <p className={styles.pokemonDetail}>
        <strong>Weight:</strong> {data.weight / 10} kg
      </p>
    </div>
  );
};

export default PokemonCard