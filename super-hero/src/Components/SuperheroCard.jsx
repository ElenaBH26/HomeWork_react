import React from "react";

function SuperheroCard({ superhero }) {
    return (
      <div style={{textAlign:'center'}}>
        <h2>{superhero.name}</h2>
        <img src={superhero.url} alt={superhero.name} style={{width: '400px', height: '400px', objectFit: 'contain'}}/>       
        <p>Вселенная: {superhero.universe}</p>
        <p>Альтер-эго: {superhero.alterego}</p>
        <p>Род занятий: {superhero.occupation}</p>
        <p>{superhero.info}</p>
      </div>
    );
  }
  
  export default SuperheroCard;