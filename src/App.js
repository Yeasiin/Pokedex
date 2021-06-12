import React, { Component } from "react";
import Search from "./components/Search";
import CardList from "./components/CardList";
import { Title } from "./styled/Title";
import { Container } from "./styled/Container";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { pokemons: [], searchField: "" };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=250&offset=10")
      .then((response) => response.json())
      .then(({ results }) => this.setState({ pokemons: results }));
  }

  render() {
    const filteredPokemon = this.state.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <Container>
        <Title>Pokemon Rolodex</Title>
        <Search
          placeholder="Search Pokemon"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList pokemons={filteredPokemon} />
      </Container>
    );
  }
}

export default App;
