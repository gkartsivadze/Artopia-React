import React from 'react';
import './App.css'
import WelcomePage from './components/WelcomePage/WelcomePage'
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
    <Navigation />
      <WelcomePage />
      <Footer />
    </>
  )
}

export default App
