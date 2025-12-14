// src/components/CategoriesSection.jsx
import { For } from "solid-js";

export const CategoriesSection = ({ categories }) => (
  <div class="mb-8 md:mb-12">
    <h3 class="text-lg font-bold text-white text-center mb-4">
      Tech Categories
    </h3>
    <div class="grid grid-cols-4 md:grid-cols-8 gap-2">
      <For each={categories}>
        {(cat) => (
          <div class="text-center p-2 rounded-md bg-gradient-to-br from-blue-950/20 to-purple-950/15 border border-blue-400/10 hover:border-blue-400/30 transition-all">
            <div class={`text-lg font-bold ${cat.color} mb-0.5`}>
              {cat.count}
            </div>
            <div class="text-xs text-blue-200/60 truncate">
              {cat.name}
            </div>
          </div>
        )}
      </For>
    </div>
  </div>
);