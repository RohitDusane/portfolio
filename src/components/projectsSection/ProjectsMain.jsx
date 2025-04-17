// import ProjectsText from "./ProjectsText";
// import SingleProject from "./SingleProject";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const projects = [
//   {
//     name: "IBD Clinical Data Analysis and Visualization Project",
//     year: "Mar2025",
//     align: "right",
//     image: "../../public/images/IBD.WEBP",
//     link: "https://github.com/RohitDusane/Interactive-IBD-Analysis-Dashboard-with-Dash-Plotly",
//     tags: ["#DataScience", "#HealthcareAnalytics", "#Python", "#PlotlyDash"]
//   },
//   {
//     name: "Titanic Machine Learning Model: Random Forest & Logistic Regression",
//     year: "Apr2025",
//     align: "left",
//     image: "../../public/images/ML.webp",
//     link: "https://github.com/RohitDusane/Titanic-Survival-Prediction-RStudio-Tidymodels",
//     tags: ["#MachineLearning", "#TitanicDataset", "#RStats", "#Tidymodels"]
//   },
//   {
//     name: "Patients Wait Time Analysis Power BI Dashboard",
//     year: "Jan2025",
//     align: "right",
//     image: "../../public/images/Summary View.PNG",
//     link: "https://github.com/RohitDusane/Healthcare-Analytics",
//     tags: ["#PowerBI", "#HealthcareAnalytics", "#WaitTimeAnalysis", "#DataVisualization"]
//   },
//   {
//     name: "Coffee Sales Analysis Excel Dashboard",
//     year: "Oct2024",
//     align: "left",
//     image: "../../public/images/Dashboard.PNG",
//     link: "https://github.com/RohitDusane/Excel-Sales-Dashboard",
//     tags: ["#Excel", "#SalesAnalysis", "#BusinessIntelligence", "#DataVisualization"]
//   },
// ];

// const ProjectsMain = () => {
//   return (
//     <div id="projects" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <ProjectsText />
//       </motion.div>
//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {projects.map((project, index) => {
//           return (
//             <SingleProject
//               key={index}
//               name={project.name}
//               year={project.year}
//               align={project.align}
//               image={project.image}
//               link={project.link}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProjectsMain;


import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "IBD Clinical Data Analysis and Visualization Project",
    year: "Mar2025",
    align: "right",
    image: "/portfolio-website/images/IBD.webp",
    link: "https://github.com/RohitDusane/Interactive-IBD-Analysis-Dashboard-with-Dash-Plotly",
    tags: ["#DataScience", "#HealthcareAnalytics", "#Python", "#EDA"]
  },
  {
    name: "Titanic Machine Learning Model: Random Forest & Logistic Regression",
    year: "Apr2025",
    align: "left",
    image: "/portfolio-website/images/ML.webp",
    link: "https://github.com/RohitDusane/Titanic-Survival-Prediction-RStudio-Tidymodels",
    tags: ["#MachineLearning", "#TitanicDataset", "#RStats", "#Tidymodels", "#SurvivalPrediction"]
  },
  {
    name: "Patients Wait Time Analysis Power BI Dashboard",
    year: "Jan2025",
    align: "right",
    image: "/portfolio-website/images/Summary View.PNG",
    link: "https://github.com/RohitDusane/Healthcare-Analytics",
    tags: ["#PowerBI", "#DataInsights", "#WaitTimeAnalysis", "#DataCleaning"]
  },
  {
    name: "Coffee Sales Analysis Excel Dashboard",
    year: "Oct2024",
    align: "left",
    image: "/portfolio-website/images/Dashboard.PNG",
    link: "https://github.com/RohitDusane/Excel-Sales-Dashboard",
    tags: ["#ExcelDashboard", "#SalesAnalysis", "#BusinessIntelligence", "#DataVisualization"]
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
