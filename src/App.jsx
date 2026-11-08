import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import CustomCursor from './components/CustomCursor';
import Chatbot from './components/Chatbot';


function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  if (showComingSoon) {
    return <ComingSoon onBack={() => setShowComingSoon(false)} />;
  }

  return (
    <main>

  <CustomCursor />
  <Chatbot />
      <Hero onPreloadComplete={() => setPreloaderComplete(true)} />

      {preloaderComplete && (
        <div className="animate-fade-in-up">
          <Navbar />
          <About />
          <Services />
          <Project onCtaClick={() => setShowComingSoon(true)} />
          <ContactSection />
          <Footer />
        </div>
      )}
    </main>
  );
}

export default App;