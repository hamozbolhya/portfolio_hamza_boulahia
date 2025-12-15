// src/components/EducationSection.jsx
import { createSignal } from "solid-js";
import { BookOpen } from "lucide-solid";
import { certifications, dailyLearning, educationData } from "../../data/educationData";
import { TabNavigation } from "./TabNavigation";
import { FormalEducationCards } from "./FormalEducationCards";
import { CertificationList } from "./Certification/CertificationList";
import { DailyLearningStreams } from "./DailyLearningStreams";
import { MotivationalBanner } from "./MotivationalBanner";

export const EducationSection = () => {
  const [activeTab, setActiveTab] = createSignal("formal");

  const renderActiveTabContent = () => {
    switch (activeTab()) {
      case "formal":
        return <FormalEducationCards educationData={educationData} />;
      case "certifications":
        return <CertificationList certifications={certifications} />;
      case "daily":
        return <DailyLearningStreams dailyLearning={dailyLearning} />;
      default:
        return <FormalEducationCards educationData={educationData} />;
    }
  };

  return (
    <section
      id="education"
      class="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent"
    >
      <div class="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader />
        
        {/* Tab Navigation */}
        {/* <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} /> */}
        
        {/* Content based on active tab */}
        <div class="mb-12">
          {renderActiveTabContent()}
        </div>

        <MotivationalBanner />
      </div>

      <GlobalStyles />
    </section>
  );
};

const SectionHeader = () => (
  <div class="text-center mb-20">
    <div class="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-400/30">
      <BookOpen class="w-6 h-6 text-blue-400" />
      <span class="text-sm font-semibold text-blue-300">
        Learning & Growth
      </span>
    </div>
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
      Education{" "}
      <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Journey
      </span>
    </h2>
    <p class="text-blue-100/70 max-w-3xl mx-auto text-lg">
      From formal education to continuous learning — preparing for
      industry's most prestigious certifications while mastering emerging
      technologies every single day
    </p>
  </div>
);

const GlobalStyles = () => (
  <style>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `}</style>
);

export default EducationSection;