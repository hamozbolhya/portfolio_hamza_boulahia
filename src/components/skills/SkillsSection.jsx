// src/components/SkillsSection.jsx
import { createSignal, onMount, onCleanup } from "solid-js";
import { Target } from "lucide-solid";
import { skillsData, skillsDataEx, categories, earthSkillsData } from "../../data/skills";
import { EarthVisualization } from "./EarthVisialization.jsx/EarthVisualization";
import { SkillsGrid } from "./SkillsGrid";
import { ProficiencySection } from "./ProficiencySection";
import { CategoriesSection } from "./CategoriesSection";
import { LegendSection } from "./LegendSection";
import { PhilosophySection } from "./PhilosophySection";
import { ParticleBackground } from "./ParticleBackground";
import { ViewToggle } from "./ViewToggle";
import { useOrbitAnimation } from "./hooks/useOrbitAnimation";
import { useMouseParallax } from "./hooks/useMouseParallax";

export const SkillsSection = (props) => {
  const {
    earthImage = "/earth.png",
    earthSize = "md",
    badgeSize = "sm",
    showCategories = true,
    showLegend = true,
    showSkillsGrid = true,
    showProficiency = true,
    variant = "combined",
  } = props;

  const [isVisible, setIsVisible] = createSignal(false);
  const [selectedCategory, setSelectedCategory] = createSignal(null);
  const [activeView, setActiveView] = createSignal("earth");

  const { mousePosition, handleMouseMove } = useMouseParallax();
  const { rotations, animateSkills } = useOrbitAnimation(earthSize);

  onMount(() => {
    setTimeout(() => setIsVisible(true), 300);
    window.addEventListener("mousemove", handleMouseMove);
    animateSkills();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const renderEarthView = () => (
    <>
      <EarthVisualization
        earthImage={earthImage}
        earthSize={earthSize}
        badgeSize={badgeSize}
        isVisible={isVisible}
        mousePosition={mousePosition}
        rotations={rotations}
      />
      
      {showCategories && <CategoriesSection categories={categories} />}
      {showLegend && <LegendSection earthSkillsData={earthSkillsData} />}
    </>
  );

  const renderGridView = () => (
    <>
      {showSkillsGrid && (
        <SkillsGrid
          skillsData={skillsData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {showProficiency && <ProficiencySection skillsDataEx={skillsDataEx} />}
    </>
  );

  return (
    <section
      id="skills"
      class="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-blue-950/30"
    >
      <ParticleBackground />
      
      <div class="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div class="text-center mb-12 md:mb-16">
          <div class="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-400/30">
            <Target class="w-4 h-4 text-cyan-400" />
            <span class="text-xs font-semibold text-cyan-300">
              Technical Expertise
            </span>
          </div>
          <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p class="text-blue-100/70 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive expertise across frontend, backend, mobile
            development, AI integration, and DevOps
          </p>

          {variant === "combined" && (
            <ViewToggle activeView={activeView} setActiveView={setActiveView} />
          )}
        </div>

        {/* Main Content Area - FIXED LOGIC */}
        <div class="mb-12">
          {(() => {
            // Determine what to show based on variant and activeView
            if (variant === "earth-only") {
              return renderEarthView();
            } else if (variant === "grid-only") {
              return renderGridView();
            } else if (variant === "combined") {
              // Show either earth view or grid view based on toggle
              return activeView() === "earth" ? renderEarthView() : renderGridView();
            }
          })()}
        </div>

        <PhilosophySection />
      </div>

      <GlobalStyles />
    </section>
  );
};

const GlobalStyles = () => (
  <style>{`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .animate-spin-slow {
      animation: spin-slow 30s linear infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(2deg); }
    }
    
    .skill-badge {
      will-change: transform, opacity;
    }
  `}</style>
);

SkillsSection.defaultProps = {
  earthImage: "/earth.png",
  earthSize: "md",
  badgeSize: "sm",
  showCategories: true,
  showLegend: true,
  showSkillsGrid: true,
  showProficiency: true,
  variant: "combined",
};

export default SkillsSection;