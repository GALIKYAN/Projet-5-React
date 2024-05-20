import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="cards-container">
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
      </div>
    </div>
  );
}

export default App;