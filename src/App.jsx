// src/App.jsx
import { onMount, createSignal } from "solid-js";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

export default function App() {
  const [scrollY, setScrollY] = createSignal(0);
  const [isLoaded, setIsLoaded] = createSignal(false);

  onMount(() => {
    // Set loaded state for initial animations
    setIsLoaded(true);

    // Handle scroll events
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div class="relative min-h-screen overflow-x-hidden">
      {/* Space Background with Stars */}
      <div class="fixed inset-0 -z-50 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
        {/* Animated gradient orbs */}
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div class="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse animation-delay-3000"></div>

        {/* Stars */}
        <div class="absolute inset-0 overflow-hidden">
          {/* Large stars */}
          <div class="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-80 animate-twinkle"></div>
          <div class="absolute top-20 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-twinkle animation-delay-1000"></div>
          <div class="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle animation-delay-2000"></div>
          <div class="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-twinkle animation-delay-3000"></div>
          <div class="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white rounded-full opacity-75 animate-twinkle animation-delay-4000"></div>
          <div class="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-55 animate-twinkle animation-delay-1000"></div>
          <div class="absolute bottom-10 left-1/3 w-1 h-1 bg-white rounded-full opacity-65 animate-twinkle animation-delay-2000"></div>
          <div class="absolute top-1/4 right-10 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-twinkle animation-delay-3000"></div>
          <div class="absolute bottom-1/2 right-20 w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle animation-delay-500"></div>
          <div class="absolute top-2/3 left-20 w-1.5 h-1.5 bg-white rounded-full opacity-75 animate-twinkle animation-delay-4000"></div>
        </div>

        {/* Parallax effect on scroll */}
        <div
          class="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            transform: `translateY(${scrollY() * 0.5}px)`,
          }}
        >
          <div class="absolute top-1/4 left-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -translate-x-1/2"></div>
          <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content with scroll animations */}
      <div class="relative z-10">
        {/* Animated scroll indicator */}
        <div
          class="fixed top-1/2 right-8 z-40 transform -translate-y-1/2 pointer-events-none"
          style={{
            opacity: scrollY() < 100 ? 1 - scrollY() / 100 : 0,
          }}
        >
          <div class="flex flex-col items-center gap-2">
            <div class="text-white text-sm font-semibold opacity-75">
              Scroll
            </div>
            <div class="animate-bounce">
              <svg
                class="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Header */}

        <Header />

        {/* Hero Section */}
        <div
          class="transition-all duration-300"
          style={{
            opacity: 1,
            transform: `translateY(${Math.max(0, scrollY() * -0.2)}px)`,
          }}
        >
          <Hero />
        </div>

        {/* Skills Section */}
        <div
          class="transition-all duration-300"
          style={{
            opacity: 1,
            transform: `translateY(${Math.max(
              0,
              (scrollY() - 400) * -0.15
            )}px)`,
          }}
        >
          <Skills />
        </div>

        {/* Experience Section */}
        <div
          class="transition-all duration-300"
          style={{
            opacity: 1,
            transform: `translateY(${Math.max(
              0,
              (scrollY() - 800) * -0.15
            )}px)`,
          }}
        >
          <Experience />
        </div>

        {/* Profile Section */}
        <div
          class="transition-all duration-300"
          style={{
            opacity: 1,
            transform: `translateY(${Math.max(
              0,
              (scrollY() - 1200) * -0.15
            )}px)`,
          }}
        >
          <Profile />
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll progress indicator */}
      <div
        class="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-50"
        style={{
          width: `${Math.min(
            100,
            (scrollY() /
              (document.documentElement.scrollHeight - window.innerHeight)) *
              100
          )}%`,
          transition: "width 0.1s ease-out",
        }}
      ></div>

      {/* Floating particles effect */}
      <div class="fixed inset-0 pointer-events-none z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            class="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s infinite ease-in-out`,
              "animation-delay": `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Add custom CSS animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            transform: translate(${Math.random() * 200 - 100}px, ${
        Math.random() * -200
      }px);
            opacity: 0.8;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translate(0, -200px);
            opacity: 0;
          }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #a855f7, #ec4899);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #9333ea, #db2777);
        }
      `}</style>
    </div>
  );
}
