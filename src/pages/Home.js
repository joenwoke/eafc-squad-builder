import React from 'react';
import './Home.css';
import PlayerCard from '../components/PlayerCard';

const Home = () => {
  return (
    <div className="home-container">
      <h1>EAFC Squad Builder</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search players"
          className="search-input"
        />
        <button className="search-button">🔍</button>
      </div>

      <div className="filters">
        <button className="filter-btn">League</button>
        <button className="filter-btn">Nation</button>
        <button className="filter-btn">Club</button>
      </div>

      <div className="player-grid">
        <PlayerCard name="Player 1" />
        <PlayerCard name="Player 2" />
        <PlayerCard name="Player 3" />
      </div>

      <div className="build-btn-wrapper">
        <button className="build-btn">Build Squad</button>
      </div>
    </div>
  );
};

export default Home;