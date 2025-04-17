// const SkillsText = () => {
//   return (
//     <div className="flex flex-col items-center mt-[20px]">
//       <h2 className="text-6xl text-cyan mb-10">My Skills</h2>
//       <p className="text-lg text-center text-justify">
//         With a strong foundation in biostatistics and data analysis, I have
//          developed expertise in applying data science technologies to extract
//           valuable insights and drive data-informed decision-making. Over the years,
//            I have gained extensive experience in statistical analysis, machine learning,
//             and data visualization, becoming proficient in tools like Python, SPSS, MS-Excel, and R. 
//     </p>
//     <p className="text-lg text-center text-justify">
//         My background in working with complex clinical research datasets has honed my ability
//          to build and deploy models that address real-world challenges and deliver meaningful results. 
//          By leveraging my statistical expertise and newly acquired data science skills, I am equipped to
//           optimize solutions and provide actionable insights that drive business success. 
//     </p>
//     <p className="text-lg text-center text-justify">
//       I have also used these skills to build a portfolio of projects that showcase my ability to generate impactful outcomes.
//     </p>
//     </div>
//   );
// };

// export default SkillsText;
const SkillsText = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-10">
      <h2 className="text-5xl text-cyan mb-4">My Skills</h2>
      <p className="text-lg sm:text-xl text-justify mb-4">
        With a strong foundation in <span className="font-bold text-orange">biostatistics</span> and <span className="font-bold text-orange">data analysis</span>, I specialize in transforming raw data into meaningful insights that support smarter, evidence-based decisions.
        My analytical mindset is backed by hands-on experience across a range of data-driven projects in both clinical and business settings.
      </p>

      <p className="text-lg sm:text-xl text-justify mb-4">
        Over the years, I’ve built deep expertise in <span className="font-semibold text-white">statistical modeling</span>, 
        <span className="font-semibold text-white"> machine learning</span>, and <span className="font-semibold text-white"> data visualization</span>. 
        I’m proficient in tools like <span className="font-semibold text-white">Python</span>, <span className="font-semibold text-white">R</span>, 
        <span className="font-semibold text-white">SPSS</span>, and <span className="font-semibold text-white">MS Excel</span>, which allow me to identify trends, predict outcomes, and communicate results with clarity.
      </p>
{/* 
      <p className="text-lg sm:text-xl text-justify mb-4">
        My experience working with complex <span className="font-semibold text-white">datasets</span> has sharpened my ability to design and implement data models that solve real-world problems. 
        I’m driven by the challenge of uncovering hidden patterns, building predictive frameworks, and delivering insights that fuel strategic decisions.
      </p> */}

      <p className="text-lg sm:text-xl text-justify mb-4">
        These skills come to life in my portfolio, where I showcase impactful projects that reflect not only my technical strengths but also my commitment to delivering measurable outcomes through clear, insightful analysis and visualization.
      </p>
    </div>
  );
};


export default SkillsText;
