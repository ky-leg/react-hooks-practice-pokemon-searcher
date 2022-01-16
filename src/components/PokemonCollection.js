import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {
  // console.log(pokemon.map(monster => monster.name))

  // if (search) 
  // return null 
  // else console.log(search)

  const searchedPokemon = pokemon.filter(monster => {
    if (search==="") 
    return monster
    else 
    return monster.name.toUpperCase().includes(search.toUpperCase())
  })
    // search ? pokemon : pokemon
  // pokemon.filter(monster => {
  //   monster.name.toUpperCase().includes(search.toUpperCase())
  // })

  return (
    <Card.Group itemsPerRow={6}>
      {searchedPokemon.map(monster => (
        <PokemonCard key={monster.id} monster={monster} />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
