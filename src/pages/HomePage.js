import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import cat1 from '../assets/cat1.gif';
import cat2 from '../assets/cat2.gif';

const HomePage = () => {
  const navigate = useNavigate();
  const [catImage, setCatImage] = useState(cat1);
  const [headerText, setHeaderText] = useState("Will you be my Valentine? ❤️");
  const [yesButtonSize, setYesButtonSize] = useState(1); // Stato per la dimensione del pulsante "Si"

  const handleYesClick = () => {
    navigate('/love-page');
  };

  const handleNoClick = () => {
    // Incrementa la dimensione del pulsante "Si" ogni volta che "No" viene cliccato
    setYesButtonSize(prevSize => prevSize + 0.2);

    // Cambia l'immagine e il testo quando il pulsante "No" viene cliccato
    setCatImage(cat2);
    setHeaderText("e daiiiiiiiiiiiii 😢");
  };

  return (
    <div className="home-container">
      <h2>{headerText}</h2>
      <img src={catImage} alt="Funny Valentine" className="funny-gif" />
      <div className="buttons">
        <button
          className="yes-button"
          onClick={handleYesClick}
          style={{ transform: `scale(${yesButtonSize})` }} // Applica la scala al pulsante "Si"
        >
          Si
        </button>
        <button
          className="no-button"
          onClick={handleNoClick} // Rimuovi l'evento onMouseEnter e aggiungi onClick
        >
          No
        </button>
      </div>
    </div>
  );
};

export default HomePage;
