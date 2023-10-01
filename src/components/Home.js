import React from "react";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* {Container} */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Harpreet Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Front End Developer.
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px]">
          I am a Front End developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I am focused on
          building responsive web applications.
          <div>
            <button className="text-white border-2 px-6 py-3 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home;
