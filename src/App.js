
import './App.css';

import { useQuery, gql } from "@apollo/client";
import { useState } from 'react';
import FilterRarity from './components/FilterRarity';
import FilterFaction from './components/FilterFaction';
import FilterElement from './components/FilterElement';
import FilterType from './components/FilterType';



function App() {
  const [rarity, setRarity] = useState('');
  const handleSelectRarity = (e) => {
    const value = e.target.innerHTML;
    console.log(value)
    setRarity(value)
  }

  const [faction, setFaction] = useState('');
  const handleSelectFaction = (e) => {
    setRarity('')
    const value = e.target.innerHTML;
    console.log(value)
    setFaction(value)
  }
  const [element, setElement] = useState('');
  const handleSelectElement = (e) => {
    setRarity('')
    setFaction('')
    const value = e.target.innerHTML;
    console.log(value)
    setElement(value)
  }
  const [type, setType] = useState('');
  const handleSelectType = (e) => {
    setRarity('')
    setFaction('')
    setElement('')
    const value = e.target.innerHTML;
    console.log(value)
    setType(value)
  }
  
  return (
    <div className='App'>
      <h1 className=" bg-dark text-center text-danger">Champions</h1>
      <div className="row row-cols-1 row-cols-md-6 g-4 bg-dark justify-content-md-center">
        <div className="col">
          <div className="btn-group">
            <a class="btn btn-warning dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Rarity
            </a>
            <ul className="dropdown-menu bg-warning">
              <li><a className="dropdown-item" onClick={handleSelectRarity}>Legendary</a></li>
              <li><a className="dropdown-item" onClick={handleSelectRarity}>Rare</a></li>
              <li><a className="dropdown-item" onClick={handleSelectRarity}>Epic</a></li>

            </ul>
          </div>
        </div>

        <div className="col">
          <div className="btn-group">
            <a class="btn btn-warning dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Faction
            </a>
            <ul className="dropdown-menu bg-warning">
              <li><a className="dropdown-item" onClick={handleSelectFaction}>Shadowkin</a></li>
              <li><a className="dropdown-item" onClick={handleSelectFaction}>Dwarves</a></li>
              <li><a className="dropdown-item" onClick={handleSelectFaction}>Knight Revenant</a></li>
              <li><a className="dropdown-item" onClick={handleSelectFaction}>Dark Elves</a></li>

            </ul>
          </div>
        </div>

        <div className="col">
          <div className="btn-group">
            <a class="btn btn-warning dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Element
            </a>
            <ul className="dropdown-menu bg-warning">
              <li><a className="dropdown-item" onClick={handleSelectElement}>Void</a></li>
              <li><a className="dropdown-item" onClick={handleSelectElement}>Force</a></li>
              <li><a className="dropdown-item" onClick={handleSelectElement}>Spirit</a></li>
              <li><a className="dropdown-item" onClick={handleSelectElement}>Magic</a></li>

            </ul>
          </div>
        </div>

        <div className="col">
          <div className="btn-group">
            <a class="btn btn-warning dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Type
            </a>
            <ul className="dropdown-menu bg-warning">
              <li><a className="dropdown-item" onClick={handleSelectType}>Attack</a></li>
              <li><a className="dropdown-item" onClick={handleSelectType}>Support</a></li>
              <li><a className="dropdown-item" onClick={handleSelectType}>Defense</a></li>
              <li><a className="dropdown-item" onClick={handleSelectType}>HP</a></li>

            </ul>
          </div>
        </div>

      </div>
    



      {rarity ? <FilterRarity rarity={rarity}></FilterRarity> : <>
        {faction ? <FilterFaction faction={faction}></FilterFaction> : <>
        {element ? <FilterElement element={element}></FilterElement> : <> 
        {type ? <FilterType type={type}></FilterType> : <p>select any filter</p>}
        </>}
        </>}
      </>

      }
    </div>

  );
}

export default App;
