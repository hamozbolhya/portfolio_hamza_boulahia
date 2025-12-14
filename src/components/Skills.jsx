// src/components/Skills.jsx
import { For, createSignal } from "solid-js";
import { skillColors, skillsData, skillsDataEx } from "../data/skills";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = createSignal(null);

  return (
    <section id="skills" class="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/15 rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-x-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full mix-blend-screen filter blur-3xl opacity-20 translate-x-1/2"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          {/* Section Header */}
          <div class="text-center mb-16">
            <div class="inline-block mb-4">
              <div class="px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full backdrop-blur-sm">
                <p class="text-sm font-semibold text-blue-300">
                  🎯 Technical Expertise
                </p>
              </div>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>
            <p class="text-xl text-blue-100/80 max-w-2xl mx-auto">
              Comprehensive expertise across frontend, backend, mobile
              development, AI integration, and DevOps
            </p>
          </div>

          {/* Skills Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <For each={skillsData}>
              {(skill) => {
                const color = skillColors[skill.color];
                const isSelected = selectedCategory() === skill.category;

                return (
                  <button
                    onClick={() =>
                      setSelectedCategory(isSelected ? null : skill.category)
                    }
                    class="group relative text-left transition-all duration-300 focus:outline-none"
                  >
                    {/* Card */}
                    <div
                      class={`relative bg-gradient-to-br ${
                        color.lightBg
                      } rounded-2xl p-8 border-2 ${
                        color.border
                      } transition-all duration-300 backdrop-blur-sm overflow-hidden ${
                        isSelected
                          ? `ring-2 ring-offset-2 ring-blue-400 ring-offset-slate-900 shadow-lg shadow-blue-500/30`
                          : "hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
                      }`}
                    >
                      {/* Glow effect background */}
                      <div
                        class={`absolute inset-0 bg-gradient-to-r ${color.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                      ></div>

                      {/* Animated border glow */}
                      <div
                        class={`absolute -inset-0.5 bg-gradient-to-r ${
                          color.glow
                        } rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-20 ${
                          isSelected ? "opacity-60" : ""
                        }`}
                      ></div>

                      {/* Icon & Title */}
                      <div class="flex items-start justify-between mb-4 relative z-10">
                        <div class="space-y-2">
                          <div
                            class={`w-12 h-12 rounded-xl bg-gradient-to-br ${color.bg} flex items-center justify-center text-2xl shadow-lg shadow-blue-500/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/60 transition-all duration-300`}
                          >
                            {skill.icon}
                          </div>
                        </div>
                      </div>

                      <h3 class="text-2xl font-bold text-white mb-2 relative z-10">
                        {skill.category}
                      </h3>
                      <p class="text-sm text-blue-200/70 mb-6 relative z-10">
                        {skill.description}
                      </p>

                      {/* Skills Tags */}
                      <div class="flex flex-wrap gap-2 mb-6 relative z-10">
                        <For each={skill.items}>
                          {(item, index) => (
                            <span
                              class={`px-3 py-1.5 ${color.tag} rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 cursor-default border backdrop-blur-sm group-hover:scale-105`}
                              style={{
                                "animation-delay": isSelected
                                  ? `${index() * 50}ms`
                                  : "0ms",
                              }}
                            >
                              {item}
                            </span>
                          )}
                        </For>
                      </div>

                      {/* Count Badge */}
                      <div class="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                        <span class="text-xs font-medium text-blue-200/60">
                          {skill.items.length} Technologies
                        </span>
                        <span class="text-lg group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </div>
                    </div>
                  </button>
                );
              }}
            </For>
          </div>

          {/* Proficiency Breakdown */}
          <div class="bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-slate-950/40 border border-blue-400/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 group">
            {/* Glow effect */}
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl"></div>

            <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <span class="text-3xl">📊</span>
              Proficiency Levels
            </h3>

            <div class="grid md:grid-cols-2 gap-8 relative z-10">
              {skillsDataEx.map((prof) => (
                <div class="group/prof">
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="text-lg font-semibold text-white group-hover/prof:text-blue-100 transition-colors">
                      {prof.level}
                    </h4>
                    <span class="text-sm font-bold text-blue-200/80">
                      {prof.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div class="w-full bg-slate-700/50 rounded-full h-3 mb-4 overflow-hidden border border-blue-400/20">
                    <div
                      class={`h-full bg-gradient-to-r ${prof.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${prof.percentage}%` }}
                    ></div>
                  </div>

                  {/* Skills for this level */}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
