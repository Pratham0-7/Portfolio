import React from 'react';

function HelloThere() {
  return (
    <>
      <div className='bg-gray-800 rounded shadow-md shadow-gray-700 p-6 max-w-screen-lg mx-auto'>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h1 className='text-5xl md:text-7xl m-4 rounded p-4 shadow-md shadow-black font-bold text-white text-center md:text-left'>
            Hello, <br />I'm a FullStack Developer.
          </h1>
          <dotlottie-player
            src="https://lottie.host/a005ed5c-8dbf-48e6-85c2-5bb15a008098/gBEwRZChYc.json"
            background="transparent"
            speed="1"
            style={{ width: '80%', height: '80%' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </>
  );
}

export default HelloThere;
