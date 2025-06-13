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
      PAC: 97,
      SHO: 90,
      PAS: 82,
      DRI: 92,
      DEF: 36,
      PHY: 78,
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
      PAC: 76,
      SHO: 86,
      PAS: 93,
      DRI: 88,
      DEF: 64,
      PHY: 78,
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
      PAC: 71,
      SHO: 60,
      PAS: 71,
      DRI: 72,
      DEF: 91,
      PHY: 86,
    },
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilter = (type) => {
    setActiveFilter(type === activeFilter ? '' : type);
  };

  const filteredPlayers = players.filter((player) => {
    const searchMatch = player.name.toLowerCase().includes(searchTerm);
    if (!activeFilter) return searchMatch;

    switch (activeFilter) {
      case 'League':
        return searchMatch && player.club.toLowerCase().includes(searchTerm);
      case 'Nation':
        return searchMatch && player.nation.toLowerCase().includes(searchTerm);
      case 'Club':
        return searchMatch && player.club.toLowerCase().includes(searchTerm);
      default:
        return searchMatch;
    }
  });

  return (
    <div className="home-container">
      <h1>EAFC Squad Builder</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search players"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button">🔍</button>
      </div>

      <div className="filters">
        <button
          className={`filter-btn ${activeFilter === 'League' ? 'active' : ''}`}
          onClick={() => handleFilter('League')}
        >
          League
        </button>
        <button
          className={`filter-btn ${activeFilter === 'Nation' ? 'active' : ''}`}
          onClick={() => handleFilter('Nation')}
        >
          Nation
        </button>
        <button
          className={`filter-btn ${activeFilter === 'Club' ? 'active' : ''}`}
          onClick={() => handleFilter('Club')}
        >
          Club
        </button>
      </div>

      <div className="player-grid">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player, index) => (
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
          ))
        ) : (
          <p>No players match your search.</p>
        )}
      </div>

      <div className="build-btn-wrapper">
        <button className="build-btn">Build Squad</button>
      </div>
    </div>
  );
};

export default Home;