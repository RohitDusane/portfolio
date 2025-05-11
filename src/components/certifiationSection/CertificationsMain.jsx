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