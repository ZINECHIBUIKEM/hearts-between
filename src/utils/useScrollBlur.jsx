// useScrollBlur.js
import { useEffect, useRef, useState } from "react";

export function useScrollBlur() {
  const ref = useRef(null);
  const [blur, setBlur] = useState(15);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;

      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      const distance = Math.abs(viewportCenter - elementCenter);

      const maxDistance = viewportHeight / 2;

      // convert to percentage (0 at center → 1 at edges)
      const normalized = distance / maxDistance;

      // 🔥 dead zone: 45% → 55% (i.e. 0.45 → 0.55)
      if (normalized <= 0.05) {
        // center ±5% → fully clear
        setBlur(0);
        return;
      }

      // remap everything outside dead zone
      const adjusted = (normalized - 0.05) / (1 - 0.05);

      const blurValue = Math.min(adjusted * 15, 15);

      setBlur(blurValue);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, blur };
}