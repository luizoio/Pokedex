import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (pokemonList.length > 0) {
      setFilteredList(pokemonList);
      setShowSearch(true);
    }
  }, [pokemonList]);

  const handleFilter = ({ target: { value } }) => {
    const query = value;
    let updatedList = filteredList;
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(updatedList);
  };

  const fetchPokemon = () => {
    setIsLoading(true);
    setTimeout(() => {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => setPokemonList(data.results))
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  return (
    <>
      <h1>Pokédex do Pikachu</h1>
      <div className="card">
        <button onClick={fetchPokemon}>Trazer Pokémon!</button>
      </div>

      {!isLoading && showSearch && (
        <div className="card search">
          <input onChange={handleFilter} type="text" />
          <button>Buscar!</button>
        </div>
      )}

      {isLoading && (
        <div className="pokemon-card">
          <h2>
            <strong>Carregandersons...</strong>
          </h2>
        </div>
      )}

      {!isLoading && filteredList.length > 1 && (
        <div className="pokemon-card">
          {filteredList.map((item) => {
            return <p key={item}>{item.name}</p>;
          })}
        </div>
      )}
    </>
  );
}

export default App;

