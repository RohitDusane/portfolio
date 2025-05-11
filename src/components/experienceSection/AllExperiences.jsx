import SingleExperience from "./SingleExperience";
// import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "E-Tutor",
    company: "TechKnit IT Enabled Services - Pune, India",
    date: "Jan 2013 - Jul 2013",
    responsibilities: [
      "Designing and delivering engaging online lessons.",
      "Providing personalized feedback and support to students.",
       ],
  },
  {
    job: "Statistician",
    company: "Tata Memorial Hospital- Mumbai, India",
    date: "Aug 2013 - Jul 2018",
    responsibilities: [
      "Developed statistical models with SPSS to predict disease progression.",
      "Designed methodologies for studies and RCTs",
      "Provided statistical support, contributing to 25 published studies.",
    ],
  },
  {
    job: "Biostatistician",
    company: "NMC HEalthcare Group - Abu Dhabi, UAE",
    date: "Dec 2018 - Aug 2024",
    responsibilities: [
      "Designed predictive models to optimize healthcare outcomes.",
      "Authored 10 peer-reviewed publications in clinical research.",
      "Trained research teams on statistical tools and analysis best practices.",
    ],
  },
  {
    job: "Freelancer",
    company: "Remote - Mumbai, India",
    date: "Aug 2024 - Present",
    responsibilities: [
      "Conducted statistical analysis for client projects.",
      "Developed data visualizations and reports using Power BI for client insights.",
      "Completed online courses - Power BI, SQL, Python & Machine Leanring",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {[...experiences].reverse().map((experience, index) => (
        <div key={experience.job + index} className="flex items-center">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowLeftLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;