import React from "react";
import Logo from "./../assets/logoM.png";

const JoinUs: React.FC = () => {
  return (
    <div
      id="join"
      className="h-[700px] w-full bg-white flex flex-col lg:flex-row justify-center items-center"
    >
      <img src={Logo} alt="" />
      <div className="bg-white p-8 shadow-lg rounded-lg text-center max-w-lg">
        <h1 className="text-3xl font-semibold mb-4 text-[#903839]">
          Join the Little Hearts Club!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Become part of a compassionate community dedicated to supporting
          children in need. Together, we can make a real difference in the lives
          of vulnerable children by offering them the resources and
          opportunities they need to thrive.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfav2ntkMQaJZT_7iDslB5CPI3jmhIl6x9KwwTJL4ShYe-B1w/viewform?fbclid=PAZXh0bgNhZW0CMTEAAaZzV4bu78AnafZ9blRP1efou45HKaLWHSZS3XtwI-P0Ss1AEWBbcKAx73w_aem_5GGjybMed1BTKi9Wj7xamw"
          className="bg-[#903839] hover:bg-[#a5494a] text-white py-3 px-6 rounded-lg text-lg"
        >
          Join the Community
        </a>
      </div>
    </div>
  );
};

export default JoinUs;
