import React from "react";

function Services() {
  return (
    <>
      <div className="bg-gray-800 rounded shadow-md shadow-gray-700 m-4 p-6 max-w-screen-lg mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl m-4 rounded underline p-4 font-bold text-white">
            Services
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white flex flex-col items-center m-4 text-2xl">
            <label className="block text-white text-2xl font-bold mb-2">
              Web Designing
            </label>
            <dotlottie-player
              src="https://lottie.host/eef91517-5a49-4aef-9d0d-f405b9a43512/5x1q5OecaD.json"
              background="transparent"
              speed="1"
              style={{ width: "80%", height: "80%" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="text-white flex flex-col items-center m-4 text-2xl">
            <label className="block text-white text-2xl font-bold mb-2">
              Frontend Development
            </label>
            <dotlottie-player
              src="https://lottie.host/684de9f5-4fba-43bf-865f-eccea5cbff97/XkNHOUhw8A.json"
              background="transparent"
              speed="1"
              style={{ width: "80%", height: "80%" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white flex flex-col items-center m-4 text-2xl">
            <label className="block text-white text-2xl font-bold mb-2">
              Backend Development
            </label>
            <dotlottie-player
              src="https://lottie.host/a1360db7-357f-472b-92b3-4958bfbcf233/JQmWv0VYYz.json"
              background="transparent"
              speed="1"
              style={{ width: "80%", height: "80%" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="text-white flex flex-col items-center m-4 text-2xl">
            <label className="block text-white text-2xl font-bold mb-2">
              Web Development
            </label>
            <dotlottie-player
              src="https://lottie.host/8d4b215c-f60d-4041-b5bf-d3288d61c06d/2EO07vVb1v.json"
              background="transparent"
              speed="1"
              style={{ width: "80%", height: "80%" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
