import { motion } from "framer-motion";

const CertificationsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">Certifications</h2>
      <p className="text-lg sm:text-xl text-justify mb-4">
        A collection of my certifications across <span className="font-bold text-orange">Machine Learning</span>, 
        <span className="font-bold text-orange"> Data Science</span>, 
        <span className="font-bold text-orange"> Data Analysis</span>, and 
        <span className="font-bold text-orange"> Programming</span> — showcasing my continuous commitment to growth, skill-building, and innovation 
        from <span className="font-bold text-cyan">2014</span> to <span className="font-bold text-cyan">2025</span>.
        </p>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="text-center mt-6"
>
  <p className="text-xl italic font-bold " style={{ color: '#FFD700' }}>
    “Arise, awake, and stop not till the goal is reached.”
  </p>
  <span className="font-bold text-lg text-cyan underline"> Swami Vivekananda</span>
</motion.div>

    </div>
  );
};
export default CertificationsText