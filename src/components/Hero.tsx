import React from "react";
import HeroImage from "./../assets/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center text-center text-white p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          "Empowering children, transforming futures."
        </h1>
        <p className="text-xl md:text-2xl">– Little Hearts Club</p>
      </div>
    </section>
  );
};

export default Hero;
