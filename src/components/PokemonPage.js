// PokemonPage.js
import React, { useEffect, useState } from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then((response) => response.json())
      .then((data) => setPokemons(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddPokemon = (formData) => {
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to add Pokemon');
      })
      .then((data) => setPokemons([...pokemons, data]))
      .catch((error) => console.error('Error adding Pokemon:', error));
  };

  return (
    <div>
      <h1>Pokemon Searcher</h1>
      <PokemonForm handleAddPokemon={handleAddPokemon} />
      <PokemonCollection pokemons={pokemons} />
    </div>
  );
}

export default PokemonPage;
