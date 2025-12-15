// src/components/CertificationList.jsx
import { For } from "solid-js";
import { Clock } from "lucide-solid";
import CertificationCard from "./CertificationCard";

export const CertificationList = ({ certifications }) => (
  <div class="space-y-6 mb-12 animate-fadeIn">
    <For each={certifications}>
      {(cert) => <CertificationCard cert={cert} />}
    </For>
  </div>
);
