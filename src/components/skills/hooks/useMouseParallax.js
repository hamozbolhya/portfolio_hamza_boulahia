// src/components/hooks/useMouseParallax.js
import { createSignal } from "solid-js";

export const useMouseParallax = () => {
  const [mousePosition, setMousePosition] = createSignal({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return { mousePosition, handleMouseMove };
};