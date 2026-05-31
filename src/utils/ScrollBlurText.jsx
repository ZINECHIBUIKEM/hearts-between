import { useScrollBlur } from "./useScrollBlur";

export function ScrollBlurText({ children }) {
  const { ref, blur } = useScrollBlur();

  return (
    <div
      ref={ref}
      style={{ filter: `blur(${blur}px)` }}
      className="transition-[filter] duration-75"
    >
      {children}
    </div>
  );
}