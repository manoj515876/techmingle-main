// Card.js
import React from 'react';
import './card.css';

const Card = ({ title, content, button }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
    <div className="button-container">{button}</div>
  </div>
);

export default Card;
