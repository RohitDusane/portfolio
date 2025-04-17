// import ContactMeLeft from "./ContactMeLeft";
// import ContactMeRight from "./ContactMeRight";

// const ContactMeMain = () => {
//   return (
//     <div
//       id="contact"
//       className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
//     >
//       <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
//       <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
//       <ContactMeLeft />
//         <ContactMeRight />
//       </div>
//     </div>
//   );
// };

// export default ContactMeMain;


import React from 'react';
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section section id="contact" className="contact-section bg-cover bg-center relative py-16">
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto text-white relative z-10 px-4">
        <h2 className="text-4xl font-bold text-center text-cyan mb-8">Contact Me</h2>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Side: Contact Details with Image */}
          <motion.div
            className="contact-details flex-1 space-y-6 bg-white bg-opacity-40 rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col items-center justify-center">
              {/* Profile Image with custom dimensions */}
              <motion.div
                className="w-full h-[250px] max-w-[400px] overflow-hidden border-4 border-cyan shadow-lg mb-6"
                initial={{ rotate: 360, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src="public/images/email-image.PNG"
                  alt="Profile"
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Contact Information with Animated Color Change */}
              <motion.div
                className="flex justify-center gap-12 text-xl font-semibold mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.p
                  whileHover={{ scale: 1.1, color: "#ff6347" }}
                  className="cursor-pointer"
                >
                  <strong className="font-bold text-orange">Email:</strong> stat.data247@gmail.com
                </motion.p>
                <motion.p
                  whileHover={{ scale: 1.1,color: "#ff6347"  }}
                  className="cursor-pointer"
                >
                  <strong className="font-bold text-orange">Phone:</strong> +91 8424969489
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div
            className="map-container flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <iframe
              title="Mumbai, India Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377204.1691327373!2d72.74109863270678!3d19.076090170248903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b49c8c4cb019%3A0x3b36f6c2301f8b61!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1627545290577!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

