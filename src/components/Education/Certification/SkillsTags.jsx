import { For } from "solid-js";

const SkillsTags = ({ skills, color }) => (
  <div class="flex flex-wrap gap-2 mb-6">
    <For each={skills}>
      {(skill) => (
        <span
          class={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${color} bg-opacity-20 border border-blue-400/30 text-blue-200`}
        >
          {skill}
        </span>
      )}
    </For>
  </div>
);

export default SkillsTags;
