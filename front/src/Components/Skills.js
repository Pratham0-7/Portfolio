import React from "react";
import Flask from "./images/flask.png";
import django from "./images/django.png";
import mongo from "./images/mongodb.png";
import reactt from "./images/logo192.png";
import tailwind from "./images/tailwind.png";
import figma from "./images/figma.png";

function Skills() {
  return (
    <>
      <div className="bg-gray-800 m-4 rounded shadow-md shadow-gray-700 p-6 max-w-screen-lg mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl m-4 rounded underline p-4 font-bold text-white">
            Skills
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-white text-2xl">
            <label className="block text-white text-center text-2xl font-bold mb-2">
              Flask
            </label>
            <img
              src={Flask}
              alt="Flask"
              className="mx-auto h-20 sm:h-24 md:h-32"
            />
          </div>
          <div className="text-white text-2xl">
            <label className="block text-white text-center text-2xl font-bold mb-2">
              Django
            </label>
            <img
              src={django}
              alt="Django"
              className="mx-auto h-20 sm:h-24 md:h-32"
            />
          </div>
          <div className="text-white text-2xl">
            <label className="block text-white text-center text-2xl font-bold mb-2">
              MongoDB
            </label>
            <img
              src={mongo}
              alt="MongoDB"
              className="mx-auto h-20 sm:h-24 md:h-32"
            />
          </div>
          <div className="text-white text-2xl">
            <label className="block text-white text-center text-2xl font-bold mb-2">
              React
            </label>
            <img
              src={reactt}
              alt="React"
              className="mx-auto h-20 sm:h-24 md:h-32"
            />
          </div>
          <div className="text-white text-2xl">
            <label className="block text-white text-center text-2xl font-bold mb-2">
              Tailwind
            </label>
            <img
              src={tailwind}
              alt="Tailwind"
              className="mx-auto h-20 sm:h-24 md:h-32"
            />
          </div>
          <div className="text-white text-2xl">
            <label className="block text-white text-center text-2xl font-bold mb-2">
              Figma
            </label>
            <img
              src={figma}
              alt="Figma"
              className="mx-auto h-20 sm:h-24 md:h-32"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
