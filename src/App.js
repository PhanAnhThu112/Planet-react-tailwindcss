import React from 'react'
import About from './components/About';
import Developers from './components/Developers';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Subcribe from './components/Subcribe';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Developers />
        <Subcribe />
        <Footer />
    </div>
  );
}

export default App;
