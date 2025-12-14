// src/components/SkillsGrid.jsx
import { For } from "solid-js";
import { skillColors } from "../../data/skills";

export const SkillsGrid = ({ skillsData, selectedCategory, setSelectedCategory }) => (
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    <For each={skillsData}>
      {(skill) => (
        <SkillCard
          skill={skill}
          isSelected={selectedCategory() === skill.category}
          onSelect={() => setSelectedCategory(selectedCategory() === skill.category ? null : skill.category)}
        />
      )}
    </For>
  </div>
);

const SkillCard = ({ skill, isSelected, onSelect }) => {
  const color = skillColors[skill.color];

  return (
    <button
      onClick={onSelect}
      class="group relative text-left transition-all duration-300 focus:outline-none"
    >
      <div
        class={`relative bg-gradient-to-br ${color.lightBg} rounded-2xl p-8 border-2 ${
          color.border
        } transition-all duration-300 backdrop-blur-sm overflow-hidden ${
          isSelected
            ? `ring-2 ring-offset-2 ring-blue-400 ring-offset-slate-900 shadow-lg shadow-blue-500/30`
            : "hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
        }`}
      >
        <div
          class={`absolute inset-0 bg-gradient-to-r ${color.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
        ></div>

        <div
          class={`absolute -inset-0.5 bg-gradient-to-r ${
            color.glow
          } rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-20 ${
            isSelected ? "opacity-60" : ""
          }`}
        ></div>

        <SkillCardHeader skill={skill} color={color} />
        <SkillCardBody skill={skill} color={color} isSelected={isSelected} />
        <SkillCardFooter skill={skill} />
      </div>
    </button>
  );
};

const SkillCardHeader = ({ skill, color }) => (
  <div class="flex items-start justify-between mb-4 relative z-10">
    <div class="space-y-2">
      <div
        class={`w-12 h-12 rounded-xl bg-gradient-to-br ${color.bg} flex items-center justify-center text-2xl shadow-lg shadow-blue-500/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/60 transition-all duration-300`}
      >
        {skill.icon}
      </div>
    </div>
  </div>
);

const SkillCardBody = ({ skill, color, isSelected }) => (
  <>
    <h3 class="text-2xl font-bold text-white mb-2 relative z-10">
      {skill.category}
    </h3>
    <p class="text-sm text-blue-200/70 mb-6 relative z-10">
      {skill.description}
    </p>

    <div class="flex flex-wrap gap-2 mb-6 relative z-10">
      <For each={skill.items}>
        {(item, index) => (
          <span
            class={`px-3 py-1.5 ${color.tag} rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 cursor-default border backdrop-blur-sm group-hover:scale-105`}
            style={{
              "animation-delay": isSelected ? `${index() * 50}ms` : "0ms",
            }}
          >
            {item}
          </span>
        )}
      </For>
    </div>
  </>
);

const SkillCardFooter = ({ skill }) => (
  <div class="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
    <span class="text-xs font-medium text-blue-200/60">
      {skill.items.length} Technologies
    </span>
    <span class="text-lg group-hover:translate-x-1 transition-transform duration-200">
      →
    </span>
  </div>
);