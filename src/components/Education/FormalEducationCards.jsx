// src/components/FormalEducationCards.jsx
import { For } from "solid-js";
import EducationCard from "./EducationCard";

export const FormalEducationCards = ({ educationData }) => (
  <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 animate-fadeIn">
    <For each={educationData}>
      {(edu) => <EducationCard edu={edu} />}
    </For>
  </div>
);