import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser';

// Initialize (optional but recommended)
emailjs.init('7ituiY6A7cX7oa_U3'); // Your public key

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50" >
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
