import { For } from "solid-js";
import { Languages, Globe, MessageSquare, CheckCircle, Star } from "lucide-solid";
import { languagesData, proficiencyLevels } from "../data/Language";

export const LanguagesSection = () => {
  return (
    <section id="languages" class="py-16 md:py-24 px-4 md:px-8">
      <div class="max-w-6xl mx-auto">
        {/* Section Header */}
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <Globe class="w-6 h-6 text-blue-400" />
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white">
              Language <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Proficiency</span>
            </h2>
          </div>
          <p class="text-blue-100/80 max-w-2xl mx-auto text-lg">
            Communication skills in multilingual environments
          </p>
        </div>

        {/* Languages Grid */}
        <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <For each={languagesData}>
            {(lang) => (
              <div class={`group relative ${lang.bgColor} rounded-2xl p-6 md:p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm`}>
                {/* Flag Decoration */}
                <div class="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {lang.flag}
                </div>

                {/* Language Header */}
                <div class="flex items-center gap-4 mb-6">
                  <div class={`w-14 h-14 rounded-xl ${lang.bgColor} border border-blue-400/20 flex items-center justify-center`}>
                    <MessageSquare class={`w-7 h-7 ${lang.iconColor}`} />
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">{lang.language}</h3>
                    <div class="flex items-center gap-2">
                      <span class={`px-3 py-1 rounded-full text-sm font-medium ${lang.bgColor} border ${lang.color.replace('from-', 'border-').replace(' to-', '/30')} ${lang.iconColor}`}>
                        {lang.level}
                      </span>
                      <CheckCircle class="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div class="mb-6">
                  <div class="flex justify-between text-sm text-blue-100/80 mb-2">
                    <span>Proficiency</span>
                    <span class="font-medium">{lang.proficiency}%</span>
                  </div>
                  <div class="h-2 bg-blue-900/30 rounded-full overflow-hidden">
                    <div 
                      class={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                      style={{ width: `${lang.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p class="text-blue-100/70 mb-4 leading-relaxed">
                  {lang.description}
                </p>

                {/* Stars for Level */}
                <div class="flex items-center gap-1">
                  <For each={[1, 2, 3, 4, 5]}>
                    {(star) => (
                      <Star 
                        class={`w-5 h-5 ${star <= Math.ceil(lang.proficiency / 20) ? 'text-yellow-400 fill-yellow-400' : 'text-blue-400/30'}`}
                      />
                    )}
                  </For>
                  <span class="ml-2 text-sm text-blue-100/70">
                    {Math.ceil(lang.proficiency / 20)}/5 stars
                  </span>
                </div>
              </div>
            )}
          </For>
        </div>

        {/* Proficiency Scale Guide */}
        <div class="bg-gradient-to-r from-blue-950/30 to-purple-950/30 rounded-2xl p-6 md:p-8 border border-blue-400/20 backdrop-blur-sm">
          <div class="flex items-center gap-3 mb-6">
            <Languages class="w-6 h-6 text-blue-400" />
            <h3 class="text-xl font-bold text-white">Proficiency Scale</h3>
          </div>
          
          <div class="grid md:grid-cols-5 gap-4">
            <For each={proficiencyLevels}>
              {(level) => (
                <div class="text-center">
                  <div class="flex items-center justify-center mb-2">
                    <div class={`w-3 h-3 rounded-full ${level.color} mr-2`}></div>
                    <span class="text-sm font-medium text-white">{level.level}</span>
                  </div>
                  <div class="text-xs text-blue-100/60">
                    {level.min}% - {level.max}%
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        {/* Additional Info */}
        <div class="mt-12 text-center">
          <div class="inline-flex items-center gap-2 text-blue-100/70">
            <MessageSquare class="w-4 h-4" />
            <span>
              All technical documentation and professional communication handled in English & French
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;