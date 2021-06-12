import React from "react";
import Card from "./Card";
import { StyledCardList } from "./../styled/StyledCardList";

export default function CardList({ pokemons }) {
  return (
    <StyledCardList>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </StyledCardList>
  );
}
