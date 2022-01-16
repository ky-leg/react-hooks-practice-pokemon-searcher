import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(r => setPokemon(r))
  }, [])

  console.log(pokemon)

  function handleSubmit(newMonster){
    fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMonster)
    },
    )
    .then(r => r.json())
    .then(r => setPokemon([...pokemon, r]))
  }

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
