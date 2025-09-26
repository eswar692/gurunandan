import { motion } from "motion/react";
import { phone_number, whatsapp_number } from "./secret";

const CallToAction = () => {
  return (
    <div className="w-full fixed bottom-4 left-0 z-50 md:hidden">
      <CallBtn />
      <WhatsappBtn />
    </div>
  );
};

export default CallToAction;

const WhatsappBtn = () => {
  return (
    <motion.a
      href={`https://wa.me/${whatsapp_number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-10 left-4 w-18 h-18 flex items-center justify-center 
      bg-white rounded-full shadow-lg overflow-hidden hover:scale-110 transition-transform duration-300"
      animate={{
        y: [0, -2, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
      }}
    >
      <img
        src="https://i.pinimg.com/1200x/74/15/d0/7415d00f6b719e40a4b1f9a75fc7eea5.jpg"
        alt="Whatsapp"
        className="w-full h-full object-cover"
      />
    </motion.a>
  );
};

const CallBtn = () => {
  return (
    <motion.a
      href={`tel:${phone_number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-10 right-4 w-18 h-18 flex items-center justify-center 
      bg-white rounded-full shadow-lg overflow-hidden hover:scale-110 transition-transform duration-300"
      animate={{
        y: [0, -2, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
      }}
    >
      <img
        src="https://i.pinimg.com/736x/43/ac/f9/43acf98fb59be0b2aa824a682b8a2dc8.jpg"
        alt="Call"
        className="w-full h-full object-cover"
      />
    </motion.a>
  );
};
