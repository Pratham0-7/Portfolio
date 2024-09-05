import React, { useState, useEffect } from 'react';

function ThankYou() {
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    // Set a timeout to change the state after the animation duration
    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 3000); // Adjust the timeout to match the animation duration

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <dotlottie-player
        src="https://lottie.host/771badfe-a5fc-40e2-83ec-a51f2a3d6c85/Aw5aRKRfbi.json"
        background="transparent"
        speed="1"
        style={{ width: "30%", height: "30%" }}
        loop={false}
        autoplay
      ></dotlottie-player>
      {animationEnded && (
        <h1 className='text-black text-6xl font-bold bg-white w-1/2 mt-4'>
          For Your Message
        </h1>
      )}
    </div>
  );
}

export default ThankYou;
