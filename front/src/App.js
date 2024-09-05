import React, { useEffect, useState } from 'react';
import './App.css';
import HelloThere from './Components/HelloThere';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Services from './Components/Services';
import ContactMe from './Components/ContactMe';
import Loading from './Components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    // Wait for all animations to load or for a timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust time according to your animations

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App bg-gray-900 h-full text-white">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HelloThere />
          <AboutMe />
          <Skills />
          <Services />
          <ContactMe />
        </>
      )}
    </div>
  );
}

export default App;
