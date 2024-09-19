import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = (props) => {
	const { pokemons, exp, isWinner } = props;

	return (
		<div className="pokedex">
			{pokemons.map((pokemon) => (
				<Pokecard
					key={pokemon.id}
					id={pokemon.id}
					name={pokemon.name}
					type={pokemon.type}
					base_experience={pokemon.base_experience}
				/>
			))}
			{isWinner ? <h1 className="winner">This Hand Wins</h1> : null}
		</div>
	);
};

export default Pokedex;
