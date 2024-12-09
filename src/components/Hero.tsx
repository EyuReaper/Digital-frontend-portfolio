import React from "react";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center text-center mt-10">
      <h1 className="text-4xl font-bold">
        Hey, I’m Eyuel, a Frontend Developer with 3 Years of Experience
      </h1>
      <p className="text-lg mb-6">
        I create aesthetically pleasing web applications and user-friendly digital experiences.
      </p>
      <a href="#contact" className=" btn glass  btn-info mt-4 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md ">
        Contact Me
      </a>
    </section>
  );
};

export default Hero;
