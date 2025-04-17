import SingleSkill from "./SingleSkill";
import PowerBIIcon from "../PowerBIIcon"; 
import { FaPython } from "react-icons/fa";
import { FaBroom } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";
import { SiPandas  } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "Python Programing", icon: FaPython },  
  { skill: "Power BI Reports ", icon: PowerBIIcon },
  { skill: "SQL  Databases ", icon: FaDatabase },
  { skill: "Machine Learning", icon: SiScikitlearn },
  { skill: "Data Cleaning", icon: FaBroom },
  { skill: "Data Visualisation", icon: FaChartPie },
  { skill: "Statistical Analysis", icon: FaChartLine },
  { skill: "Pandas Numpy", icon: SiPandas  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-4 max-w-[1200px] mx-auto translate-y-[-60px]">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={item.skill}  // Use unique key (e.g., skill name)
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              className="p-2" 
            >
              <SingleSkill
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};


export default AllSkills;
