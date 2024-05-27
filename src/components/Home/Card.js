import React from "react";
import data from "../../data.json";
import "../Assets/style/Card.css";

const Card = ({ title, cover,}) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-cover" />
      <div className="card-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const CardList = () => {
  const cardsToShow = data.slice(0, 6);
  return (
    <div className="cards-container">
      {cardsToShow.map((item) => (
        <Card key={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
  );
};

export default CardList;
