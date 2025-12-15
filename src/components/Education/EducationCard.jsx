import { Calendar, MapPin, School } from "lucide-solid";
import { For } from "solid-js";

const EducationCard = ({ edu }) => (
    <div
      class={`group relative ${edu.bgColor} rounded-2xl p-6 md:p-8 border ${edu.borderColor} hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 backdrop-blur-sm overflow-hidden`}
    >
      {/* Decorative Corner */}
      <div class="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          class={`absolute top-0 right-0 w-40 h-40 transform rotate-45 translate-x-10 -translate-y-10 bg-gradient-to-br ${edu.color} opacity-20 blur-2xl`}
        ></div>
      </div>
  
      {/* Degree Icon */}
      <div
        class={`w-14 h-14 rounded-xl ${edu.bgColor} border ${edu.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
      >
        <edu.icon class={`w-7 h-7 ${edu.iconColor}`} />
      </div>
  
      {/* Degree Title */}
      <h3 class="text-xl md:text-2xl font-bold text-white mb-3 relative z-10">
        {edu.degree}
      </h3>
  
      {/* Institution & Location */}
      <div class="space-y-3 mb-6 relative z-10">
        <div class="flex items-center gap-2">
          <School class={`w-4 h-4 ${edu.iconColor}`} />
          <span class="text-blue-200 font-medium">
            {edu.institution}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <MapPin class={`w-4 h-4 ${edu.iconColor}`} />
          <span class="text-blue-100/80">{edu.location}</span>
        </div>
        <div class="flex items-center gap-2">
          <Calendar class={`w-4 h-4 ${edu.iconColor}`} />
          <span class="text-blue-100/80 font-medium">
            {edu.period}
          </span>
        </div>
      </div>
  
      {/* Description */}
      <p class="text-blue-100/70 mb-6 leading-relaxed relative z-10">
        {edu.description}
      </p>
  
      {/* Tags */}
      <div class="flex flex-wrap gap-2 relative z-10">
        <For each={edu.tags}>
          {(tag) => (
            <span
              class={`px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 border ${edu.borderColor} text-blue-200 hover:bg-blue-500/30 transition-colors`}
            >
              {tag}
            </span>
          )}
        </For>
      </div>
    </div>
  );

  export default EducationCard;