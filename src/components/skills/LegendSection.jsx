// src/components/LegendSection.jsx
import { For } from "solid-js";

export const LegendSection = ({ earthSkillsData }) => (
  <div class="mb-8 md:mb-12">
    <h3 class="text-lg font-bold text-white text-center mb-4">
      Technology Stack
    </h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      <For each={earthSkillsData}>
        {(skill) => (
          <div class="group relative p-3 rounded-lg bg-gradient-to-br from-blue-950/30 to-purple-950/20 border border-blue-400/10 hover:border-blue-400/40 transition-all duration-200 hover:shadow-md hover:shadow-cyan-500/10 cursor-pointer">
            <div class="flex items-center gap-3">
              <div class="text-2xl group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-semibold text-white truncate">
                  {skill.name}
                </div>
                <div class="text-xs text-blue-300/60 truncate">
                  {skill.description}
                </div>
              </div>
            </div>
          </div>
        )}
      </For>
    </div>
  </div>
);