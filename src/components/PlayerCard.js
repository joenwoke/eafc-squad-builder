import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({
  name,
  rating,
  position,
  club,
  nation,
  image,
  stats = { PAC: 90, SHO: 85, PAS: 80, DRI: 88, DEF: 70, PHY: 75 },
  onClick,
  onRemove
}) => {
  return (
    <div
      className="player-card"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="player-header">
        <div className="badge rating">{rating}</div>
        <div className="badge position">{position}</div>
      </div>

      <img src={image} alt={name} className="player-image" />

      <h3 className="player-name">{name}</h3>
      <p className="club">{club}</p>
      <p className="nation">{nation}</p>

      <div className="player-stats">
        <div><strong>PAC</strong> {stats.PAC}</div>
        <div><strong>SHO</strong> {stats.SHO}</div>
        <div><strong>PAS</strong> {stats.PAS}</div>
        <div><strong>DRI</strong> {stats.DRI}</div>
        <div><strong>DEF</strong> {stats.DEF}</div>
        <div><strong>PHY</strong> {stats.PHY}</div>
      </div>

      {onRemove && (
        <button
          className="remove-btn"
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering onClick
            onRemove();
          }}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default PlayerCard;