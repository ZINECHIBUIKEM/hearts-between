import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorFollower({ lightmode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // This creates the "lag"
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className={`fixed opacity-0 top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-110 sm:opacity-100 ${lightmode ? "bg-black" : "bg-white"}`}
      style={{
        translateX: springX,
        translateY: springY,
      }}
    />
  );
}