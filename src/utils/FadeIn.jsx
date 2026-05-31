import { motion } from "framer-motion";

export default function FadeIn({ children, className = "" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.95,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}