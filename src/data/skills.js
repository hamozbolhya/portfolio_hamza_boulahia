export const skillsData = [
  {
    category: "Frontend",
    icon: "⚡",
    color: "blue",
    description: "Modern UI frameworks and libraries",
    items: [
      "React.js",
      "React Native",
      "Angular",
      "Next.js",
      "solid-js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    icon: "🔧",
    color: "purple",
    description: "Server-side technologies and APIs",
    items: [
      "Node.js",
      "Java",
      "Spring Boot",
      "Spring Batch",
      "WebSockets",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Mobile",
    icon: "📱",
    color: "green",
    description: "Cross-platform mobile development",
    items: [
      "React Native",
      "Expo",
      "Push Notifications",
      "App Stores",
      "GPS/Maps",
      "Offline-First",
    ],
  },
  {
    category: "AI & Vision",
    icon: "🤖",
    color: "orange",
    description: "Machine learning and computer vision",
    items: [
      "OCR",
      "ScanBot SDK",
      "Auto-Cropping",
      "Fraud Detection",
      "AI Integration",
    ],
  },
  {
    category: "Infrastructure",
    icon: "🛠️",
    color: "indigo",
    description: "DevOps and database management",
    items: ["SQL/NoSQL", "Docker", "Linux/Windows", "Query Optimization"],
  },
  {
    category: "Tools & Practices",
    icon: "⚙️",
    color: "pink",
    description: "Development tools and methodologies",
    items: ["Git", "JIRA", "Click up", "Postman", "Agile/Scrum", "Testing"],
  },
];

export const skillColors = {
  blue: {
    bg: "from-blue-600 to-blue-700",
    lightBg: "from-blue-950/40 to-blue-900/30",
    border: "border-blue-400/30 hover:border-blue-400/60",
    tag: "bg-blue-600/30 text-blue-200 hover:bg-blue-600/50 border-blue-400/40",
    icon: "text-blue-400",
    glow: "from-blue-400/0 via-blue-400/30 to-purple-400/0",
  },
  purple: {
    bg: "from-purple-600 to-purple-700",
    lightBg: "from-purple-950/40 to-purple-900/30",
    border: "border-purple-400/30 hover:border-purple-400/60",
    tag: "bg-purple-600/30 text-purple-200 hover:bg-purple-600/50 border-purple-400/40",
    icon: "text-purple-400",
    glow: "from-purple-400/0 via-purple-400/30 to-pink-400/0",
  },
  green: {
    bg: "from-green-600 to-green-700",
    lightBg: "from-green-950/40 to-green-900/30",
    border: "border-green-400/30 hover:border-green-400/60",
    tag: "bg-green-600/30 text-green-200 hover:bg-green-600/50 border-green-400/40",
    icon: "text-green-400",
    glow: "from-green-400/0 via-green-400/30 to-teal-400/0",
  },
  orange: {
    bg: "from-orange-600 to-orange-700",
    lightBg: "from-orange-950/40 to-orange-900/30",
    border: "border-orange-400/30 hover:border-orange-400/60",
    tag: "bg-orange-600/30 text-orange-200 hover:bg-orange-600/50 border-orange-400/40",
    icon: "text-orange-400",
    glow: "from-orange-400/0 via-orange-400/30 to-red-400/0",
  },
  indigo: {
    bg: "from-indigo-600 to-indigo-700",
    lightBg: "from-indigo-950/40 to-indigo-900/30",
    border: "border-indigo-400/30 hover:border-indigo-400/60",
    tag: "bg-indigo-600/30 text-indigo-200 hover:bg-indigo-600/50 border-indigo-400/40",
    icon: "text-indigo-400",
    glow: "from-indigo-400/0 via-indigo-400/30 to-blue-400/0",
  },
  pink: {
    bg: "from-pink-600 to-pink-700",
    lightBg: "from-pink-950/40 to-pink-900/30",
    border: "border-pink-400/30 hover:border-pink-400/60",
    tag: "bg-pink-600/30 text-pink-200 hover:bg-pink-600/50 border-pink-400/40",
    icon: "text-pink-400",
    glow: "from-pink-400/0 via-pink-400/30 to-red-400/0",
  },
};

export const skillsDataEx = [
  {
    level: "Expert",
    percentage: "40",
    color: "from-blue-600 to-blue-400",
    items: ["React.js", "React Native", "HTML5", "Css", "React material"],
  },
  {
    level: "Advanced",
    percentage: "95",
    color: "from-purple-600 to-purple-400",
    items: [
      "React js",
      "React native",
      "Next.js",
      "Expo",
      "Docker",
      "Tailwind",
    ],
  },
  {
    level: "Proficient",
    percentage: "80",
    color: "from-green-600 to-green-400",
    items: ["Java", "Spring boot", "PostgreSQL", "Lunix & windows servers"],
  },
  {
    level: "Experienced",
    percentage: "70",
    color: "from-orange-600 to-orange-400",
    items: ["WebSockets", "JIRA", "Click up", "Linux"],
  },
];


  // Size configurations
  export const earthSizeMap = {
    sm: { container: "w-48 h-48 md:w-64 md:h-64", glow: "w-64 h-64 md:w-96 md:h-96", orbitScale: 0.8 },
    md: { container: "w-64 h-64 md:w-96 md:h-96", glow: "w-96 h-96 md:w-[500px] md:h-[500px]", orbitScale: 1 },
    lg: { container: "w-96 h-96 md:w-[500px] md:h-[500px]", glow: "w-[600px] h-[600px] md:w-[700px] md:h-[700px]", orbitScale: 1.2 },
    xl: { container: "w-[500px] h-[500px] md:w-[600px] md:h-[600px]", glow: "w-[700px] h-[700px] md:w-[800px] md:h-[800px]", orbitScale: 1.5 }
  };

  export const badgeSizeMap = {
    xs: { container: "w-8 h-8 md:w-10 md:h-10", icon: "text-2xl md:text-3xl" },
    sm: { container: "w-10 h-10 md:w-12 md:h-12", icon: "text-3xl md:text-4xl" },
    md: { container: "w-12 h-12 md:w-14 md:h-14", icon: "text-4xl md:text-5xl" },
    lg: { container: "w-14 h-14 md:w-16 md:h-16", icon: "text-5xl md:text-6xl" }
  };

  // Extended skills data with categories for the earth visualization
  export const earthSkillsData = [
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

  // Categories for earth visualization
  export const categories = [
    { name: "Frontend", count: 2, color: "text-cyan-400" },
    { name: "Backend", count: 2, color: "text-emerald-400" },
    { name: "Mobile", count: 1, color: "text-purple-400" },
    { name: "Cloud", count: 1, color: "text-orange-400" },
    { name: "DevOps", count: 1, color: "text-sky-400" },
    { name: "Language", count: 3, color: "text-yellow-400" },
    { name: "Database", count: 1, color: "text-green-400" },
    { name: "Tools", count: 1, color: "text-pink-400" }
  ];