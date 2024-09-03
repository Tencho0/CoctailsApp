import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CocktailList } from './pages/CocktailList';
import { CocktailDetailPage } from './pages/CocktailDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CocktailList />} />
        <Route path="/cocktail/:id" element={<CocktailDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
