import React, { useState } from 'react';
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
    stats: {
      PAC: 97, SHO: 90, PAS: 82, DRI: 92, DEF: 36, PHY: 78,
    },
  },
  {
    name: 'Kevin De Bruyne',
    rating: 90,
    position: 'CM',
    club: 'Manchester City',
    nation: 'Belgium',
    image: 'https://cdn.sofifa.net/players/192/985/24_60.png',
    stats: {
      PAC: 76, SHO: 86, PAS: 93, DRI: 88, DEF: 64, PHY: 78,
    },
  },
  {
    name: 'Virgil van Dijk',
    rating: 89,
    position: 'CB',
    club: 'Liverpool',
    nation: 'Netherlands',
    image: 'https://cdn.sofifa.net/players/203/376/24_60.png',
    stats: {
      PAC: 71, SHO: 60, PAS: 71, DRI: 72, DEF: 91, PHY: 86,
    },
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [squad, setSquad] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const addToSquad = (player) => {
    if (squad.find(p => p.name === player.name)) return;
    setSquad([...squad, player]);
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm) ||
    player.club.toLowerCase().includes(searchTerm) ||
    player.nation.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="home-container">
      <h1>EAFC Squad Builder</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search players"
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-button">🔍</button>
      </div>

      <div className="filters">
        <button className="filter-btn">League</button>
        <button className="filter-btn">Nation</button>
        <button className="filter-btn">Club</button>
      </div>

      <div className="player-grid">
        {filteredPlayers.map((player, index) => (
          <PlayerCard
            key={index}
            {...player}
            onClick={() => addToSquad(player)}
          />
        ))}
      </div>

      <div className="build-btn-wrapper">
        <button className="build-btn">Build Squad</button>
      </div>

      {squad.length > 0 && (
        <div className="squad-section">
          <h2>Your Squad</h2>
          <div className="player-grid">
            {squad.map((player, index) => (
              <PlayerCard key={index} {...player} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;