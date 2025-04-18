import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-6">About Me</h2>
      <h4 className="text-2xl text-cyan mb-6">ML Enthusiast - Data Analyst | Biostatistics - Healthcare Expert</h4>
      <p className="text-lg sm:text-xl text-justify mb-6">
        I’m <span className="font-bold text-white">Rohit Dusane</span>, a seasoned <span className="font-bold text-white">Data Analyst</span> with over 
        <span className="font-bold text-white"> 10 years of experience</span> in <span className="font-bold text-white">biostatistics</span> in the 
        <span className="font-bold text-white"> healthcare domain</span>. I specialize in transforming complex datasets into 
        <span className="font-bold text-orange"> actionable insights</span> that elevate decision-making and improve 
        <span className="font-bold text-white"> patient outcomes</span>.
      </p>

      {/* Skills paragraph */}
      <p className="text-lg sm:text-xl text-justify mb-6">
        With a solid foundation in <span className="font-bold text-white">statistical modeling</span>, 
        <span className="font-bold text-white"> data visualization</span>, and 
        <span className="font-bold text-white"> predictive analytics</span>, I’m passionate about using data to solve real-world challenges. 
        My work enables organizations to make smarter, data-driven decisions and streamline critical healthcare processes.
      </p>

      {/* Opportunities paragraph */}
      <p className="text-lg sm:text-xl text-justify mb-6">
        I’m currently open to <span className="font-bold text-orange">new opportunities</span> and 
        <span className="font-bold text-orange"> impactful collaborations</span> in 
        <span className="font-bold text-white"> data analytics</span>, 
        <span className="font-bold text-white"> biostatistics</span>, and the 
        <span className="font-bold text-white"> healthcare sector</span>.
      </p>

      <div className="flex gap-4 justify-center ">
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            My Projects
          </Link>
        </button>

        {/* Resume Button */}
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <a href="website/images/resume.pdf">Download my resume</a>
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
