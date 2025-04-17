import PowerBIIcon from "../PowerBIIcon"; 
import { FaPython } from "react-icons/fa";
import { FaBroom } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine  } from "react-icons/fa";
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
  { skill: "Statistical Analysis", icon: FaChartLine  },
  { skill: "Pandas Numpy", icon: SiPandas  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-8">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
