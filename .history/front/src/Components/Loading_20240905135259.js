import React, { useEffect } from 'react';

function Loading() {
  useEffect(() => {
    // Set a timeout for cleanup (if needed)
    const timer = setTimeout(() => {
      // Perform any additional logic after the animation, if necessary
    }, 3000); // Adjust the timeout to match the animation duration

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <dotlottie-player
        src="https://lottie.host/8252862f-c058-4b6d-bbbe-d068306aa1aa/ICwyTf6EtH.json"
        background="transparent"
        speed="1"
        style={{ width: "30%", height: "30%" }}
        loop={true}
        autoplay
      ></dotlottie-player>
    </div>
  );
}

export default Loading;
