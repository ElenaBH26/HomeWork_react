import React from 'react';
import SuperheroCard from './Components/SuperheroCard.jsx';
import superheroes from './Data.js';
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Супергерои</h1>
      <div>
        {superheroes.map(superhero => (
          <SuperheroCard key={superhero.id} superhero={superhero} />
        ))}
      </div>
    </div>
  );
}

export default App;
