import { useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom';

const MAX_ATTACK = gql`
{    championsMinAttack {
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

function MinAttack() {
    
    const { data, loading, error } = useQuery(MAX_ATTACK);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (

        <div>

            <div className="row row-cols-1 row-cols-md-6 g-4 bg-dark">
                {data.championsMinAttack.map((champion) => (
                    <div className="col border-champion-legendary">
                        <div className="card h-100 bg-dark ">

                            <Link to={`/champion/${champion.name}`}>
                                <img src={champion.image} className="mx-auto d-block " alt={champion.name} width="140px" height="182px" />
                            </Link>
                            <div className="card-body">
                                <h5 className="text-light card-title text-center">{champion.name}</h5>
                                <p className="text-light card-text text-center">Rarity: {champion.rarity}</p>
                                <p className="text-light card-text text-center">Attack: {champion.stats.attack}</p>

                            </div>

                        </div>
                    </div>

                )
                )}


            </div>

        </div>


    );
}


export default MinAttack;