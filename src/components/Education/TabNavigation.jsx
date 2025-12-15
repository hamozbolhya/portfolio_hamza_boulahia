// src/components/TabNavigation.jsx
import { GraduationCap, Award, Flame } from "lucide-solid";

export const TabNavigation = ({ activeTab, setActiveTab }) => (
  <div class="flex justify-center gap-4 mb-12 flex-wrap">
    <TabButton
      id="formal"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      icon={<GraduationCap class="w-5 h-5" />}
      label="Formal Education"
    />
    <TabButton
      id="certifications"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      icon={<Award class="w-5 h-5" />}
      label="Professional Certifications"
    />
    <TabButton
      id="daily"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      icon={<Flame class="w-5 h-5" />}
      label="Daily Learning"
    />
  </div>
);