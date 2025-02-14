import React from 'react';
import TogetherTimer from '../components/CountdownTimer';
import './LovePage.css';
import videoVostro from '../assets/IMG_4115.mp4';
import { useNavigate } from 'react-router-dom';

function LovePage() {
  const navigate = useNavigate();
  const startDate = '2024-09-23T00:00:00';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy valentine's day ❤️</h1>

        <video className="video" autoPlay loop muted playsInline>
          <source src={videoVostro} type="video/mp4" />
          Il tuo browser non supporta il video.
        </video>

        <div className="timer">
          <TogetherTimer startDate={startDate} />
        </div>

        <p>Love you ❤️</p>

        <button className="back-button" onClick={() => navigate('/')}>
          BACK
        </button>
      </header>
    </div>
  );
}

export default LovePage;