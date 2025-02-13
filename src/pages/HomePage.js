import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import cat1 from '../assets/cat1.gif';
import cat2 from '../assets/cat2.gif';

const HomePage = () => {
  const navigate = useNavigate();
  const [catImage, setCatImage] = useState(cat1);
  const [headerText, setHeaderText] = useState("Vuoi passare San Valentino insieme? ❤️");

  const handleYesClick = () => {
    navigate('/love-page');
  };

  const handleNoHover = (event) => {
    const button = event.target;
    const maxX = window.innerWidth - button.clientWidth - 20;
    const maxY = window.innerHeight - button.clientHeight - 20;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

    // Cambia l'immagine e il testo quando il pulsante "No" viene hoverato
    setTimeout(() => {
        setCatImage(cat2);
        setHeaderText("e daiiiiiiiiiiiii? 😢");
      }, 50);
    
  };

  return (
    <div className="home-container">
      <h2>{headerText}</h2> {/* Usa lo stato per il testo */}
      <img src={catImage} alt="Funny Valentine" className="funny-gif" /> {/* Usa lo stato per la sorgente dell'immagine */}
      <div className="buttons">
        <button className="yes-button" onClick={handleYesClick}>Si</button>
        <button
          className="no-button"
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default HomePage;