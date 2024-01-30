const FetchButton = ({ prop }) => {
  // Prop / Parâmetro
  // PROP === PROPERTY / PROPRIEDADE
  return (
    <div className="card">
      <button onClick={prop}>Trazer Pokémon!</button>
    </div>
  );
};

export default FetchButton;
