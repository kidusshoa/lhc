import AboutUs from "./About";
import ContactUs from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import JoinUs from "./Join";
import Navbar from "./Nav";
import TeamsList from "./Teams";

const Home = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero />
      <TeamsList />
      <AboutUs />
      <JoinUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
