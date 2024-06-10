import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";


const Card = () => {
  return (
    <div className="cards-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <Link to={`/details/${item.id}`} className="card-link">
          <img src={item.cover} alt={item.title} className="card-cover" />
          <div className="card-content">
            <h3>{item.title}</h3>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;