// src/components/Header.jsx
import { createSignal, onMount } from "solid-js";
import { Menu, X, Github, Linkedin, Mail } from "lucide-solid";

export default function Header() {
  const [isOpen, setIsOpen] = createSignal(false);
  const [scrollY, setScrollY] = createSignal(0);

  onMount(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/hamozbolhya", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/boulahia-hamza/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:hamzaboulahia.code@gmail.com", label: "Email" },
  ];

  const isScrolled = scrollY() > 50;

  return (
    <>
      <header
        class={`fixed top-0 w-full z-50 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-900/20 transition-all duration-300"
            : "bg-transparent backdrop-blur-md border-b border-blue-400/10 transition-all duration-300"
        }`}
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-4">
            {/* Logo */}
            <a
              href="#home"
              class="group flex items-center space-x-3 focus:outline-none relative"
            >
              {/* Glowing background */}
              <div class="absolute -inset-2 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-pink-600/50 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 -z-10"></div>

              <div class="relative w-11 h-11 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/100 transition-all duration-300 group-hover:scale-110 border-2 border-blue-400/50 group-hover:border-blue-300/80">
                <img
                  src="/hamza.png"
                  alt="Hamza Boulahia"
                  class="w-full h-full object-cover"
                />

                {/* Animated border */}
                <div
                  class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin -z-10"
                  style={{ "animation-duration": "3s" }}
                ></div>
              </div>

              <div class="hidden sm:block">
                <h1 class="text-lg font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Hamza Boulahia
                </h1>
                <p class="text-xs font-medium text-blue-300/80">
                  Full Stack Engineer
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav class="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  href={item.href}
                  class="relative px-4 py-2 text-sm font-semibold text-blue-100/80 hover:text-white transition-colors duration-200 group"
                >
                  {item.label}
                  {/* Animated underline */}
                  <span class="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-lg shadow-blue-400/50"></span>
                  {/* Hover glow */}
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                </a>
              ))}
            </nav>

            {/* Social Links + Mobile Menu */}
            <div class="flex items-center space-x-3">
              {/* Desktop Socials */}
              <div class="hidden md:flex items-center space-x-1 ml-4 pl-4 border-l border-blue-400/20">
                {socials.map((social) => (
                  <a
                    href={social.href}
                    aria-label={social.label}
                    class="group p-2 text-blue-200/60 hover:text-blue-100 rounded-lg transition-all duration-200 relative"
                  >
                    {/* Glow effect */}
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-200 -z-10"></div>
                    <span class="text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-200 inline-block">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen())}
                class="lg:hidden p-2 rounded-lg text-blue-200/60 hover:text-blue-100 hover:bg-blue-500/10 transition-all duration-200 relative group"
                aria-label="Toggle menu"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-200 -z-10"></div>
                {isOpen() ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen() && (
            <nav class="lg:hidden pb-4 space-y-2 bg-gradient-to-b from-slate-800/50 to-transparent rounded-xl p-4 backdrop-blur-sm border border-blue-400/10 mb-4">
              {navItems.map((item) => (
                <a
                  href={item.href}
                  class="group relative block px-4 py-3 text-blue-100/80 hover:text-white rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Hover background */}
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                  <span class="flex items-center gap-2">
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {item.label}
                  </span>
                </a>
              ))}

              {/* Mobile Socials */}
              <div class="flex items-center space-x-2 px-4 py-3 border-t border-blue-400/10 mt-4 pt-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-1 group p-2 text-blue-200/60 hover:text-blue-100 rounded-lg transition-all duration-200 bg-blue-500/10 hover:bg-blue-500/20 text-center"
                    >
                      <Icon
                        size={20}
                        class="mx-auto group-hover:scale-125 transition-transform duration-200"
                      />
                    </a>
                  );
                })}
              </div>
            </nav>
          )}
        </div>

        {/* Animated bottom glow */}
        <div
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-300"
          style={{
            opacity: isScrolled ? 0.5 : 0.2,
          }}
        ></div>
      </header>

      {/* Spacer */}
      <div class="h-20"></div>

      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.7);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
