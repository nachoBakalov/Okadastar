import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Projets from "./components/Projets";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Projets />
        {/* <Collaboration /> */}
        <Services />
        {/* <Pricing /> */}
        {/* <Roadmap />  */}
        <Contact />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
