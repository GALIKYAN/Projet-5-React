import React, { useState } from 'react';


const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  if (pictures.length === 1) {
    return <img src={pictures[0]} alt="Slide 1" className="details-picture" />;
  }

  return (
    <div className="slideshow-container">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="details-picture" />
      {pictures.length > 1 && (
        <div>
          <button onClick={prevSlide} className="slideshow-button slideshow-button-left">‹</button>
          <button onClick={nextSlide} className="slideshow-button slideshow-button-right">›</button>
          <div className="slideshow-indicator">
            {currentIndex + 1} / {pictures.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;