import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <section id="hero-section" className="hero-section">
    <div className=" pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-6">
        <HeroText />
        <HeroPic />     
      </div>
    </div>
    </section>
  );
};

export default HeroMain;