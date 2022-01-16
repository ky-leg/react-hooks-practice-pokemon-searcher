import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, handleSubmit}) {
  const [search, setSearch] = useState("")

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={newMonster => handleSubmit(newMonster)}/>
      <br />
      <Search onSearchChange={setSearch}/>
      <br />
      <PokemonCollection pokemon={pokemon} search={search} />
    </Container>
  );
}

export default PokemonPage;
