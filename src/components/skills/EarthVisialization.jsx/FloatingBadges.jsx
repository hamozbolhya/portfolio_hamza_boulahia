import { For } from "solid-js";
import FloatingBadge from "./FloatingBadge";

const FloatingBadges = ({ rotations, badgeSize, earthSkillsData }) => (
  <For each={earthSkillsData}>
    {(skill) => {
      const rot = () =>
        rotations()[skill.id] || { x: 0, y: 0, angle: 0, opacity: 0.5 };
      return (
        <FloatingBadge
          skill={skill}
          rot={rot}
          badgeSize={badgeSize}
        />
      );
    }}
  </For>
);

export default FloatingBadges;