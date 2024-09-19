import React from 'react';

const Pokecard = (props) => {
	const { id, name, type, base_experience } = props;
	console.log('Pokemon ID:', id); // Add this line to check the id
	return (
		<div>
			<h1>{name}</h1>
			<div>
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
					alt={name}
				/>
			</div>
			<p>Type: {type}</p>
			<p>EXP: {base_experience}</p>
		</div>
	);
};

export default Pokecard;
