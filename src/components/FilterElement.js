import { useQuery, gql } from "@apollo/client";


const FILMS_QUERY = gql`
  query championsElement($element: String!) {
    championsElement(element: $element) {
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
function FilterElement(props) {
  const {element} = props  
  console.log(element)
  const { data, loading, error } = useQuery(FILMS_QUERY, {
    variables: {element: element},
  
  });

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  return (
    
    <div>

      <div className="row row-cols-1 row-cols-md-6 g-4 bg-dark">
      {data.championsElement.map((champion) => (
            <div className="col border-champion-legendary">
              <div className="card h-100 bg-dark ">
              
                <img src={champion.image} className="mx-auto d-block " alt={champion.name} width="140px" height="182px"/>
                <div className="card-body">
                  <h5 className="text-light card-title text-center">{champion.name}</h5>
                  <p className="text-light card-text text-center">Element: {champion.element}</p>
                </div>
                
              </div>
            </div>
            
        )
        )}
        
      
      </div>
      
    </div>
    
    
    );
}

export default FilterElement;
