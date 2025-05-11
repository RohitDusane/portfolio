import CertificationsText from "./CertificationsText";
import SingleCertification from "./SingleCertification";
import certifications from "./certificationData"; // Default import
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Delay between children
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CertificationsMain = () => {
  return (
    <div id="certifications" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        // 🔧 REMOVED: Removed viewport and whileInView logic for scrolling
      >
        <CertificationsText />
      </motion.div>

      {/* Grid Layout for Certifications */}
      <motion.div // 🔧 CHANGED: wrap entire grid in a motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // 🔧 CHANGED: Add stagger effect
            },
          },
        }} // 🔧 CHANGED: Add container-level variants
        initial="show" // 🔧 CHANGED: Set initial state to "show"
        animate="show" // 🔧 CHANGED: Changed "whileInView" to "animate"
      >
        {certifications.map((certification, index) => (
          <motion.div
            key={index}
            variants={cardVariants} // 🔧 CHANGED: Use the card animation variants directly
            className="bg-lightBrown text-cyan hover:bg-lightGrey transition-all duration-200 p-6 rounded-lg flex flex-col"
          >
            <div className="flex flex-col h-full">
              {/* Clickable Image */}
              {certification.link ? (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={certification.image}
                    alt={certification.name}
                    className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                  />
                </a>
              ) : (
                <img
                  src={certification.image}
                  alt={certification.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}

              {/* Course Name */}
              <h3 className="text-2xl font-bold text-center text-golden mb-6">
                {certification.name}
              </h3>

              {/* Platform and Year */}
              <div className="font-bold text-cyan mt-auto text-center space-y-1">
                <div className="text-xl">{certification.platform}</div>
                <div className="text-xl">{certification.year}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div> {/* 🔧 CHANGED: closing tag updated from div to motion.div */}
    </div>
  );
};

export default CertificationsMain;



// const CertificationsMain = () => {
//   return (
//     <div id="certifications" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <CertificationsText />
//       </motion.div>

//       {/* Grid Layout for Certifications */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//         {certifications.map((certification, index) => (
//           <motion.div
//             key={index}
//             variants={{
//               hidden: { opacity: 0 },
//               show: { opacity: 1, transition: { duration: 0.5 } },
//             }}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="bg-lightBrown text-cyan hover:bg-lightGrey transition-all duration-200 p-6 rounded-lg flex flex-col"
//           >
//             <div className="flex flex-col h-full">
//               {/* Clickable Image */}
//               {certification.link ? (
//                 <a
//                   href={certification.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block"
//                 >
//                   <img
//                     src={certification.image}
//                     alt={certification.name}
//                     className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
//                   />
//                 </a>
//               ) : (
//                 <img
//                   src={certification.image}
//                   alt={certification.name}
//                   className="w-full h-48 object-cover rounded-md mb-4"
//                 />
//               )}

//               {/* Course Name */}
//               <h3 className="text-2xl font-bold text-center text-golden mb-6">
//                 {certification.name}
//               </h3>

//               {/* Platform and Year */}
//               <div className="font-bold text-cyan mt-auto text-center space-y-1">
//                 <div className="text-xl">{certification.platform}</div>
//                 <div className="text-xl">{certification.year}</div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CertificationsMain;









// import CertificationsText from "./CertificationsText";
// import SingleCertification from "./SingleCertification";
// import certifications from "./certificationData"; // Default import
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const CertificationsMain = () => {
//   return (
//     <div id="certifications" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <SingleCertification
//               name={certification.name}
//               year={certification.year}
//               link={certification.link}
//               platform={certification.platform}
//               description={certification.description}
//         />
//         <CertificationsText />
//       </motion.div>

//       {/* Grid Layout for Certifications */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
// {certifications.map((certification, index) => (
//   <motion.div
//     key={index}
//     variants={{
//       hidden: { opacity: 0 },
//       show: { opacity: 1, transition: { duration: 0.5 } },
//     }}
//     initial="hidden"
//     whileInView="show"
//     viewport={{ once: true }}
//     className="bg-lightBrown text-cyan hover:bg-lightGrey transition-all duration-200 p-6 rounded-lg flex flex-col"
//   >
//     <div className="flex flex-col h-full">
//       {/* Clickable Image */}
//       {certification.link ? (
//         <a
//           href={certification.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block"
//         >
//           <img
//             src={certification.image}
//             alt={certification.name}
//             className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
//           />
//         </a>
//       ) : (
//         <img
//           src={certification.image}
//           alt={certification.name}
//           className="w-full h-48 object-cover rounded-md mb-4"
//         />
//       )}

//       {/* Course Name */}
//       <h3 className="text-2xl font-bold text-center text-golden mb-6">
//         {certification.name}
//       </h3>

//       {/* Platform and Year (Updated) */}
//       <div className="font-bold text-cyan mt-auto text-center space-y-1">
//         {/* Platform on separate line */}
//         <div className="text-xl">{certification.platform}</div>
        
//         {/* Year on separate line */}
//         <div className="text-xl">{certification.year}</div>
//       </div>
//     </div>
//   </motion.div>
// ))}
// </div>
//     </div>
//   );
// };

// export default CertificationsMain;




        {/* {certifications.map((certification, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.5 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-lightBrown text-cyan hover:bg-lightGrey transition-all duration-200 p-4 rounded-lg flex flex-col"
          >
            <div className="flex flex-col h-full"> */}
              {/* Course Name - Centered */}
              {/* <h3 className="text-xl font-bold text-center text-golden mb-12">{certification.name}</h3> */}

              {/* Platform and Year - Positioned at the bottom */}
              {/* <div className="font-bold flex justify-between items-center mt-auto text-xl"> */}
                {/* Platform with Link and Arrow if available */}
                {/* {certification.link ? (
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan font-bold hover:text-orange underline flex items-center mt-auto"
                  >
                    <span className="mr-2">{certification.platform}</span>
                    <FaArrowRight className="h-5 w-5 text-cyan" />
                  </a>
                ) : (
                  <span className="text-cyan font-bold underline">{certification.platform}</span>
                )}

                {/* Year */}
                {/* <span className="text-cyan font-bold">{certification.year}</span>
              </div>
            </div>
          </motion.div>
        ))} */}


        {/* {certifications.map((certification, index) => (
  <motion.div
    key={index}
    variants={{
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.5 } },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="bg-lightBrown text-cyan hover:bg-lightGrey transition-all duration-200 p-4 rounded-lg flex flex-col"
  >
    <div className="flex flex-col h-full"> */}
      {/* Clickable Image
      {certification.link ? (
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={certification.image}
            alt={certification.name}
            className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
          />
        </a>
      ) : (
        <img
          src={certification.image}
          alt={certification.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )} */}

      {/* Course Name */}
      {/* <h3 className="text-xl font-bold text-center text-golden mb-12">
        {certification.name}
      </h3> */}

      {/* Platform and Year */}
      {/* <div className="font-bold flex justify-between items-center mt-auto text-xl">
        {certification.link ? (
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan font-bold hover:text-orange underline flex items-center mt-auto"
          >
            <span className="mr-2">{certification.platform}</span>
            <FaArrowRight className="h-5 w-5 text-cyan" />
          </a>
        ) : (
          <span className="text-cyan font-bold underline">
            {certification.platform}
          </span>
        )}
        <span className="text-cyan font-bold">{certification.year}</span>
      </div>
    </div> 
  </motion.div>
))}*/}
      {/* </div>
    </div>
  );
};

export default CertificationsMain; */}





// Move this list to its own file (certificationData.js) for cleaner code
// const certifications = [
//   {
//     name: "Introduction to TensorFlow for AI, ML, and DL",
//     year: "October 2021",
//     link: "https://coursera.org/share/d4c9979fd35d923a32f63b353b6e683a",
//     platform: "DeepLearning.AI",
//     description: "Covers neural networks, computer vision, and deep learning using TensorFlow."
//   },
//   {
//     name: "AI for Everyone by Andrew Ng",
//     year: "September 2021",
//     link: "http://coursera.org/verify/96KFJPPTU3J7",
//     platform: "DeepLearning.AI",
//     description: "Non-technical intro to AI, business applications, and ethical implications."
//   },
//   {
//     name: "Python for Data Science and ML Bootcamp",
//     year: "September 2021",
//     link: "https://ude.my/UC-f54c57ae-f33a-4fd1-a815-f994d0d97211",
//     platform: "Udemy",
//     description: "Complete Python + ML bootcamp covering Pandas, NumPy, sklearn, and more."
//   },
//   {
//     name: "Data Analysis with Pandas and Python",
//     year: "September 2021",
//     link: "https://ude.my/UC-17dc3272-a4b5-44a6-8cb2-cdb1c8f66402",
//     platform: "Udemy",
//     description: "In-depth Pandas course including real-world datasets and data visualization."
//   },
//   {
//     name: "Fundamentals of Deep Learning",
//     year: "September 2021",
//     link: "",
//     platform: "NVIDIA DLI",
//     description: "Hands-on workshop using GPU-accelerated deep learning tools."
//   },
//   {
//     name: "Mathematics for Machine Learning Specialization",
//     year: "2020",
//     link: "https://www.coursera.org/account/accomplishments/specialization/certificate/8M8T2HSSHWRG",
//     platform: "Imperial College London",
//     description: "Covers linear algebra, multivariate calculus, and PCA for ML foundations."
//   },
//   {
//     name: "Machine Learning by Andrew Ng",
//     year: "2020",
//     link: "",
//     platform: "Stanford University / Coursera",
//     description: "Core ML algorithms including regression, SVMs, clustering, and ANNs."
//   },
//   {
//     name: "Introduction to Data Analysis using R",
//     year: "2015",
//     link: "",
//     platform: "Big Data University",
//     description: "R programming and statistical techniques for exploratory data analysis."
//   },
//   {
//     name: "Python Programming MOOC",
//     year: "2015",
//     link: "",
//     platform: "DoEdu IT Education / Udemy",
//     description: "Fundamentals of Python programming and problem solving."
//   },
//   {
//     name: "Android Application Development",
//     year: "2014",
//     link: "",
//     platform: "Agile Academy, Ahmedabad",
//     description: "Hands-on Android app development training with Java."
//   },
// ];


// import CertificationsText from "./CertificationsText";  // This is fine
// import SingleCertification from "./SingleCertification";
// import certifications from "./certificationData"; // Default import
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const CertificationsMain = () => {
//   return (
//     <div id="certifications" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <CertificationsText />
//       </motion.div>

//       {/* Grid Layout for Certifications
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//         {certifications.map((certification, index) => (
//           <motion.div
//             key={index}
//             variants={fadeIn("up", index * 0.01)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0.3 }}className="bg-lightGrey text-darkGrey hover:bg-darkCyan transition-all duration-200"
//             // className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-200"
//           >
//             <SingleCertification
//               name={certification.name}
//               year={certification.year}
//               link={certification.link}
//               platform={certification.platform}
//               description={certification.description}
//             />
//           </motion.div>
//         ))} */}
//         {/* Grid Layout for Certifications */}
// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//   {certifications.map((certification, index) => (
//     <motion.div
//       key={index}
//       variants={fadeIn("up", index * 0.1)} // Adjust the timing as needed
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.3 }}
//       className="bg-lightGrey text-darkGrey hover:bg-darkCyan transition-all duration-200 p-6 rounded-lg shadow-lg"
//     >
//       {/* Certification Title */}
//       <h3 className="text-2xl font-bold text-center mb-2">{certification.name}</h3>

//       {/* Year of Completion */}
//       <p className="text-lg text-center mb-4">{certification.year}</p>

//       {/* Institution/Platform with Embedded Link */}
//       <p className="text-center">
//         <a
//           href={certification.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-darkCyan hover:text-lightCyan font-semibold"
//         >
//           {certification.platform}
//         </a>
//       </p>
//     </motion.div>
//   ))}
// </div>

//       </div>
//     </div>
//   );
// };

// export default CertificationsMain;


// const CertificationsMain = () => {
//   return (
//     <section id="certifications" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.8 }}
//         transition={{ duration: 0.6 }}
//         className="flex flex-col items-center text-center"
//       >
//         <h2 className="text-6xl text-cyan mb-6">Certifications</h2>
//         <p className="text-lg sm:text-xl text-white max-w-[800px]">
//           A collection of my certifications across Machine Learning, Data Science, and Programming — showcasing my continuous learning journey from{" "}
//           <span className="text-orange font-medium">2014</span> to{" "}
//           <span className="text-orange font-medium">2025</span>.
//         </p>
//       </motion.div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//         {certifications.map((cert, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1, duration: 0.4 }}
//             className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="flex flex-col h-full justify-between">
//               <div>
//                 <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
//                 <p className="text-sm text-gray-500">{cert.institute}</p>
//               </div>
//               <div className="flex items-center justify-between mt-6">
//                 <span className="text-xs text-gray-400">{cert.year}</span>
//                 {cert.link ? (
//                   <a
//                     href={cert.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
//                   >
//                     View <FiExternalLink />
//                   </a>
//                 ) : (
//                   <span className="text-xs text-gray-300 italic">No link</span>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CertificationsMain;


// const CertificationsMain = () => {
//   return (
//     <div id="certifications" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <CertificationsText />
//       </motion.div>

//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {certifications.map((certification, index) => {
//           return (
//             <SingleCertification
//               key={index}
//               name={certification.name}
//               year={certification.year}
//               link={certification.link}
//               platform={certification.platform}
//               description={certification.description}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CertificationsMain;



// import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// import certifications from "./certificationData";
// import SingleCertification from "./SingleCertification";
// import CertificationsText from "./CertificationsText"; // This would be a text component describing the certifications section.

// const CertificationsMain = () => {
//   return (
//     <div id="certifications" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <CertificationsText />
//       </motion.div>
//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {certifications.map((certification, index) => {
//           return (
//             <SingleCertification
//               key={index}
//               name={certification.name}
//               year={certification.year}
//               align={certification.align}
//               image={certification.image}
//               link={certification.link}
//               tags={certification.tags}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CertificationsMain;




