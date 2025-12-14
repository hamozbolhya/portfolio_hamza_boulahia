import { For } from "solid-js";
import { Heart, Users } from "lucide-solid";
import { hobbiesData } from "../data/hobbies";

export const HobbiesSection = () => {
 

  return (
    <section id="hobbies" class="py-16 md:py-24 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        {/* Section Header */}
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center">
              <Heart class="w-6 h-6 text-pink-400" />
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white">
              Hobbies & <span class="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Interests</span>
            </h2>
          </div>
          <p class="text-blue-100/80 max-w-2xl mx-auto text-lg">
            Activities that keep me balanced, inspired, and continuously learning
          </p>
        </div>

        {/* Hobbies Grid */}
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <For each={hobbiesData}>
            {(hobby) => (
              <div class="group relative h-96 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Background Image */}
                <div 
                  class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ "background-image": `url(${hobby.image})` }}
                ></div>
                
                {/* Gradient Overlay */}
                <div class={`absolute inset-0 ${hobby.overlay}`}></div>
                
                {/* Additional Gradient for better text visibility */}
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Content Container */}
                <div class="relative h-full flex flex-col justify-end p-6 md:p-8">
                  {/* Icon */}
                  <div class="absolute top-6 right-6">
                    <div class={`w-14 h-14 rounded-xl ${hobby.bgColor} border border-white/20 flex items-center justify-center backdrop-blur-sm`}>
                      <hobby.icon class={`w-7 h-7 ${hobby.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-white/95 transition-colors">
                    {hobby.title}
                  </h3>
                  
                  {/* Description */}
                  <p class="text-blue-100/80 mb-4 leading-relaxed group-hover:text-blue-100/90 transition-colors">
                    {hobby.description}
                  </p>
                  
                  {/* Tags */}
                  <div class="flex flex-wrap gap-2">
                    <For each={hobby.tags}>
                      {(tag) => (
                        <span class="px-3 py-1 rounded-full text-xs font-medium bg-black/30 backdrop-blur-sm border border-white/10 text-white/80">
                          {tag}
                        </span>
                      )}
                    </For>
                  </div>
                  
                  {/* Hover Effect Indicator */}
                  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            )}
          </For>
        </div>

        {/* Personal Reflection */}
        <div class="mt-16 md:mt-20">
          <div class="bg-gradient-to-r from-black/30 via-blue-950/30 to-black/30 rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-sm">
            <div class="flex flex-col md:flex-row items-center gap-6">
              <div class="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                <Users class="w-8 h-8 text-blue-400" />
              </div>
              <div class="flex-1 text-center md:text-left">
                <h4 class="text-xl font-bold text-white mb-2">
                  Beyond Code
                </h4>
                <p class="text-blue-100/80">
                  These hobbies help maintain work-life balance, develop transferable skills like strategic thinking and discipline, 
                  and provide fresh perspectives that enhance my problem-solving abilities in software development. 
                  From the teamwork in football to the patience in chess, each activity contributes to my growth as a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;