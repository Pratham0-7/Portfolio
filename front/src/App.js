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
    // Dynamically load the script for dotLottie player
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    // Set a timer to stop loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the timeout based on the animation duration

    // Clean up: remove the script and clear the timer when component unmounts
    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App bg-gray-900 min-h-screen text-white">
      {isLoading ? (
        <Loading /> // Shows loading screen while animations load
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
