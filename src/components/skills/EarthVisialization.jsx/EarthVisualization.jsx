// src/components/EarthVisualization.jsx
import { earthSkillsData } from "../../../data/skills";
import FloatingBadges from "./FloatingBadges";
import OrbitalRings from "./OrbitalRings";
import CentralGlow from "./CentralGlow";
import EarthContainer from "./EarthContainer";
import ConnectionLines from "./ConnectionLines";

export const EarthVisualization = (props) => {
  const {
    earthImage,
    earthSize,
    badgeSize,
    isVisible,
    mousePosition,
    rotations,
  } = props;

  return (
    <div class="relative w-full h-[400px] md:h-[550px] flex items-center justify-center mb-10 md:mb-16">
      <OrbitalRings />
      <CentralGlow earthSize={earthSize} />
      
      <EarthContainer
        earthImage={earthImage}
        earthSize={earthSize}
        isVisible={isVisible}
        mousePosition={mousePosition}
      />

      <FloatingBadges
        rotations={rotations}
        badgeSize={badgeSize}
        earthSkillsData={earthSkillsData}
      />

      <ConnectionLines rotations={rotations} earthSkillsData={earthSkillsData} />
    </div>
  );
};