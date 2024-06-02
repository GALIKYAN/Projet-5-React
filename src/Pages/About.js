import React, { useState } from "react";
import "../Assets/style/About.css"
import Header from "../components/Header"
import Footer from "../components/Footer";
import about from "../Assets/images/about.png";

function About() {
  const [openSections, setOpenSections] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });

  const handleClick = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div>
      <Header />
      <img src={about} alt="about image" className="aboutImage" />
      <div className="frame" onClick={() => handleClick("fiabilite")}>
        <div className="header">Fiabilité</div>
        {openSections.fiabilite && (
          <div className="content">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </div>
        )}
      </div>
      <div className="frame" onClick={() => handleClick("respect")}>
        <div className="header">Respect</div>
        {openSections.respect && (
          <div className="content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        )}
      </div>
      <div className="frame" onClick={() => handleClick("service")}>
        <div className="header">Service</div>
        {openSections.service && (
          <div className="content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        )}
      </div>
      <div className="frame" onClick={() => handleClick("securite")}>
        <div className="header">Sécurité</div>
        {openSections.securite && (
          <div className="content">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default About;
