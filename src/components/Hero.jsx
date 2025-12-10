// src/components/Hero.jsx
import { For, createSignal, onMount } from 'solid-js';
import ContactInfo from './ContactInfo';

export default function Hero() {
  const [scrollY, setScrollY] = createSignal(0);
  const [titleIndex, setTitleIndex] = createSignal(0);

  onMount(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Rotate titles every 4 seconds
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(titleInterval);
    };
  });

  const titles = [
    'Full Stack Engineer',
    '5+ Years Experience',
    'Building Scalable Apps'
  ];

  const stats = [
    { icon: '📅', value: '4+', label: 'Years Experience', bg: 'from-blue-600 via-blue-700 to-blue-800', accent: 'blue' },
    { icon: '🚀', value: '20+', label: 'Projects Delivered', bg: 'from-purple-600 via-purple-700 to-pink-600', accent: 'purple' },
    { icon: '💻', value: '5', label: 'Tech Stacks', bg: 'from-green-600 via-emerald-600 to-teal-600', accent: 'green' },
    { icon: '🌐', value: '3', label: 'Languages', bg: 'from-orange-600 via-orange-700 to-red-600', accent: 'orange' }
  ];

  const contactInfo = [
    { icon: '📧', text: 'hamzaboulahia.code@gmail.com', link: 'mailto:hamzaboulahia.code@gmail.com' },
    { icon: '📱', text: '+212 659 676 148', link: 'tel:+212659676148' },
    { icon: '📍', text: 'Casablanca, Morocco' },
    { icon: '💼', text: 'linkedin.com/in/boulahia-hamza', link: 'https://linkedin.com/in/boulahia-hamza' }
  ];

  const skills = ['React', 'React Native', 'Spring Boot', 'Node.js', 'TypeScript'];

  return (
    <section id="home" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Animated gradient background orbs */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-purple-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div class="text-center mb-16"
            style={{
              opacity: Math.max(0.5, 1 - scrollY() / 400),
              transform: `translateY(${scrollY() * 0.1}px)`
            }}
          >
            <div class="inline-block mb-6">
              <div class="px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300">
                <p class="text-sm font-semibold text-blue-300">👋 Welcome to my portfolio</p>
              </div>
            </div>

            {/* Animated Title */}
            <div class="h-48 md:h-56 flex items-center justify-center mb-8 relative">
              <For each={titles}>
                {(title, index) => (
                  <h1 
                    class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold absolute text-center transition-all duration-700 leading-tight"
                    style={{
                      opacity: index() === titleIndex() ? 1 : 0,
                      transform: index() === titleIndex() 
                        ? 'translateY(0) scale(1)' 
                        : index() < titleIndex() 
                        ? 'translateY(-80px) scale(0.8)' 
                        : 'translateY(80px) scale(0.8)',
                      pointerEvents: index() === titleIndex() ? 'auto' : 'none'
                    }}
                  >
                    <span class="text-white block">
                      {title.split(' ').slice(0, -1).join(' ')}
                    </span>
                    <span class="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {title.split(' ').pop()}
                    </span>
                  </h1>
                )}
              </For>
            </div>

            <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
              Crafting scalable web & mobile applications with expertise in <span class="text-white font-bold">banking, fintech, retail, and enterprise</span> sectors
            </p>

            {/* Skills Badges */}
            <div class="flex flex-wrap justify-center gap-3">
              <For each={skills}>
                {(skill) => (
                  <div class="group px-4 py-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-400/50 rounded-full hover:from-blue-600/50 hover:to-purple-600/50 hover:border-blue-300/80 transition-all duration-200 backdrop-blur-sm cursor-default hover:scale-105">
                    <span class="text-sm font-medium text-blue-100 group-hover:text-white transition-colors">{skill}</span>
                  </div>
                )}
              </For>
            </div>
          </div>

          {/* Stats Grid */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            <For each={stats}>
              {(stat, index) => (
                <div class="group relative"
                  style={{
                    'animation-delay': `${index() * 100}ms`
                  }}
                >
                  {/* Card */}
                  <div class="relative bg-gradient-to-br from-blue-950/50 to-purple-950/40 rounded-2xl p-6 md:p-8 border border-blue-400/40 hover:border-blue-400/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-500/30 backdrop-blur-md overflow-hidden">
                    {/* Animated border glow */}
                    <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-purple-400/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-20"></div>

                    <div class={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.bg} flex items-center justify-center mb-4 text-2xl shadow-lg shadow-blue-500/60 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/80 transition-all duration-300`}>
                      {stat.icon}
                    </div>
                    <div class="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div class="text-sm md:text-base text-blue-100/90 font-medium">{stat.label}</div>
                  </div>
                </div>
              )}
            </For>
          </div>

          {/* CTA Banner */}
          <div class="relative overflow-hidden rounded-2xl">
            {/* Gradient background */}
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-blue-900/40 -z-10"></div>
            
            {/* Decorative circles */}
            <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>

            {/* Border glow */}
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 pointer-events-none -z-10"></div>
            <div class="relative px-8 md:px-12 py-12 md:py-16 border border-blue-400/50 rounded-2xl backdrop-blur-md">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
                <div class="flex-1">
                  <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">
                    Available for new opportunities
                  </h2>
                  <p class="text-blue-100 text-lg">
                    Let's discuss how I can help bring your next project to life
                  </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a href="#contact" class="group relative px-8 py-3 font-semibold rounded-xl text-center hover:scale-105 transition-all duration-200 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
                    <span class="relative text-white group-hover:text-blue-50">Get in Touch</span>
                  </a>
                  <a href="#experience" class="group px-8 py-3 border-2 border-blue-300/80 text-white font-semibold rounded-xl hover:border-blue-200 hover:bg-blue-500/20 transition-all duration-200 text-center hover:scale-105 backdrop-blur-sm">
                    View My Work
                  </a>
                </div>
              </div>

              {/* Contact Info Grid */}
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-blue-400/40">
                <For each={contactInfo}>
                  {(info) => (
                    <a href={info.link || '#'} class="group">
                      <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500/20 transition-colors duration-200">
                        <span class="text-2xl group-hover:scale-110 transition-transform">{info.icon}</span>
                        <div>
                          <p class="text-blue-200 text-xs font-semibold mb-1">CONTACT</p>
                          <p class="text-white font-medium text-sm md:text-base group-hover:text-blue-100 transition-colors break-all">
                            {info.text}
                          </p>
                        </div>
                      </div>
                    </a>
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}