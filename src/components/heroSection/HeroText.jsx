import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ContactSocial from "../contactMeSection/ContactSocial";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-Grey "
      >
        Data Scientist | Data Analyst | Biostatistician
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Rohit <br className="sm:hidden md:block" />
        Dusane
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        Aspiring Data Scientist, Experienced Biostatistician 
        <br /> and Data Analyst with expertise in statistical analysis
        <br /> and data-driven insights.
      </motion.p>
      <motion.div
  variants={fadeIn("up", 0.8)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0 }}
  className="text-lg mt-4 text-Grey"
>
  <ContactSocial />
  </motion.div>

  <motion.div
  initial={{ x: 100, opacity: 0 }}   // Starts 100px to the right, invisible
  animate={{ x: 0, opacity: 1 }}     // Moves to original position, fades in
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="right mt-2"
>
  <p>Available for freelance work</p>
  <h2 className="text-xl text-cyan font-semibold">Apr ‘25</h2>
</motion.div>

    </div>
  );
};

export default HeroText;