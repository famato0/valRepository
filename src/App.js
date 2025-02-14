import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LovePage from './pages/LovePage';

function App() {
  return (
    <Router basename='/valRepository'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/love-page" element={<LovePage />} />
      </Routes>
    </Router>
  );
}

export default App;
