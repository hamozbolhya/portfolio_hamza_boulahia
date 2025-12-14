import { badgeSizeMap } from "../../../data/skills";

const FloatingBadge = ({ skill, rot, badgeSize }) => (
  <div
    class={`skill-badge absolute ${badgeSizeMap[badgeSize].container} rounded-xl ${skill.bg} border border-blue-400/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-125 hover:z-50 hover:shadow-lg hover:border-blue-300/50 group cursor-pointer`}
    style={{
      left: "50%",
      top: "50%",
      transform: `translate(calc(-50% + ${rot().x}px), calc(-50% + ${
        rot().y
      }px)) rotate(${rot().angle}deg)`,
      opacity: rot().opacity,
      "box-shadow": `0 0 8px rgba(6, 182, 212, ${rot().opacity * 0.2})`,
      "z-index": Math.floor(rot().opacity * 30),
    }}
  >
    <div
      class={`${badgeSizeMap[badgeSize].icon} group-hover:scale-110 transition-transform duration-300 relative z-10`}
    >
      {skill.icon}
    </div>

    <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
      <div class="bg-gray-900/90 backdrop-blur-sm px-2 py-1.5 rounded-md border border-cyan-400/30 whitespace-nowrap shadow-lg">
        <div class="text-white font-bold text-xs">{skill.name}</div>
        <div class="text-cyan-300 text-xs">{skill.description}</div>
      </div>
    </div>

    <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-sm"></div>
  </div>
);

export default FloatingBadge;