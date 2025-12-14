import { createSignal, onMount, onCleanup, For } from "solid-js";
import { 
  Sparkles,
  Globe
} from "lucide-solid";

export const AnimatedEarthSection = (props) => {
  const { 
    earthImage = "/earth.png", 
    earthSize = "md", // sm, md, lg, xl
    badgeSize = "sm", // xs, sm, md, lg
    showCategories = true,
    showLegend = true
  } = props;
  
  const [isVisible, setIsVisible] = createSignal(false);
  const [mousePosition, setMousePosition] = createSignal({ x: 0, y: 0 });
  const [rotations, setRotations] = createSignal({});

  // Size configurations
  const earthSizeMap = {
    sm: { container: "w-48 h-48 md:w-64 md:h-64", glow: "w-64 h-64 md:w-96 md:h-96", orbitScale: 0.8 },
    md: { container: "w-64 h-64 md:w-96 md:h-96", glow: "w-96 h-96 md:w-[500px] md:h-[500px]", orbitScale: 1 },
    lg: { container: "w-96 h-96 md:w-[500px] md:h-[500px]", glow: "w-[600px] h-[600px] md:w-[700px] md:h-[700px]", orbitScale: 1.2 },
    xl: { container: "w-[500px] h-[500px] md:w-[600px] md:h-[600px]", glow: "w-[700px] h-[700px] md:w-[800px] md:h-[800px]", orbitScale: 1.5 }
  };

  const badgeSizeMap = {
    xs: { container: "w-8 h-8 md:w-10 md:h-10", icon: "text-2xl md:text-3xl" },
    sm: { container: "w-10 h-10 md:w-12 md:h-12", icon: "text-3xl md:text-4xl" },
    md: { container: "w-12 h-12 md:w-14 md:h-14", icon: "text-4xl md:text-5xl" },
    lg: { container: "w-14 h-14 md:w-16 md:h-16", icon: "text-5xl md:text-6xl" }
  };

  // Skills data with optimized spacing and movement patterns
  const skillsData = [
    {
      id: 1,
      name: "React",
      icon: "⚛️",
      color: "from-cyan-400 to-blue-400",
      bg: "bg-cyan-500/10",
      orbitRadius: 180,
      speed: 25,
      phase: 0,
      description: "Frontend",
      category: "Frontend"
    },
    {
      id: 2,
      name: "React Native",
      icon: "📱",
      color: "from-purple-400 to-pink-400",
      bg: "bg-purple-500/10",
      orbitRadius: 210,
      speed: 28,
      phase: 30,
      description: "Mobile",
      category: "Mobile"
    },
    {
      id: 3,
      name: "Angular",
      icon: "🅰️",
      color: "from-red-400 to-orange-400",
      bg: "bg-red-500/10",
      orbitRadius: 240,
      speed: 22,
      phase: 60,
      description: "Framework",
      category: "Frontend"
    },
    {
      id: 4,
      name: "Spring Boot",
      icon: "🍃",
      color: "from-green-400 to-emerald-400",
      bg: "bg-green-500/10",
      orbitRadius: 160,
      speed: 30,
      phase: 90,
      description: "Backend",
      category: "Backend"
    },
    {
      id: 5,
      name: "JavaScript",
      icon: "⚡",
      color: "from-yellow-400 to-orange-400",
      bg: "bg-yellow-500/10",
      orbitRadius: 270,
      speed: 20,
      phase: 120,
      description: "Language",
      category: "Language"
    },
    {
      id: 6,
      name: "Next js",
      icon: "🇳",
      color: "from-blue-400 to-cyan-400",
      bg: "bg-blue-500/10",
      orbitRadius: 200,
      speed: 26,
      phase: 150,
      description: "SSR",
      category: "Frontend"
    },
    {
      id: 7,
      name: "Lunix",
      icon: "🐧",
      color: "from-orange-400 to-red-400",
      bg: "bg-orange-500/10",
      orbitRadius: 300,
      speed: 18,
      phase: 180,
      description: "Server",
      category: "Cloud"
    },
    {
      id: 8,
      name: "Docker",
      icon: "🐳",
      color: "from-sky-400 to-blue-400",
      bg: "bg-sky-500/10",
      orbitRadius: 140,
      speed: 32,
      phase: 210,
      description: "Containers",
      category: "DevOps"
    },
    {
      id: 9,
      name: "Git",
      icon: "🌳",
      color: "from-pink-400 to-red-400",
      bg: "bg-pink-500/10",
      orbitRadius: 120,
      speed: 35,
      phase: 240,
      description: "Version Ctrl",
      category: "Tools"
    },
    {
      id: 10,
      name: "Node.js",
      icon: "🟢",
      color: "from-emerald-400 to-green-400",
      bg: "bg-emerald-500/10",
      orbitRadius: 330,
      speed: 16,
      phase: 270,
      description: "Runtime",
      category: "Backend"
    },
    {
      id: 11,
      name: "TypeScript",
      icon: "📘",
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-500/10",
      orbitRadius: 190,
      speed: 27,
      phase: 300,
      description: "Superset JS",
      category: "Language"
    },
    {
      id: 12,
      name: "Postgres sql",
      icon: "🍃",
      color: "from-green-500 to-emerald-400",
      bg: "bg-green-500/10",
      orbitRadius: 260,
      speed: 21,
      phase: 330,
      description: "Database",
      category: "Database"
    }
  ];

  // Group skills by orbit radius to ensure spacing
  const groupSkillsByRadius = () => {
    const groups = {};
    skillsData.forEach(skill => {
      if (!groups[skill.orbitRadius]) {
        groups[skill.orbitRadius] = [];
      }
      groups[skill.orbitRadius].push(skill);
    });
    return groups;
  };

  const categories = [
    { name: "Frontend", count: 2, color: "text-cyan-400" },
    { name: "Backend", count: 2, color: "text-emerald-400" },
    { name: "Mobile", count: 1, color: "text-purple-400" },
    { name: "Cloud", count: 1, color: "text-orange-400" },
    { name: "DevOps", count: 1, color: "text-sky-400" },
    { name: "Language", count: 3, color: "text-yellow-400" },
    { name: "Database", count: 1, color: "text-green-400" },
    { name: "Tools", count: 1, color: "text-pink-400" }
  ];

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  // Initialize animations
  onMount(() => {
    setTimeout(() => setIsVisible(true), 300);
    window.addEventListener("mousemove", handleMouseMove);

    // Animate skills orbiting with better spacing
    const animateSkills = () => {
      const newRotations = {};
      const orbitScale = earthSizeMap[earthSize].orbitScale;
      const startTime = Date.now() / 1000;
      
      skillsData.forEach((skill, index) => {
        const time = startTime;
        
        // Calculate position with phase offset for spacing
        const baseAngle = (time * skill.speed) % 360;
        const orbitAngle = (baseAngle + skill.phase) % 360;
        const rad = (orbitAngle * Math.PI) / 180;
        
        // Calculate position
        const x = Math.cos(rad) * (skill.orbitRadius * orbitScale);
        const y = Math.sin(rad) * (skill.orbitRadius * orbitScale);
        
        // Calculate opacity based on position (fade when behind earth)
        const distanceFromCenter = Math.sqrt(x * x + y * y);
        const normalizedDistance = distanceFromCenter / (400 * orbitScale);
        const opacity = 0.3 + (0.7 * normalizedDistance);
        
        newRotations[skill.id] = {
          x,
          y,
          angle: orbitAngle,
          opacity: Math.min(opacity, 0.9),
          distance: distanceFromCenter
        };
      });
      
      setRotations(newRotations);
      requestAnimationFrame(animateSkills);
    };
    
    animateSkills();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <section id="skills-earth" class="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-blue-950/30 via-purple-950/20 to-blue-950/30">
      {/* Animated Particles Background */}
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <For each={Array.from({ length: 40 })}>
          {(_, i) => (
            <div
              class="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                "animation": `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                "animation-delay": `${Math.random() * 2}s`,
                opacity: Math.random() * 0.4 + 0.2,
              }}
            ></div>
          )}
        </For>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div class="text-center mb-12 md:mb-20">
          <div class="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-400/30">
            <Globe class="w-4 h-4 text-cyan-400" />
            <span class="text-xs font-semibold text-cyan-300">Tech Orbit</span>
          </div>
          <h2 class="text-2xl md:text-4xl font-bold text-white mb-3">
            My <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Tech Universe</span>
          </h2>
          <p class="text-blue-100/70 max-w-xl mx-auto text-sm md:text-base">
            Skills orbiting in perfect harmony around core development principles
          </p>
        </div>

        {/* Main Earth Container */}
        <div class="relative w-full h-[400px] md:h-[550px] flex items-center justify-center mb-10 md:mb-16">
          {/* Orbital Rings - Now with different colors for better visibility */}
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="absolute w-full h-full" viewBox="0 0 800 800" style="filter: drop-shadow(0 0 4px rgba(34, 211, 238, 0.1))">
              {[120, 160, 200, 240, 280, 320].map((radius, index) => (
                <circle
                  cx="400"
                  cy="400"
                  r={radius}
                  fill="none"
                  stroke={index % 2 === 0 ? "rgba(6, 182, 212, 0.1)" : "rgba(59, 130, 246, 0.08)"}
                  stroke-width="0.5"
                  stroke-dasharray="3,3"
                />
              ))}
            </svg>
          </div>

          {/* Central Glow */}
          <div class={`absolute ${earthSizeMap[earthSize].glow} bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse`}></div>
          
          {/* Earth Container */}
          <div 
            class={`relative ${earthSizeMap[earthSize].container} transition-all duration-1000 ${isVisible() ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            style={{
              transform: `translate(${mousePosition().x * 0.5}px, ${mousePosition().y * 0.5}px)`,
              filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.5))"
            }}
          >
            {/* Glow behind Earth */}
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
            
            {/* Earth Image */}
            <div class="relative w-full h-full">
              <img
                src={earthImage}
                alt="Digital Earth"
                class="w-full h-full object-contain animate-spin-slow"
                style="filter: brightness(1.1) contrast(1.1);"
              />
              
              {/* Animated atmospheric rings */}
              <div class="absolute inset-0 rounded-full border border-cyan-400/10 animate-pulse" style="animation-duration: 3s;"></div>
            </div>
          </div>

          {/* Floating Skill Badges - Now smaller and better spaced */}
          <For each={skillsData}>
            {(skill) => {
              const rot = () => rotations()[skill.id] || { x: 0, y: 0, angle: 0, opacity: 0.5 };
              return (
                <div
                  class={`skill-badge absolute ${badgeSizeMap[badgeSize].container} rounded-xl ${skill.bg} border border-blue-400/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-125 hover:z-50 hover:shadow-lg hover:border-blue-300/50 group cursor-pointer`}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${rot().x}px), calc(-50% + ${rot().y}px)) rotate(${rot().angle}deg)`,
                    opacity: rot().opacity,
                    "box-shadow": `0 0 8px rgba(6, 182, 212, ${rot().opacity * 0.2})`,
                    "z-index": Math.floor(rot().opacity * 30),
                  }}
                >
                  {/* Icon */}
                  <div class={`${badgeSizeMap[badgeSize].icon} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {skill.icon}
                  </div>

                  {/* Tooltip - Only show on hover */}
                  <div class="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                    <div class="bg-gray-900/90 backdrop-blur-sm px-2 py-1.5 rounded-md border border-cyan-400/30 whitespace-nowrap shadow-lg">
                      <div class="text-white font-bold text-xs">{skill.name}</div>
                      <div class="text-cyan-300 text-xs">{skill.description}</div>
                    </div>
                  </div>

                  {/* Small glow effect */}
                  <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-sm"></div>
                </div>
              );
            }}
          </For>

          {/* Connection Lines - Fixed with smooth animation */}
          <svg class="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.1" />
                <stop offset="50%" stop-color="#3B82F6" stop-opacity="0.2" />
                <stop offset="100%" stop-color="#06B6D4" stop-opacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Connect skills that are close to each other */}
            <For each={skillsData}>
              {(skill) => {
                const rot = () => rotations()[skill.id] || { x: 0, y: 0 };
                const startX = 400; // Center X
                const startY = 400; // Center Y
                const endX = startX + rot().x;
                const endY = startY + rot().y;
                
                return (
                  <line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke="url(#line-glow)"
                    stroke-width="0.5"
                    opacity="0.2"
                    stroke-dasharray="2,2"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="10"
                      to="0"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </line>
                );
              }}
            </For>
          </svg>
        </div>

        {/* Categories Section */}
        {showCategories && (
          <div class="mb-8 md:mb-12">
            <h3 class="text-lg font-bold text-white text-center mb-4">Tech Categories</h3>
            <div class="grid grid-cols-4 md:grid-cols-8 gap-2">
              <For each={categories}>
                {(cat) => (
                  <div class="text-center p-2 rounded-md bg-gradient-to-br from-blue-950/20 to-purple-950/15 border border-blue-400/10 hover:border-blue-400/30 transition-all">
                    <div class={`text-lg font-bold ${cat.color} mb-0.5`}>{cat.count}</div>
                    <div class="text-xs text-blue-200/60 truncate">{cat.name}</div>
                  </div>
                )}
              </For>
            </div>
          </div>
        )}

        {/* Skills Legend Grid */}
        {showLegend && (
          <div class="mb-8 md:mb-12">
            <h3 class="text-lg font-bold text-white text-center mb-4">Technology Stack</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              <For each={skillsData}>
                {(skill) => (
                  <div class="group relative p-3 rounded-lg bg-gradient-to-br from-blue-950/30 to-purple-950/20 border border-blue-400/10 hover:border-blue-400/40 transition-all duration-200 hover:shadow-md hover:shadow-cyan-500/10 cursor-pointer">
                    <div class="flex items-center gap-3">
                      <div class="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="text-sm font-semibold text-white truncate">{skill.name}</div>
                        <div class="text-xs text-blue-300/60 truncate">{skill.description}</div>
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        )}

        {/* Philosophy Section */}
        <div class="text-center">
          <div class="inline-block max-w-xl">
            <div class="bg-gradient-to-r from-blue-950/30 via-cyan-950/20 to-blue-950/30 rounded-xl p-4 border border-cyan-400/20 backdrop-blur-sm">
              <div class="flex items-center justify-center gap-2 mb-3">
                <Sparkles class="w-4 h-4 text-yellow-400" />
                <h3 class="text-sm font-bold text-white">Development Philosophy</h3>
              </div>
              <p class="text-blue-100/70 text-sm leading-relaxed">
                Each technology in orbit serves a specific purpose, working in harmony to create robust, scalable solutions. The right tool for the right job.
              </p>
            </div>
          </div>
        </div>
      </div>

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

        /* Smooth orbital movement */
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
};

// Default props
AnimatedEarthSection.defaultProps = {
  earthImage: "/earth.png",
  earthSize: "md",
  badgeSize: "sm", // Default to small
  showCategories: true,
  showLegend: true
};

export default AnimatedEarthSection;