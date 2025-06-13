import React, { useState } from 'react';
import './Home.css';
import PlayerCard from '../components/PlayerCard';

const initialPlayers = [
  {
    name: 'Kylian Mbappé',
    rating: 91,
    position: 'ST',
    club: 'Paris SG',
    nation: 'France',
    image: 'https://cdn.sofifa.net/players/231/747/24_60.png',
    stats: { PAC: 97, SHO: 90, PAS: 82, DRI: 92, DEF: 36, PHY: 78 },
  },
  {
    name: 'Kevin De Bruyne',
    rating: 90,
    position: 'CM',
    club: 'Manchester City',
    nation: 'Belgium',
    image: 'https://cdn.sofifa.net/players/192/985/24_60.png',
    stats: { PAC: 76, SHO: 86, PAS: 93, DRI: 88, DEF: 64, PHY: 78 },
  },
  {
    name: 'Virgil van Dijk',
    rating: 89,
    position: 'CB',
    club: 'Liverpool',
    nation: 'Netherlands',
    image: 'https://cdn.sofifa.net/players/203/376/24_60.png',
    stats: { PAC: 71, SHO: 60, PAS: 71, DRI: 72, DEF: 91, PHY: 86 },
  },
];

const Home = () => {
  const [players] = useState(initialPlayers);
  const [squad, setSquad] = useState([]);

  const handleAddToSquad = (player) => {
    if (!squad.some(p => p.name === player.name)) {
      setSquad([...squad, player]);
    }
  };

  return (
    <div className="home-container">
      <h1>EAFC Squad Builder</h1>

      <div className="search-section">
        <input type="text" placeholder="Search players" className="search-input" />
        <button className="search-button">🔍</button>
      </div>

      <div className="filters">
        <button className="filter-btn">League</button>
        <button className="filter-btn">Nation</button>
        <button className="filter-btn">Club</button>
      </div>

      <h2>Available Players</h2>
      <div className="player-grid">
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            rating={player.rating}
            position={player.position}
            club={player.club}
            nation={player.nation}
            image={player.image}
            stats={player.stats}
            onClick={() => handleAddToSquad(player)}
          />
        ))}
      </div>

      <h2>Selected Squad</h2>
      <div className="player-grid">
        {squad.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            rating={player.rating}
            position={player.position}
            club={player.club}
            nation={player.nation}
            image={player.image}
            stats={player.stats}
          />
        ))}
      </div>

      <div className="build-btn-wrapper">
        <button className="build-btn">Build Squad</button>
      </div>
    </div>
  );
};

export default Home;