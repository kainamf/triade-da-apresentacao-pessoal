import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Target from './components/Target';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Team />
      <Target />
      <Schedule />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;