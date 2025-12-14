// src/components/ProficiencySection.jsx
import { For } from "solid-js";
import { TrendingUp } from "lucide-solid";

export const ProficiencySection = ({ skillsDataEx }) => (
  <div class="bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-slate-950/40 border border-blue-400/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 group">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl"></div>

    <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
      <TrendingUp class="w-6 h-6" />
      Proficiency Levels
    </h3>

    <div class="grid md:grid-cols-2 gap-8 relative z-10">
      {skillsDataEx.map((prof) => (
        <ProficiencyItem prof={prof} />
      ))}
    </div>
  </div>
);

const ProficiencyItem = ({ prof }) => (
  <div class="group/prof">
    <div class="flex items-center justify-between mb-4">
      <h4 class="text-lg font-semibold text-white group-hover/prof:text-blue-100 transition-colors">
        {prof.level}
      </h4>
      <span class="text-sm font-bold text-blue-200/80">
        {prof.percentage}%
      </span>
    </div>

    <div class="w-full bg-slate-700/50 rounded-full h-3 mb-4 overflow-hidden border border-blue-400/20">
      <div
        class={`h-full bg-gradient-to-r ${prof.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
        style={{ width: `${prof.percentage}%` }}
      ></div>
    </div>

    <div class="flex flex-wrap gap-2">
      <For each={prof.items}>
        {(item) => (
          <span class="text-xs px-2 py-1 bg-blue-600/20 text-blue-200 rounded-md font-medium border border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-600/30 transition-all duration-200">
            {item}
          </span>
        )}
      </For>
    </div>
  </div>
);