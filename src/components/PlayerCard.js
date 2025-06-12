import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ name, rating, position, club, nation, image }) => {
  return (
    <div className="player-card">
      <div className="player-header">
        <div className="badge rating">{rating}</div>
        <div className="badge position">{position}</div>
      </div>

      <img src={image} alt={name} className="player-image" />
      <h3 className="player-name">{name}</h3>
      <p className="club">{club}</p>
      <p className="nation">{nation}</p>
    </div>
  );
};

export default PlayerCard;