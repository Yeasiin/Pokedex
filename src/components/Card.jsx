import React from "react";
import { StyledCard } from "./../styled/StyledCard";
import { PokemonName } from "./../styled/PokemonName";

export default function Card({ pokemon }) {
  const gettingImage = pokemon.url.split("/");
  const image = gettingImage[gettingImage.length - 2];
  return (
    <StyledCard>
      <img
        // src={`https://pokeres.bastionbot.org/images/pokemon/${image}.png`}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${image.padStart(
          3,
          "0"
        )}.png`}
        height="180"
        weight="180"
        alt={pokemon.name}
      />
      <span></span>
      <PokemonName>{pokemon.name}</PokemonName>
    </StyledCard>
  );
}
