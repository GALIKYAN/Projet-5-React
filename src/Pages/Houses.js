import React from "react";
import { useParams,} from "react-router-dom";
import data from "../data.json";
import Slideshow from "../components/Slideshow";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Houses = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);
  //const navigate = useNavigate()

  if (!item) {
   window.location.href = "/error";
  // navigate('/error')
    //return null; 
  }

  return (
    <div className="details-container">
      <Header />
      <div className="details-pictures">
        <Slideshow pictures={item.pictures} />
      </div>
      <h2>{item.title}</h2>
      <p>{item.rating}</p>
      <div className="details-host">
        <p>{item.host.name}</p>
        <img
          src={item.host.picture}
          alt={item.host.name}
          className="host-picture"
        />
      </div>

      <div className="details-info">
        <p>{item.location}</p>
        <div className="details-tags">
          <ul>
            {item.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <p>Description:{item.description}</p>
        <div className="details-equipments">
          <h3>Equipments:</h3>
          <ul>
            {item.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </div> 
  );
};

export default Houses;