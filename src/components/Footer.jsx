// src/components/Footer.jsx
import { For } from "solid-js";
import ContactInfo from "./ContactInfo";
import { contactInfo, quickLinks, socialLinks } from "../data/personal";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer class="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Background decoration */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/15 rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        <div class="absolute bottom-1/2 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-15"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div class="py-16 md:py-20">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div class="flex flex-col items-center md:items-start">
              <div class="mb-6 group">
                <div class="relative w-14 h-14">
                  {/* Glow background */}
                  <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                  <div class="relative w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/100 transition-all duration-300 group-hover:scale-110">
                    <span class="text-white font-bold text-2xl">HB</span>
                  </div>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Hamza Boulahia</h3>
              <p class="text-blue-200/80 mb-6 text-center md:text-left">
                Full Stack Engineer • 5 Years Experience
              </p>
              <p class="text-blue-200/70 text-sm leading-relaxed text-center md:text-left max-w-xs">
                Crafting scalable web & mobile solutions with modern
                technologies. Passionate about clean code and great user
                experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div class="flex flex-col items-center">
              <h4 class="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <div class="space-y-3">
                <For each={quickLinks}>
                  {(link) => (
                    <a
                      href={link.href}
                      class="group relative flex items-center justify-center gap-2 text-blue-300/80 hover:text-blue-200 transition-colors duration-200"
                    >
                      <span class="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                      <span class="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </a>
                  )}
                </For>
              </div>
            </div>

            {/* Contact & Social */}
            <div class="flex flex-col items-center md:items-end">
              <h4 class="text-lg font-bold mb-6 text-white">Connect</h4>
              <div class="flex gap-4 mb-8">
                <For each={socialLinks}>
                  {(social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group relative w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:from-blue-600/40 hover:to-purple-600/40 flex items-center justify-center transition-all duration-200 hover:scale-110 border border-blue-400/30 hover:border-blue-300/60 backdrop-blur-sm overflow-hidden"
                      >
                        {/* Glow effect */}
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                        <Icon
                          size={20}
                          class="text-blue-200/80 group-hover:text-blue-100 group-hover:scale-125 group-hover:rotate-12 transition-all duration-200"
                        />
                      </a>
                    );
                  }}
                </For>
              </div>

              <p class="text-blue-200/70 text-sm text-center">
                Available for freelance & full-time opportunities
              </p>
            </div>
          </div>

          {/* Divider */}
          <div class="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mb-8"></div>

          {/* Contact Info Row */}
          <div class="bg-gradient-to-r from-blue-600/15 to-purple-600/15 border border-blue-400/30 rounded-xl p-6 mb-8 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
            <p class="text-blue-200/80 text-sm font-semibold mb-4 text-center uppercase tracking-wider">
              Get in Touch
            </p>
            <ContactInfo items={contactInfo} variant="footer" />
          </div>

          {/* Bottom Section */}
          <div class="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-blue-400/20">
            <p class="text-blue-200/70 text-sm text-center md:text-left">
              © {currentYear} Hamza Boulahia. All rights reserved.
            </p>

            <div class="flex items-center gap-6">
              <a
                href="#home"
                class="group relative text-blue-300/80 hover:text-blue-200 transition-colors text-sm flex items-center gap-2"
              >
                <span>Back to top</span>
                <span class="group-hover:-translate-y-1 transition-transform duration-200">
                  ↑
                </span>
              </a>
              <div class="h-1 w-1 bg-blue-400/40 rounded-full"></div>
              <p class="text-blue-200/70 text-sm">
                Designed & Built with{" "}
                <span class="text-red-500 animate-pulse">❤️</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-up {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(0px);
            opacity: 0;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
}
