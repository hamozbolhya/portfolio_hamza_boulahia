import { earthSizeMap } from "../../../data/skills";

const EarthContainer = ({ earthImage, earthSize, isVisible, mousePosition }) => (
  <div
    class={`relative ${earthSizeMap[earthSize].container} transition-all duration-1000 ${
      isVisible() ? "opacity-100 scale-100" : "opacity-0 scale-90"
    }`}
    style={{
      transform: `translate(${mousePosition().x * 0.5}px, ${
        mousePosition().y * 0.5
      }px)`,
      filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.5))",
    }}
  >
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
    
    <div class="relative w-full h-full">
      <img
        src={earthImage}
        alt="Digital Earth"
        class="w-full h-full object-contain animate-spin-slow"
        style="filter: brightness(1.1) contrast(1.1);"
      />
      <div
        class="absolute inset-0 rounded-full border border-cyan-400/10 animate-pulse"
        style="animation-duration: 3s;"
      ></div>
    </div>
  </div>
);

export default EarthContainer;