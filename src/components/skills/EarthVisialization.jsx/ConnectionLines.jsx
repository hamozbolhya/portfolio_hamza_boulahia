import { For } from "solid-js";

const ConnectionLines = ({ rotations, earthSkillsData }) => (
    <svg class="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.1" />
          <stop offset="50%" stop-color="#3B82F6" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#06B6D4" stop-opacity="0.1" />
        </linearGradient>
      </defs>
  
      <For each={earthSkillsData}>
        {(skill) => {
          const rot = () => rotations()[skill.id] || { x: 0, y: 0 };
          const startX = 400;
          const startY = 400;
          const endX = startX + rot().x;
          const endY = startY + rot().y;
  
          return (
            <line
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="url(#line-glow)"
              stroke-width="0.5"
              opacity="0.2"
              stroke-dasharray="2,2"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="10"
                to="0"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>
          );
        }}
      </For>
    </svg>
  );

  export default ConnectionLines;