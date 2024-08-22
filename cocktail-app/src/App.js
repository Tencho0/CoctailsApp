import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CocktailList } from './pages/CocktailList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CocktailList />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
