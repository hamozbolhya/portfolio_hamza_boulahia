import { BookOpen, Brain, Sparkles, Target } from "lucide-solid";

export const hobbiesData = [
    {
      id: 1,
      title: "Football",
      description: "Passionate about football, both watching and playing. Enjoy team dynamics, strategy, and the competitive spirit of the game.",
      icon: Target,
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-950/40 to-emerald-900/30",
      image: "/hobbies/football.png",
      overlay: "bg-gradient-to-t from-green-950/90 via-green-900/50 to-transparent",
      tags: ["Team Sports", "Strategy", "Fitness", "Competition"]
    },
    {
      id: 2,
      title: "Chess",
      description: "Regular chess player focused on strategic thinking, problem-solving, and mental discipline. Always learning new openings and tactics.",
      icon: Brain,
      color: "from-amber-500 to-yellow-400",
      bgColor: "bg-gradient-to-br from-amber-950/40 to-yellow-900/30",
      image: "/hobbies/chess.png",
      overlay: "bg-gradient-to-t from-amber-950/90 via-amber-900/50 to-transparent",
      tags: ["Strategy", "Critical Thinking", "Patience", "Analysis"]
    },
    {
      id: 3,
      title: "Swimming",
      description: "Regular swimming enthusiast for fitness and relaxation. Enjoy the meditative quality of being in water and the full-body workout it provides.",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-950/40 to-cyan-900/30",
      image: "/hobbies/swimming.png",
      overlay: "bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent",
      tags: ["Fitness", "Relaxation", "Meditation", "Endurance"]
    },
    {
      id: 4,
      title: "Reading",
      description: "Avid reader of technical books, biographies, and sci-fi novels. Believe continuous learning through reading is key to personal growth.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-gradient-to-br from-purple-950/40 to-pink-900/30",
      image: "/hobbies/reading.png",
      overlay: "bg-gradient-to-t from-purple-950/90 via-purple-900/50 to-transparent",
      tags: ["Learning", "Knowledge", "Imagination", "Growth"]
    }
  ];