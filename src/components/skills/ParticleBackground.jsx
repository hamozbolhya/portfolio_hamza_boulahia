// src/components/ParticleBackground.jsx
import { For } from "solid-js";

export const ParticleBackground = () => (
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <For each={Array.from({ length: 40 })}>
      {(_, i) => (
        <div
          class="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            "animation-delay": `${Math.random() * 2}s`,
            opacity: Math.random() * 0.4 + 0.2,
          }}
        ></div>
      )}
    </For>
  </div>
);