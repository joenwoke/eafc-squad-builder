import React from 'react';
import './Home.css'; 

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
        <div className="player-card">Player 1</div>
        <div className="player-card">Player 2</div>
        <div className="player-card">Player 3</div>
      </div>

      <div className="build-btn-wrapper">
        <button className="build-btn">Build Squad</button>
      </div>
    </div>
  );
};

export default Home;