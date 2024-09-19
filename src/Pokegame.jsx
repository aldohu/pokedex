import React from 'react';
import Pokedex from './Pokedex';

const pokemons = [
	{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
	{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
	{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
	{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
	{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
	{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
	{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
	{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
];

const Pokegame = (isWinner) => {
	const hand1 = [];
	const hand2 = [...pokemons];
	while (hand1.length < hand2.length) {
		const randIdx = Math.floor(Math.random() * hand2.length);
		const randPokemon = hand2.splice(randIdx, 1)[0];
		hand1.push(randPokemon);
	}

	let exp1 = 0;
	let exp2 = 0;

	for (let i = 0; i < hand1.length; i++) {
		exp1 += hand1[i].base_experience;
		exp2 += hand2[i].base_experience;
	}

	return (
		<div>
			<h1>Pokegame</h1>
			<h2>Hand 1</h2>
			<Pokedex
				pokemons={hand1}
				exp={exp1}
				isWinner={exp1 > exp2}
			/>
			<h2>Hand 2</h2>
			<Pokedex
				pokemons={hand2}
				exp={exp2}
				isWinner={exp2 > exp1}
			/>
		</div>
	);
};

export default Pokegame;
