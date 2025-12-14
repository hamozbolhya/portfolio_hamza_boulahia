// src/components/hooks/useOrbitAnimation.js
import { createSignal } from "solid-js";
import { earthSizeMap, earthSkillsData } from "../../../data/skills";

export const useOrbitAnimation = (earthSize) => {
  const [rotations, setRotations] = createSignal({});

  const animateSkills = () => {
    const newRotations = {};
    const orbitScale = earthSizeMap[earthSize].orbitScale;
    const startTime = Date.now() / 1000;

    earthSkillsData.forEach((skill) => {
      const time = startTime;
      const baseAngle = (time * skill.speed) % 360;
      const orbitAngle = (baseAngle + skill.phase) % 360;
      const rad = (orbitAngle * Math.PI) / 180;

      const x = Math.cos(rad) * (skill.orbitRadius * orbitScale);
      const y = Math.sin(rad) * (skill.orbitRadius * orbitScale);

      const distanceFromCenter = Math.sqrt(x * x + y * y);
      const normalizedDistance = distanceFromCenter / (400 * orbitScale);
      const opacity = 0.3 + 0.7 * normalizedDistance;

      newRotations[skill.id] = {
        x,
        y,
        angle: orbitAngle,
        opacity: Math.min(opacity, 0.9),
        distance: distanceFromCenter,
      };
    });

    setRotations(newRotations);
    requestAnimationFrame(animateSkills);
  };

  return { rotations, animateSkills };
};