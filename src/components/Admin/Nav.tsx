import Logo1 from "./../../assets/logot.png";

const Nav = () => {
  return (
    <div className="bg-[#903839] p-4 w-full sticky top-0">
      <div className="lg:w-2/3 w-full mx-auto flex justify-between items-center">
        <img src={Logo1} alt="Logo" className="w-20 md:w-40" />
        <h1 className="text-xl sm:text-2xl md:text-3xl text-white">
          LHC ADMIN
        </h1>
      </div>
    </div>
  );
};

export default Nav;
