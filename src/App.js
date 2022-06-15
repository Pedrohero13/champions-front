
import './App.css';

import { useQuery, gql } from "@apollo/client";
import { useState } from 'react';
import FilterRarity from './components/FilterRarity';
import FilterFaction from './components/FilterFaction';
import FilterElement from './components/FilterElement';
import FilterType from './components/FilterType';
import Skip from './components/skip.js';
import Limit from './components/Limit';
import ViewAll from './components/ViewAll';
import Champion from './components/Champion';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import Sort from './components/Sort';
import MinAttack from './components/MinAttack';
import MaxHealth from './components/MaxHealth';
import MinHealth from './components/MinHealth';




function App() {
  const navigate = useNavigate();
  
  const handleSelectSort = (e) => {
    const value = e.target.value;
    console.log(value)
    if (value === 'Max Attack') {
      navigate("/sort")
    }
    if (value === 'Min Attack') {
      navigate("/minattack")
    }
    if (value === 'Max Health') {
      navigate("/maxhealth")
    }
    if (value === 'Min Health') {
      navigate("/minhealth")
    }

  }
  const [rarity, setRarity] = useState('');
  const handleSelectRarity = (e) => {
    const value = e.target.value;
    if (value !== 'Rarity') {
      setRarity(value)
      navigate("/rarity")
    }

  }

  const [faction, setFaction] = useState('');
  const handleSelectFaction = (e) => {
    const value = e.target.value;
    if (value !== 'Faction') {
      setFaction(value)
      navigate("/faction")
    }

  }
  const [element, setElement] = useState('');
  const handleSelectElement = (e) => {
    const value = e.target.value;
    if (value !== 'Element') {
      setElement(value)
      navigate("/element")
    }

  }

  const [type, setType] = useState('');
  const handleSelectType = (e) => {
    const value = e.target.value;
    if (value !== 'Type') {
      setType(value)
      navigate("/type")
    }

  }
  const [limit, setLimit] = useState('');
  const sendLimit = () => {
    const value = document.getElementById('limit').value;
    if (value) {
      console.log(value)

      setLimit(parseInt(value))
    } else {
      return <pre>Ingresa un valor numerico</pre>
    }

  }
  const [skip, setSkip] = useState('');
  const sendSkip = () => {
    setRarity('')
    setFaction('')
    setElement('')
    setType('')

    const value = document.getElementById('skip').value;
    if (value) {
      console.log(value)

      setSkip(parseInt(value))
    }

  }
  return (

    <div className="bg-dark text-warning">
        <h1 className=" bg-dark text-center text-danger">Champions</h1>
        <div className="row row-cols-1 row-cols-md-6 g-4 bg-dark justify-content-md-center">

          
            <div className="col">
              <select onChange={handleSelectRarity} class="form-select btn btn-warning" aria-label="Default select example">
                <option selected>Rarity</option>
                <option value="Legendary" >Legendary</option>
                <option value="Rare" >Rare</option>
                <option value="Epic" >Epic</option>
              </select>
            </div>
         

          
            <div className="col">
              <select onChange={handleSelectFaction} class="form-select btn btn-warning" aria-label="Default select example">
                <option selected>Faction</option>
                <option value="Shadowkin" >Shadowkin</option>
                <option value="Dwarves" >Dwarves</option>
                <option value="Knight Revenant" >Knight Revenant</option>
                <option value="Dark Elves" >Dark Elves</option>
              </select>
            </div>
          

          
            <div className="col">
              <select onChange={handleSelectElement} class="form-select btn btn-warning" aria-label="Default select example">
                <option selected>Element</option>
                <option value="Void" >Void</option>
                <option value="Force" >Force</option>
                <option value="Spirit" >Spirit</option>
                <option value="Magic" >Magic</option>
              </select>
            </div>
          

         
            <div className="col">
              <select onChange={handleSelectType} class="form-select btn btn-warning" aria-label="Default select example">
                <option selected>Type</option>
                <option value="Attack" >Attack</option>
                <option value="Support" >Support</option>
                <option value="Defense" >Defense</option>
                <option value="HP" >HP</option>
              </select>
            </div>
          

        </div>

        <div className="row row-cols- row-cols-md-3 g-4 bg-dark justify-content-md-center " style={{ marginTop: "5px" }} >


          <div className="col border-champion-legendary ">
            <label for="limit"><b>Select limit (1-24): </b></label>
            <input type="number" id="limit" name="limit" min="1" max="24" />
            <Link to="/limit">
              <button type="button" class="btn btn-warning " onClick={sendLimit} >Send</button>
            </Link>
          </div>


          <div className="col border-champion-legendary">
            <label for="skip"><b>Select for skip (1-24):</b></label>
            <input type="number" id="skip" name="skip" min="1" max="24" />
            <Link to="/skip">
              <button type="button" class="btn btn-warning " onClick={sendSkip}>Send</button>
            </Link>
          </div>

        </div>
        <div className="row row-cols- row-cols-md-3 g-4 bg-dark justify-content-md-center " style={{ marginTop: "5px" }} >
            <div className="col">
              <select onChange={handleSelectSort} class="form-select btn btn-warning" aria-label="Default select example">
                <option selected>Sort</option>
                <option value="Max Health" >Max Health</option>
                <option value="Min Health" >Min Health</option>
                <option value="Max Attack" >Max Attack</option>
                <option value="Min Attack" >Min attack</option>
              </select>
            </div>
        </div>

        <div className="row row-cols-1 row-cols-md-6 g-4 bg-dark justify-content-md-center" style={{ marginTop: "5px  " }}>
          <Link to="/all">
            <div className="col">
              <button type="button" class="btn btn-warning">View all</button>
            </div>
          </Link>

        </div>

        <Routes>
          <Route exact path='/rarity' element={<FilterRarity rarity={rarity}></FilterRarity>}></Route>
          <Route exact path='/faction' element={<FilterFaction faction={faction}></FilterFaction>}></Route>
          <Route exact path='/element' element={<FilterElement element={element}></FilterElement>}></Route>
          <Route exact path='/type' element={<FilterType type={type}></FilterType>}></Route>
          <Route exact path='/limit' element={<Limit limit={limit}></Limit>}></Route>
          <Route exact path='/skip' element={<Skip skip={skip}></Skip>}></Route>
          <Route exact path='/all' element={<ViewAll ></ViewAll>}></Route>
          <Route exact path='/champion/:name' element={<Champion></Champion>}></Route>
          <Route exact path='/sort' element={<Sort></Sort>}></Route>
          
          <Route exact path='/minattack' element={<MinAttack></MinAttack>}></Route>
          <Route exact path='/maxhealth' element={<MaxHealth></MaxHealth>}></Route>
          <Route exact path='/minhealth' element={<MinHealth></MinHealth>}></Route>



        </Routes>
      
    </div>

  );
}

export default App;
