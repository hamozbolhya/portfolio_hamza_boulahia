// src/components/ViewToggle.jsx
import { Globe, Sparkles } from "lucide-solid";

export const ViewToggle = ({ activeView, setActiveView }) => (
  <div class="flex justify-center mt-6">
    <div class="inline-flex items-center gap-2 bg-blue-950/50 rounded-full p-1.5 border border-blue-400/30">
      <button
        onClick={() => setActiveView("earth")}
        class={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          activeView() === "earth"
            ? "bg-blue-500 text-white"
            : "text-blue-300 hover:text-white"
        }`}
      >
        <span class="flex items-center gap-2">
          <Globe class="w-4 h-4" />
          Interactive View
        </span>
      </button>
      <button
        onClick={() => setActiveView("grid")}
        class={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          activeView() === "grid"
            ? "bg-blue-500 text-white"
            : "text-blue-300 hover:text-white"
        }`}
      >
        <span class="flex items-center gap-2">
          <Sparkles class="w-4 h-4" />
          Detailed Grid
        </span>
      </button>
    </div>
  </div>
);