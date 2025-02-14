import React, { useState } from 'react';
import TogetherTimer from '../components/CountdownTimer';
import './LovePage.css';
import videoVostro from '../assets/IMG_4115.mp4';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { useSpring, animated } from 'react-spring';

function LovePage() {
  const navigate = useNavigate();
  const startDate = '2024-09-23T00:00:00';
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista di video e foto
  const mediaList = [
    { type: 'video', src: videoVostro },
    { type: 'image', src: '../assets/img5.jpg' },
    { type: 'image', src: '../assets/video2.mp4' },
    // Aggiungi altri video o foto qui
  ];

  // Gestione dello swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % mediaList.length),
    onSwipedRight: () => setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Animazione per lo swipe
  const props = useSpring({
    opacity: 1,
    transform: `translateX(${-currentIndex * 100}%)`,
    from: { opacity: 0, transform: `translateX(${-currentIndex * 100}%)` },
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy valentine's day ❤️</h1>

        <div {...handlers} className="media-container">
          <animated.div style={props} className="media-slider">
            {mediaList.map((media, index) => (
              <div key={index} className="media-item">
                {media.type === 'video' ? (
                  <video className="video" autoPlay loop muted playsInline>
                    <source src={media.src} type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                ) : (
                  <img src={media.src} alt={`Media ${index}`} className="image" />
                )}
              </div>
            ))}
          </animated.div>
        </div>

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