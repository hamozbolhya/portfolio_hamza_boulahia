import { For } from "solid-js";

export const StatsSection = ({ stats }) => {
  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
      <For each={stats}>
        {(stat, index) => (
          <a
            href={stat.href || "#N/A"}
            class="group relative block no-underline"
            style={{
              "animation-delay": `${index() * 100}ms`,
            }}
          >
            {/* Rest of the content remains the same */}
            <div class="relative bg-gradient-to-br from-blue-950/50 to-purple-950/40 rounded-2xl p-6 md:p-8 border border-blue-400/40 hover:border-blue-400/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/30 backdrop-blur-md overflow-hidden flex flex-col items-center text-center">
              <div
                class={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.bg} flex items-center justify-center mb-4 text-4xl shadow-lg shadow-blue-500/60 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
              >
                {stat.icon}
              </div>
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div class="text-sm md:text-base text-blue-100/90 font-medium">
                {stat.label}
              </div>
            </div>
          </a>
        )}
      </For>
    </div>
  );
};

export default StatsSection;
