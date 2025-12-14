import { For } from "solid-js";

const CATBanner = ({ contactInfo }) => {
    return (
      <>
        <div class="absolute inset-0 bg-gradient-to-b from-blue-600/30 via-transparent to-purple-600/30 -z-10"></div>
        <div class="absolute -top-20 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full -translate-x-1/2 blur-3xl"></div>
        <div class="absolute -bottom-20 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div class="relative px-6 md:px-12 py-10 md:py-14 border border-blue-400/50 rounded-2xl backdrop-blur-md">
          <div class="flex flex-col gap-8">
            <div class="text-center">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Build Something Great
              </h2>
              <p class="text-blue-100 text-lg max-w-2xl mx-auto">
                I'm available for freelance projects and full-time opportunities. Let's discuss how I can help bring your vision to life.
              </p>
            </div>
  
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" class="group relative px-8 py-4 font-semibold rounded-xl text-center hover:scale-105 transition-all duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <span class="relative text-white text-lg">Get in Touch</span>
              </a>
              <a href="#experience" class="group px-8 py-4 border-2 border-blue-300/80 text-white font-semibold rounded-xl hover:border-blue-200 hover:bg-blue-500/20 transition-all duration-200 text-center hover:scale-105 text-lg">
                View My Work
              </a>
            </div>
  
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-blue-400/40">
              <For each={contactInfo}>
                {(info) => (
                  <a href={info.link || "#"} class="group">
                    <div class="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-blue-500/20 transition-colors duration-200">
                      <span class="text-4xl group-hover:scale-125 transition-transform">{info.icon}</span>
                      <div class="text-center">
                        <p class="text-blue-200 text-xs font-semibold mb-1">CONTACT</p>
                        <p class="text-white font-medium text-sm group-hover:text-blue-100 transition-colors break-all">{info.text}</p>
                      </div>
                    </div>
                  </a>
                )}
              </For>
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default CATBanner;