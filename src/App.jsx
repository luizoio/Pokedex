import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pikachu, setPikachu] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemon = () => {
    setIsLoading(true);
    setTimeout(() => {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => setPikachu(data.results))
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    console.log("ESTADO DA VARIÁVEL ISLOADING:");
    console.log(isLoading);
  }, [isLoading]);

  return (
    <>
      <h1>Pokédex do Pikachu</h1>
      <div className="card">
        <button onClick={fetchPokemon}>Trazer Pokémon!</button>
      </div>

      <div className="pokemon-card">
        {isLoading && (
          <h2>
            <strong>Carregandersons...</strong>
          </h2>
        )}

        {!isLoading &&
          pikachu.map((item) => {
            return <p key={item}>{item.name}</p>;
          })}
      </div>
    </>
  );
}

export default App;