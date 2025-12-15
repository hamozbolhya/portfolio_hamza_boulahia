// src/components/MotivationalBanner.jsx
import { Star } from "lucide-solid";

export const MotivationalBanner = () => (
  <div class="bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-pink-950/40 rounded-2xl p-8 md:p-10 border border-blue-400/30 backdrop-blur-sm mt-12">
    <div class="flex flex-col md:flex-row items-center gap-6">
      <div class="flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30">
        <Star class="w-10 h-10 text-yellow-400 animate-pulse" />
      </div>
      <div class="flex-1 text-center md:text-left">
        <h4 class="text-2xl font-bold text-white mb-2">
          Continuous Growth mindset
        </h4>
        <p class="text-blue-100/80 leading-relaxed">
          Education doesn't stop after graduation.
          Every day, I learn something new across cloud architecture,
          data engineering, DevOps, and machine learning. This commitment
          to continuous learning ensures I stay ahead of the curve and
          deliver cutting-edge solutions.
        </p>
      </div>
    </div>
  </div>
);