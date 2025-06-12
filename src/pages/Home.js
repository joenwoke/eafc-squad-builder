import React from 'react';
import './Home.css';
import PlayerCard from '../components/PlayerCard';

const players = [
  {
    name: 'Kylian Mbappé',
    rating: 91,
    position: 'ST',
    club: 'Paris SG',
    nation: 'France',
    image: 'https://cdn.sofifa.net/players/231/747/24_60.png',
  },
  {
    name: 'Kevin De Bruyne',
    rating: 91,
    position: 'CM',
    club: 'Manchester City',
    nation: 'Belgium',
    image: 'https://cdn.sofifa.net/players/192/985/24_60.png',
  },
  {
    name: 'Virgil van Dijk',
    rating: 89,
    position: 'CB',
    club: 'Liverpool',
    nation: 'Netherlands',
    image: 'https://cdn.sofifa.net/players/203/376/24_60.png',
  },
];

const Home = () => {
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