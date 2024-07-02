import React, { useState } from "react";
import { useParams,} from "react-router-dom";
import data from "../data.json";
import Slideshow from "../components/Slideshow";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Houses = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  if (!item) {
    window.location.href = "/error";
  }

  return (
    <div className="details-container">
      <Header />
      <div className="details-pictures">
        <Slideshow pictures={item.pictures} />
      </div>
      <h2>{item.title}</h2>
      <div className="rating">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < item.rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
      <div className="details-host">
        <p>{item.host.name}</p>
        <img
          src={item.host.picture}
          alt={item.host.name}
          className="host-picture"
        />
      </div>

      <div className="details-info">
        <div className="description-equipment-container">
          <div className="description-section">
            <button onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
              Description
              <span className={`arrow ${isDescriptionOpen ? "up" : "down"}`}>⬇️</span>
            </button>
            <div className={`slide ${isDescriptionOpen ? "open" : ""}`}>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="equipment-section">
            <button onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}>
              Équipements
              <span className={`arrow ${isEquipmentsOpen ? "up" : "down"}`}>⬇️</span>
            </button>
            <div className={`slide ${isEquipmentsOpen ? "open" : ""}`}>
              <h3>Équipements:</h3>
              <ul>
                {item.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Houses;