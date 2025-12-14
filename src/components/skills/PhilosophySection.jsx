// src/components/PhilosophySection.jsx
import { Sparkles } from "lucide-solid";

export const PhilosophySection = () => (
  <div class="text-center">
    <div class="inline-block max-w-xl">
      <div class="bg-gradient-to-r from-blue-950/30 via-cyan-950/20 to-blue-950/30 rounded-xl p-4 border border-cyan-400/20 backdrop-blur-sm">
        <div class="flex items-center justify-center gap-2 mb-3">
          <Sparkles class="w-4 h-4 text-yellow-400" />
          <h3 class="text-sm font-bold text-white">
            Development Philosophy
          </h3>
        </div>
        <p class="text-blue-100/70 text-sm leading-relaxed">
          Each technology in orbit serves a specific purpose, working in
          harmony to create robust, scalable solutions. The right tool for
          the right job.
        </p>
      </div>
    </div>
  </div>
);