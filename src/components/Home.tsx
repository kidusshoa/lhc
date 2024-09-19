import AboutUs from "./About";
import Footer from "./Footer";
import JoinUs from "./Join";
import Navbar from "./Nav";
import TeamsList from "./Teams";

const Home = () => {
  return (
    <div className="h-full w-full">
      <Navbar />

      <TeamsList />
      <AboutUs />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Home;
