import { earthSizeMap } from "../../../data/skills";

const CentralGlow = ({ earthSize }) => (
    <div
      class={`absolute ${earthSizeMap[earthSize].glow} bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse`}
    ></div>
  );

  export default CentralGlow;