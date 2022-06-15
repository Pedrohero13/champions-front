import { useQuery, gql } from "@apollo/client";

import { useParams } from 'react-router';

const FILMS_QUERY = gql`
  query champion($name: String!) {
    champion(name:$name) 
    {
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
function Champion() {
    const { name } = useParams()
    console.log(name)
    const { data, loading, error } = useQuery(FILMS_QUERY, {
        variables: { name: name },

    });

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (

        <div>


            <div className="row justify-content-md-center align-items-center">
                <div class="card mb-3 " style={{ maxWidth: "800px","background-color": "rgb(74, 74, 74)", "border": "4px solid orange" }} >
                    <div class="row g-0 align-items-center ">
                    
                        <div class="col-md-4">
                        <h4 class="card-title"><b>{data.champion.name}</b></h4>
                            <img src={data.champion.image} class=" border-champion-legendary" alt="champion-img" width={"240px"} height={"300"} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h2 class="card-title"><b>Details:</b></h2>
                                
                                <p class="card-text"><b>Rarity:</b> {data.champion.rarity}</p>
                                <p class="card-text"><b>Faction:</b> {data.champion.faction}</p>
                                <p class="card-text"><b>Element:</b> {!data.champion.element? "no element":data.champion.element}</p>
                                <p class="card-text"><b>Type:</b> {data.champion.type}</p>

                                <ul class="list-group border-champion-legendary">
                                    <li class="list-group-item"><h5><b>Stats:</b></h5></li>
                                    <li class="list-group-item list-group-item-primary">Health: {data.champion.stats.health}</li>
                                    <li class="list-group-item list-group-item-secondary">Attack: {data.champion.stats.attack}</li>
                                    <li class="list-group-item list-group-item-success">Defense: {data.champion.stats.defense}</li>
                                    <li class="list-group-item list-group-item-danger">Speed: {data.champion.stats.speed}</li>
                                    <li class="list-group-item list-group-item-warning">Resistance: {data.champion.stats.resistance}</li>
                                    <li class="list-group-item list-group-item-info">Critical rate: {data.champion.stats.criticalRate}</li>
                                    <li class="list-group-item list-group-item-light">Critical damage: {data.champion.stats.criticalDamage}</li>
                                    <li class="list-group-item list-group-item-dark">Accuracy: {data.champion.stats.accuracy}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>




    );
}

export default Champion;