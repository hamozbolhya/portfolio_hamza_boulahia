// src/components/DailyLearningStreams.jsx
import { For } from "solid-js";
import { Flame, CheckCircle2 } from "lucide-solid";

export const DailyLearningStreams = ({ dailyLearning }) => (
  <div class="space-y-8 mb-12 animate-fadeIn">
    <HeaderSection />
    
    <div class="grid md:grid-cols-2 gap-6">
      <For each={dailyLearning}>
        {(learning) => <LearningCard learning={learning} />}
      </For>
    </div>
  </div>
);

const HeaderSection = () => (
  <div class="bg-gradient-to-r from-blue-950/40 to-purple-950/40 rounded-2xl p-8 border border-blue-400/30 backdrop-blur-sm">
    <h3 class="text-2xl font-bold text-white mb-2 flex items-center gap-3">
      <Flame class="w-8 h-8 text-orange-400" />
      Daily Learning Commitment
    </h3>
    <p class="text-blue-100/80 mb-6">
      Every single day, I dedicate time to mastering different
      domains. These learning streaks represent consistent growth and
      preparation for major industry certifications.
    </p>
  </div>
);

const LearningCard = ({ learning }) => (
  <div
    class={`group relative bg-gradient-to-br ${learning.color
      .replace("from-", "from-opacity-10 ")
      .replace(" to-", "/10 to-opacity-10 ")}/10 rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm overflow-hidden`}
  >
    {/* Background Gradient */}
    <div
      class={`absolute inset-0 bg-gradient-to-br ${learning.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
    ></div>

    <div class="relative z-10">
      <div class="flex items-start justify-between mb-4">
        <div
          class={`w-12 h-12 rounded-lg bg-gradient-to-br ${learning.color} p-0.5`}
        >
          <div class="w-full h-full rounded-md bg-blue-950 flex items-center justify-center">
            <learning.icon class="w-6 h-6 text-white" />
          </div>
        </div>
        <StreakBadge streak={learning.streak} />
      </div>

      <h4 class="text-lg font-bold text-white mb-4">
        {learning.category}
      </h4>

      <TopicList topics={learning.topics} />
    </div>
  </div>
);

const StreakBadge = ({ streak }) => (
  <div class="flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-400/40 rounded-full">
    <Flame class="w-4 h-4 text-orange-400" />
    <span class="text-sm font-bold text-orange-300">
      {streak} days
    </span>
  </div>
);

const TopicList = ({ topics }) => (
  <div class="space-y-2">
    <For each={topics}>
      {(topic) => (
        <div class="flex items-center gap-2">
          <CheckCircle2 class="w-4 h-4 text-green-400" />
          <span class="text-blue-200 text-sm">{topic}</span>
        </div>
      )}
    </For>
  </div>
);