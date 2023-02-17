import './Game.css';

const Game = ({game}) => {

  const platforms = game.stores.map(o => o.store.slug)
  
  const platformIcons = {
    "playstation-store": "https://w7.pngwing.com/pngs/24/817/png-transparent-playstation-4-raiders-of-the-broken-planet-playstation-network-playstation-plus-playstation-electronics-text-trademark.png",
    "xbox-store": "https://cdn-icons-png.flaticon.com/512/1/1321.png",
    "steam": "https://e7.pngegg.com/pngimages/699/999/png-clipart-brand-logo-steam-gump-s.png",
    "nintendo": "https://cdn-icons-png.flaticon.com/512/871/871380.png"
  }

  return (
    <div className="card">
      <h3>{game.name}</h3>
      <img src={game.background_image} alt="game cover" />
      <div className="container">
        <div className="info-container">
          <h5>Rating: {game.metacritic} </h5>
          <h5>Released: {game.released}</h5>
        </div>
        <div className="platforms">
          {platforms.map((platform, index) => (
            platformIcons[platform] ? (
              <img
                key={index}
                src={platformIcons[platform]}
                alt={platform.name}
              />
            ) : null
          ))}
        </div>
        <button>Radar</button>
        <button>Finished</button>
      </div>
    </div>
  )
}

export default Game
    
    
