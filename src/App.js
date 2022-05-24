
import './App.css';

import { useQuery, gql } from "@apollo/client";

import { useState } from 'react';

const FILMS_QUERY = gql`
{
  champions{
    _id
    name
    rarity
    faction
    rating
    type
    element
    stats{
      health
      attack
      defense
      criticalRate
      criticalDamage
      speed
      resistance
      accuracy
    }
    image
  }
}
`;
function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  return (
    
    <div>
      <h1 className=" bg-dark text-center text-danger">Champions</h1>
      <div class="row row-cols-1 row-cols-md-6 g-4 bg-dark">
      {data.champions.map((champion) => (
            <div class="col border-champion-legendary">
              <div class="card h-100 bg-dark ">
              
                <img src={champion.image} className="mx-auto d-block " alt={champion.name} width="140px" height="182px"/>
                <div class="card-body">
                  <h5 class="text-light card-title text-center">{champion.name}</h5>
                  <p class="text-light card-text text-center">{champion.rarity}</p>
                </div>
                
              </div>
            </div>
            
        )
        )}
        
      
      </div>
      
    </div>
    
    
    );
}

export default App;
