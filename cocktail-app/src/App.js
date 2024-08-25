import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CocktailList } from './pages/CocktailList';
import { CocktailDetailPage } from './pages/CocktailDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CocktailList />} />
        <Route path="/cocktail/:id" element={<CocktailDetailPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
