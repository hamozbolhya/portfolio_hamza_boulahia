// src/components/Profile.jsx
import { For } from 'solid-js';
import ContactInfo from './ContactInfo';

export default function Profile() {
  const contactInfo = [
    { icon: '📧', text: 'hamzaboulahia.code@gmail.com', link: 'mailto:hamzaboulahia.code@gmail.com' },
    { icon: '📱', text: '+212 659 676 148', link: 'tel:+212659676148' },
    { icon: '📍', text: 'Casablanca, Morocco' },
    { icon: '💼', text: 'linkedin.com/in/boulahia-hamza', link: 'https://linkedin.com/in/boulahia-hamza' }
  ];

  const highlights = [
    { icon: '⚡', label: '4+ years', description: 'Full Stack Experience' },
    { icon: '🏦', label: 'Banking', description: 'Fintech Expertise' },
    { icon: '🤖', label: 'AI/OCR', description: 'Advanced Integration' },
    { icon: '📱', label: 'Mobile', description: 'App Development' },
    { icon: '☁️', label: 'Cloud', description: 'Big Data & Cloud' },
    { icon: '🏗️', label: 'Architecture', description: 'Enterprise Solutions' }
  ];

  const socialLinks = [
    { icon: '📧', href: 'mailto:hamzaboulahia.code@gmail.com', label: 'Email', color: 'from-blue-600 to-blue-700' },
    { icon: '💼', href: 'https://linkedin.com/in/boulahia-hamza', label: 'LinkedIn', color: 'from-blue-700 to-purple-700', target: '_blank' },
    { icon: '📱', href: 'tel:+212659676148', label: 'Phone', color: 'from-purple-600 to-pink-600' }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'React Native', 'Angular', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Spring Boot', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools & Platforms', items: ['Docker', 'Git', 'AWS', 'CI/CD', 'REST APIs'] }
  ];

  return (
    <section id="contact" class="relative py-20 md:py-28 overflow-hidden">
      {/* Animated Background */}
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          {/* Section Header */}
          <div class="text-center mb-16">
            <div class="inline-block mb-4">
              <div class="px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full backdrop-blur-sm">
                <p class="text-sm font-semibold text-blue-300">👨‍💻 Professional Profile</p>
              </div>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">About Me</h2>
            <p class="text-xl text-blue-100/80 max-w-2xl mx-auto">Full Stack engineer passionate about building scalable solutions</p>
          </div>

          {/* Main Profile Card */}
          <div class="bg-gradient-to-br from-blue-950/40 via-purple-950/30 to-slate-950/40 backdrop-blur-xl rounded-2xl p-1 border border-blue-400/30 mb-12 hover:border-blue-400/50 transition-all duration-300 group">
            {/* Inner card with glow */}
            <div class="relative bg-slate-900/80 rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Animated glow effect */}
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <div class="grid lg:grid-cols-3 gap-12 relative z-10">
                {/* Profile Image & Social */}
                <div class="flex flex-col items-center">
                  <div class="relative mb-8 group/image">
                    {/* Image Container */}
                    <div class="relative w-56 h-56">
                      {/* Glow background */}
                      <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 blur"></div>
                      <div class="relative w-56 h-56 rounded-2xl overflow-hidden border-4 border-blue-400/50 group-hover/image:border-blue-300/80 transition-all duration-300 shadow-2xl shadow-blue-600/30 group-hover/image:shadow-blue-600/60">
                        <img 
                          src="/hamza.png" 
                          alt="Hamza Boulahia" 
                          class="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div class="text-center mb-8">
                    <h3 class="text-3xl font-bold text-white mb-2">Hamza Boulahia</h3>
                    <p class="text-lg bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold mb-4">Full Stack Engineer</p>
                    <div class="flex items-center justify-center gap-2 text-blue-200/80 text-sm">
                      <span>📍 Casablanca, Morocco</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div class="flex gap-4 w-full">
                    <For each={socialLinks}>
                      {(social) => (
                        <a
                          href={social.href}
                          target={social.target}
                          rel={social.target ? 'noopener noreferrer' : ''}
                          aria-label={social.label}
                          class={`flex-1 group relative px-4 py-3 bg-gradient-to-br ${social.color} rounded-xl text-white font-semibold text-sm hover:shadow-lg transition-all duration-200 hover:scale-105 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 overflow-hidden`}
                        >
                          {/* Glow effect */}
                          <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                          <span class="text-lg group-hover:scale-125 transition-transform duration-200">{social.icon}</span>
                        </a>
                      )}
                    </For>
                  </div>
                </div>

                {/* Profile Content */}
                <div class="lg:col-span-2">
                  {/* Bio Section */}
                  <div class="mb-10">
                    <h4 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <span class="text-2xl">✨</span>
                      About
                    </h4>
                    <p class="text-lg text-blue-100/90 leading-relaxed mb-6">
                      Senior React & React Native developer with extensive expertise in Angular, Node.js, and Spring Boot. Specialized in building enterprise-grade applications with focus on performance, scalability, and user experience.
                    </p>
                    <p class="text-blue-100/80 leading-relaxed">
                      Master's degree holder in Big Data & Cloud Computing with proven track record in banking, fintech, and retail sectors. Passionate about AI integration, OCR technologies, and architecting robust solutions.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div class="mb-10">
                    <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-3">
                      <span class="text-xl">🎯</span>
                      Key Strengths
                    </h4>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <For each={highlights}>
                        {(item) => (
                          <div class="group relative p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-xl hover:from-blue-600/40 hover:to-purple-600/40 hover:border-blue-300/60 transition-all duration-200 cursor-default backdrop-blur-sm overflow-hidden">
                            {/* Glow on hover */}
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
                            <div class="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">{item.icon}</div>
                            <p class="font-semibold text-white text-sm group-hover:text-blue-100 transition-colors">{item.label}</p>
                            <p class="text-xs text-blue-200/70 mt-1 group-hover:text-blue-200 transition-colors">{item.description}</p>
                          </div>
                        )}
                      </For>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div class="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/40 rounded-xl p-6 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300">
                    <h4 class="font-bold text-white mb-4 flex items-center gap-2">
                      <span>📞</span>
                      Get in Touch
                    </h4>
                    <ContactInfo items={contactInfo} variant="compact" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div class="grid md:grid-cols-3 gap-6">
            <For each={skills}>
              {(skillGroup) => (
                <div class="group relative bg-gradient-to-br from-blue-950/40 to-purple-950/30 border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/60 hover:from-blue-900/60 hover:to-purple-900/60 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  {/* Glow effect */}
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Animated border glow */}
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-20"></div>

                  <h4 class="text-lg font-bold text-blue-100 mb-4 group-hover:text-white transition-colors relative z-10">{skillGroup.category}</h4>
                  <div class="space-y-2 relative z-10">
                    <For each={skillGroup.items}>
                      {(skill) => (
                        <div class="flex items-center gap-3 group/skill">
                          <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover/skill:scale-150 transition-transform duration-200"></div>
                          <span class="text-blue-100/80 text-sm group-hover/skill:text-blue-100 transition-colors">{skill}</span>
                        </div>
                      )}
                    </For>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
}