import React from 'react';
import Profile from "./images/proflie_pc.jpg";

function AboutMe() {
  return (
    <>
      <div className="bg-gray-800 m-4 rounded shadow-md shadow-gray-700 p-6 max-w-screen-lg mx-auto">
        <h1 className="text-4xl md:text-5xl m-4 rounded p-4 font-bold underline text-white text-center md:text-left">About Me</h1>
        <div className="flex flex-col md:flex-row shadow-md shadow-black rounded">
          <div className="flex justify-center md:justify-start m-4 p-3">
            <img src={Profile} className="h-full w-full  object-cover rounded-full" alt="Profile" />
          </div>
          <div className="m-3 p-2 flex items-center">
            <p className='text-lg md:text-3xl text-white text-center md:text-left'>
              As an emerging full-stack developer, I am eager to apply my skills in Flask, Django, React, and other technologies in my first professional role. I'm known for my responsible, orderly approach and am ready to contribute to impactful projects and grow my technical expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
