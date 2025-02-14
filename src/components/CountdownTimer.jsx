import React, { useState, useEffect, useCallback } from 'react';

function TogetherTimer({ startDate }) {
  // Utilizzo di useCallback per memorizzare la funzione e evitarne la ricreazione a ogni render
  const calculateTimeTogether = useCallback(() => {
    const start = new Date(startDate);
    const now = new Date();
    const diff = now - start; // Differenza in millisecondi

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    return { days, hours, minutes, seconds };
  }, [startDate]); // Aggiungiamo startDate come dipendenza di useCallback

  const [timeTogether, setTimeTogether] = useState(calculateTimeTogether());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeTogether(calculateTimeTogether());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeTogether]); // Ora includiamo calculateTimeTogether come dipendenza

  return (
    <div>
      <p>
        <strong>{timeTogether.days}</strong> d,{' '}
        <strong>{timeTogether.hours}</strong> h,{' '}
        <strong>{timeTogether.minutes}</strong> m{' '}
        <strong>{timeTogether.seconds}</strong> s
      </p>
    </div>
  );
}

export default TogetherTimer;
