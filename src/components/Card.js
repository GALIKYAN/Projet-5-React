import React from 'react'
import '../style/Card.css'

const Card = ({ title }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;